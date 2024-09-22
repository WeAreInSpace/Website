"use client"

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "./header.scss"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadClientData from "@/components/@dashboard/header/header.action";
import { AccountMenu } from "@/components/account/account";
import { User } from "@prisma/client";

function DashboardHeaderLink() {
    return (
        <>
        </>
    )
}

export default function DashboardHeader() {
    const router = useRouter()
    const [isOpenMiniHeader, setIsOpenMiniHeader] = useState<boolean>(false)

    const { data: session, status } = useSession();
    const [userData, setUserData] = useState<User>()
    useEffect(() => {
        async function getClientData() {
            const email = session?.user?.email

            if (email === null) {
                const errorRedirectUrl = new URLSearchParams()
                errorRedirectUrl.append("message", "You are not using Google Provider or Email Provider to sign in to We Are In Space website (Are you hacking)")
                router.push("/error?" + errorRedirectUrl.toString())
                return
            }

            if (email === undefined) {
                const errorRedirectUrl = new URLSearchParams()
                errorRedirectUrl.append("message", "Email = undefind.")
                router.push("/error?" + errorRedirectUrl.toString())
                return
            }

            const clientData = await LoadClientData({ email: email })
            
            if (clientData === null) {
                const errorRedirectUrl = new URLSearchParams()
                errorRedirectUrl.append("message", "UserData = null. Server cannot find your data in database. (Are you hacking)")
                router.push("/error?" + errorRedirectUrl.toString())
                return
            }
            
            setUserData(clientData)
        }
        if (session) {
            getClientData()
        }
    }, [session])
    return (
        <>
            <header className="dashboard-header main-container">
                <ul>
                    <li>
                        <Link href={"/"}>
                            <div className="dashboard-header-wais-logo"></div>
                        </Link>
                    </li>
                    <DashboardHeaderLink></DashboardHeaderLink>
                </ul>
                <ul>
                    <AccountMenu></AccountMenu>
                    <button
                        onClick={() => {
                            setIsOpenMiniHeader(!isOpenMiniHeader)
                        }}
                        className="dashboard-miniheader-toggle"
                    >
                        <motion.div className="dashboard-miniheader-hamberger_menu"></motion.div>
                        <motion.div className="dashboard-miniheader-hamberger_menu"></motion.div>
                        <motion.div className="dashboard-miniheader-hamberger_menu"></motion.div>
                    </button>
                </ul>
            </header>
            <AnimatePresence mode="popLayout">
                {isOpenMiniHeader && (
                    <motion.header
                        className="dashboard-miniheader main-container"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.1
                        }}
                    >
                        <ul>
                            <DashboardHeaderLink></DashboardHeaderLink>
                        </ul>
                    </motion.header>
                )}
            </AnimatePresence>
        </>
    )
}