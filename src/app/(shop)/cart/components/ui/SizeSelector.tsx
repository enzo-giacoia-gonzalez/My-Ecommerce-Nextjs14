'use client'

import { Size } from "@/interface"
import { usePathname } from 'next/navigation'



interface Props {
    id: string,
    sizesAvailable: Size[],
    sizeSelected: Size,
    onSizeChanged:(id: string, size: Size) => Promise<void>;
}


export const SizeSelector = ({sizesAvailable, onSizeChanged, id, sizeSelected}:Props) => {
  
  const pathname = usePathname()

  return (
    <div className=" flex flex-wrap justify-start">
      {pathname==="/cart"? sizesAvailable?.map((size) => <button onClick={(()=>onSizeChanged(id, size))} key={size} className={sizeSelected === size ? "border p-2 mr-4 w-16 mb-2 rounded-md cursor-pointer border-black" : "border p-2 mr-4 w-16 mb-2 rounded-md cursor-pointer"}>{size}</button>):sizesAvailable?.map((size) => <button onClick={(()=>onSizeChanged(id, size))} key={size} className={sizeSelected === size ? "border p-2 mr-4 w-16 mb-2 rounded-md cursor-pointer border-black" : "border p-2 mr-4 w-16 mb-2 rounded-md cursor-pointer"}>{size}</button>)}

    </div>
  )
}
