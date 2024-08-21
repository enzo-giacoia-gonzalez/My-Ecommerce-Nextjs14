'use server'

import { auth, clerkClient } from "@clerk/nextjs/server"
import { revalidateTag } from "next/cache"
import { redirect, RedirectType } from "next/navigation"

export default async function unbanUser(formData: FormData) {

    const { sessionClaims } = auth();

    const userId = formData.get("id") as string

    const response = await clerkClient.users.unbanUser(userId)

    revalidateTag("/admin/dashboard")
    
    if (response.banned.valueOf() === true && sessionClaims?.metadata.role === response.publicMetadata.role && response.id === userId) {
        return redirect("/", RedirectType.push)
    }

}