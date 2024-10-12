'use client'

import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dicta, delectus debitis ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abdelaziz Ebrahim"
    },
    {
      fieldName: "Phone",
      fieldValue: "+251 975 80 5980"
    },
    {
      fieldName: "Experience",
      fieldValue: "Begginer"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ethiopian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Amharic, Arabic(Basic)"
    },
    {
      fieldName: "Email",
      fieldValue: "abdelazizebrahim5980@gmail.com"
    },
  ]
  
}

const experiences = {
  icon: "",
  title: "My Experiences",
  description: 
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut quae,adipisci soluta odit excepturi facilis",
  items: [
    {
      company: "Ibex Technology and Promotion",
      position: "Full-stack developer Intern",
      duration: "2024 July - 2024 October",
    },
    {
      company: "Ibex Technology and Promotion",
      position: "Full-stack developer Intern",
      duration: "2024 July - 2024 October",
    },
    {
      company: "Ibex Technology and Promotion",
      position: "Full-stack developer Intern",
      duration: "2024 July - 2024 October",
    },
    {
      company: "Ibex Technology and Promotion",
      position: "Full-stack developer Intern",
      duration: "2024 July - 2024 October",
    },
    {
      company: "Ibex Technology and Promotion",
      position: "Full-stack developer Intern",
      duration: "2024 July - 2024 October",
    }
  ]
}

const education = {
  icon: "",
  title: "My Education",
  description: 
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut quae,adipisci soluta odit excepturi facilis",
  items: [
    {
      institution: "Bahir Dar University ",
      degree: "Computer Science Degree (Expected)",
      duration: "2022 - 2025 ",
    },
    {
      institution: "Free Codecamp ",
      degree: "Data Structure and Algorithm",
      duration: "2024",
    },
    {
      institution: "Udacity ",
      degree: "Fundamentals of Programming ",
      duration: "2024",
    },
    {
      institution: "Udacity ",
      degree: "Fundamentals of Android Development",
      duration: "2024",
    },
    
  ]
}

const skills = {
  title: "My Skills",
  description: 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut quae,adipisci soluta odit excepturi facilis",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html-5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <FaFigma/>,
      name: "figma",
    },
  ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
      <motion.div
         initial={{ opacity: 0}}
         animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
         }}
         className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
       >
        <div className='container mx-auto'>
          <Tabs 
              defaultValue='experience' 
              className='flex flex-col xl:flex-row gap-[60px]'
          >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experiences */}
            <TabsContent value="experience" className="w-full">
              <div className='mb-8 flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{experiences.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {experiences.description}
                 </p>
                 <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experiences.items.map((item, index) => {
                      return (
                        <li 
                           key={index}
                           className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                           flex flex-col justify-center items-center lg:items-start gap-1
                           '
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] 
                             text-center lg:text-left'>
                             {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                 </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left  mb-12'>
                  <h3 className='text-4xl font-bold'>{education.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {education.description}
                 </p>
                 <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li 
                           key={index}
                           className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                           flex flex-col justify-center items-center lg:items-start gap-1
                           '
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] 
                             text-center lg:text-left'>
                             {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                 </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className='flex flex-col gap-[30px] mb-8 '>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                     {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
                   xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329]
                              rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-auto">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-2"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
          </Tabs>
        </div>
        
      </motion.div>
  )
  
}

export default Resume
