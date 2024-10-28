'use server'

import { Product, Size } from "@/interface"
import prisma from "@/lib/prisma"

export const updateProductStockBySizes = async (id: string, size: Size, Product: Product, ItemInCart: number) => {


    const prismaTx = await prisma.$transaction(async (tx) => {

        try {
            const nuevoStock = [...Product.inStock]
            switch (size) {

                case "XXXL":
                    nuevoStock[6] = Product.inStock[6] - ItemInCart;
                    return await tx.product.update({
                        where: {
                            id
                        },
                        data: {
                            inStock: nuevoStock
                        }
                    })
                case "XXL":
                    nuevoStock[5] = Product.inStock[5] - ItemInCart;
                    return await tx.product.update({
                        where: {
                            id
                        },
                        data: {
                            inStock: nuevoStock
                        }
                    })
                case "XL":
                    nuevoStock[4] = Product.inStock[4] - ItemInCart;
                    return await tx.product.update({
                        where: {
                            id
                        },
                        data: {
                            inStock: nuevoStock
                        }
                    })
                case "L":
                    nuevoStock[3] = Product.inStock[3] - ItemInCart;
                    return await tx.product.update({
                        where: {
                            id
                        },
                        data: {
                            inStock: nuevoStock
                        }
                    })
                case "M":
                    nuevoStock[2] = Product.inStock[2] - ItemInCart;
                    return await tx.product.update({
                        where: {
                            id
                        },
                        data: {
                            inStock: nuevoStock
                        }
                    })
                case "S":
                    nuevoStock[1] = Product.inStock[1] - ItemInCart;
                    return await tx.product.update({
                        where: {
                            id
                        },
                        data: {
                            inStock: nuevoStock
                        }
                    })
                case "XS":
                    nuevoStock[0] = Product.inStock[0] - ItemInCart;
                    if (nuevoStock[0] < 0) throw new Error('No hay stock suficiente')

                    return await tx.product.update({
                        where: {
                            id
                        },
                        data: {
                            inStock: nuevoStock
                        }
                    })
            }
        } catch (error) {
            return error
        }

    })
}