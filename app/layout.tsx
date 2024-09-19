import type { Metadata } from "next";
import "./globals.scss";
import Session from "../components/@home/session/session";

export const metadata: Metadata = {
  title: "We Are In Space",
  description: "We Are In Space Website",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Session>
          {children}
        </Session>
      </body>
    </html>
  );
}
