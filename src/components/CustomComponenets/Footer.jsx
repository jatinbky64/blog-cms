import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 mt-16 px-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-left">
          {/* Explicit dimensions for the logo */}
          <div className="mb-4 w-24 h-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/798px-Medium_%28website%29_logo.svg.png"
              alt="Brand_logo"
              loading="lazy"
              width="96" /* Set explicit width */
              height="32" /* Set explicit height */
              className="filter invert brightness-200 contrast-150"
            />
          </div>
          <p className="text-sm">© GreyCampus Edutech Private Limited. All rights reserved</p>
        </div>
  
        {/* Link section */}
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
