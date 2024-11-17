"use client"

import { animate, AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function CodeClient({ code, runIn }: { code: string, runIn: string }) {
    const [isCopy, setIsCopy] = useState(false)
    return (
        <div className="d-code">
            <div className="d-code-runIn-pack">
                <p className="fP-4 d-code-runIn">{runIn}</p>
                <div className="d-code-runIn-tool fP-5">
                    <motion.button className="d-code-botton fP-4"
                        onClick={() => {
                            const type = "text/plain";
                            const blob = new Blob([code], { type });
                            const data = [new ClipboardItem({ [type]: blob })];
                            navigator.clipboard.write(data)
                            setIsCopy(true)
                        }}
                        transition={{
                            duration: 0.04
                        }}
                        initial={{
                            backgroundColor: "rgb(34, 34, 34)"
                        }}
                        style={{
                            color: "rgb(255, 255, 255)",
                            padding: "3px 8px",
                            borderRadius: "5px",
                            fontSize: "13px"
                        }}
                        whileHover={{
                            backgroundColor: "rgb(45, 45, 45)"
                        }}
                        variants={{
                            "hide": {
                                color: "rgb(255, 255, 255)"
                            },
                            "show": {
                                color: "rgb(0, 145, 255)"
                            }
                        }}
                        animate={isCopy ? "show" : "hide"}
                    >Copy</motion.button>
                </div>
            </div>
            <div className="d-code-block fPr-4">
                {code}
            </div>
        </div>
    )
}