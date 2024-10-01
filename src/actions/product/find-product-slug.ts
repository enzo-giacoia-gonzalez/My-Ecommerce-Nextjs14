'use server'

import prisma from "@/lib/prisma"


export const findProductSlug = async (slug: string) => {
    const product = await prisma.product.findUnique({
        where: {
            slug: slug
        },
    })



    return product!

}



