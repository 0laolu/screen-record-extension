import { useNavigate } from "react-router-dom"
import HeaderLogo from "../../assets/header-logo.png"
import FacebookIcon from "../../assets/facebook-icon.png"
import GoogleIcon from "../../assets/google-icon.png"
import { useState } from "react"
import styles from "./SignUp.module.css"
import Loader from "../loader/Loader"



export default function SignUp() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading ] = useState(true)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    return (
        <>
            {
                isLoading ?
                    <Loader />
            :

                <div className={styles.pageWrapper}>
                    <header>
                        <nav className="nav-bar">
                            <figure className="logo">
                                <img onClick={() => navigate("/")} src={HeaderLogo} alt="" />
                            </figure>
                            
                        </nav>
                    </header>


                    <div className={styles.pageBody}>
                        
                        <h2 className={styles.pageHeader}>Log in or Sign Up</h2>
                        <p className={styles.description}>Join millions of others in sharing successful moves on HelpMeOut</p>

                        <form>
                            <div className={styles.socialAuth}>
                                <button className= {styles.googleAuth}>
                                    <img src={GoogleIcon} alt="" />
                                    <p>Continue with Google</p>
                                </button>

                                <button className= {styles.facebookAuth}>
                                    <img src={FacebookIcon} alt="" />
                                    <p>Continue with Facebook</p>
                                </button>
                            </div>

                            <div className= {styles.intersection}>or</div>

                            <div className= {styles.defaultAuth}>
                                <div className= {styles.inputContainer}>
                                    <label htmlFor="email"></label>
                                    <input type="email" id="email" placeholder="Enter your email address" name="email" value={email} />
                                </div>

                                <div className= {styles.inputContainer}>
                                    <label htmlFor="password"></label>
                                    <input type="password" id="password" placeholder="Enter your Password" name="email" value={password} />
                                </div>
                            </div>

                            <div className={styles.signUpBtnContainer}>
                                <button>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
        
    )
}