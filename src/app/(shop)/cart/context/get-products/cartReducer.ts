import { Product } from "@/interface";
import { Cartstate } from "./CartProvider";


type CartActionType =
    | { type: 'getStock', payload: number }
    | { type: 'getProduct', payload: Product }

export const cartReducer = (state: Cartstate, action: CartActionType): Cartstate => {
    switch (action.type) {
        case 'getStock':
            return {
                ...state,
                inStock: action.payload
            }
        case 'getProduct':
            return {
                ...state,
                product: action.payload
            }

        default:
            return state;
    }
}