'use server'

import prisma from "@/lib/prisma"

export const findProduct = async (id: string) => {
    const product = await prisma.product.findUnique({
        where: {
            id
        },
    })
    return product
}