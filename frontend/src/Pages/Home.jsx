import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import HomeService from "../components/home/HomeService";
import HomePortfolio from "../components/home/HomePortfolio";
import HomeAboutMe from "../components/home/HomeAboutMe";
import HomeFeatures from "../components/home/HomeFeatures";
import HomeTestimonials from "../components/home/HomeTestimonials";
import HomeFaq from "../components/home/HomeFaq";
import HomeContact from "../components/home/HomeContact";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>webSTWK | Web Development & Website Design Company</title>

        <meta
          name="description"
          content="webSTWK builds fast, responsive, and modern websites for businesses, startups, and individuals. We specialize in React.js, Node.js, website redesign, website maintenance, and SEO."
        />

        <meta
          name="keywords"
          content="web development, website design, React.js, Node.js, website maintenance, SEO, webSTWK"
        />

        <meta name="author" content="webSTWK" />

        <link rel="canonical" href="https://webstwk.com/" />

        <meta property="og:title" content="webSTWK | Web Development & Website Design Company" />
        <meta
          property="og:description"
          content="Professional web development services using React.js, Node.js, and modern technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webstwk.com/" />
      </Helmet>

      <Navbar />
      <HeroSection />
      <HomeService />
      <HomePortfolio />
      <HomeAboutMe />
      <HomeFeatures />
      <HomeTestimonials />
      <HomeFaq />
      <HomeContact />
      <Footer />
    </>
  );
};

export default Home;