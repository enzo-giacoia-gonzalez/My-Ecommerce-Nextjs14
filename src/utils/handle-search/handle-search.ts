'use client'


import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";

export const handleSearch = (e: FormEvent<HTMLFormElement>, router: AppRouterInstance, pathname: string) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    const queryTerm = formData.get("search") as string
    console.log(queryTerm)

    params.set('page', '1');
    
    if (queryTerm) {
        params.set('search', queryTerm);
    } else {
        params.delete('search');
    }
    router.replace(`${pathname}?${params.toString()}`);
}
