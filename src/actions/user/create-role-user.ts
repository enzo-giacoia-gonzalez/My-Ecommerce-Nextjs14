"use server"

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect, RedirectType } from "next/navigation";
import { Roles } from "../../../types/globals";

export async function createUserRole() {
    const { sessionClaims, userId } = auth();

    try {
        const res = await clerkClient().users.updateUserMetadata(
            userId!,
            {
                publicMetadata: { role: "user" },
            }
        );

        // Actualizar el rol en la sesión
        sessionClaims!.metadata.role = res.publicMetadata.role as Roles;
        revalidateTag("/");



    } catch (err) {
         console.log(err)
    }
}