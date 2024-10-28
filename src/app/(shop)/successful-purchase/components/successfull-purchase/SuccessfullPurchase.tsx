'use client'

import { cartStore } from "@/store";
import { BackpackIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export const SuccessfullPurchase = () => {

    const clearCart = cartStore(state => state.clearCart)
    const router = useRouter()

    useEffect(() => {
        clearCart()
    }, )
    

    setTimeout(() => {
        router.push("/")
    }, 3000);

    return (
        <div className="flex-col md:flex items-center justify-center py-16 h-[550px] bg-[#F5F5F5]">
            <div className="flex flex-col items-center justify-center py-16">
                <h1 className="text-4xl mb-10 text-center font-semibold">Thank you for your purchase</h1>
                <h2 className="text-xl mb-2 text-center">Successfull Purchase</h2>
                <p className="text-xl text-center"> Your order has been received</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <BackpackIcon className="ml-10 mt-12" height={120} width={120} />
            </div>
        </div>
    )
}
