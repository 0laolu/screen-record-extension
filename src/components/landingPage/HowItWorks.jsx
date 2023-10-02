import One from "../../assets/one.png"
import Two from "../../assets/two.png"
import Three from "../../assets/three.png"
import HowItWorksImages from "../../assets/how-it-works-image.png"


export default function HowItWorks() {
    return (
        <section className="how-it-works-section">
            <div className="how-it-works-content-wrapper">
                <h3 className="section-header">How It Works</h3>

                <div className="how-it-works-card-container">
                    <div className="how-it-works-card">
                        <div className="how-it-works-card-content">
                            <img src={One} alt="" />
                            <h3 className="card-content-header">Record Screen</h3>
                            <p className="description">
                                Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.
                            </p>

                            <figure className="card-image">
                                <img src={HowItWorksImages} alt="" />
                            </figure>
                        </div>
                    </div>

                    <div className="how-it-works-card">
                        <div className="how-it-works-card-content">
                            <img src={Two} alt="" />
                            <h3 className="card-content-header">Share Your Recording</h3>
                            <p className="description">
                            We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.
                            </p>

                            <figure className="card-image">
                                <img src={HowItWorksImages} alt="" />
                            </figure>
                        </div>
                    </div>

                    <div className="how-it-works-card">
                        <div className="how-it-works-card-content">
                            <img src={Three} alt="" />
                            <h3 className="card-content-header">Learn Effortlessly</h3>
                            <p className="description">
                            Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.
                            </p>

                            <figure className="card-image">
                                <img src={HowItWorksImages} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}