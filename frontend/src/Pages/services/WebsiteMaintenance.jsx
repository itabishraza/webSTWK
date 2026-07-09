import React from 'react'
import WebsiteMaintenanceBanner from '../../components/services/websiteMaintenance/WebsiteMaintenanceBanner'
import WebsiteMaintenanceOverview from '../../components/services/websiteMaintenance/WebsiteMaintenanceOverview'
import MaintenanceServices from '../../components/services/websiteMaintenance/MaintenanceServices'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'

const WebsiteMaintenance = () => {
  return (
    <div>
      <Navbar/>  
      <WebsiteMaintenanceBanner/>
      <WebsiteMaintenanceOverview/>
      <MaintenanceServices/>
      <Footer/>
    </div>
  )
}

export default WebsiteMaintenance
