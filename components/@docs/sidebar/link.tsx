"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SidebarLink({ children, to }: { children: React.ReactNode, to: string }) {
    const pathName = usePathname()
    return (
        <li className="sidebar-link">
            <Link
                href={"/docs/" + to}
                className="sidebar-link-link fPr-4"
                style={pathName == "/docs/" + to
                    ? {
                        color: "rgb(0, 155, 255)",
                        borderLeft: "1px solid rgb(0, 153, 255)",
                        fontWeight: "500"
                    } : {
                        color: ""
                    }
                }
            >{children}</Link>
        </li>
    )
}