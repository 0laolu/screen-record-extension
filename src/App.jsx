import { useState } from 'react'
// import PopUp from './components/Popup'
import { Routes, Route } from "react-router-dom"
import VideoPreview from './components/video-preview/VideoPreview'
import LandingPage from './components/landingPage/LandingPage'
import SignUp from './components/signUp/SignUp'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='register' element={<SignUp />}/>
        <Route path='videoUrl' element={<VideoPreview />}/>
      </Routes>
    </>
  )
}

export default App
