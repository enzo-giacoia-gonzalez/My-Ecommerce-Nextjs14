'use client'

import { CheckIcon, PlusCircledIcon, TrashIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form";
import { checkoutAddress } from "../../../interface/form.checkoutAddress";
import { FormInputsCheckout } from "../../../interface/form.input.checkout"
import { createCheckoutAddress, deleteCheckoutAddress, getCheckoutAddressByUserId } from "../../../actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


type CheckoutAddressWithoutCartandProduct = Omit<checkoutAddress, 'cart' | 'products'>;

export const FormAddress = ({ checkoutAddress }:CheckoutAddressWithoutCartandProduct ) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputsCheckout>({
    defaultValues: {
      ...checkoutAddress,
    }
  });

  const router = useRouter()

  const onSubmit = (data: FormInputsCheckout) => {
      const {fullName, email, countryORregion, address} = data
      const  {userId}  = checkoutAddress!
      const formData = new FormData()

      formData.append("userId", userId)
      formData.append("fullName", fullName)
      formData.append("email", email)
      formData.append("countryORregion", countryORregion)
      formData.append("address", address)
      toast.success("Address created/updated",{position:"top-right", duration: 3000, icon: <PlusCircledIcon />})
      createCheckoutAddress(formData)
      router.refresh()
      
  }

  const onDelete = async () => { 
    const {userId}  = checkoutAddress!
    const id  = await getCheckoutAddressByUserId(userId).then(data=> data?.id)
    if (!id) return
    await deleteCheckoutAddress(id || "")

    toast.success("Address deleted",{position:"top-right", duration: 3000, icon: <TrashIcon />})

    setTimeout(() => {
      window.location.reload()
    }, 1000);
    
    
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label className="">Email</label>
      <input  {...register("email", { required: "This field is required" })} className="mb-3 border rounded-md p-2" placeholder="Enter your email" type="email"></input>

      <label>Full name</label>
      <input  {...register("fullName", { required: "This field is required" })} className="mb-3 border rounded-md p-2" placeholder="Enter your full name" type="text"></input>

      <label>Country/Region</label>
      <input  {...register("countryORregion", { required: "This field is required" })} className="mb-3 border rounded-md p-2" placeholder="Enter your country/region" type="text"></input>

      <label>Address</label>
      <input  {...register("address", { required: "This field is required" })} className="mb-3 border rounded-md p-2" placeholder="Enter your address" type="text"></input>

      <div className="flex justify-start">
        <button className=" rounded-md text-black w-12 bg-white border mr-4" type="submit"><CheckIcon  className="" height={44} width={44} /></button>
        <button onClick={(() => onDelete())} className=" rounded-md text-black w-12 bg-white border" ><TrashIcon className="" height={44} width={44} /></button>
      </div>
    </form>
  )
}
