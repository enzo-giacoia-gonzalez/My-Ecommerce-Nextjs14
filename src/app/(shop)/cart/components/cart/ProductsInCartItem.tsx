'use client'

import { useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { StockSelector } from '@/components/ui'
import { CartProduct } from '@/interface'
import { cartStore } from '@/store'

import { toast } from 'sonner'
import { CartContext } from '../../context'

interface Props {
    cartProduct: CartProduct
}

export const ProductsInCartItem = ({ cartProduct }: Props) => {
   

    const { title, img, price, quantity, slug, inStock, size, id } = cartProduct

    const {isConfirmed} = useContext(CartContext)
    const updateProductQuantity = cartStore(state => state.updateProductQuantity)
    const removeProduct = cartStore(state => state.removeProduct)

   


   





  


    const changeCountProduct = (count: number): void => {

        if (count < 1) {
            removeProduct({ title, img, price, quantity, slug, inStock, size, id })
            toast('Producto eliminado completamente del carrito', { icon: '🛒', position: "bottom-right", duration: 2000 })
        }

        
        if (count > 0) {
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
    
            toast('Producto actualizado en el carrito', { icon: '🛒', position: "bottom-right", duration: 2000 })
        }
        
    }


    const onDeleteProduct = () => {

        setTimeout(() => {
            removeProduct({ title, img, price, quantity, slug, inStock, size, id })
            toast('Producto eliminado completamente del carrito', { icon: '🛒', position: "bottom-right", duration: 1000 })
        }, 1000);
    }




    

    return (
        <div className='hover:bg-[#f8fafc91] flex space-x-8 px-2 py-4'>

            <Image className='mb-4 py-2' src={`/products/${img}`} width={80} height={80} alt="" />

            <div className='flex flex-col justify-start'>

                <Link className="pr-2 mb-1" href={`/product/${slug}`}><h2 className='font-semibold hover:opacity-70'>{title}</h2></Link>
                <span className='mb-4'>{`Size: ${cartProduct.size}`}</span>
                <span className='text-start mb-1'>{`$${price}`}</span>
                {isConfirmed===true&&<span>Quantity: {quantity}</span>}
                {isConfirmed===false&&<StockSelector count={quantity} onCountChanged={(count) => changeCountProduct(count)} onDeleteProduct={onDeleteProduct} />}
            </div>

        </div>
    )
}
