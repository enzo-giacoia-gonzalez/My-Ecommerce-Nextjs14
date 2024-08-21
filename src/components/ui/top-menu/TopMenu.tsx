'use client'

import Link from "next/link"

import { TextField } from "@radix-ui/themes"
import { MagnifyingGlassIcon, ClipboardIcon } from "@radix-ui/react-icons"

import { DropDown } from "../dropdown-menu/DropDown"






export const TopMenu = () => {
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

                <div className="flex pr-4">
                    <TextField.Root className="flex flex-row-reverse text-5xl" placeholder="Search for products">
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </div>

                <Link href="" className="py-2.5 font-medium text-[.875rem] leading-5"><ClipboardIcon height="23" width="23" /></Link>
                <DropDown title1="Sign in" title2="Sign up" title3="Sign in" title4="Sign up" title5="Sign in" title6="Sign up" />

            </div>
        </nav>
    )
}
