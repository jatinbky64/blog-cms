import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button';

// React icons
import { ArrowDownIcon} from '@heroicons/react/solid';


//hooks
import { useState, useEffect } from 'react';

// components
import MobileMenubar from './MobileMenubar';


import { Link } from 'react-router-dom';
const Navbar = () => {

  const categories_data = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
    },
  ]

  const [isActive, setIsActive] = useState(false)
  const [isSmallDevice, setIsSmallDevice] = useState(false)


  return (
    <>
      <NavigationMenu className='py-4 md:px-16 sm:px-10 px-4 max-w-full sm:border-none border-b sm:block hidden'>

        <div className='w-full'>
          {/* Desktop Menu */}
          <NavigationMenuList className='justify-between'>
            {/* Brand Name */}
            <div className='flex gap-10 justify-start items-center'>
              <NavigationMenuItem className='w-24'>
                <Link to={'/'}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/798px-Medium_%28website%29_logo.svg.png" 
                  loading='lazy'
                  alt="Brand_logo" />
                </Link>
              </NavigationMenuItem>

              <div className='flex gap-8 items-center'>
                {/* Home */}
                <NavigationMenuItem className='text-black   text-sm font-semibold min-w-fit'>
                  <Link to={'/'}>Home</Link>
                </NavigationMenuItem>
                {/* Products */}

                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger className='text-black text-sm font-semibold hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0 cursor-pointer flex items-center gap-1'>
                    <span>Products</span>
                    <span className='text-xl'><ArrowDownIcon /></span>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <ul className="flex flex-col gap-3 p-4 pl-4 pr-16 w-max">
                      {categories_data.map((component) => (
                        <li key={component.title} className=' text-xs '>
                          <Link to={component.href}>{component.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>


                {/* Resources */}
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger className='text-black text-sm font-semibold hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0 cursor-pointer flex items-center gap-1'>
                    <span>Resources</span>
                    <span className='text-xl'><ArrowDownIcon /></span>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <ul className="flex flex-col gap-3 p-4 pl-4 pr-16 w-max">
                      {categories_data.map((component) => (
                        <li key={component.title} className=' text-xs '>
                          <Link to={component.href}>{component.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>

                {/* Pricing */}
                <NavigationMenuItem className='text-black   text-sm font-semibold min-w-fit'>
                  <Link to={'/'}>Pricing</Link>
                </NavigationMenuItem>
              </div>
            </div>

            <div className='flex gap-2'>
              <NavigationMenuItem>
                <Button className='bg-transparent text-primary shadow-none  hover:text-accent rounded-2xl text-sm font-semibold'>Log in</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className='shadow-none text-accent rounded-2xl text-sm font-semibold'>Sign up</Button>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </div>
      </NavigationMenu>



      <div className='sm:hidden block py-4 md:px-16 sm:px-10 px-4 max-w-full sm:border-none border-b'>
        <MobileMenubar />
      </div>
    </>
  )
}

export default Navbar