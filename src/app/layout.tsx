import type { Metadata } from "next";
import "./globals.css";

import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


import { Inter } from "next/font/google";

import {
  ClerkProvider,
} from "@clerk/nextjs";

import { Footer } from "@/components/ui";
import { Providers } from "@/providers/providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home page",
  description: "Welcome to home page",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <ClerkProvider>
      <Providers>
      <html lang="en">
        <body className={inter.className}>
       
          <Theme>
            {children}
          </Theme>
          <Footer />
        </body>
      </html>
      </Providers>
    </ClerkProvider>
  );
}
