'use server'

import { Size } from "@/interface"
import prisma from "@/lib/prisma"

export const findProductInStockBySizes = async (id: string, size: Size) => {

    const product = await prisma.product.findFirst({
        where: {
            id,
        },
    })

    switch (size) {

        case "XS":
            return product?.inStock[0]
        case "S":
            return product?.inStock[1]
        case "M":
            return product?.inStock[2]
        case "L":
            return product?.inStock[3]
        case "XL":
            return product?.inStock[4]
        case "XXL":
            return product?.inStock[5]
        case "XXXL":
            return product?.inStock[6]
    }
}
