import React, { useState } from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { Button } from '../ui/button';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
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
// React icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';



const MobileMenubar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

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

    return (
        <>
            <Drawer
                open={isOpen}
                onOpenChange={setIsOpen}
                direction="left"
                dismissible={false}
            >
                <DrawerTrigger asChild>
                    <Button size="icon" onClick={toggleDrawer}>
                        <RxHamburgerMenu />
                    </Button>
                </DrawerTrigger>

                <DrawerContent className="rounded-none">
                    <div className="flex justify-between items-center px-4 py-2 border-b">
                        <div className="w-24">
                            <img
                                src="https://www.greycampus.com/hubfs/GreyCampus/icons/gc-logo.svg"
                                alt="Brand_logo"
                                loading='lazy'
                            />
                        </div>
                        <div>
                            <Button size="icon" variant="ghost" onClick={closeDrawer}>
                                <MdClose />
                            </Button>
                        </div>
                    </div>

                    <NavigationMenu className='min-w-full py-2 justify-start items-start block space-x-0'>

                            <NavigationMenuList className='flex-col w-full '>
                                        {/* Home */}
                                        <NavigationMenuItem className='text-black  hover:text-blue-400 text-sm font-semibold  border-b w-full py-4 px-4 space-x-0'>
                                            <Link to={'/'}>Home</Link>
                                        </NavigationMenuItem>
                                        {/* Products */}

                                        <HoverCard openDelay={0} closeDelay={0} className='space-x-0'>
                                            <HoverCardTrigger className='text-black  data-[state=open]:text-blue-400 text-sm font-semibold hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0 cursor-pointer flex items-center gap-1 border-b w-full py-4 px-4 justify-between'>
                                                <span>Products</span>
                                                <span className='text-xl'><MdOutlineKeyboardArrowDown /></span>
                                            </HoverCardTrigger>
                                            <HoverCardContent>
                                                <ul className="flex flex-col gap-3 p-4 pl-4 pr-16 w-max">
                                                    {categories_data.map((component) => (
                                                        <li key={component.title} className='hover:text-blue-400 text-xs '>
                                                            <Link to={component.href}>{component.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </HoverCardContent>
                                        </HoverCard>


                                        {/* Resources */}
                                        <HoverCard openDelay={0} closeDelay={0}>
                                            <HoverCardTrigger className='text-black  data-[state=open]:text-blue-400 text-sm font-semibold hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0 cursor-pointer flex items-center gap-1 border-b w-full py-4 px-4 justify-between'>
                                                <span>Resources</span>
                                                <span className='text-xl'><MdOutlineKeyboardArrowDown /></span>
                                            </HoverCardTrigger>
                                            <HoverCardContent>
                                                <ul className="flex flex-col gap-3 p-4 pl-4 pr-16 w-max">
                                                    {categories_data.map((component) => (
                                                        <li key={component.title} className='hover:text-blue-400 text-xs '>
                                                            <Link to={component.href}>{component.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </HoverCardContent>
                                        </HoverCard>

                                        {/* Pricing */}
                                        <NavigationMenuItem className='text-black  hover:text-blue-400 text-sm font-semibold border-b w-full py-4 px-4'>
                                            <Link to={'/'}>Pricing</Link>
                                        </NavigationMenuItem>

                              
                              {/* Auth */}
                              <NavigationMenuItem className='text-black  hover:text-blue-400 text-sm font-semibold border-b w-full py-4 px-4'>
                                            <Link to={'/'}>Log in</Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem className='text-black  hover:text-blue-400 text-sm font-semibold border-b w-full py-4 px-4'>
                                            <Link to={'/'}>Sign up</Link>
                                        </NavigationMenuItem>
                            </NavigationMenuList>
                    </NavigationMenu>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MobileMenubar;
