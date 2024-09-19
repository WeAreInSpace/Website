import "./frame.scss"
import Link from "next/link"
import { AccountMenu } from "@/components/account/account"
import { FavLink } from "./fav-link.client"

export async function ZiraAppFrame({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="zira-app-frame-header">
                <div>
                    <div>
                        <Link href="/zira/app" className="zira-app-frame-header-button">
                            <div className="zira-app-frame-wais-logo"></div>
                            <div className="zira-app-frame-logo-in"></div>
                            <div className="zira-app-frame-zira-logo"></div>
                        </Link>
                    </div>
                </div>

                <div>
                    <div>
                        <AccountMenu></AccountMenu>
                    </div>
                </div>
            </div>
            <div className="zira-app-frame-pack">
                <div className="zira-app-frame-fav-link">
                    <FavLink />
                </div>
                {children}
            </div>
        </>
    )
}