import React, { useState } from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { Button } from '../ui/button';
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

// Hero icons
import {ChartBarIcon, XIcon} from '@heroicons/react/solid'


import { Link } from 'react-router-dom';
import { useEffect } from 'react';



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
                        <ChartBarIcon />
                    </Button>
                </DrawerTrigger>

                <DrawerContent className="rounded-none">
                    <div className="flex justify-between items-center px-4 py-2 border-b">
                        <div className="w-24">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/798px-Medium_%28website%29_logo.svg.png"
                                alt="Brand_logo"
                                loading='lazy'
                            />
                        </div>
                        <div>
                            <Button size="icon" variant="ghost" onClick={closeDrawer}>
                                <XIcon />
                            </Button>
                        </div>
                    </div>

                    <NavigationMenu className='min-w-full py-2 justify-start items-start block space-x-0'>

                            <NavigationMenuList className='flex-col w-full '>
                                        {/* Home */}
                                        <NavigationMenuItem onClick={closeDrawer} className='text-black   text-sm font-semibold  border-b w-full py-4 px-4 space-x-0'>
                                            <Link to={'/'}>Home</Link>
                                        </NavigationMenuItem>

                                        {/* Pricing */}
                                        <NavigationMenuItem onClick={closeDrawer} className='text-black   text-sm font-semibold border-b w-full py-4 px-4'>
                                            <Link to={'/'}>Pricing</Link>
                                        </NavigationMenuItem>

                              
                              {/* Auth */}
                              <NavigationMenuItem onClick={closeDrawer} className='text-black   text-sm font-semibold border-b w-full py-4 px-4'>
                                            <Link to={'/'}>Log in</Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem onClick={closeDrawer} className='text-black   text-sm font-semibold border-b w-full py-4 px-4'>
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
