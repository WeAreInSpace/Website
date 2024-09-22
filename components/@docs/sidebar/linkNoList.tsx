"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SidebarLinkNoList({ children, to }: { children: React.ReactNode, to: string }) {
    const pathName = usePathname()
    return (
        <li className="sidebar-link">
            <Link
                href={"/docs/" + to}
                className="sidebar-link-link fPr-5"
                style={pathName == "/docs" + to
                    ? {
                        color: "rgb(0, 155, 255)"
                    } : {
                        color: ""
                    }
                }
            >{children}</Link>
        </li>
    )
}