import "./main.scss"

export default function DocsMain({ children }: { children: React.ReactNode }) {
    return (
        <div className="docs-main">
            {children}
        </div>
    )
}