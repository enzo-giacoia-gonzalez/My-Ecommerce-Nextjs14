'use client'

import { Size } from "@/interface"

interface Props {
    id: string,
    sizesAvailable: Size[],
    sizeSelected: Size,
    onSizeChanged:(id: string, size: Size) => Promise<void>;
}

export const SizeSelector = ({sizesAvailable, onSizeChanged, id, sizeSelected}:Props) => {
  return (
    <div className="mt-12 flex flex-wrap justify-start">
        {sizesAvailable.map((size) => <button onClick={(()=>onSizeChanged(id, size))} key={size} className={sizeSelected === size ? "border p-2 mr-4 w-16 mb-2 rounded-md cursor-pointer border-black" : "border p-2 mr-4 w-16 mb-2 rounded-md cursor-pointer"}>{size}</button>)}
        
    </div>
  )
}
