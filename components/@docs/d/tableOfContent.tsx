"use client"

import { useEffect, useState } from "react";

type TOCObject = {
    title: string | null;
    id: string;
};

type TOC = TOCObject[];

export default function Toc() {
    const [tocData, setTocData] = useState<TOC>()

    useEffect(() => {
        async function getHeadingData() {
            const rawTableOfContent = await document.querySelectorAll(".d-h")
            let toc: TOC = []

            await rawTableOfContent.forEach((data, index) => {
                const tableOfContent: TOCObject = {
                    title: data.textContent,
                    id: data.id
                }
                toc.push(tableOfContent)
            })

            await setTocData(toc)
        }

        getHeadingData()
    }, [])

    return (
        <nav className="d-main-toc">
            <h5 className="d-main-toc-title fPr-6">On this page</h5>
            <ul className="d-main-toc-list-pack">
                {tocData?.map((data, index) => (
                    <li key={index} className="d-main-toc-list">
                        <a href={`#${data.id}`} className="fPr-4 d-main-toc-link">{data.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}