import { useState } from "react"

import Header from "../header/Header"
import VideoPreviewBody from "./VideoPreviewBody"
import Footer from "../footer/Footer"
import Loader from "../loader/Loader"


export default function VideoPreview() {
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)
    return(
        <>
            {
                isLoading ? 
                    <Loader />

                : 

                    <div>
                        <Header />
                <VideoPreviewBody />
                <Footer />
                    </div>
            }
            
        </>
    )
}