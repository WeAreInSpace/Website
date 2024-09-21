import { config } from "@/lib/nextauth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function ZiraCloudDocs({ params, searchParams }: { params: { slug: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
    const session = await getServerSession(config)

    if (!session) {
        redirect("/login")
    }
    const email = session.user?.email

    if (!email) {
        redirect("/login")
    }

    return (
        <>
            make dream come true
        </>
    )
}