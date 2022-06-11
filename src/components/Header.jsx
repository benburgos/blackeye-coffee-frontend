import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        < nav className="nav">
            <Link to="/">
                <div>black eye coffee  app</div>
            </Link>

        </nav>
    )
}