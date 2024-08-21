
import { createUserRole } from "@/actions";
import { ProductGrid } from "@/components/products";
import { ProductCollectionSelected } from "@/components/products/ProductCollectionSelected";
import { ShowSlideShow, ShowSlideShowMobile } from "@/components/ui";
import { auth } from "@clerk/nextjs/server";



export default async function HomePage() {

  const { sessionClaims} = auth();
 

  if (sessionClaims?.metadata.role !=="admin" && sessionClaims?.metadata.role !=="user") {
    createUserRole()
  }
 
  return (
    <>
    <ProductCollectionSelected/>
    <ProductGrid/>
    <ShowSlideShow/>
    <ShowSlideShowMobile/>
    </>
  );
}