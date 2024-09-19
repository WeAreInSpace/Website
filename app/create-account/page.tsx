import { CreateAccountForm } from "@/components/@create-account/form/form";
import { config } from "@/lib/nextauth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CreateAccountPage() {
    const session = await getServerSession(config)

    if (session) {
        redirect("/dashboard")
    }

    return (
        <>
            <CreateAccountForm></CreateAccountForm>
        </>
    )
}