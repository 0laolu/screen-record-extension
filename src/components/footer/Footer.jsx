import footerLogo from "../../assets/footer-logo.png"

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-content">
                <figure className="footer-logo">
                    <img src={footerLogo} alt="" />
                </figure>

                <div className="menu-options">
                    <h3>Menu</h3>
                    <p>Home</p>
                    <p>Converter</p>
                    <p>How It Works</p>
                </div>

                <div className="about-us-options">
                    <h3>About us</h3>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                </div>

                <div className="screen-record-options">
                    <h3>Screen Record</h3>
                    <p>Browser Window</p>
                    <p>Desktop</p>
                    <p>Application</p>
                </div>
            </div>
        </footer>
    )
}