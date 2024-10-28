import { Product, Size } from '@/interface';
import { createContext } from 'react';


interface contextProps {
   product: Product;
   inStock:number;
   isConfirmed: boolean;
   setConfirmed: () => void
   getStock: (id: string, size: Size) => Promise<number | undefined>
   getProduct: (id: string) => Promise<void>
}
export const CartContext = createContext({} as contextProps);