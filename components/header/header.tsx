"use client"

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "./header.scss"
import { useState } from "react";
import { useSession } from "next-auth/react";
import { AccountMenu } from "../account/account";

function HeaderLink() {
    return (
        <>
            <li className="header-link-pack">
                <Link href="/docs" className="fP-4 header-link">Docs</Link>
            </li>
            <li className="header-link-pack">
                <Link href="/shop" className="fP-4 header-link">Shop</Link>
            </li>
            <li className="header-link-pack">
                <Link href="/issue-report" className="fP-4 header-link">Issue report</Link>
            </li>
        </>
    )
}

function HeaderLink2() {
    const { data: session, status } = useSession();

    return (
        <> {status === "loading"
            ? (
                <></>
            )
            : session
                ? (
                    <>
                        <li className="header-link-pack">
                            <Link href="/dashboard" className="fP-4 header-link">Dashboard</Link>
                        </li>
                    </>
                )
                : (
                    <>
                        <li className="header-link-pack">
                            <Link href="/sign-in" className="fP-4 header-link">Sign in</Link>
                        </li>
                        <li className="header-link-pack">
                            <Link href="/create-account" className="fP-4 header-link">Create an account</Link>
                        </li>
                    </>
                )
        }

        </>
    )
}

export default function Header() {
    const [isOpenMiniHeader, setIsOpenMiniHeader] = useState<boolean>(false)

    return (
        <>
            <header className="header main-container">
                <ul>
                    <li>
                        <Link href={"/"}>
                            <div className="header-wais-logo"></div>
                        </Link>
                    </li>
                    <HeaderLink></HeaderLink>
                </ul>
                <ul>
                    <AccountMenu></AccountMenu>
                    <HeaderLink2></HeaderLink2>
                    <button
                        onClick={() => {
                            setIsOpenMiniHeader(!isOpenMiniHeader)
                        }}
                        className="home-miniheader-toggle"
                    >
                        <motion.div className="home-miniheader-hamberger_menu"></motion.div>
                        <motion.div className="home-miniheader-hamberger_menu"></motion.div>
                        <motion.div className="home-miniheader-hamberger_menu"></motion.div>
                    </button>
                </ul>
            </header>
            <AnimatePresence mode="popLayout">
                {isOpenMiniHeader && (
                    <motion.header
                        className="home-miniheader main-container"
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
                            <HeaderLink></HeaderLink>
                        </ul>
                        <ul>
                            <HeaderLink2></HeaderLink2>
                        </ul>
                    </motion.header>
                )}
            </AnimatePresence>
        </>
    )
}