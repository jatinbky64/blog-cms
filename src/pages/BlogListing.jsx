import React from 'react'
import Hero from '@/components/CustomComponenets/Home/Hero'
import { BlogTabs } from '@/components/CustomComponenets/Home/BlogTabs'
const BlogListing = () => {
  return (
    <div className='pb-10'>
    <Hero/>
    <BlogTabs/>
    </div>
  )
}

export default BlogListing