import React from 'react'
import ServiceBanner from '../components/service/ServiceBanner'
import ServicesGrid from '../components/service/ServicesGrid'
import ServiceProcess from '../components/service/ServiceProcess'
import WhyChooseService from '../components/service/WhyChooseService'
import PricingCTA from '../components/service/PricingCTA'
import FAQ from '../components/service/FAQ'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'

const Service = () => {
  return (
    <div>
      <Navbar/>
      <ServiceBanner/>
      <ServicesGrid/>
      <ServiceProcess/>
      <WhyChooseService/>
      <PricingCTA/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Service
