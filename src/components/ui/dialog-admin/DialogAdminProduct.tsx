'use client'

import { createProduct } from "@/actions";
import { Category, PropsProduct } from "@/interface";
import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
import clsx from "clsx";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";


interface Props {
    product?: PropsProduct
    categories?: Category[]
    titleButton: string,
    dialogTitle: string,
    dialogDescription: string,
}


const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

export const DialogAdminProduct = ({ categories, product, titleButton, dialogTitle, dialogDescription }: Props) => {

    const [size, setSize] = useState({ XS: '', S: '', M: '', L: '', XL: '', XXL: '', XXXL: '' })
    const [stock, setStock] = useState({ stockXS: 0, stockS: 0, stockM: 0, stockL: 0, stockXL: 0, StockXXL: 0, StockXXXL: 0 })

    const { register, handleSubmit, formState: { errors }, watch ,getValues,setValue} = useForm({
        defaultValues: {
            id: "",
            title: product?.title ?? "",
            description: product?.description ?? "",
            img: product?.img ?? "",
            slug: product?.slug ?? "",
            inStock: product?.inStock ?? [],
            price: product?.price ?? "",
            gender: product?.gender ?? "",
            size: product?.size ?? [""],
            categoryId: product?.categoryId ?? ""
        }
    });

    



    

    const onSizeSelected = (sizeItem: string) => {

        if ((size as any)[sizeItem]) {
            setSize({
                ...size,
                [sizeItem]: ""
            })

            setValue('size', size as unknown as string[])
            
        } else {
            setSize({
                ...size,
                [sizeItem]: sizeItem
            })
            setValue('size', size as unknown as string[])
           
        }
       
    }


    
    

    console.log(size)

    console.log(watch("size"))

    const onSubmit = (data: any) => {
        const { img, ...productToSave } = data


        const formData = new FormData()


        console.log(productToSave)




        formData.append("title", productToSave.title)
        formData.append("description", productToSave.description)
        formData.append("slug", productToSave.slug)
        formData.append("inStock", productToSave.inStock)
        formData.append("price", productToSave.price)
        formData.append("gender", productToSave.gender)
        formData.append("size", productToSave.size)
        formData.append("categoryId", productToSave.categoryId)
        formData.append('img', img[0])





        if (titleButton === "Create product") {
            createProduct(formData)
        }

        formData.append("id", product?.id!)

        //updateProduct(formData)



    }


    return (
        <Dialog.Root>
            <Dialog.Trigger className="h-[45px] w-[130px] mt-4 lg:ml-7">
                <button className="text-white bg-black p-[8px] ml-8 rounded-full font-medium hover:opacity-80">{titleButton}</button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px" onSubmit={handleSubmit(onSubmit)}>
                <Dialog.Title>{dialogTitle}</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    {dialogDescription}
                </Dialog.Description>

                <form>
                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Name
                            </Text>
                            <TextField.Root
                                {...register("title", { required: "This field is required" })}
                                placeholder="Enter your full name"
                            />
                        </label>
                        <span className="text-red-600">{errors.title?.message}</span>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Description
                            </Text>
                            <TextField.Root
                                {...register("description", { required: "This field is required" })}
                                placeholder="Enter your description"
                            />
                        </label>
                        <span className="text-red-600">{errors.description?.message}</span>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                img
                            </Text>
                            <input className="" type="file"
                                {...register("img", { required: "This field is required" })}
                            />
                        </label>
                        <span className="text-red-600">{errors.img?.message}</span>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Slug
                            </Text>
                            <TextField.Root
                                {...register("slug", { required: "This field is required" })}
                                placeholder="Enter your slug"
                            />
                        </label>
                        <span className="text-red-600">{errors.slug?.message}</span>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                inStock
                            </Text>
                            <TextField.Root
                                type="number"
                                {...register("inStock", { required: "This field is required" })}
                                placeholder="Enter your stock"
                            />
                        </label>
                        <span className="text-red-600">{errors.inStock?.message}</span>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Price
                            </Text>
                            <TextField.Root
                                type="number"
                                {...register("price", { required: "This field is required" })}
                                placeholder="Enter your price"
                            />
                        </label>
                        <span className="text-red-600">{errors.price?.message}</span>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Type
                            </Text>

                            <select className="border-2 rounded-sm" defaultValue={"shirts"}  {...register("categoryId", { required: "This field is required" })}>

                                {categories?.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}

                            </select>

                        </label>


                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Gender
                            </Text>
                            <select className="border-2 rounded-sm" defaultValue={"kid"} {...register("gender", { required: "This field is required" })}>
                                <option value="kid">Kid</option>
                                <option value="women" selected>Women</option>
                                <option value="men">Men</option>
                                <option value="unisex">Unisex</option>
                            </select>
                        </label>
                        <span className="text-red-600">{errors.gender?.message}</span>


                        <Text as="div" size="2" mb="1" weight="bold">
                            Sizes
                        </Text>
                        <div className="flex">
                            {
                                sizes.map((sizeItem) => (
                                    <div onClick={() => onSizeSelected(sizeItem)} key={sizeItem}  className={
                                        clsx("p-2 border cursor-pointer rounded-md mr-2 mb-2 w-14 transition-all text-center", {
                                            'bg-blue-500 text-white': getValues('size').toString().includes(sizeItem)
                                        })
                                    }>

                                        <span>{sizeItem}</span>
                                    </div>
                                ))
                            }
                        </div>


                        <span className="text-red-600">{errors.size?.message}</span>

                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <button type="submit">Save</button>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}

