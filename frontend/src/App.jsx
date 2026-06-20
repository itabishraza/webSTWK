import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import Aboutme from './components/Aboutme'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Service/>
      <Portfolio/>
      <Aboutme/>
      <Features/>
      <Testimonials/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App