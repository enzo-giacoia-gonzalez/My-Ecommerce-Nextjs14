'use server'

import prisma from "@/lib/prisma"

export const findProductById = async (id: string) => {
    const product = await prisma.product.findFirst({
        where:{
            id
        }
    })

    console.log(product)

    return product
}