'use server'

import prisma from "@/lib/prisma"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect, RedirectType } from "next/navigation"




export const deleteCheckoutAddress = async (id:string) => {

 


    const deleteCheckoutAddress = await prisma.checkoutAddress.delete({
        where: {
            id
        }
    })
   
    

}