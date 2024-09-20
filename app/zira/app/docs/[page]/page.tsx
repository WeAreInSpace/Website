import { config } from "@/lib/nextauth"
import { prisma } from "@/lib/prisma"
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

    const ziraData = await prisma.user.findUnique({
        where: {
            email
        },
        select: {
            ziraCloud: {
                select: {
                    ZiraDocs: true
                }
            }
        }
    })

    if (!ziraData?.ziraCloud === null) {
        redirect("/zira/app")
    }

    /*if (ziraData?.ziraCloud?.ZiraDocs === null) {
        const ziraDocsData = await prisma.user.update({
            where: {
                email
            },
            data: {
                ziraCloud: {
                    create: {
                        ZiraDocs: {
                            create: {}
                        }
                    }
                }
            }
        })
    }*/

    return (
        <>
            reer
        </>
    )
}