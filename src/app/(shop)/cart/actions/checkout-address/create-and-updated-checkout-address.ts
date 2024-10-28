'use server'

import prisma from "@/lib/prisma";
import { z } from "zod"
import { getCheckoutAddressByUserId } from "./get-checkout-address-by-userid";


const checkoutAddressSchema = z.object({
    userId: z.string().min(1),
    fullName: z.string().min(3).max(255),
    email: z.string().min(3).max(255).refine(val => /[^@]+@[^@]+\.[^@]+/.test(val), 'Invalid email'),
    countryORregion: z.string().min(3).max(255),
    address: z.string().min(3).max(255),
});


export async function createCheckoutAddress(formData: FormData) {
    try {

        const dataCheckoutAddress = Object.fromEntries(formData)

        const dataCheckoutAddressParsed = checkoutAddressSchema.safeParse(dataCheckoutAddress)

        if (!dataCheckoutAddressParsed.success) {
            console.log(dataCheckoutAddressParsed.error.errors)
            return {
                error: 'Invalid data',
                message: 'Invalid data'
            }
        }

        const isCheckoutAddressExist = await getCheckoutAddressByUserId(dataCheckoutAddressParsed.data.userId)

        if (isCheckoutAddressExist) {
            return {

                checkoutAddress: await prisma.checkoutAddress.update({
                    where: {
                        userId: dataCheckoutAddressParsed.data.userId
                    },
                    data: {
                        ...dataCheckoutAddressParsed.data
                    }
                }),

                msg: 'Checkout address updated'
            }
        }

        await prisma.checkoutAddress.create({
            data: {
                ...dataCheckoutAddressParsed.data
            }
        })

        return {
            msg: 'Checkout address created'
        }



    } catch (error) {
        return {
            msg: 'Something went wrong',
            error
        }
    }
}
