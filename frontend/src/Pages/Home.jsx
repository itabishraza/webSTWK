import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/home/HeroSection'
import HomeService from '../components/home/HomeService'
import HomePortfolio from '../components/home/HomePortfolio'
import HomeAboutMe from '../components/home/HomeAboutMe'
import HomeFeatures from '../components/home/HomeFeatures'
import HomeTestimonials from '../components/home/HomeTestimonials'
import HomeFaq from '../components/home/HomeFaq'
import HomeContact from '../components/home/HomeContact'
import Footer from '../components/common/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <HomeService/>
      <HomePortfolio/>
      <HomeAboutMe/>
      <HomeFeatures/>
      <HomeTestimonials/>
      <HomeFaq/>
      <HomeContact/>
      <Footer/>
    </div>
  )
}

export default Home
