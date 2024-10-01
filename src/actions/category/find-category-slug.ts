'use server'

import prisma from "@/lib/prisma"

export const findCategorySlug = async (id: string) => {
    
    const product = await prisma.product.findUnique({
        where: {
            id
        },
        select: {
            category: true
        }
    })

    return product?.category!
}


