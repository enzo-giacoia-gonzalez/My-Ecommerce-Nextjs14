import { redirect, } from "next/navigation";
import { clerkClient } from "@clerk/nextjs/server";

import { checkRole } from "@/utils/roles";
import { DialogAdminUser} from "@/components/ui";
import { SearchUsers, TableAdminUser } from "@/components/admin";



export default async function AdminDashboardPage(params: {
    searchParams: { search?: string };
}) {





    if (!checkRole("admin")) {
        redirect("/");
    }










    const query = params.searchParams.search;

    const users = query ? (await clerkClient().users.getUserList({ query })).data : (await clerkClient().users.getUserList({})).data;

    console.log(users)

    return (
        <section className="h-[550px] bg-[#F5F5F5] rounded-lg grid md:grid-col-6 py-8">
            <h1 className="font-bold text-4xl ml-8">Panel administrador de usuarios</h1>
            <p className="ml-8">This page is restricted to users with the admin role.</p>
            <div className="hidden lg:inline-block">
                <SearchUsers />
            </div>
            <DialogAdminUser users={users} />
            <TableAdminUser users={users} />
        </section>
    );
}