'use client'

import Link from "next/link"

import { TextField } from "@radix-ui/themes"
import { MagnifyingGlassIcon, ClipboardIcon } from "@radix-ui/react-icons"

import { handleSearch } from "@/utils/handle-search/handle-search"
import { usePathname, useRouter } from "next/navigation"
import { cartStore } from "@/store"








export const TopMenu = () => {

    const {itemsInCart} = cartStore(state => state.getSummaryInformation())

    const router = useRouter();
    let pathname = usePathname();



    if (pathname == "/") {
        pathname = "/all-products"
    }


    return (

        <nav className="flex flex-col md:flex-row justify-around items-start md:items-center w-full py-5 border antialiased px-10 md:px-0">

            <div className="flex flex-col items-start sm:items-center sm:flex-row">

                <div className="flex items-center">
                    <Link href="" className="pr-7 py-2.5 font-bold text-[1.35rem] leading-7 ">Your next Store</Link>
                </div>

                <div className="flex items-center">

                    <Link href="" className="pr-2.5 py-2.5 font-medium text-[.875rem] leading-5">Kids</Link>
                    <Link href="" className="pr-2.5 py-2.5 font-medium text-[.875rem] leading-5">Women</Link>
                    <Link href="" className="pr-7 py-2.5 font-medium text-[.875rem] leading-5">Men</Link>
                </div>

            </div>

            <div className="flex items-center">

                <form onChange={(e) => { handleSearch(e, router, pathname) }} className="flex pr-4" >
                    <div className="flex border-2 hover:border-blue-900">
                        <input id="search" name="search" type="text" className="pl-2 mr-2 sm:mb-0 sm:mt-0 rounded-md h-[35px] focus:outline-none" placeholder="Search products"></input>
                        <label className="flex flex-row-reverse text-5xl">
                            <TextField.Slot>
                                <MagnifyingGlassIcon height="26" width="26" />
                            </TextField.Slot>
                        </label>
                    </div>
                </form>

                <Link href="" className="py-2.5 font-medium text-[.875rem] leading-5 flex items-center hover:opacity-75"><ClipboardIcon className="absolute items-center" height="25px" width="25px" /><span className="relative left-[9px]">{itemsInCart}</span></Link>
             

            </div>
        </nav>
    )
}
