

import { findProductsPaginated} from "@/actions/search/find-products-paginated";
import { ProductGrid } from "@/components/products";
import Pagination from "@/components/ui/pagination/Pagination";




export default async function AllProductsPage({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?:string
  };
}) {



  const {products, totalPages} = await findProductsPaginated({
    search: searchParams?.search,
    page: Number(searchParams?.page) || 1,
  }, 4, "")

  

  return (
    <div className="flex flex-col justify-center items-center">
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages}/>
      </div>
  );
}