import styles from "./VideoPreview.module.css"
import editLogo from "../../assets/edit-logo.png"
import copyLogo from "../../assets/copy-logo.png"
import facebookIcon from "../../assets/facebook-icon.png"
import whatsappIcon from "../../assets/whatsapp-icon.png"
import telegramIcon from "../../assets/telegram-icon.png"

export default function VideoPreviewBody() {
    return (
        <main className={styles.main}>
            <section className={styles.videoPreviewBody}>
                <div className={styles.recordingDetails}>
                    <h1 className={styles.pageHeader}>Your video is ready!</h1>

                    <section className={styles.videoNameContainer}>
                        <h3 className={styles.videoNameHeader}>Name</h3>
                        <p className={styles.videoName}>
                            Untitled_Video_20232509
                            <span className={styles.editIcon}><img src={editLogo} alt="" /></span>
                        </p>
                        

                        <form>
                            <input 
                                type="email" 
                                placeholder="enter email of receiver"
                            />
                            <button>Send</button>
                        </form>
                    </section>

                    <section className={styles.videoUrlContainer}>
                        <h3 className={styles.videoUrlHeader}>Video Url</h3>

                        <form>
                            <input 
                                type="email" 
                                placeholder="https://www.helpmeout/Untitled_Video_20232509"
                            />
                            <button><span><img src={copyLogo} alt="" /></span>Copy</button>
                        </form>
                    </section>

                    <div className={styles.shareVideo}>
                        <h3>Share your video</h3>
                        <div className={styles.shareOptionsContainer}>
                            <p><span><img src={facebookIcon} alt="" />Facebook</span></p>
                            <p><span><img src={whatsappIcon} alt="" />Whatsapp</span></p>
                            <p><span><img src={telegramIcon} alt="" />Telegram</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.recordedVideo}>

                </div>
            </section>
            <section className={styles.saveVideoContainer}>
                <div className={styles.saveVideoContent}>
                    <h3>To ensure the availability and privacy of your video, we recommend saving it to your account.</h3>
                    <div className={styles.saveBtnContainer}>
                        <button>Save Video</button>
                    </div>
                    <p>Don't have an account? <a href="#">Create account</a></p>
                </div>
            </section>

            
        </main>
    )
}