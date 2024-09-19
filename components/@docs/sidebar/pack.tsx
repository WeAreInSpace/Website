export default function Pack({ title, children }: { title?: String, children: React.ReactNode }) {
    title = title || ""
    return (
        <li className="sidebar-pack">
            {title == ""
                ? (
                    <></>
                )
                : (
                    <>
                        <h5 className="sidebar-pack-title fPr-5">
                            {title}
                        </h5>
                    </>
                )
            }
            <ul className="sidebar-pack-items">
                {children}
            </ul>
        </li>
    )
}