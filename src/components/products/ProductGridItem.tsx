import Link from "next/link"
import Image from "next/image"
import { UUID } from "crypto";
import { Box, Card } from "@radix-ui/themes";

interface Producto {
  id: UUID;
  title: string;
  price: number;
  type: string;
  size: string;
  img: string;
}


export const ProductGridItem = ({ id, title, price, type, size, img }: Producto) => {
  return (
    <div className="rounded-md border bg-[#F5F5F5] flex flex-col">
      <div className="flex justify-center">
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
        <Link
          className="hover:text-blue-600"
          href={title}>
          {title}
        </Link>
        <span className="font-bold">${price}</span>
      </div>
    </div>
  )
}
