import { Size } from "./product.interface"

export interface FormInputs {
    title: string,
    slug: string,
    description: string,
    price: number,
    inStock: number[],
    sizes: Size[],
    gender: 'men' | 'women' | 'kid' | 'unisex',
    categoryId: string
    img?:string


}