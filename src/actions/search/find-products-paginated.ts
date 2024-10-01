'use server'

import prisma from "@/lib/prisma"


export const findProductsPaginated = async (searchParams: { search?: string, page?: number }, take: number, paramsName: string) => {

    const productsSearch = await prisma.product.findMany({
        where: {
            title: {
                contains: searchParams?.search?.toLowerCase() || "",
                mode: "insensitive",
            },
            categoryId: paramsName?.slice(0, 2).toUpperCase() || undefined,
        },
        skip: (searchParams?.page! - 1) * take,
        take: Number(take),
    })

    const { productLength } = await productsCount(searchParams, paramsName)




    return {
        products: productsSearch,
        totalPages: Math.ceil((productLength) / Number(take))
    }
}



const productsCount = async (searchParams: { search?: string, page?: number }, paramsName: string) => {
    const productLength = await prisma.product.count({
        where: {
            title: {
                contains: searchParams?.search?.toLowerCase() || "",
                mode: "insensitive",
            },
            categoryId: paramsName?.slice(0, 2).toUpperCase() || undefined,
        },
    })

    return {
        productLength
    }
    
}



