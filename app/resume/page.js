"use client";

import React from "react";
import { experiences } from "@/lib/experiences";
import { skillList } from "@/lib/skills";

// about data
const about = {
  title: "About Me",
  description:
    "I am Abdelaziz Ebrahim, a full-stack engineer focused on multi-tenant business platforms for retail, pharmacy, and restaurant operations. I ship production systems with PostgreSQL, real-time workflows, RBAC, and Ethiopian market integrations (payments, bilingual UI, dual calendar).",
  info: [
    {
      icon: "user-circle",
      fieldName: "Name",
      fieldValue: "Abdelaziz Ebrahim",
    },
    {
      icon: "phone",
      fieldName: "Phone",
      fieldValue: "+251 975 80 5980",
    },
    {
      icon: "code",
      fieldName: "Experience",
      fieldValue: "Full-stack · Enterprise apps",
    },
    {
      icon: "flag",
      fieldName: "Nationality",
      fieldValue: "Ethiopian",
    },
    {
      icon: "briefcase",
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      icon: "globe",
      fieldName: "Language",
      fieldValue: "Amharic, English, Arabic (Basic)",
    },
    {
      icon: "envelope",
      fieldName: "Email",
      fieldValue: "abdelazizebrahim5980@gmail.com",
    },
  ],
};

const experienceSection = {
  title: "Experience timeline",
  description:
    "Full-stack roles across enterprise SaaS, e-commerce, healthcare, and e-learning—shipping production APIs, dashboards, and integrations.",
};

const education = {
  icon: "graduation-cap",
  title: "My Education",
  description:
    "I believe in continuous learning and have pursued various formal and online educational opportunities to improve my skills.",
  items: [
    {
      institution: "Bahir Dar University",
      degree: "Computer Science Degree",
      duration: "2022 - 2025",
    },
    {
      institution: "Simpli Learn",
      degree: "Data Structure And Algorithm",
      duration: "2024",
    },
    {
      institution: "Simpli Learn",
      degree: "Javascript",
      duration: "2025",
    },
    {
      institution: "Simpli Learn",
      degree: "Advanced C++",
      duration: "2025",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Front-end and back-end stack for enterprise web apps, POS/inventory systems, e-commerce, and healthcare platforms.",
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import EnterprisePlatformsTab from "@/components/resume/EnterprisePlatformsTab";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-start xl:items-center justify-center pt-0 pb-8 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="enterprise"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="enterprise">Enterprise platforms</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="enterprise" className="w-full">
              <EnterprisePlatformsTab />
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="mb-8 flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experienceSection.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experienceSection.description}
                </p>
                <ScrollArea className="h-[min(520px,70vh)]">
                  <ul className="grid grid-cols-1 gap-5 pr-4">
                    {experiences.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-6 sm:px-8 rounded-xl flex flex-col gap-3 text-center lg:text-left"
                      >
                        <span className="text-accent text-sm">{item.duration}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {item.position}
                        </h3>
                        <p className="text-white/60 text-sm">{item.company}</p>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        {item.links?.length > 0 && (
                          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {item.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent text-sm hover:underline min-h-[40px] inline-flex items-center"
                              >
                                {link.label} →
                              </a>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left  mb-12">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                           flex flex-col justify-center items-center lg:items-start gap-1
                           ">
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px] 
                             text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] mb-8 ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-5">
                  {skillList.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[120px] sm:h-[140px] bg-[#232329]
                              rounded-xl flex justify-center items-center group">
                              <div className="text-4xl sm:text-5xl group-hover:text-accent transition-all duration-300">
                                <Icon />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left">
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
                        className="flex items-center justify-center xl:justify-start gap-2">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
