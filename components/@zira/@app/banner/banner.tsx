import "./banner.scss"

export async function Banner() {
    return (
        <>
            <div className="zira-app-banner">
                <div className="zira-app-banner-header">
                    <div className="fP-5">Create new</div>
                </div>

                <div className="zira-app-banner-new">
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
                </div>
            </div>
        </>
    )
}