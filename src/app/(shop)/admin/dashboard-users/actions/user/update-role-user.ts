"use server"

import { Roles } from "@/types/globals";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect, RedirectType } from "next/navigation";


export async function updateUserRole(formData: FormData) {
    const { sessionClaims, userId } = auth();

    
    if (sessionClaims?.metadata.role !== "admin") {
        console.log("Usuario no autorizado para realizar esta acción.");
        return redirect('/', RedirectType.replace);
    }


    try {
        const res = await clerkClient().users.updateUserMetadata(
            formData.get("id") as string,
            {
                publicMetadata: { role: formData.get("role") },
            }
        );

        // Actualizar el rol en la sesión
        sessionClaims!.metadata.role = res.publicMetadata.role as Roles;
        revalidateTag("/admin/dashboard");


        if (sessionClaims!.metadata.role !== "admin" && res.publicMetadata.role !== "admin" && res.id === userId) {
            console.log("El usuario ya no puede realizar esta acción porque no es admin.");
            redirect('/', RedirectType.replace);
        }

        

    } catch (err) {
        if (sessionClaims!.metadata.role !== "admin") {
            redirect('/', RedirectType.replace);
        }
        revalidateTag("/admin/dashboard");

    }
}