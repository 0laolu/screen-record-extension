import SimpleRecordingIcon from "../../assets/simple-recording-icon.png"
import EasySharingIcon from "../../assets/easy-sharing-icon.png"
import RevisitRecording from "../../assets/revisit-recording-icon.png"
import FeaturesImage from "../../assets/features-image.png"

export default function Features() {
    return (
        <section className="features-section">
            <div className="features-section-content-wrapper">
                <div className="heading">
                    <h3 className="section-header">Features</h3>
                    <p>Key Highligts of Our Extension</p>
                </div>

                <div className="features-section-content">
                    <div className="features-section-app-features">
                        <div className="app-features-card">
                            <figure className="feature-icon">
                                <img src={SimpleRecordingIcon} alt="" />
                            </figure>
                            <div className="app-features-content">
                                <h3>Simple Screen Recording</h3>
                                <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                            </div>
                        </div>

                        <div className="app-features-card">
                            <figure className="feature-icon">
                                <img src={EasySharingIcon} alt="" />
                            </figure>
                            <div className="app-features-content">
                                <h3>Easy-to-Share URL</h3>
                                <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                            </div>
                        </div>

                        <div className="app-features-card">
                            <figure className="feature-icon">
                                <img src={RevisitRecording} alt="" />
                            </figure>
                            <div className="app-features-content">
                                <h3>Revisit Recordings</h3>
                                <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                            </div>
                        </div>
                    </div>
                    <div className="features-section-image">
                        <figure>
                            <img src={FeaturesImage} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}