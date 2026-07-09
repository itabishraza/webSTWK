import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ProjectBanner from "../components/projects/ProjectBanner";
import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectGrid from "../components/projects/ProjectGrid";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | webSTWK</title>

        <meta
          name="description"
          content="Explore webSTWK's portfolio of modern websites, React.js applications, business websites, landing pages, and full-stack web development projects."
        />

        <meta
          name="keywords"
          content="web development portfolio, React projects, Node.js projects, website design portfolio, webSTWK projects, full stack projects"
        />
      </Helmet>

      <Navbar />
      <ProjectBanner />
      <FeaturedProject />
      <ProjectGrid />
      <Footer />
    </>
  );
};

export default Projects;