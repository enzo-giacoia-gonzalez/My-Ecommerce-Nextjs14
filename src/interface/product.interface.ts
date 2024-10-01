

export interface Product {
    id: string
    title: string
    description: string
    img: string
    slug: string
    inStock: number[]
    price: number
    gender: Gender
    sizes: Size[]
    categoryId?: string
}

export interface Products {
    products: Product[]
}


export type Gender = 'men' | 'women' | 'kid' | 'unisex'
export type Type = 'shirts' | 'pants' | 'hoodies' | 'hats';
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'

