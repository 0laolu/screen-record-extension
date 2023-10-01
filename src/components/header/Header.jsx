import HeaderLogo from "../../assets/header-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <figure className="logo">
                    <img src={HeaderLogo} alt="" />
                </figure>
                <ul className="nav-links">
                    <div className="about-extension">
                        <li>Features</li>
                        <li>How It Works</li>
                    </div>
                    <div className="get-started">
                        <li>Get Started</li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}