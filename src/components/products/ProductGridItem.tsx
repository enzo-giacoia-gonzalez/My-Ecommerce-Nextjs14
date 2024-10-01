'use client'

import Image from "next/image"
import { Product } from "@/interface"




export const ProductGridItem = ({ id, title, price, img }: Product) => {
  return (
    <div className="rounded-md border bg-[#F5F5F5] flex flex-col cursor-pointer hover:opacity-90">
      <div className="flex justify-center p-8">
        <Image
          src={img}
          alt={title}
          className="object-cover rounded"
          width={350}
          height={350}
        >
        </Image>
      </div>
      <div className="p-4 flex flex-col bg-[#FFFFFF]">
        <span>{title}</span>
        <span className="font-bold">${price}</span>
      </div>
    </div>
  )
}
