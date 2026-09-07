import { Link } from "react-router-dom";
import './header.css'

function Header() {
    return (
        <nav className="navegationBar">
            <Link to={'/'} className="logo">DomoFlix :3</Link>
            <div className="navegationItems">
                <Link to="/favoritos">Favoritos <i className="fa-solid fa-star"></i></Link>
            </div>
        </nav>
    )
}

export default Header;