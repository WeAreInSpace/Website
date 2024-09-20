import { Banner } from "@/components/@zira/@app/banner/banner"
import { ZiraAppFrame } from "@/components/@zira/@app/frame/frame"
import { config } from "@/lib/nextauth"
import { prisma } from "@/lib/prisma"
import { data } from "framer-motion/client"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function ZiraApp({ params, searchParams }: { params: { slug: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
    const session = await getServerSession(config)

    if (!session) {
        redirect("/login")
    }

    if (!session.user?.email) {
        redirect("/login")
    }

    const email = session.user?.email

    const userData = await prisma.user.findUnique({
        where: {
            email
        },
        include: {
            ziraCloud: {
                include: {
                    ZiraDocs: true
                }
            }
        }
    })

    if (userData?.ziraCloud === null) {
        await setup()
    }

    if (userData?.ziraCloud?.ZiraDocs === null) {
        await setupZiraDocs()
    }

    async function setup() {
        const ziraData = await prisma.user.update({
            where: {
                email
            },
            data: {
                ziraCloud: {
                    create: {}
                }
            }
        })
    }

    async function setupZiraDocs() {
        const ziraDocsData = await prisma.user.update({
            where: {
                email
            },
            data: {
                ziraCloud: {
                    update: {
                        ZiraDocs: {
                            create: {}
                        }
                    }
                }
            }
        })
    }

    return (
        <>
            <ZiraAppFrame>
                <div className="main-container">
                    <Banner></Banner>
                </div>
            </ZiraAppFrame>
        </>
    )
}