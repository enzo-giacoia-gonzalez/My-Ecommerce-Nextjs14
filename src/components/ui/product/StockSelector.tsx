'use client'

import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons"
import { usePathname } from "next/navigation"

interface Props {
    count: number
    onCountChanged: (count: number) => void
    onDeleteProduct?: () => void
}


export const StockSelector = ({count, onCountChanged, onDeleteProduct}: Props) => {

  const pathname = usePathname()
  return (
    <div className={pathname ==="/cart"?"w-auto":"w-full space-x-5 mt-7"}>
        <button onClick={() => onCountChanged(count - 1)} className={pathname ==="/cart"?"rounded-md border p-2 w-10":"rounded-md border p-2 w-10"}><MinusIcon/></button>
        <span  className="text-black p-2">{count}</span>
        <button onClick={() => onCountChanged(count + 1)} className={pathname ==="/cart"?"rounded-md border p-2 w-10 mr-1":"rounded-md border p-2 w-10"}><PlusIcon/></button>
        <button onClick={() => onDeleteProduct && onDeleteProduct() } className={pathname ==="/cart"?"rounded-md border p-2 w-10  mt-1 ":" invisible flex-none"}><TrashIcon className="" /></button>
    </div>
  )
}
