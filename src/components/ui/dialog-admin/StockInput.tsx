import { StockSelected } from "@/hooks";
import { FormInputs} from "@/interface";
import { Text } from "@radix-ui/themes"
import { FieldErrors, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { stock } from "@/types"



interface Props {
    inStock: stock,
    setStock: React.Dispatch<React.SetStateAction<stock>>,
    setValue: UseFormSetValue<FormInputs>,
    getValues: UseFormGetValues<FormInputs>,
    errors: FieldErrors<FormInputs>
}

export const StockInput = ({ inStock, setStock, setValue, errors }: Props) => {
    return (
        <div>
            <Text as="label" size="2" mb="1" weight="bold">
                Stock
            </Text>
            <div className="flex" >
                {
                    Object.keys(inStock).map((stockKey) => (
                        <div key={stockKey} className={
                            "p-2 border cursor-pointer rounded-md mr-2 mb-2 w-14 transition-all text-center"

                        }>
                            <div onClick={() => StockSelected(1, stockKey, inStock, setStock, setValue)} className='mb-4'>+</div>
                            <span>{inStock[stockKey as keyof typeof inStock]}</span>
                            <div onClick={() => StockSelected(-1, stockKey, inStock, setStock, setValue)} className='mt-4'>-</div>
                        </div>
                    ))
                }
            </div>
            <span className="text-red-600">{errors.sizes?.message}</span>
        </div>
    )
}
