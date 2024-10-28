'use client'

import { cartStore } from "@/store"
import { ProductsInCart } from "../cart/ProductsInCart"


import { useRouter } from 'next/navigation'
import { PaymentCart } from "../../interface/payment.cart";
import { CheckoutAddress } from "../address/checkout-address/CheckoutAddress";



type PaymentCartWithoutCart = Omit<PaymentCart, 'cart'>;

export const ContainerCart = ({ checkoutAddress, products }:PaymentCartWithoutCart ) => {

  const cart = cartStore(state => state.cart)
  const router = useRouter()
  
  if (cart.length == 0) {
    router.push("/empty-cart")
  }



  return (
    
    <div className="flex flex-col md:flex-row justify-between xl:justify-evenly">
      
        <ProductsInCart cart={cart}/>
        <CheckoutAddress checkoutAddress={checkoutAddress} cart={cart} products={products}/>
    </div>
  )
}
