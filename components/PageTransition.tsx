'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode='wait'>
            <div key={pathname} className='relative'>
                <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                    }}
                    exit={{ opacity: 1 }} 
                    className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
                />
                {/* Render the children after the transition */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1,  duration: 0.8, ease: "easeInOut" }
                    }}
                    exit={{ opacity: 0 }} 
                >
                    {children}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;
