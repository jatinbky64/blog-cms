import React from 'react'
import { useParams } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaShareAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';
import RenderContent from '@/components/CustomComponenets/BlogDetails/RenderContent';
import SkeltonLoader from '@/components/CustomComponenets/BlogDetails/SkeltonLoader';
import { removeTimeFromCreatedAt } from '@/utils/removeTimeFromCreatedAt';
const BlogDetails = () => {

  const { id } = useParams()

  // Fetch blog-details
  const { data: blogDetails, loading: blogDetailLoading, error: blogDetailsError } = useFetch(
    `https://pretty-splendor-eb24c6e22f.strapiapp.com/api/blog-details/?populate[blog][populate]=featuredimage&filters[blog][id][$eq]=${id}
`
  );


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <>

      {
        blogDetailLoading && <SkeltonLoader />

      }
      {
        blogDetails?.data[0] &&
        <section className='mx-auto xl:max-w-3xl max-w-6xl mt-14 h-full relative overflow-hidden'>
          <h2 className='font-display md:text-4xl text-2xl  font-semibold lg:leading-[1.25] leading-[1.25] mb-6 text-neutral-900'>
            {
              blogDetails && blogDetails?.data[0]?.blog?.blogtitle
            }
          </h2>

          {/* Author card */}
          <div className='md:px-8 mx-auto flex w-full items-center justify-between mb-6'>

            <div className='flex items-center gap-2'>

              <div className='rounded-full w-10 h-10 border border-black overflow-hidden'>
                <img
                  src={blogDetails && blogDetails?.data[0]?.blog?.featuredimage?.formats?.thumbnail?.url}
                  alt="avatar"
                  loading='lazy'
                  className='object-cover w-full h-full' />
              </div>
              <div>
                <p className='text-xs font-bold text-primary'>{blogDetails && blogDetails?.data[0]?.blog?.blogauthor}</p>
                <p className='text-xs font-semibold text-slate-400'>{blogDetails && removeTimeFromCreatedAt( blogDetails?.data[0]?.createdAt)}</p>
              </div>

            </div>
            <div className='flex gap-3 items-center'>
              <span className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-300 text-white'><FaFacebookF /></span>
              <span className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-300 text-white'><FaTwitter /></span>
              <span className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-300 text-white'><FaShareAlt /></span>
            </div>
          </div>




          {/* Content */}

          <div className='w-full'>
            <div className='mb-6'>
              <div className='w-full rounded-2xl overflow-hidden h-80'>
                <img src={blogDetails && blogDetails?.data[0]?.blog?.featuredimage?.formats?.thumbnail?.url}
                  alt="breaking-bad"
                  loading='lazy'
                  className='h-full w-full object-cover' />
              </div>

              {/* <p className='text-neutral-700  text-xs text-center mt-2'>Breaking bad</p> */}

            </div>

            {
              blogDetails && blogDetails?.data[0]?.content && <RenderContent content={blogDetails?.data[0]?.content} />

            }
          </div>


        </section>
      }
  

      {blogDetails?.data.length === 0 && !blogDetailLoading && (
        <div className='h-[59.1vh] w-full flex justify-center items-center'>
          <h1 className='text-neutral-700 font-semibold'>No content available for this blog.</h1>
        </div>
      )}



    </>
  )
}

export default BlogDetails