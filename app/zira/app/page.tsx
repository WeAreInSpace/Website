import { Banner } from "@/components/@zira/@app/banner/banner"
import { ZiraAppFrame } from "@/components/@zira/@app/frame/frame"
import { prisma } from "@/lib/prisma"

export default async function ZiraApp() {
    return (
        <>
            <ZiraAppFrame>
                <div className="main-container">
                    <Banner></Banner>
                </div>
            </ZiraAppFrame>
        </>
    )
}