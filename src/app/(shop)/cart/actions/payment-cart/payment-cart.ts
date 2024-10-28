"use server"

import { CartProduct, Product } from "@/interface";
import prisma from "@/lib/prisma";
import { FormInputsCheckout } from "../../interface/form.input.checkout";
import { PaymentIntent } from "@stripe/stripe-js";
import { updateProductStockBySizes } from "@/actions";



const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


interface Props {
    cart: CartProduct[]
    products: Product[]
    checkoutAddress: FormInputsCheckout
    paymentIntent: string
}

type PropsOmmited = Omit<Props, 'paymentIntent'>;

export const updatedDb = async ({ cart, products, checkoutAddress, paymentIntent }: Props) => {

    const prismaTx = await prisma.$transaction(async (tx) => {

        await Promise.all(cart.map(item =>
            tx.productPaymentCart.create({
                data: {
                    quantity: item.quantity,
                    price: item.price,
                    size: item.size,
                    checkoutAddressId: checkoutAddress.id,
                    productId: item.id,
                    paymentIntentId: paymentIntent
                }
            })
        ));


        await Promise.all(cart.map(item =>
           updateProductStockBySizes(item.id, item.size, products.find(product => product.id === item.id)!, item.quantity)
        ));



      
    });
}






export const paymentCart = async ({ cart, products }:PropsOmmited) => {
    


    const amount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent:PaymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
        
    });



    
    
    
    
    

    
    return ({
            clientSecret: paymentIntent.client_secret,
            dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
            paymentIntent
        });

   
};
