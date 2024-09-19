import { ZiraAppFrame } from "@/components/@zira/@app/frame/frame";
import { prisma } from "@/lib/prisma";

export default async function ZiraApp() {
    prisma.ziraCloud.findUnique({
        where: {
            userId: ""
        }
    })

    return (
        <>
            <ZiraAppFrame>
                <></>
            </ZiraAppFrame>
        </>
    )
}