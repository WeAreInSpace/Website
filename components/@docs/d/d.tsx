import Link from "next/link";
import "./d.scss"
import CodeClient from "./d-client";
import Toc from "./tableOfContent";

namespace d {
    export function main({ children, title, pageForm, desc, image }: { children: React.ReactNode, title: string, pageForm?: string, desc?: string, image?: string }) {
        desc = desc || ""
        pageForm = pageForm || ""
        image = image || ""
        return (
            <div className="d-main-pack">
                <div className="d-main">
                    {pageForm == ""
                        ? (
                            <></>
                        )
                        : (
                            <h5 className="d-main-form fPr-4">{pageForm}</h5>
                        )
                    }
                    <h1 className="d-main-title fPr-6">{title}</h1>
                    {desc == ''
                        ? (
                            <></>
                        )
                        : (
                            <p className="d-p fPr-3">{desc}</p>
                        )
                    }
                    {children}
                </div>
                <Toc></Toc>
            </div>
        )
    }
    export function quote({ children }: { children: React.ReactNode }) {
        return (
            <div className="d-quote fPr-i4">
                {children}
            </div>
        )
    }
    export function h1({ children, id }: { children: React.ReactNode, id: string }) {
        return (
            <h1 className="fPr-6 d-h d-h1" id={id}>
                {children}
            </h1>
        )
    }
    export function h2({ children, id }: { children: React.ReactNode, id: string }) {
        return (
            <h2 className="fPr-6 d-h d-h2" id={id}>
                {children}
            </h2>
        )
    }
    export function h3({ children, id }: { children: React.ReactNode, id: string }) {
        return (
            <h3 className="fPr-6 d-h d-h3" id={id}>
                {children}
            </h3>
        )
    }
    export function p({ children }: { children: React.ReactNode }) {
        return (
            <p className="d-p fPr-3">{children}</p>
        )
    }
    export function list({ children }: { children: React.ReactNode }) {
        return (
            <li className="d-list fPr-3">
                {children}
            </li>
        )
    }
    export function bullededList({ children }: { children: React.ReactNode }) {
        return (
            <></>
        )
    }
    export function link({ children, to }: { children: React.ReactNode, to: string }) {
        return (
            <Link href={to} className="d-link fPr-5">{children}</Link>
        )
    }
    export function externalLink({ children, to }: { children: React.ReactNode, to: string }) {
        return (
            <a href={to} className="d-link fPr-5">{children}</a>
        )
    }
    export function image({ src }: { src: string }) {
        return (
            <img src={src} className="d-img" />
        )
    }
    export function code({ code, runIn }: { code: string, runIn?: string }) {
        runIn = runIn || "Minecraft"
        return (
            <CodeClient runIn={runIn} code={code} />
        )
    }
    export function video({ children }: { children: React.ReactNode }) {
        return (
            <></>
        )
    }
    export function warn({ children }: { children: React.ReactNode }) {
        return (
            <></>
        )
    }
    export function danger({ children }: { children: React.ReactNode }) {
        return (
            <></>
        )
    }
    export function bold({ children }: { children: React.ReactNode }) {
        return (
            <span className="d-p fPr-5">{children}</span>
        )
    }
}

export default d