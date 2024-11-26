'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='w-full h-full relative overflow-x-hidden '> {/* Added overflow-hidden here */}
        <motion.div
           initial={{opacity: 0}}
           animate={{
            opacity:1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn"},
           }}
        >
            {/* image */}
            <motion.div 
                initial={{opacity: 0}}
                animate={{
                 opacity:1,
                 transition: { delay: 2.4, duration: 0.4, ease: "easeInOut"},
                }}
                className='xl:w-[440px] xl:h-[440px] 
                mix-blend-lighten absolute w-[280px] h-[280px] overflow-hidden ml-8'>
                <Image 
                   src='/my-image.png'
                   priority
                   quality={100}
                   fill
                   alt=""
                   className='object-contain mt-2 '
                />
            </motion.div>
            {/* circle */}
            <motion.svg
               className="w-[300px] xl:w-[460px] h-[300px] xl:h-[460px] ml-5 mt-3"
               fill="transparent"
               viewBox="0 0 506 506" 
               xmlns="https://www.w3.org/2000/svg" 
            >
              <motion.circle 
                 cx='253'
                 cy="253"
                 r="250"
                 stroke="#00ff99"
                 strokeWidth="4"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 initial={{strokeDasharray: "24 10 0 0"}}
                 animate={{
                    strokeDasharray: ["15 120 25 25 ", "16 25 92 72", "4 250 22 22"],
                    rotate: [0, 360],
                    transformOrigin: "center center",
                 }}
                 transition={{
                    duration: 20, 
                    repeat: Infinity,
                    repeatType: "reverse"
                 }}
              />
            </motion.svg>
        </motion.div>     
    </div>
  )
}

export default Photo
