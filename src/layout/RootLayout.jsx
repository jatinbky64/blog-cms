import React from 'react';
import Navbar from '@/components/CustomComponenets/Navbar';
import Footer from '@/components/CustomComponenets/Footer';
const RootLayout = ({ children }) => {
    return (
        <div className='relative'>
            <Navbar />
            <main className='md:px-16 sm:px-10 px-4'>
                {children}
            </main>
            <Footer />
        </div>
    );
};
export default RootLayout;
