import { onSizeSelected } from "@/hooks"
import { FormInputsProduct, Size } from "@/interface"
import { size } from "@/types"
import { Text } from "@radix-ui/themes"
import clsx from "clsx"
import { FieldErrors, UseFormGetValues, UseFormSetValue } from "react-hook-form"

interface Props {
    size: size,
    setSize:React.Dispatch<React.SetStateAction<size>>,
    typesSizes:string[],
    setValue:UseFormSetValue<FormInputsProduct>,
    getValues: UseFormGetValues<FormInputsProduct>,
    errors: FieldErrors<FormInputsProduct>
}


export const SizeInput = ({size, typesSizes, setSize, setValue, getValues, errors}:Props) => {
  return (
    <div className="flex flex-col flex-wrap">
         <Text as="label" size="2" mb="1" weight="bold">
                Sizes
            </Text>
            <div className="flex flex-wrap" >
                {
                    typesSizes.map((typeSize) => (
                        <div onClick={() => onSizeSelected(typeSize, size as unknown as Size, setSize, setValue)} key={typeSize} className={
                            clsx("p-2 border cursor-pointer rounded-md mr-2 mb-2 w-14 transition-all text-center", {
                                'bg-blue-500 text-white': Object.values(getValues('sizes')).find((s) => s === typeSize),
                            })
                        }>

                            <span>{typeSize}</span>
                        </div>
                    ))
                }
            </div>
            <span className="text-red-600">{errors.sizes?.message}</span>
    </div>
  )
}
