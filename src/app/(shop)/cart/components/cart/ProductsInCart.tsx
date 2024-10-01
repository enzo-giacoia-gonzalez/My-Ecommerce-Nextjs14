'use client'

import { CartProduct } from "@/interface"
import { ProductsInCartItem } from "./ProductsInCartItem"



export const ProductsInCart = ({ cart }: { cart: CartProduct[] }) => {

    return (
        <div className=" py-8 flex flex-col overflow-x-auto w-full xl:w-auto">
            <h1 className="font-bold text-2xl">Your cart</h1>
            <table className='min-w-[42rem] md:w-[100%] xl:min-w-[42rem]'>
                <thead className="" >
                    <tr className="space-x-10">
                        <th className="text-start"></th>
                        <th className="text-start">Product</th>

                        <th className="text-start">Price</th>


                        <th className="text-start">Size</th>

                        <th className="text-start">Quantity</th>


                        <th className="text-start">Total</th>

                    </tr>
                </thead>


                <tbody>
                    {cart.map((itemCart) => (
                        <ProductsInCartItem key={itemCart.id} cartProduct={itemCart} />
                    ))}

                    <tr className="border-b-1">
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
