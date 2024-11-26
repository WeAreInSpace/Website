import Link from "next/link"
import "./main.scss"

export default function HomeMain() {
    return (
        <>
            <div className="home-main-pack">
                <img src="/Landing/2.svg" className="home-2 home-bg" />
                <img src="/Landing/3.svg" className="home-3 home-bg" />
                <img src="/Landing/1.svg" className="home-1 home-bg" />

                <main className="home-main main-container">
                    <div className="home-main-title-pack">
                        <p className="fP-4">We Are In Space is a</p>
                        <h1 className="fP-7 home-main-title">SIMPLE MINECRAFT</h1>
                        <h1 className="fP-7 home-main-title">SERVER</h1>
                    </div>
                    <div>
                        <Link href="/docs">Getting Started</Link>
                        <Link href="/docs/connect">Play now</Link>
                    </div>
                </main>
            </div>
        </>
    )
}