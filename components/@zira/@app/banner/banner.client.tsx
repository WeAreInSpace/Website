"use client"

import { motion } from "framer-motion"

interface waisNewsTypeSchema {
    image_url?: string
    path: string
    description: string
}

export function BannerClient() {
    return (
        <>

        </>
    )
}

export function BannerCreateNewDocsButton() {
    return (
        <a className="zira-app-banner-new-button shadow">
            <div className="zira-app-banner-new-button-icon">
                <div className="zira-app-banner-new-button-docs-icon-bg">
                    <div className="fP-5">Aa</div>
                </div>
            </div>
            <div className="zira-app-banner-new-button-apps">
                <p className="fP-3">Docs</p>
            </div>
        </a>
    )
}

export function BannerCreateNewJsonButton() {
    return (
        <a className="zira-app-banner-new-button">
            <div className="zira-app-banner-new-button-icon">
                <div className="zira-app-banner-new-button-json-icon-bg">
                    <div className="fP-5">&#x7B;&#x7D;</div>
                </div>
            </div>
            <div className="zira-app-banner-new-button-apps">
                <p className="fP-3">Json</p>
            </div>
        </a>
    )
}