'use client'

import Image from "next/image"
import { Product } from "@/interface"
import Link from "next/link"




export const ProductGridItem = ({ title, price, img, slug }: Product) => {
  return (
    <div className="rounded-md border flex flex-col cursor-pointer hover:opacity-90">
      <div className="flex justify-center p-8 bg-[#F8F8F8]">
        <Link href={`/product/${slug}`} >
        <Image
          src={`/products/${img}`}
          alt={title}
          className="object-cover rounded"
          width={350}
          height={350}
        >
        </Image>
        </Link>
      </div>
      <div className="p-4 flex flex-col">
        <span>{title}</span>
        <span className="font-bold">${price}</span>
      </div>
    </div>
  )
}
