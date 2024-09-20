import { BannerCreateNewDocsButton, BannerCreateNewJsonButton } from "./banner.client"
import "./banner.scss"

export async function Banner() {
    return (
        <>
            <div className="zira-app-banner">
                <div className="zira-app-banner-header">
                    <div className="fP-5">Create new</div>
                </div>

                <div className="zira-app-banner-new">
                    <BannerCreateNewDocsButton></BannerCreateNewDocsButton>
                    <BannerCreateNewJsonButton></BannerCreateNewJsonButton>
                </div>
            </div>
        </>
    )
}