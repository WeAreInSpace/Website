"use client"

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "./header.scss"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import LoadClientData from "@/components/@dashboard/header/header.action";
import { AccountMenu } from "@/components/account/account";

function DashboardHeaderLink() {
    return (
        <>

        </>
    )
}

export default function DashboardHeader() {
    const [isOpenMiniHeader, setIsOpenMiniHeader] = useState<boolean>(false)

    const { data: session, status } = useSession();
    const [userData, setUserData] = useState<
        {
            id: string;
            name: string | null;
            email: string | null;
            emailVerified: Date | null;
            image: string | null;
            minecraftUserName: string | null;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null
    >()
    useEffect(() => {
        async function getClientData() {
            const clientData = await LoadClientData({ email: session?.user?.email as string })
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