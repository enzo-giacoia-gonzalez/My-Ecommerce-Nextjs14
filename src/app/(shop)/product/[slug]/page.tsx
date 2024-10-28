import { findCategorySlug, findProductSlug } from "@/actions";
import { ProductCard } from "../components/product-card/ProductCard";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { slug: string } }) {




  const product = await findProductSlug(params?.slug)

  if (!product) {
    notFound()
  }

  const category = await findCategorySlug(product?.id)


  return (
   
      <ProductCard product={product} category={category} />
   
  );
}