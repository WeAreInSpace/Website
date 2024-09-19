import SigninForm from "@/components/@sign-in/form/form";
import { config } from "@/lib/nextauth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
    const session = await getServerSession(config)

    if (session) {
        redirect("/dashboard")
    }

    return (
        <>
            <SigninForm></SigninForm>
        </>
    )
}