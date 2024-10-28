'use client'

import { CartProduct } from "@/interface"
import { ProductsInCartItem } from "./ProductsInCartItem"
import { Card } from "@radix-ui/themes"
import { useContext, useState} from "react"
import { CartContext } from "../../context"
import { cartStore } from "@/store"



export const ProductsInCart = ({ cart }: { cart: CartProduct[] }) => {


    const {setConfirmed, isConfirmed} = useContext(CartContext)
    const getSummaryInformation = cartStore(state => state.getSummaryInformation)
    const [loaded, setLoaded] = useState(false)



    return (
        <div className="flex flex-col py-8">
            <h1 className="font-extrabold text-3xl mb-4">Your cart</h1>
            <Card className="flex flex-col p-5 w-full md:max-w-[450px]">
                {cart.map((itemCart) => (
                    <ProductsInCartItem key={itemCart.id} cartProduct={itemCart} />
                ))}

                <div className="flex justify-between items-center py-2 space-x-8 px-4 border-t">
                    <span>subtotal</span>
                    <span>{getSummaryInformation().subTotal}</span>
                </div>
                <div className="flex justify-between items-center py-2 space-x-8 px-4 border-b">
                    <span>tax</span>
                    <span>{0}</span>
                </div>

                <div className="flex justify-between items-center py-2 space-x-8 px-4 my-5">
                    <span>Total</span>
                    <span>{getSummaryInformation().total.toFixed(2)}</span>
                </div>
                <button onClick={() => setConfirmed()} className="font-medium hover:opacity-90 w-[100%] mr-1 mt-7 text-white bg-black p-2 rounded-md">{isConfirmed==false?"Confirm cart":"Modify cart"}</button>
            </Card>
        </div>

    )
}
