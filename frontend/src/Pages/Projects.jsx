import React from 'react'
import ProjectBanner from '../components/projects/ProjectBanner'
import Navbar from '../components/common/Navbar'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectGrid from '../components/projects/ProjectGrid'
import Footer from '../components/common/Footer'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <ProjectBanner/>
      <FeaturedProject/>
      <ProjectGrid/>
      <Footer/>
    </div>
  )
}

export default Projects
