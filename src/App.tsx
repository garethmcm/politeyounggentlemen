// import { useState } from 'react'

import TopNav from './TopNav'
import About from './About'
import Footer from './Footer'

import TopPic from './assets/TopPhoto2.jpg';
import Logo from './assets/PYG Logo2.jpg';


function App() {

  return (
    <div className="bg-background">
      <img src={Logo} alt="Logo" className="absolute top-0 left-0 m-4 w-1/3 sm:w-1/6 md:w-1/4 lg:w-1/2 max-w-xs"/>
      <img src={TopPic} alt="Top Picture" className="w-full object-cover"
  style={{
    WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 29, 1), rgba(0, 0, 29, 0))",
    maskImage: "linear-gradient(to bottom, rgba(0, 0, 29, 1), rgba(0, 0, 29, 0))",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  }} />
      <TopNav />
      <About />
      <Footer />
    </div>
  )
}

export default App
