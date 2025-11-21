import { NavLink, Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <Link to="/" className="logo">
                    Innovate And Amplify
                </Link>

                <ul className="nav-links">
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>

                <Link to="/contact" className="cta-button">
                    Contact Me
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
