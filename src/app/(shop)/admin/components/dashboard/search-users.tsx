"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";
import { handleSearch } from "@/utils/handle-search/handle-search";




export const SearchUsers = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <form className="pt-4 lg:pt-0"
      onSubmit={(e) => { handleSearch(e, router, pathname) }}
    >

      <input placeholder={pathname == "/admin/dashboard-products" ? "Search products" : "Search users"} className="pl-2 ml-8 mr-2 mb-6 sm:mb-0 sm:mt-0 mt-4 rounded-md h-[40px]" id="search" name="search" type="text" />
      <Button className="hover:opacity-90" style={{ padding: "21px", backgroundColor: 'black', color: "white", borderRadius: "8px", marginLeft: "32px", cursor: "pointer" }} type="submit">{pathname == "/admin/dashboard-products" ? "Search products" : "Search users"}</Button>
    </form>

  );
};