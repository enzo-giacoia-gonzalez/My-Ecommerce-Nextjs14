
import { FC, useReducer } from 'react';
import { CartContext } from './CartContext';
import { cartReducer } from './cartReducer';
import {  Product, Size } from '@/interface';
import { findProductById, findProductInStockBySizes } from '@/actions';

export interface Cartstate {
    product: Product
    inStock: number
    isConfirmed: boolean
}

const Cart_INITIAL_STATE: Cartstate = {
    product: undefined as unknown as Product,
    inStock: 0,
    isConfirmed: false
}

interface Props {
    children: JSX.Element | JSX.Element[]
}


export const CartProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE)


    const getStock = async (id: string, size: Size): Promise<number | undefined> => {

        const inStock = await findProductInStockBySizes(id, size)

        dispatch({ type: 'getStock', payload: inStock! })

        return inStock

    }


    const getProduct = async (id: string): Promise<void> => {
        const product = await findProductById(id)
        console.log(product)
        dispatch({ type: 'getProduct', payload: product as unknown as Product || null })
    }


    const setConfirmed = () => {
        dispatch({ type: 'setConfirmed' })
    }



    return (
        <CartContext.Provider value={{
            ...state,
            product: {} as Product,
            inStock: 0,
            getStock,
            getProduct,
            setConfirmed,
            isConfirmed: state.isConfirmed
        }}>
            {children}
        </CartContext.Provider>
    )
}