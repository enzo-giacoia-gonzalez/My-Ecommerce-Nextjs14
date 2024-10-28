'use client'


import { FormAddress } from "../form-address/FormAddress"
import { useContext, useEffect, useState } from "react";
import { paymentCart } from "../../../actions";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe, PaymentIntent } from "@stripe/stripe-js";
import { CartContext } from "../../../context";
import { PaymentCart } from "../../../interface/payment.cart";
import CheckoutForm from "../../payment-cart/CheckoutForm";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!, {locale: 'en'});

export const CheckoutAddress = ({ checkoutAddress, cart, products }: PaymentCart) => {

  const { isConfirmed } = useContext(CartContext)

  const [clientSecret, setClientSecret] = useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");
  const [confirmed, setConfirmed] = useState(undefined as undefined | string);
  const [paymentIntent, setPaymentIntent] = useState({} as PaymentIntent);

  useEffect(() => {
    setConfirmed(new URLSearchParams(window.location.search).get("payment_intent_client_secret") as string | undefined)
  }, []);

  const fetchData = async () => {
    const data = await paymentCart({ cart, products, checkoutAddress });
    setPaymentIntent(data.paymentIntent);
    setClientSecret(data.clientSecret?.toString() ?? '');
    setDpmCheckerLink(data.dpmCheckerLink);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#000000',
    },
  };

  const options = {
    clientSecret,
    appearance,
  };





  return (
    <div className="py-8 md:ml-7 md:w-[400px]">
      <h1 className="font-extrabold text-3xl text-start">Checkout</h1>
      <h2 className="font-sans text-[#64748B] mb-3">Provide billing and shipping details below.</h2>
      <FormAddress checkoutAddress={checkoutAddress} />
      {clientSecret && checkoutAddress.fullName && isConfirmed && (
        <Elements  options={options} stripe={stripePromise} >
          {!confirmed ? <CheckoutForm dpmCheckerLink={dpmCheckerLink} checkoutAddress={checkoutAddress} cart={cart} products={products} paymentIntent={paymentIntent} /> : ""}
        </Elements>
      )}
    </div>
  )
}
