'use client'

import React from 'react'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: '01',
    title: "Front End Development",
    description: `Get started with modern front-end development using Next.js, Tailwind CSS, and shadcn/ui. 
                  Learn how to build responsive, fast, and visually appealing interfaces with tools designed for developers of all levels.`,
    href: "/work"
  },
  {
    num: '02',
    title: "Back End Development",
    description: `Dive into back-end development with Next.js SSR and Node.js. 
                  Understand server-side rendering, APIs, and integrating MongoDB and PostgreSQL as your databases for creating scalable and dynamic applications.`,
    href: "/work"
  },  
  {
    num: '03',
    title: "Content Creation",
    description: `Begin your journey into content creation with hands-on guidance. 
                  Explore tools and techniques to design and manage engaging content, perfect for someone just getting started.`,
    href: "/work"
  },
];


import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className='mb-10'>
      <div className='container mx-auto'>
        <motion.div
           initial={{ opacity: 0}}
           animate={{
            opacity: 1, 
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
           }}
           className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div 
                 key={index}
                 className='flex-1 flex flex-col justify-center gap-6 group'>
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent
                    group-hover:text-outline-hover transition-all duration-500'>
                     {service.num}
                  </div>
                  <Link
                      href={service.href}
                      className='w-[70px] h-[70px] rounded-full bg-white 
                      group-hover:bg-accent transition-all duration-500 flex
                      justify-center items-center hover:-rotate-45'
                  >
                     <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                {/* title */}
                <h2 className='text-[42px] font-bold leading-none text-white
                  group-hover:text-accent transition-all duration-500'>
                    {service.title}
                  </h2>
                {/* description */}
                <p className='text-white/60'>{service.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
