'use client'

import { cartStore } from "@/store"
import { ProductsInCart } from "../cart/ProductsInCart"
import { CheckoutAddress } from "../checkout-address/CheckoutAddress"


export const ContainerCart = () => {

  const cart = cartStore(state => state.cart)
  

  
  
  

  return (
    
    <div className="flex flex-col xl:flex-row justify-center overflow-x-auto">
      
        <ProductsInCart cart={cart}/>
        <CheckoutAddress/>
    </div>
  )
}
