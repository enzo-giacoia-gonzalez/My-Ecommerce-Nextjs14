'use client'

import { CheckIcon } from "@radix-ui/react-icons"

export const FormAddress = () => {
  return (
    <form className="flex flex-col">
        <label className="">Email</label>
        <input className="mb-3 border rounded-md p-2" placeholder="Enter your email" type="email"></input>

        <label>Full name</label>
        <input className="mb-3 border rounded-md p-2" placeholder="Enter your full name" type="text"></input>

        <label>Country/Region</label>
        <input className="mb-3 border rounded-md p-2" placeholder="Enter your country/region" type="text"></input>

        <label>Address</label>
        <input className="mb-3 border rounded-md p-2" placeholder="Enter your address" type="text"></input>

        <button className=" rounded-md text-black w-12" type="button"><CheckIcon/></button>
    </form>
  )
}
