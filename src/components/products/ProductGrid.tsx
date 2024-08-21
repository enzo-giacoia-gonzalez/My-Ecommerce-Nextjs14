
import { ProductGridItem } from "./ProductGridItem";
import { randomUUID, UUID } from "crypto";
import bag from "../../../public/bag.avif"


const productosTemporales = [
    {
        id: randomUUID(),
        title: 'Sunbeam Tote',
        price: 120,
        type: 'bag',
        size: 'xl',
        img: bag
    },
    {
        id: randomUUID(),
        title: 'Sunbeam Tote',
        price: 120,
        type: 'bag',
        size: 'xl',
        img: bag
    },
    {
        id: randomUUID(),
        title: 'Sunbeam Tote',
        price: 120,
        type: 'bag',
        size: 'xl',
        img: bag
    },
    {
        id: randomUUID(),
        title: 'Sunbeam Tote',
        price: 120,
        type: 'bag',
        size: 'xl',
        img: bag
    }
]


export const ProductGrid = () => {
    return (
        <div className="rounded-md grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 my-7">

            {productosTemporales.map(Producto =>
                <ProductGridItem key={Producto.id}
                    {...Producto}
                />
            )}

        </div>
    )
}
