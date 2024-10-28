'use client'

import { FormInputsProduct, Size } from "@/interface"
import { UseFormSetValue } from "react-hook-form"

export const onSizeSelected = (sizeItem: string, size: Size, setSize: any, setValue: UseFormSetValue<FormInputsProduct>) => {

    setSize({
        ...size as unknown as { XS: string, S: string, M: string, L: string, XL: string, XXL: string, XXXL: string },
        [sizeItem]: Object.values(size).includes(sizeItem) ? '' : sizeItem
    })

    setValue("sizes", size as unknown as Size[])


}