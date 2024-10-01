'use server'

import { auth, clerkClient, } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export async function banUser(formData: FormData) {

    const { sessionClaims, userId: userIdAuth } = auth();

    const userId = formData.get("id") as string

    if (sessionClaims?.metadata.role === "admin" && userId === userIdAuth) {
        return console.log("No te puedes banear a vos mismo")
    }

    
    const response = await clerkClient.users.banUser(userId)

    revalidateTag("/admin/dashboard")

    if (response.banned.valueOf() === true && sessionClaims?.metadata.role === response.publicMetadata.role && response.id === userId) {
        return redirect("/", RedirectType.push)
    }

}