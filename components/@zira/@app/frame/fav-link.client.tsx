import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { prisma } from "@/lib/prisma"
import { useRouter } from "next/router"

export function FavLink() {
    const router = useRouter()
    const {data, status} = useSession()
    const [userFavLink, setUserFavLink] = useState()
    useEffect(() => {
        const userData
        router
    }, [])
    return (
        <>
        </>
    )
}