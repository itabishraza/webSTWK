import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ServiceBanner from "../components/service/ServiceBanner";
import ServicesGrid from "../components/service/ServicesGrid";
import ServiceProcess from "../components/service/ServiceProcess";
import WhyChooseService from "../components/service/WhyChooseService";
import PricingCTA from "../components/service/PricingCTA";
import FAQ from "../components/service/FAQ";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services | webSTWK</title>

        <meta
          name="description"
          content="Discover webSTWK's professional web development services including custom website development, website redesign, website maintenance, responsive design, and SEO solutions."
        />

        <meta
          name="keywords"
          content="web development services, custom website development, website redesign, website maintenance, React.js development, Node.js development, SEO services, webSTWK"
        />
      </Helmet>

      <Navbar />
      <ServiceBanner />
      <ServicesGrid />
      <ServiceProcess />
      <WhyChooseService />
      <PricingCTA />
      <FAQ />
      <Footer />
    </>
  );
};

export default Service;