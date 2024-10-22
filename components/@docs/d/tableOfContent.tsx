"use client"

import { useEffect, useState } from "react";

type TOCObject = {
    title: string | null;
    id: string;
};

type TOC = TOCObject[];

export default function Toc() {
    const [tocData, setTocData] = useState<TOC>()

    async function sleep(msec: number) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }

    async function changeColor(header: HTMLElement | null) {
        if (header && header.style.backgroundColor === "") {
            header.style.backgroundColor = "rgb(34, 34, 34)";
            await sleep(6000)
            header.style.backgroundColor = "";
        }
    }


    useEffect(() => {
        const rawTableOfContent = document.querySelectorAll(".d-h")
        let toc: TOC = []

        rawTableOfContent.forEach((data, index) => {
            const tableOfContent: TOCObject = {
                title: data.textContent,
                id: data.id
            }
            toc.push(tableOfContent)
        })

        setTocData(toc)
    }, [])

    return (
        <nav className="d-main-toc">
            <h5 className="d-main-toc-title fPr-6">On this page</h5>
            <ul className="d-main-toc-list-pack">
                {tocData?.map((data, index) => (
                    <li key={index} className="d-main-toc-list">
                        <a
                            href={`#${data.id}`}
                            className="fPr-4 d-main-toc-link"
                            onClick={() => {
                                const header = document.getElementById(data.id)
                                changeColor(header)
                            }}
                        >{data.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}