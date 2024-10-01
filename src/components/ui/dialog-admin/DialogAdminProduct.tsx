'use client'

import { useState, useEffect, useCallback } from 'react';
import { useForm } from "react-hook-form";
import { Size } from '@prisma/client';
import { Dialog, Button, Flex, Text, TextField} from "@radix-ui/themes";
import { UpdateIcon, PlusIcon } from '@radix-ui/react-icons'
import { createProduct } from "@/actions";
import { Category, FormInputs, Product } from "@/interface";
import Image from 'next/image';
import {  StockInput } from './StockInput';
import { SizeInput } from './SizeInput';

interface Props {
    product?: Product
    categories?: Category[]
    category: Category
    titleButton: string,
    dialogTitle: string,
    dialogDescription: string,
}


const typesSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const typesStocks = ["stockXS", "stockS", "stockM", "stockL", "stockXL", "stockXXL", "stockXXXL"];

export const DialogAdminProduct = ({ categories, product, titleButton, dialogTitle, dialogDescription, category }: Props) => {

    const [size, setSize] = useState({ XS: '', S: '', M: '', L: '', XL: '', XXL: '', XXXL: '' })

    const [inStock, setStock] = useState({ stockXS: 0, stockS: 0, stockM: 0, stockL: 0, stockXL: 0, stockXXL: 0, stockXXXL: 0 })


    const { register, handleSubmit, formState: { errors }, watch, getValues, setValue } = useForm<FormInputs>({
        defaultValues: {
            ...product,
            sizes: product?.sizes ?? [],
            img: undefined,
            inStock: product?.inStock ?? [],
        }
    });

    watch('sizes')
    watch('inStock')
    watch('categoryId')


    const loadSizes = useCallback(
        () => {
            const loadsize = new Set(product?.sizes)

            for (let index = 0; index < product?.sizes?.length!; index++) {
                setSize((prevSize) => ({
                    ...prevSize as { XS: string, S: string, M: string, L: string, XL: string, XXL: string, XXXL: string },
                    [typesSizes[index]]: Array.from(loadsize).includes(typesSizes[index] as unknown as Size) ? (typesSizes[index] as Size) : '',
                }))
            }

            setValue("sizes", size as unknown as Size[])
        },
        [product?.sizes, setValue, size],
    )



    const loadStocks = useCallback(
        () => {

            for (let index = 0; index < product?.inStock?.length!; index++) {

                setStock((prevInStock) => ({
                    ...prevInStock,
                    [typesStocks[index]]: product?.inStock[index],
                }));

            }

            setValue("inStock", inStock as unknown as number[])
        }, [inStock, product?.inStock, setValue]
    )

    useEffect(() => {
        loadStocks()
        loadSizes()
    }, [])



    useEffect(() => {
        setValue("inStock", inStock as unknown as number[])
    }, [setValue, inStock])

    useEffect(() => {
        setValue("sizes", size as unknown as Size[])
    }, [setValue, size])



    const onSubmit = (data: FormInputs) => {
        const { img, ...productToSave } = data
        const formData = new FormData()

        if (product?.id) {
            formData.append("id", product?.id)
        }

        formData.append("title", productToSave.title)
        formData.append("description", productToSave.description)
        formData.append("slug", productToSave.slug)
        formData.append("inStock", Object.values(productToSave.inStock).toString())
        formData.append("price", productToSave.price.toString())
        formData.append("gender", productToSave.gender)
        formData.append("sizes", Object.values(productToSave.sizes).toString())
        formData.append("categoryId", productToSave.categoryId)

        if (getValues("img")!.length > 0) {
            formData.append('img', img![0])
        }

        createProduct(formData)
    }



    return (
        <Dialog.Root>
            <Dialog.Trigger className="">
                {titleButton === "Create product" ? <Button className="hover:opacity-90" style={{ padding: "21px", backgroundColor: 'black', color: "white", borderRadius: "8px", cursor: "pointer" }}><PlusIcon /></Button> : <Button className="hover:opacity-90" style={{ padding: "21px", backgroundColor: 'black', color: "white", borderRadius: "8px", cursor: "pointer" }}><UpdateIcon /></Button>}
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px" onSubmit={handleSubmit(onSubmit)}>
                <Dialog.Title>{dialogTitle}</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    {dialogDescription}
                </Dialog.Description>

                <form>
                    <Flex direction="column" gap="3">

                        <Text as="label" size="2" mb="1" mt="2" weight="bold">
                            Name
                        </Text>

                        <TextField.Root
                            {...register("title", { required: "This field is required" })}
                            placeholder="Enter your full name"
                        />
                        <span className="text-red-600">{errors.title?.message}</span>

                        <Text as="label" size="2" mb="1" weight="bold">
                            Description
                        </Text>
                        <TextField.Root
                            {...register("description", { required: "This field is required" })}
                            placeholder="Enter your description"
                        />

                        <span className="text-red-600">{errors.description?.message}</span>


                        <Text as="label" size="2" mb="1" weight="bold">
                            img
                        </Text>

                        <div className='flex flex-row'>
                            <Image
                                alt={product?.title ?? ''}
                                src={product?.img ?? ''}
                                width={300}
                                height={300}
                                className="rounded-t shadow-md"
                            />
                        </div>

                        <input className="" type="file"
                            {...register("img")}
                        />
                        <span className="text-red-600">{errors.img?.message}</span>


                        <Text as="label" size="2" mb="1" weight="bold">
                            Slug
                        </Text>
                        <TextField.Root
                            {...register("slug", { required: "This field is required" })}
                            placeholder="Enter your slug"
                        />
                        <span className="text-red-600">{errors.slug?.message}</span>

                        <Text as="label" size="2" mb="1" weight="bold">
                            Type
                        </Text>
                        <select className="border-2 rounded-sm" defaultValue={"shirts"}  {...register("categoryId", { required: "This field is required" })}>

                            {categories?.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}

                            {titleButton === "Edit product" && <option key={category.id} value={category.id}>{category.name}</option>}


                        </select>

                        <Text as="label" size="2" mb="1" weight="bold">
                            Gender
                        </Text>
                        <select className="border-2 rounded-sm" defaultValue={"kid"} {...register("gender", { required: "This field is required" })}>
                            <option value="kid">Kid</option>
                            <option value="women" selected>Women</option>
                            <option value="men">Men</option>
                            <option value="unisex">Unisex</option>
                        </select>
                        <span className="text-red-600">{errors.gender?.message}</span>



                        <Text as="label" size="2" mb="1" weight="bold">
                            Price
                        </Text>
                        <TextField.Root
                            type='number'
                            {...register("price", { required: "This field is required" })}
                            placeholder="Enter your price"
                        />
                        <span className="text-red-600">{errors.price?.message}</span>
                        <SizeInput setValue={setValue} getValues={getValues} errors={errors} size={size} typesSizes={typesSizes} setSize={setSize}/>
                        <StockInput errors={errors} getValues={getValues} setValue={setValue} inStock={inStock} setStock={setStock}/>
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

