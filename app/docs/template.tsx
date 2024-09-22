import DocsMain from "@/components/@docs/main/main";
import "./layout.scss"
import { Sidebar } from "@/components/@docs/sidebar/sidebar";

export default function DocsTemplate({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar></Sidebar>
            <DocsMain>
                {children}
            </DocsMain>
        </>
    )
}