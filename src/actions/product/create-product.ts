'use server'

import prisma from "@/lib/prisma";
import { uploadImage } from "@/utils";
import { Gender, Size } from "@prisma/client";
import { z } from "zod";


const productSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(3).max(255),
  slug: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
  price: z.coerce.number().min(0).transform(val => Number(val.toFixed(2))),
  inStock: z.coerce.number(),
  categoryId: z.string().max(2),
  size: z.nativeEnum(Size),
  gender: z.nativeEnum(Gender),
});



export const createProduct = async (formData: FormData) => {

  const findProduct = await prisma.product.findFirst({ where: { title: formData.get('title') as string } })

  console.log(findProduct)

  const data = Object.fromEntries(formData)

  const productParsed = productSchema.safeParse(data)

  console.log(productParsed.error?.message)

  if (!productParsed.success) {
    return {
      error: productParsed.error.message,
      message: 'Invalid data'
    }
  }

  

  const image = await uploadImage(formData.get('img') as File)

  

 
    // const productCreated = await prisma.product.create({ 
    //   data: {
    //     ...productParsed.data,
    //     img: image ?? "",
    //   }
    // })
  
 


  

  




}




