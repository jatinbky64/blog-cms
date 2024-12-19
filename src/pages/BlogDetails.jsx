import React from 'react'
import { useParams } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaShareAlt } from "react-icons/fa";
import { useEffect } from 'react';
const BlogDetails = () => {
  const { id } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []);
  return (
    <section className='mx-auto xl:max-w-3xl max-w-6xl mt-14 h-full'>
      <h2 className='font-display md:text-4xl text-2xl  font-semibold lg:leading-[1.25] leading-[1.25] mb-6 text-neutral-900'>Breaking Bad: A Journey into the World of Chemistry and Crime</h2>

      {/* Author card */}
      <div className='md:px-8 mx-auto flex w-full items-center justify-between mb-6'>

        <div className='flex items-center gap-2'>

          <div className='rounded-full w-10 h-10 border border-black overflow-hidden'>
            <img src="http://localhost:1337/uploads/breakingbad_7847fd15f1.jpeg" alt="avatar" className='object-cover w-full h-full' />
          </div>
          <div>
            <p className='text-xs font-bold text-primary'>Arya Stark</p>
            <p className='text-xs font-semibold text-slate-400'>Jan 13, 2002</p>
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
            <img src="https://c4.wallpaperflare.com/wallpaper/582/58/501/breaking-bad-walter-white-jesse-pinkman-wallpaper-preview.jpg" alt="breaking-bad" className='h-full w-full object-cover' />
          </div>

          <p className='text-neutral-700  text-xs text-center mt-2'>Breaking bad</p>

        </div>

        <p className='text-base leading-[26px] font-normal text-neutral-700 mb-4'>Dive deep into the critically acclaimed story of Walter White, the high-school chemistry teacher turned drug kingpin, and Jesse Pinkman, his troubled yet loyal partner. Explore the themes, characters, and unforgettable moments that made Breaking Bad a masterpiece.
        </p>

        <h2 className='mb-4 leading-5 md:text-2xl text-xl  text-neutral-900 font-semibold'>Character Bios</h2>
        <h3 className='mb-2 leading-5 text-neutral-900 font-semibold'>Walter White</h3>
        <p className='text-base leading-[26px] font-normal text-neutral-700 mb-4'>A brilliant but disillusioned high-school chemistry teacher who turns to cooking methamphetamine after being diagnosed with terminal cancer. His transformation into "Heisenberg" showcases a descent into moral ambiguity.</p>

        <h3 className='mb-2 leading-5 text-neutral-900 font-semibold'>Jesse Pinkman</h3>
        <p className='text-base leading-[26px] font-normal text-neutral-700 mb-4'> A former student of Walter White, Jesse becomes his partner in crime. Struggling with his past and a desire for redemption, Jesse adds depth to the narrative with his vulnerability.</p>

        <h3 className='mb-2 leading-5 text-neutral-900 font-semibold'>Saul Goodman</h3>
        <p className='text-base leading-[26px] font-normal text-neutral-700 mb-4'>A sleazy yet charming lawyer who knows how to work the system. His wit and resourcefulness bring levity to the intense storyline.</p>

      </div>

    </section>
  )
}

export default BlogDetails