'use client'

import { FormAddress } from "./form-address/FormAddress"

export const CheckoutAddress = () => {
  return (
    <div className="sm:min-w-[34.33rem] py-8 xl:ml-7 ">
      <h1 className="font-bold text-3xl text-start">Checkout</h1>
      <h2 className="font-sans text-[#64748B] mb-3">Provide billing and shipping details below.</h2>
      <FormAddress />
    </div>
  )
}
