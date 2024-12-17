import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const Hero = () => {
  return (
    <>
      <section>
        <div className='w-full justify-between flex md:flex-row flex-col md:items-center py-16 md:py-28'>
          <div className='w-full'>
            <h1 className='antialiased text-4xl font-bold mb-8'>Untitled Blog</h1>
            <div className='w-fit border border-ghost rounded-full overflow-hidden flex items-center'>
              <Input
                type="text"
                placeholder="Enter your Email"
                className='w-full bg-transparent focus-visible:ring-0 focus:outline-none border-none placeholder:text-xs placeholder:font-medium px-4 shadow-none' />

              <Button className='rounded-full'>Subscribe</Button>

            </div>
          </div>
          <div className='text-description font-medium text-xl'>
            <p>
              New product features, the latest in technologies, solutions & updates.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero