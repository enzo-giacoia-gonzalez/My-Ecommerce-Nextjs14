'use client'

import { CartProvider } from '@/app/(shop)/cart/context';
import { ReactElement, ReactNode } from 'react';

export function Providers({ children }: {children: ReactElement | ReactElement[]}) {
  return (
    <CartProvider>{children}</CartProvider>
  );
}