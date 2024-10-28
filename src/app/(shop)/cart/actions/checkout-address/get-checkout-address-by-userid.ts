'use server'

import prisma from "@/lib/prisma"



export const getCheckoutAddressByUserId = async (userId:string) => {
    const checkoutAddress = await prisma.checkoutAddress.findFirst({
        where:{
            userId
        }
    })

    return checkoutAddress
}