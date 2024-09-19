import Header from "@/components/header/header";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header></Header>
            <div className="main-container">
                <div className="docs-pack">
                    {children}
                </div>
            </div>
        </>
    )
}