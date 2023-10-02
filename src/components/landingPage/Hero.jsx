import Arrow from "../../assets/arrow-right.png"
import HeroImage from "../../assets/hero-image.png"
import { useNavigate } from "react-router-dom"


export default function Hero() {

    const navigate = useNavigate()

    return (
        <section className="hero-section">
            <div className="hero-section-content-wrapper">
                <div className="hero-section-content">
                    <h1>Show Them Don't Just Tell</h1>
                    <p className="description">
                        Help your friends and loved ones by creating and sending videos on how to get things done on a website.
                    </p>

                    <div className="hero-btn-container">
                        <button onClick={() => navigate("/videoUrl")}>Install HelpMeOut <span><img src={Arrow} alt="" /></span></button>
                    </div>
                </div>
                <div className="hero-image">
                    <figure>
                        <img src={HeroImage} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}