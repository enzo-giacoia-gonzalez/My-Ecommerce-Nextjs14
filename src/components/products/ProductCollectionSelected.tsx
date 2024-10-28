'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@radix-ui/themes'
import image from "../../../public/imagen.avif"





export const ProductCollectionSelected = () => {




    return (

        <section className="h-[550px] bg-[#F5F5F5] rounded-md grid md:grid-col-6 py-8 ">

            <div className='flex flex-col justify-center md:col-start-2 space-y-4 px:0 xl:px-16'>
                <Text as='span' size="8" weight="bold" className='ml-4'>
                    Quick start
                </Text>
                <Text as='span' color="gray" size="3" className='ml-4'>
                    Grab your cup of coffee and check out these amazing clothes
                </Text>
                <Link href={"/all-products"} className="font-medium hover:opacity-90 w-[125px] text-white bg-black text-center p-2 ml-3 rounded-full cursor-pointer">Buy now</Link>
            </div>
            <div className="flex flex-col justify-center md:col-start-5 space-y-4 bg-[#F8F8F8]">
                <Link href={`/all-products`} >
                    <Image
                        src={image}
                        alt={"Image"}
                        className="object-cover rounded"
                        width={450}
                        height={450}
                    >
                    </Image>
                </Link>
            </div>

        </section>




    )
}
