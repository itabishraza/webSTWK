import React from 'react'
import AboutBanner from '../components/about/AboutBanner'
import CompanyStory from '../components/about/CompanyStory'
import WhyChooseUs from '../components/about/WhyChooseUs'
import Process from '../components/about/Process'
import Technologies from '../components/about/Technologies'
import StatsSection from '../components/about/StatsSection'
import CoreValues from '../components/about/CoreValues'
import MeetFounder from '../components/about/MeetFounder'
import CTASection from '../components/about/CTASection'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutBanner/>
      <CompanyStory/>
      <WhyChooseUs/>
      <Process/>
      <Technologies/>
      <StatsSection/>
      <CoreValues/>
      <MeetFounder/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default About
