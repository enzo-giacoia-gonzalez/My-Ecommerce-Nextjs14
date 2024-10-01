'use server'


import prisma from "@/lib/prisma";


export const findProductImg = async (id: string) => { 

    const img = await prisma.product.findUnique({
        where: {
            id
        },
        select:{
            img: true
        }
    })

    return img
}