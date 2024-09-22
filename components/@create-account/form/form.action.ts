"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import * as jose from 'jose'

export async function createUser(prevState: any, formData: FormData) {
    const username = formData.get("username")?.toString()
    const email = formData.get("email")?.toString()

    if (!email && !username) {
        return { message: "Email and Username cannot be null" }
    }

    if (!email) {
        return { message: "Email cannot be null" }
    }

    if (!username) {
        return { message: "Username cannot be null" }
    }

    const emailCount = await prisma.user.count({
        where: {
            email: email as string
        },
        select: {
            email: true
        }
    })

    if (emailCount.email > 0) {
        return ({ message: "That email is taken. Try another" })
    }

    let regex = /^[a-zA-Z][a-zA-Z0-9._-]{3,29}$/;

    if (!regex.test(username)) {
        return ({ message: "Please enter a valid username", link: "/docs" })
    }

    const alg = "RS512"
    const pkcs8 = process.env.CREATE_ACCOUNT_SECRET

    if (!pkcs8) {
        return({ message: "Create account secret cannot be undefined" })
    }

    console.log(pkcs8)

    const privateKey = await jose.importPKCS8(pkcs8, alg)

    const userData = await new jose
    .SignJWT({
        username,
        email
    })
    .setProtectedHeader({ alg, typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("4h")
    .sign(privateKey)

    const urlSaveUserData = decodeURIComponent(userData)

    const setupRedirectUrl = new URLSearchParams()
    setupRedirectUrl.append("setup", "true")
    setupRedirectUrl.append("userData", urlSaveUserData)

    redirect("/setup/profile?" + setupRedirectUrl.toString())
}