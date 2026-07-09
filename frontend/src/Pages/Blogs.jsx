import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import BlogBanner from "../components/blogs/BlogBanner";
import FeaturedArticle from "../components/blogs/FeaturedArticle";
import BlogGrid from "../components/blogs/BlogGrid";
import BlogCategories from "../components/blogs/BlogCategories";
import Newsletter from "../components/blogs/Newsletter";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Blog | webSTWK</title>

        <meta
          name="description"
          content="Explore the latest web development tutorials, React.js guides, Node.js tips, SEO strategies, UI/UX insights, and business growth articles from webSTWK."
        />

        <meta
          name="keywords"
          content="web development blog, React.js tutorials, Node.js guides, JavaScript, SEO tips, UI UX, website development, webSTWK"
        />
      </Helmet>

      <Navbar />
      <BlogBanner />
      <FeaturedArticle />
      <BlogGrid />
      <BlogCategories />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Blogs;