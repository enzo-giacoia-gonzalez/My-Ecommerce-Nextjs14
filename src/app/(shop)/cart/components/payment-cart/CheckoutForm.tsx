'use client'

import { useContext, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Layout, StripeError } from "@stripe/stripe-js";
import { updatedDb } from "../../actions";
import { CartProduct, Product } from "@/interface";
import { FormInputsCheckout } from "../../interface/form.input.checkout";
import { Spinner } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CartContext } from "../../context";


interface Props {
    dpmCheckerLink: string
    checkoutAddress: FormInputsCheckout
    cart: CartProduct[]
    products: Product[]
    paymentIntent: {
        id: string
    }

}


export default function CheckoutForm({ checkoutAddress, cart, products, paymentIntent }: Props) {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter()

    
    const [error, setError] = useState<StripeError>({} as StripeError);
    const {setConfirmed} = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(false);

    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);


        setTimeout(async () => {
            const { error } = await stripe.confirmPayment({
                elements,
                redirect: "if_required",
            });


            if (!error) {
                await updatedDb({ cart, products, checkoutAddress, paymentIntent: paymentIntent.id });
                setConfirmed()
                toast('Payment succeeded', { icon: '🛒', position: "top-right", duration: 1000 })
                router.replace("/successful-purchase")

            }
            setError(error ?? {} as StripeError);
        }, 2000);

        setIsLoading(false);

        if (error.message){
            toast('Error al realizar la comprar', { icon: '🛒', position: "top-right", duration: 3000 })
        }

        
    };



    const paymentElementOptions = {
        layout: "tabs" as Layout,
    };
    
    

    return (

            <form className="mt-14" id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement  id="payment-element" options={paymentElementOptions} />
                {isLoading ? <button className="font-medium hover:opacity-90 w-[100%] mt-7 text-white bg-black p-2 rounded-md" id="submit">
                    <Spinner loading>
                        <BookmarkIcon />
                    </Spinner>
                </button> : <button className="font-medium hover:opacity-90 w-[100%] mt-7 text-white bg-black p-2 rounded-md" id="submit">
                    pay now
                </button>}
            </form>
 
    );
}