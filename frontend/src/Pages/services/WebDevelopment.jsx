import React from 'react'
import WebDevBanner from '../../components/services/web_development/WebDevBanner'
import Navbar from '../../components/common/Navbar'
import WebDevOverview from '../../components/services/web_development/WebDevOverview'
import WebsiteTypes from '../../components/services/web_development/WebsiteTypes'
import Footer from '../../components/common/Footer'

const WebDevelopment = () => {
  return (
    <div>
      <Navbar/>
      <WebDevBanner/>
      <WebDevOverview/>
      <WebsiteTypes/>
      <Footer/>
    </div>
  )
}

export default WebDevelopment
