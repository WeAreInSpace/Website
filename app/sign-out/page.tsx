import { SignOutForm } from "@/components/@sign-out/form/form";
import { config } from "@/lib/nextauth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignOutPage() {
    const session = await getServerSession(config)

    if (!session) {
        redirect("/")
    }

    return (
        <>
            <SignOutForm></SignOutForm>
        </>
    )
}