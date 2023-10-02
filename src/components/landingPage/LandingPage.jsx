import Header from "../header/Header";
import Footer from "../footer/Footer";
import LandingPageBody from "./LandingPageBody";
import Loader from "../loader/Loader";
import { useState } from "react";

export default function LandingPage() {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 3500)

    return (
        <div className="page-wrapper">
            {
                isLoading ? 
                    <Loader />
            
                :

                <div>
                    <Header />
                    <LandingPageBody/>
                    <Footer />
                </div>
            }
            
        </div>
    )
}