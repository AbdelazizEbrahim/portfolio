'use client'

import { motion } from "framer-motion";
import React, { useState } from "react"

import { Swiper, SwiperSlide }  from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import WorkSliderBtn from "../../components/WorkSliderBtn"


const projects = [
  {
    num: "01",
    category: "Full-stack",
    title: "Food Ordering App",
    description: "A comprehensive food ordering platform featuring an integrated Chapa payment system, an admin dashboard for managing orders, and role-restricted access for secure user interactions.",
    stack: [{name: "Next JS"}, {name: "Tailwind CSS"}, {name: "MongoDB"}, {name: "JavaScript"}],
    image: "/foodordering.jpg",
    live: "https://amifabroast.vercel.app/",
    github: "https://github.com/AbdelazizEbrahim/food-ordering-app",
  },
  {
    num: "02",
    category: "Full-stack",
    title: "Agency Portfolio",
    description: "A modern portfolio website for showcasing agency services and publishing new blogs with a dedicated blog page. The admin oversees all operations with role-restricted access.",
    stack: [{name: "Next JS"}, {name: "Tailwind CSS"}, {name: "MongoDB"}, {name: "TypeScript"}],
    image: "/agency.png",
    live: "https://rihletiagency.vercel.app/",
    github: "https://github.com/AbdelazizEbrahim/agency-website",
  },
  {
    num: "03",
    category: "Full-stack",
    title: "E-Learning Platform",
    description: "A versatile e-learning platform with role-restricted access for three types of users: admin, student, and instructor. The admin has complete control over courses, users, and content.",
    stack: [{name: "Next JS"}, {name: "Tailwind CSS"}, {name: "MongoDB"}, {name: "JavaScript"}],
    image: "/e-learning.jpg",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/e-learning",
  },
  {
    num: "04",
    category: "Full-stack",
    title: "Job Board",
    description: "A job posting platform connecting employers and job seekers with real-time updates. Includes seamless authentication and secure user management powered by WorkOS.",
    stack: [{name: "Next JS"}, {name: "Tailwind CSS"}, {name: "MongoDB"}, {name: "TypeScript"}, {name: "WorkOS"}],
    image: "/job.png",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/job-board",
  },
  {
    num: "05",
    category: "Full-stack",
    title: "Marketplace App",
    description: "An online marketplace where users can list products with owner contact information. Simple yet effective design, without payment integration.",
    stack: [{name: "Next JS"}, {name: "Tailwind CSS"}, {name: "MongoDB"}, {name: "JavaScript"}],
    image: "/marketplace.jpg",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/market-place",
  },
  {
    num: "06",
    category: "Front End",
    title: "Google Clone",
    description: "A dynamic clone of Google with a clean, responsive interface. This project demonstrates the ability to replicate Google’s core search functionality and design, making use of Next.js and Tailwind CSS.",
    stack: [{name: "Next JS"}, {name: "Tailwind CSS"}, {name: "JavaScript"}],
    image: "/google.jpg",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/google-clone",
},

{
    num: "07",
    category: "Front End",
    title: "IDMB Clone",
    description: "A replica of IMDb with an engaging UI to showcase movie listings, ratings, and reviews. It allows users to explore movies and TV shows, using Next.js and Tailwind CSS to build the layout.",
    stack: [{name: "Next JS"}, {name: "Tailwind CSS"}, {name: "MongoDB"}, {name: "JavaScript"}],
    image: "/idmb.jpg",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/IDMb-clone",
},
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    console.log("new slider: ", swiper)
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}, 
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
             xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* project category */}
                <h2 className="text-[42px] font-bold leading-none text-white 
                   group-hover:text-accent transition-all duration-500 capitalize">
                    {project.title}
                </h2>
                {/* project description */}
                <p className="text-white/60">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    )
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/60"></div>
                {/* button */}
                <div className="flex items-center gap-4">
                  {/* live project */}
                  <Link href={project.live}>
                     <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                             bg-white/5 flex justify-center items-center group">
                              <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                     </TooltipProvider>
                  </Link>
                  {/* github repo */}
                  <Link href={project.github}>
                     <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                             bg-white/5 flex justify-center items-center group">
                              <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github repository</p>
                          </TooltipContent>
                        </Tooltip>
                     </TooltipProvider>
                  </Link>
                </div>
              </div>
          </div>
          
          <div className="w-full xl:w-[50%]">
            <Swiper 
                 spaceBetween={30}
                 slidesPerView={1}
                 className="xl:h-[520] mb-12"
                 onSlideChange={handleSlideChange} 
              >
              {projects.map((project, index) => {
                return (
                   <SwiperSlide key={index} className="w-full ">
                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                          {/* overlay */}
                          <div className="absolute top-0 bottom-0 w-full h-full bg-black"></div>
                          {/* image */}
                          <div className="relative w-full h-full ">
                            <Image 
                                src={project.image} 
                                alt="" 
                                fill 
                                className="object-cover"/>
                          </div>
                        </div>
                   </SwiperSlide>
                   )                    
              })}
              <WorkSliderBtn 
                    containerStyles="flex gap-2 absolute right-0 
                        bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 
                        w-full justify-between xl:w-max xl:justify-none" 
                    btnStyles="bg-accent hover:bg-accent-hover text-primary 
                        text-[22px] w-[44px] h-[44px] flex justify-center 
                        items-center transition-all "/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work


