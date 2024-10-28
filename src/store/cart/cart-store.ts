import { CartProduct, Size } from '@/interface'
import prisma from '@/lib/prisma'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
    cart: CartProduct[]
    getTotalItems: () => number
    getSummaryInformation: () => {
        subTotal: number
        tax: number
        total: number
        itemsInCart: number
    }

    addProductToCart: (product: CartProduct) => void
    updateProductQuantity: (product: CartProduct, quantity: number) => void
    updateProductSize: (product: CartProduct, size:Size) => void
    removeProduct: (product: CartProduct) => void

    clearCart: () => void



}

export const cartStore = create<State>()(
    persist(
        (set, get) => ({
            cart: [],

            //methods 

            getTotalItems: () => {
                const { cart } = get()
                return cart.reduce((total, item) => total + item.quantity, 0)
            },

            getSummaryInformation: () => {
                const { cart } = get()
                const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
                const tax = subTotal * 0
                const total = subTotal + tax
                const itemsInCart = cart.reduce(
                    (total, item) => total + item.quantity,
                    0
                );
                return {
                    subTotal,
                    tax,
                    total,
                    itemsInCart
                }
            },

            addProductToCart: (product: CartProduct) => {
                const { cart } = get()

                const existingProduct = cart.find(item => item.id === product.id && item.size === product.size)

                if (!existingProduct) {
                    set({ cart: [...cart, product] })
                }


                if (existingProduct) {
                    set({ cart: cart.map(item => item.id === product.id && item.size === product.size ? { ...item, quantity: item.quantity + product.quantity } : item) })
                }

            },

            updateProductQuantity: (product: CartProduct, quantity: number) => {
                const { cart } = get()

                const existingProduct = cart.find(item => item.id === product.id && item.size === product.size)

                if (existingProduct?.inStock!< quantity) return 

                if (existingProduct) {
                    set({ cart: cart.map(item => item.id === product.id && item.size === product.size ? { ...item, quantity } : item) })
                }
            },

            updateProductSize: (product: CartProduct, size: Size) => {
                const { cart } = get()

                const existingProduct = cart.find(item => item.id === product.id && item.size === size)

                const existingProductWithSize = cart.filter(item => item.id === product.id && item.size === size)

                console.log((existingProductWithSize.length))

               

                if (!existingProduct) {
                    set({ cart: cart.map(item => item.id === product.id && item.size !== size ? { ...item, size  } : item) })
                }
            },


            removeProduct: (product: CartProduct) => {
                const { cart } = get()

                const removeProduct = cart.filter(item => item.id !== product.id || item.size !== product.size)

                set({ cart: removeProduct })

            },

            clearCart: () => {
                set({ cart: [] })
            },

        }),
        {
            name: 'cart-storage',
        },
    ),
)

