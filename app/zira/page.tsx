import Header from "@/components/header/header"
import { config } from "@/lib/nextauth"
import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'

export default async function ZiraPage({ params, searchParams }: { params: { slug: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
    if (searchParams.force != "true") {
        const session = await getServerSession(config)

        if (session) {
            redirect("/zira/app")
        }
    }

    return (
        <>
            <Header></Header>
        </>
    )
}