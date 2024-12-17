import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-10 mt-16 px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left">
            <div className='mb-4 w-24'>
            <img src="https://www.greycampus.com/hubfs/GreyCampus/icons/gc-logo.svg" alt="Brand_logo" className='filter grayscale brightness-[10]' />

            </div>
            <p className="text-sm">© GreyCampus Edutech Private Limited. All rights reserved</p>
          </div>

          <div className="flex space-x-8 mt-6 sm:mt-0">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
