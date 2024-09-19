import Link from "next/link"
import "./main.scss"

export default function HomeMain() {
    return (
        <>
            <div className="home-main-pack main-container">
                <main className="home-main">
                    <div className="home-main-sec1">
                        <div className="home-main-sec1-header-pack">
                            <h1 className="fP-6 home-main-sec1-header">What is We Are In Space?</h1>
                        </div>
                        <div className="home-main-sec1-paragraph-pack">
                            <p className="fP-4 home-main-sec1-paragraph">We Are In Space is a simple Minecraft server.</p>
                            <p className="fP-4 home-main-sec1-paragraph">Join our server and play.</p>
                        </div>
                        <div className="home-main-sec1-button-pack">
                            <Link href={"/docs/connect"} className="fP-5 home-main-sec1-button home-main-sec1-button-blue">Play now</Link>
                            <Link href={"/docs"} className="fP-5 home-main-sec1-button home-main-sec1-button-normal">Docs</Link>
                        </div>
                    </div>
                    <div className="home-main-sec2">

                    </div>
                </main>
            </div>
        </>
    )
}