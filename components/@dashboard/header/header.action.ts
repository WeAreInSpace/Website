"use server"

import { prisma } from "@/lib/prisma"

export default async function LoadClientData({ email } : { email: string }) {
    const userData = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    return userData
}