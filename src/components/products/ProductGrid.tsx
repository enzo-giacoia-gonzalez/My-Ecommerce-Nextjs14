'use client'

import { Products } from "@/interface";
import { ProductGridItem } from "./ProductGridItem";





export const ProductGrid = ({products}: Products) => {
    return (
        <section className="rounded-md grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 my-7">

            {products.map(Product =>
                <ProductGridItem key={Product.id}
                    {...Product}
                />
            )}

        </section>
    )
}
