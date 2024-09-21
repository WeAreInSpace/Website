import { Banner } from "@/components/@zira/@app/banner/banner"
import { ZiraAppFrame } from "@/components/@zira/@app/frame/frame"

export default async function ZiraAppWorkSpace({ params, searchParams }: { params: { slug: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
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