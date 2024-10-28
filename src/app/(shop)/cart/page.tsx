
import { auth } from "@clerk/nextjs/server";
import { ContainerCart } from "./components";
import { redirect } from 'next/navigation'
import { getCheckoutAddressByUserId } from "./actions";
import { FormInputsCheckout } from "./interface/form.input.checkout";
import prisma from "@/lib/prisma";

export default async function CartPage() {

  
    const { userId } = auth()

    if (!userId) {
        redirect('auth/sign-in')
    }

    const checkoutAddress = await getCheckoutAddressByUserId(userId)

    const products = await prisma.product.findMany()
    

    return (
      
        <ContainerCart checkoutAddress={{ ...checkoutAddress, userId } as FormInputsCheckout} products={products} />
      
    );
}