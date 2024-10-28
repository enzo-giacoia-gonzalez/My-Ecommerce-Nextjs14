'use client'

import { FormInputsProduct } from "@/interface"
import { UseFormSetValue } from "react-hook-form"


export const StockSelected = (stock: number, stockKey: string, inStock:{[key: string]: number}, setStock:any, setValue:UseFormSetValue<FormInputsProduct>) => {


    switch (stockKey) {
        case 'stockXS': setStock({ ...inStock, stockXS: inStock.stockXS + stock });
            break;
        case 'stockS': setStock({ ...inStock, stockS: inStock.stockS + stock });
            break;
        case 'stockM': setStock({ ...inStock, stockM: inStock.stockM + stock });
            break;
        case 'stockL': setStock({ ...inStock, stockL: inStock.stockL + stock });
            break;
        case 'stockXL': setStock({ ...inStock, stockXL: inStock.stockXL + stock });
            break;
        case 'stockXXL': setStock({ ...inStock, stockXXL: inStock.stockXXL + stock });
            break;
        case 'stockXXXL': setStock({ ...inStock, stockXXXL: inStock.stockXXXL + stock });
            break;
    }

    setValue("inStock", inStock as unknown as number[])

}