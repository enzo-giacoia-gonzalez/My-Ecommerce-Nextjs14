"use client";

import { usePathname, useRouter } from "next/navigation";

export const SearchUsers = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    
      <form className="pt-4 lg:pt-0"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const queryTerm = formData.get("search") as string;
          router.push(pathname + "?search=" + queryTerm);
        }}
      >
        <label className="  lg:ml-8 font-medium" htmlFor="search">Search for users</label>
        <input placeholder="Search user" className="pl-2 ml-8 mr-2 rounded-md h-[40px]" id="search" name="search" type="text" />
        <button className='w-[120px] text-white bg-black p-[8px] mt-4 rounded-full font-medium hover:opacity-80' type="submit">Search user</button>
      </form>
    
  );
};