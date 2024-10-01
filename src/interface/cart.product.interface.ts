import { Size } from "./product.interface";

export interface CartProduct {
    id: string,
    title: string,
    quantity: number,
    slug: string,
    size: Size
    inStock: number,
    img: string,
    price: number
}