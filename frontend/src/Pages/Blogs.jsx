import React from 'react'
import BlogBanner from '../components/blogs/BlogBanner'
import FeaturedArticle from '../components/blogs/FeaturedArticle'
import BlogGrid from '../components/blogs/BlogGrid'
import BlogCategories from '../components/blogs/BlogCategories'
import Newsletter from '../components/blogs/Newsletter'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const Blogs = () => {
  return (
    <div>
      <Navbar/>
      <BlogBanner/>
      <FeaturedArticle/>
      <BlogGrid/>
      <BlogCategories/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Blogs
