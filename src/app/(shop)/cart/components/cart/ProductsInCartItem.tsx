'use client'

import { StockSelector } from '@/components/ui'
import { CartProduct, Product, Size } from '@/interface'
import { cartStore } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import { SizeSelector } from '../ui/SizeSelector'
import { useContext, useEffect, useState } from 'react'
import { findProductById, findProductInStockBySizes } from '@/actions'
import { useRouter } from 'next/navigation'
import { setTimeout } from 'timers/promises'
import { CartContext } from '../../context'


interface Props {
    cartProduct: CartProduct
}

export const ProductsInCartItem = async ({ cartProduct }: Props) => {

    const [sizeState, setSizeState] = useState<Size | undefined>(cartProduct.size)
    const [stock, setStock] = useState(0)
    

    const { title, img, price, quantity, slug, inStock, size, id } = cartProduct

    const router = useRouter()

    // Hacer el cartContext usar la accion definida en actions pero modificarle que tambien de el stock
    // const {stockProduct} = useContext(cartContext)
    // stockProduct!== inStock entonces le paso el StockProduct al updateProduct
    // al sizeSelector pasarle todos availablesSizes del context, menos el size selected que es del cartProduct y ver que le paso a la funcion on sizeChanged
    // modificar el button por inputSelect en el sizeSelector

    const updateProductQuantity = cartStore(state => state.updateProductQuantity)

    
   let product
    
   useEffect(() => {
    product = window.setTimeout(async () => {
        await findProductById(cartProduct.id)
     }, )
   }, [])
   
   console.log(product)
   
    

    
    
    


    const changeCountProduct = (count: number): void => {
        if (count < 1) {
            // alerta
            return
        }

        updateProductQuantity({
            title,
            img,
            price,
            quantity,
            slug,
            inStock,
            size,
            id
        }, count)
    }



    const changeProductSize = async (id: string, size: Size) => {
        setSizeState(size)
        const stock = await findProductInStockBySizes(id, size)
        setStock(stock || cartProduct.inStock)
        router.refresh()
    }


    return (
        <tr className='border-y-[1px] hover:bg-[#f8fafc91]'>
            <td className='text-start py-2 px-2'>
                <Image className='' src={img} width={80} height={80} alt="" />
            </td>
            <td className='text-start'>
                <Link className="" href={`/product/${slug}`}><h2 className=''>{title}</h2></Link>
            </td>
            <td className='text-start'>
                <span>{price}</span>
            </td>
            <td><SizeSelector id={cartProduct.id} sizesAvailable={product?.sizes} sizeSelected={sizeState!} onSizeChanged={(id, size) => changeProductSize(id, size)} /></td>
            <td className='flex'><StockSelector count={quantity} onCountChanged={(count) => changeCountProduct(count)} /></td>
            <td>
                <span></span>
            </td>
            <td>
                <span></span>
            </td>
        </tr>
    )
}
