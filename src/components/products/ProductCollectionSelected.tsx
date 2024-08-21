'use client'


import Image from 'next/image'
import { Box, Button, Card, Text } from '@radix-ui/themes'
import image from "../../../public/imagen.avif"




export const ProductCollectionSelected = () => {

   


    return (

        <section className="h-[550px] bg-[#F5F5F5] rounded-md grid md:grid-col-6 py-8 ">
           
            <div className='flex flex-col justify-center md:col-start-2 space-y-4 px:0 xl:px-16'>
                <Text as='span' size="8" weight="bold" className='ml-4'>
                    Quick start
                </Text>
                <Text as='span' color="gray" size="3" className='ml-4'>
                    Start building your next project in minutes
                </Text>
                <button className='w-[125px] text-white bg-black p-[8px] ml-4 rounded-full font-medium hover:opacity-80'>Compra ahora</button>
            </div>
            <div className='flex flex-col justify-center md:col-start-5 space-y-4' >

               <Image alt='' className="w-[330px] md:w-[430px]" src={image}>

               </Image>

            </div>
            
        </section>




    )
}
