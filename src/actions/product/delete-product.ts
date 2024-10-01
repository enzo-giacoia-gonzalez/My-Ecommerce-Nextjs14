'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const deleteProduct = async (id: string) => {
    const product = await prisma.product.delete({
        where: {
            id
        }
    })

    revalidatePath('/admin/dashboard-products')
}