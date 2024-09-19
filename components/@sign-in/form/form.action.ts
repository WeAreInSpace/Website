import { signIn } from "next-auth/react";

export async function signInAction(prevState: any, formData: FormData) {
    const email = formData.get("email")
    if (!email) {
        return { message: "Email cannot be null" }
    }
    await signIn("email", { email: email, callbackUrl: "/dashboard" })
    return { message: "" }
}