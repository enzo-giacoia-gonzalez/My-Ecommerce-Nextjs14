
import { createUserRole } from "@/actions";
import { ProductGrid } from "@/components/products";
import { ProductCollectionSelected } from "@/components/products/ProductCollectionSelected";
import { ShowSlideShow, ShowSlideShowMobile } from "@/components/ui";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";




export default async function HomePage() {

  const { sessionClaims} = auth();
 

  if (sessionClaims?.metadata.role !=="admin" && sessionClaims?.metadata.role !=="user") {
    createUserRole()
  }

  const products = await prisma.product.findMany()
  const categories = await prisma.category.findMany()
 
  return (
    <>
    <ProductCollectionSelected/>
    <ProductGrid products={products}/>
    <ShowSlideShow categories={categories}/>
    <ShowSlideShowMobile categories={categories}/>
    </>
  );
}