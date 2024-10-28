import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

import { checkRole } from "@/utils/roles";
import { SearchUsers } from "../components";
import { DialogAdminProduct } from "./components/ui";
import { TableAdminProduct } from "./components";






export default async function AdminDashboardPage(params: {
    searchParams: { search?: string };
}) {





    if (!checkRole("admin")) {
        redirect("/");
    }



    const query = params.searchParams.search;

    const products = query ? await prisma.product.findMany({ where: { title: { contains: query } } } ) : await prisma.product.findMany();

    const categories = await prisma.category.findMany();

    
    

    return (
        <section className="h-auto bg-[#F5F5F5] rounded-lg grid md:grid-col-6 py-8">
            <h1 className="font-bold text-4xl ml-8 pb-5 md:pb-0">Panel administrador de productos</h1>
            <p className="ml-8">This page is restricted to users with the admin role.</p>
            <div className="lg:inline lg:items-center py-8">
                <SearchUsers />
                <div className="pl-8  pt-7">
                <DialogAdminProduct dialogTitle='Add product' dialogDescription='Add product data' categories={categories} titleButton="Create product" category={{id:"", name:"", img:""}}/>
                </div>
            </div>
            <TableAdminProduct products={products} categories={categories} />
        </section>
    );
}