import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import WebDevelopment from './Pages/services/WebDevelopment'
import WebsiteRedesign from './Pages/services/WebsiteRedesign'
import WebsiteMaintenance from './Pages/services/WebsiteMaintenance'
import Projects from './Pages/Projects'
import Blogs from './Pages/Blogs'
import ScrollToTop from './components/common/ScrollToTop'


const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path="/services/web-development" element={<WebDevelopment/>}/>
        <Route path="/services/website-redesign" element={<WebsiteRedesign />}/>
        <Route path="/services/website-maintenance" element={<WebsiteMaintenance />}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        
      </Routes>
    </div>
  )
}

export default App