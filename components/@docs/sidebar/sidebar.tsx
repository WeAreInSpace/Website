"use client"

import "./sidebar.scss"

import SidebarLink from "./link";
import Pack from "./pack";
import SidebarLinkNoList from "./linkNoList";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function SideBarItem() {
    return (
        <>
            <SidebarLinkNoList to="">ยินดีต้อนรับ</SidebarLinkNoList>

            <Pack title="Getting Started">
                <SidebarLink to="connect">วิธีเชื่อมต่อเซิร์ฟเวอร์</SidebarLink>
                <SidebarLink to="server-rule">กฎของเซิร์ฟเวอร์</SidebarLink>
            </Pack>

            <Pack title="Community">
                <SidebarLink to="coop">Collaboration (co-op)</SidebarLink>
            </Pack>

            <Pack title="Utility">
                <SidebarLink to="command-palette">Command Palette</SidebarLink>
                <SidebarLink to="item-guide-book">Item Guide Book</SidebarLink>
            </Pack>

            <Pack title="How-To Guides">
                <SidebarLink to="welcome-sign">เปลี่ยนเกาะส่วนตัวเป็นเกาะสาธารณะ</SidebarLink>
                <SidebarLink to="protection">การป้องกันสิ่งก่อสร้าง</SidebarLink>
            </Pack>

            <Pack title="Bukkit API">
                <SidebarLink to="getting-started-with-bukkit">Getting Started</SidebarLink>
                <SidebarLink to="nms">nms</SidebarLink>
            </Pack>
        </>
    )
}

export function Sidebar() {
    const [isMiniSideBarOpen, setIsMiniSideBarOpen] = useState(false)
    const [pageHeader, serPageHeader] = useState<string | null | undefined>("")

    useEffect(() => {
        const fn = async () => {
            const page_header = await document.querySelector(".d-main-title")
            serPageHeader(page_header?.textContent)
        }
        fn()
    }, [])

    return (
        <>
            <motion.nav className="sidebar">
                <SideBarItem></SideBarItem>
            </motion.nav>
            <button onClick={() => { setIsMiniSideBarOpen(!isMiniSideBarOpen) }} className="minisidebar-toggle fPr-3">
                <div className="minisidebar-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m535.85-480-189-189L384-706.15 610.15-480 384-253.85 346.85-291l189-189Z" /></svg>
                    Menu
                </div>
                {pageHeader}
            </button>
            <AnimatePresence mode="popLayout">
                {isMiniSideBarOpen && (
                    <motion.nav
                        className="minisidebar"
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
                        <SideBarItem></SideBarItem>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}