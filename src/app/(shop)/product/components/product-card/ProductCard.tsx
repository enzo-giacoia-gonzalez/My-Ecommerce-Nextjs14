'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { BookmarkIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { Button, Spinner } from "@radix-ui/themes"

import { findProductInStockBySizes } from "@/actions"
import { CartProduct, Category, Product, Size } from "@/interface"
import { SizeSelector } from "../ui/SizeSelector"

import { cartStore } from "@/store"
import { setTimeout } from "timers"
import { toast } from "sonner"
import { StockSelector } from "@/components/ui"




interface PropsProductAndCategory {
    product: Product
    category: Category
}



export const ProductCard = ({ product, category }: PropsProductAndCategory) => {

    const addProductToCart = cartStore(state => state.addProductToCart)
    const cart = cartStore(state => state.cart)
    
    const [size, setSize] = useState<Size | undefined>()
    const [stock, setStock] = useState(0)
    const [posted, setPosted] = useState(false)
    const [countProduct, setCountProduct] = useState(1)

    const router = useRouter()

    const productInStockForSize = async (id: string, size: Size) => {
        setSize(size)
        const stock = await findProductInStockBySizes(id, size)
        setStock(stock || 0)
        router.refresh()
    }

    const changeCountProduct = (count: number) => {
        if (countProduct < 2 && count < 1) {
            // alerta
            return
        }

        if (count > stock) {
            //alerta
            return
        }
        setCountProduct(count)
    }

    

    const addToCart = () => {

        setPosted(true)

        if (cart.find(item => item.id === product.id && item.size === size && countProduct + item.quantity> stock) || !size ) {
            setPosted(false)
            setSize(undefined)
            setCountProduct(1)
            return
        }

        const productCart: CartProduct = {
            id: product.id,
            title: product.title,
            quantity: countProduct,
            size: size!,
            slug: product.slug,
            img: product.img,
            price: product.price,
            inStock: stock
        }

        setTimeout(() => {
            addProductToCart(productCart)
            setPosted(false)
            setSize(undefined)
            setCountProduct(1)
            toast('Producto agregado al carrito', {
                icon: '🛒',
                position:"top-right",
                duration:2000
             });
        }, 1000);

    }


    return (
        <section className="flex lg:flex-col lg:items-center justify-center max-w-full py-5 antialiased">

            <div className="">

                <div className="space-x-2 flex items-center">


                    <Link className="lg:pl-7 text-slate-400 hover:text-black transition-all" href="/all-products">All-products</Link>
                    <ChevronRightIcon />
                    <Link className="text-slate-400 hover:text-black transition-all" href={`/category/${category?.name}`}>{category?.name}</Link>
                    <ChevronRightIcon />
                    <span>{product?.title}</span>

                </div>

                <div className="lg:space-x-6 flex flex-col items-start lg:flex-row">
                    {!size &&
                        <span className='mt-2 text-red-500 lg:hidden lg:invisible'>
                            Debe seleccionar un talla*
                        </span>

                    }
                    <span className="lg:hidden lg:invisible font-bold text-3xl mt-7 lg:mt-0 mb-2">{`stock: ${stock}`}</span>
                    <span className="lg:hidden lg:invisible font-bold text-3xl mb-5 lg:mb-0">{product?.title}</span>
                    <span className="lg:hidden lg:invisible mb-5 lg:mb-0 font-medium text-2xl text-[#4D515C]">{`$${product?.price}`}</span>
                    <Image className="rounded-2xl lg:mt-7" src={product?.img} alt={product?.title} width={750} height={750} />

                    <div className="flex flex-col">
                        {!size &&
                            <span className=' text-red-500 hidden invisible lg:visible lg:flex mt-4 lg:mt-0 lg:pt-5' >
                                Debe seleccionar un talla*
                            </span>
                        }
                        {!size ? <span className="hidden invisible lg:visible lg:flex font-bold text-3xl mb-2 ">{`stock: ${stock}`}</span> : <span className="hidden invisible lg:visible lg:flex font-bold text-3xl mt-4 lg:mt-0 lg:pt-5">{`stock: ${stock}`}</span>}
                        <span className="hidden invisible lg:visible lg:flex font-bold text-3xl mb-2">{product?.title}</span>
                        <span className="hidden invisible lg:visible lg:flex font-medium text-2xl text-[#4D515C]">{`$${product?.price}`}</span>
                        <p className="mb-5 lg:mb-5 mt-5 text-[#0F172A] not-italic">{product?.description}</p>

                        <SizeSelector sizesAvailable={product?.sizes} sizeSelected={size!} id={product.id} onSizeChanged={(id, size) => productInStockForSize(id, size)} />
                        <StockSelector count={countProduct} onCountChanged={(count) => changeCountProduct(count)} />
                        {posted === true ? <Button disabled className="order-last font-medium hover:opacity-90 w-[100%] mt-7 text-white bg-black p-5 rounded-md"> <Spinner loading>
                            <BookmarkIcon />
                        </Spinner>Cargando</Button> : <Button onClick={addToCart} className="order-last font-medium hover:opacity-90 w-[100%] mt-7 text-white bg-black p-5 rounded-md cursor-pointer">Agregar al carrito</Button>}
                    </div>
                </div>
            </div>
        </section>
    )
}

