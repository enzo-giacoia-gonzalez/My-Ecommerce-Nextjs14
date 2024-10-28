import { Product } from "@/interface";
import { Cartstate } from "./CartProvider";


type CartActionType =
    | { type: 'getStock', payload: number }
    | { type: 'getProduct', payload: Product }
    | { type: 'setConfirmed' }

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
        case 'setConfirmed':
            return {
                ...state,
                isConfirmed: !state.isConfirmed
            }


        default:
            return state;
    }
}