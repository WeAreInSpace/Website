"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import LoadClientData from "../header/header.action";
import "./account.scss"
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

export function AccountMenu() {
    const { data: session, status } = useSession();

    const [isOpenAccountMenu, setIsOpenAccountMenu] = useState<boolean>(false)

    const accountDropdown = useRef<HTMLDivElement | null>(null);
    const accountProfleRef = useRef<HTMLImageElement | null>(null);
    const accountBannerRef = useRef<HTMLDivElement | null>(null);
    const accountBannerImageRef = useRef<HTMLImageElement | null>(null);
    const accountBannerTextRef = useRef<HTMLParagraphElement | null>(null);
    const accountLinkPackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.addEventListener("click", (event) => {
            if (
                event.target !== accountDropdown.current &&
                event.target !== accountProfleRef.current &&
                event.target !== accountBannerRef.current &&
                event.target !== accountBannerImageRef.current &&
                event.target !== accountBannerTextRef.current &&
                event.target !== accountLinkPackRef.current
            ) {
                setIsOpenAccountMenu(false)
            }
        })
    }, [])

    return (
        <>
            {status == "loading"
                ? (
                    <></>
                )
                : session
                    ? (
                        <div className="account-dropdown">
                            <button className="fP-4 account" onClick={() => setIsOpenAccountMenu(!isOpenAccountMenu)}>
                                <img src={!!session.user?.image ? `${session.user?.image}` : "/Profile/no-image.png"} ref={accountProfleRef} />
                            </button>
                            <AnimatePresence mode="popLayout">
                                {isOpenAccountMenu &&
                                    <>
                                        <motion.div
                                            className="account-dropdown-content"
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
                                            ref={accountDropdown}
                                        >
                                            <div className="account-dropdown-content-profile-pack" ref={accountBannerRef}>
                                                <div className="account-dropdown-content-profile-image">
                                                <img src={!!session.user?.image ? `${session.user?.image}` : "/Profile/no-image.png"} ref={accountBannerImageRef} />
                                                </div>
                                                <div className="account-dropdown-content-profile-name">
                                                    <p className="fPr-4" ref={accountBannerTextRef}>{session.user?.name}</p>
                                                </div>
                                            </div>
                                            <div className="account-dropdown-content-link-pack" ref={accountLinkPackRef}>
                                                <Link href="/dashboard/account-settings" className="fP-5 account-dropdown-content-buttons">Account Settings</Link>
                                            </div>
                                            <div className="account-dropdown-content-signs-pack">
                                                <button onClick={() => signOut()} className="fP-5 account-dropdown-content-buttons">Sign out</button>
                                            </div>
                                        </motion.div>
                                    </>
                                }
                            </AnimatePresence>
                        </div>
                    )
                    : (
                        <></>
                    )
            }
        </>
    )
}