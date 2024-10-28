'use server'

import prisma from "@/lib/prisma";
import { uploadImage } from "@/utils";
import { Gender, Size } from "@prisma/client";
import { z } from "zod";

import { revalidatePath } from "next/cache";
import { findProductImg } from "./find-product-img";




const productSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(3).max(255),
  slug: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
  price: z.coerce.number().min(0).transform(val => Number(val.toFixed(2))),
  inStock: z.coerce.string().transform(val => val.split(',').map(Number)),
  categoryId: z.string().min(2).max(2),
  sizes: z.coerce.string(),
  gender: z.nativeEnum(Gender),
});


export const createProduct = async (formData: FormData) => {

  try {

    const dataProduct = Object.fromEntries(formData)

    const dataProductParsed = productSchema.safeParse(dataProduct)

    if (!dataProductParsed.success) {
      console.log(dataProductParsed.error.errors)
      return {
        error: 'Invalid data',
        message: 'Invalid data'
      }
    }


    const sizes = dataProductParsed!.data!.sizes.split(',').map(size => size.trim() as Size)

    const sizesFiltered = sizes.filter(size => Object.values(Size).includes(size));

    let image

    if (formData.get('img') != undefined) {
      image = await uploadImage(formData.get('img') as File)
    }


    if (dataProductParsed.data.id) {

      const findImg = await findProductImg(dataProductParsed.data.id)

      const productUpdated = await prisma.product.update({
        where: {
          id: dataProductParsed.data.id,
        },
        data: {
          ...dataProductParsed.data,
          sizes: sizesFiltered,
          img: formData.getAll("img") ? image : findImg?.img as any,
        }
      })

      revalidatePath("/admin/dashboard-products")
      return { message: 'Product updated successfully' }

    }


    const findProduct = await prisma.product.findFirst({
      where: {
        title: dataProductParsed.data.title
      }
    })


    if (findProduct?.title || findProduct?.slug == dataProductParsed.data.slug) {
      console.log("Product already exists, try to update it")
      return { message: 'Product already exists, try to update it' }
    }



    const productCreated = await prisma.product.create({
      data: {
        ...dataProductParsed.data,
        sizes: sizesFiltered,
        img: image as string
      }
    })

    revalidatePath("/admin/dashboard-products")


    return { message: 'Product created successfully' }


  } catch (error) {
    console.log(error)

    return {
      error: 'Something went wrong',
      message: 'Something went wrong'
    }
  }

}




