// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import TopNav from './TopNav'
import TheTrip from './TheTrip'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

import TopPic from './assets/TopPhoto2.jpg';
import Logo from './assets/PYG Logo2.jpg';


function App() {

  return (
    <Router>
      <div className="bg-background">
      <Link to="/"><img
          src={Logo}
          alt="Logo"
          className="absolute top-0 left-0 m-4 w-1/3 sm:w-1/6 md:w-1/4 lg:w-1/2 max-w-xs"
        /></Link>
      {/* Top Image and Navigation */}
      <div className="relative">
          <img
            src={TopPic}
            alt="Top Picture"
            className="w-full object-cover min-h-[200px]"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 29, 1), rgba(0, 0, 29, 0))",
              maskImage: "linear-gradient(to bottom, rgba(0, 0, 29, 1), rgba(0, 0, 29, 0))",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
          {/* Navigation positioned at the bottom of the image */}
          <div className="absolute bottom-5 w-full px-4 py-2 bg-opacity-50 text-white text-center sm:flex sm:justify-around">
            <TopNav />
          </div>
        </div>
        <br/>
          <div className="flex justify-center items-center">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/thetrip" element={<TheTrip />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        <Footer />
        </div>
    </Router>
  )
}

export default App
