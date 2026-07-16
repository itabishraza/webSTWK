import React from 'react'
import WebsiteRedesignBanner from '../../components/services/websiteRedesign/WebsiteRedesignBanner'
import RedesignOverview from '../../components/services/websiteRedesign/RedesignOverview'
import RedesignServices from '../../components/services/websiteRedesign/RedesignServices'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import Iconwhatsapp from '../../components/common/Iconwhatsapp'

const WebsiteRedesign = () => {
  return (
    <div>
      <Navbar/> 
      <WebsiteRedesignBanner/>
      <RedesignOverview/>
      <RedesignServices/>
      <Iconwhatsapp />
      <Footer/>
    </div>
  )
}

export default WebsiteRedesign
