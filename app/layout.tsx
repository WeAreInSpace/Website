import type { Metadata } from "next";
import "./globals.scss";
import Session from "../components/@home/session/session";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    title: "We Are In Space",
    description: "We Are In Space Website",
};

export default async function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Session>
                    <SpeedInsights></SpeedInsights>
                    {children}
                </Session>
            </body>
        </html>
    );
}