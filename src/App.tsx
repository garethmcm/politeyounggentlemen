// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopNav from './TopNav'
import Home from './Home'
import Gigs from './Gigs'
import Contact from './Contact'
import Footer from './Footer'

import TopPic from './assets/TopPhoto2.jpg';
import Logo from './assets/PYG Logo2.jpg';


function App() {

  return (
<Router>
      <div className="bg-background">
        <img
          src={Logo}
          alt="Logo"
          className="absolute top-0 left-0 m-4 w-1/3 sm:w-1/6 md:w-1/4 lg:w-1/2 max-w-xs"
        />
        <img
          src={TopPic}
          alt="Top Picture"
          className="w-full object-cover"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 29, 1), rgba(0, 0, 29, 0))",
            maskImage: "linear-gradient(to bottom, rgba(0, 0, 29, 1), rgba(0, 0, 29, 0))",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
