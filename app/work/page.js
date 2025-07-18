"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import WorkSliderBtn from "../../components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "Full-stack",
    title: "CPRMS – Clinical Patient Record Management System",
    description:
      "A full-stack healthcare record management system with role-based access. Key features include patient registration, record tracking, appointment scheduling, secure server-side data handling, responsive UI, and built-in Next.js API routes for streamlined backend logic.",
    stack: [
      { name: "Next JS" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "ShadCN" },
    ],
    image: "/cprms.png",
    live: "https://cprms.vercel.app",
    github: "https://github.com/AbdelazizEbrahim/cprms",
  },
  {
    num: "02",
    category: "Full-stack",
    title: "Zikr App – Daily Islamic Remembrance Tracker",
    description:
      "A spiritual productivity app that helps users keep track of daily Adhkar (remembrances). Features include categorized Zikr sections, daily progress tracking, smooth user experience, and mobile-first responsive design. Built with Next.js App Router and dynamic UI components.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "ShadCN" },
    ],
    image: "/zikr.png",
    live: "https://my-zikr-app.vercel.app/",
    github: "https://github.com/AbdelazizEbrahim/zikr-app",
  },
  {
    num: "03",
    category: "Full-stack",
    title: "Food Ordering App",
    description:
      "A comprehensive food ordering platform featuring an integrated Chapa payment system, an admin dashboard for managing orders, and role-restricted access for secure user interactions.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "JavaScript" },
    ],
    image: "/foodordering.jpg",
    live: "https://amifabroast.vercel.app/",
    github: "https://github.com/AbdelazizEbrahim/food-ordering-app",
  },
  {
    num: "04",
    category: "Full-stack",
    title: "Agency Portfolio",
    description:
      "A modern portfolio website for showcasing agency services and publishing new blogs with a dedicated blog page. The admin oversees all operations with role-restricted access.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "TypeScript" },
    ],
    image: "/agency.png",
    live: "https://rihletiagency.vercel.app/",
    github: "https://github.com/AbdelazizEbrahim/agency-website",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Library Management System – Frontend",
    description:
      "A responsive frontend for a library management system built with Next.js and TypeScript. Features include dynamic book listings, category filtering, search functionality, and user-friendly navigation. Designed for integration with a full backend API for seamless user experience.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "ShadCN" },
    ],
    image: "/library-front.png",
    live: "https://library-front-nextjs.vercel.app/",
    github: "https://github.com/AbdelazizEbrahim/library_front_nextjs",
  },
  {
    num: "06",
    category: "Mobile",
    title: "Bahir Mart Mobile App",
    description:
      "A customer-facing mobile app for Bahir Mart. Key features include product ordering, auction bidding, order tracking, and integrated payment processing.",
    stack: [
      { name: "Dart" },
      { name: "Flutter" },
      { name: "Next JS (Backend)" },
    ],
    image: "/bahir mobile.png",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/bahirmart",
  },
  {
    num: "07",
    category: "Full-stack",
    title: "Bahir Mart Marketplace with Auction",
    description:
      "A marketplace and auction platform with location-based filtering. Key features include merchant verification, AI-powered fraud product detection, user management, dispute handling with refund system, delivery tracking, merchant stock management, real-time auction system, and an integrated system chatbot.",
    stack: [
      { name: "Next JS" },
      { name: "Socket.IO" },
      { name: "ShadCN" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
    image: "/Bahir Market photo.png",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/bahirmart-web",
  },
  {
    num: "08",
    category: "Full-stack",
    title: "Bahri Mart Admin",
    description:
      "An admin dashboard for managing a marketplace with auction support. Includes features like merchant verification, AI-based fraud product detection, user and merchant management, dispute and refund resolution, stock tracking, delivery status, chatbot integration, and auction supervision.",
    stack: [
      { name: "Next JS" },
      { name: "Socket.IO" },
      { name: "ShadCN" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
    image: "/Bahir admin.png",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/bahirmart-admin",
  },
  {
    num: "09",
    category: "Full-stack",
    title: "YumDrop – Food Delivery App",
    description:
      "A full-featured food delivery platform with multiple user roles: customers, restaurant owners, and delivery drivers. Core features include real bolsas de aire-time order tracking, role-based dashboards, Google OAuth via NextAuth, restaurant and menu management, customer reviews, and search/filter functionality.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "NextAuth.js" },
      { name: "TypeScript" },
      { name: "Zod" },
      { name: "ShadCN" },
    ],
    image: "/yum-drop.png",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/yum-drop-delivery",
  },
  {
    num: "10",
    category: "Full-stack",
    title: "Reddish – Reddit Clone",
    description:
      "A full-stack Reddit clone featuring community creation, post voting, nested comments, and user authentication. Includes moderation tools, Google OAuth via NextAuth, a rich post editor, and dark mode. Built for scalability with modern tech and responsive design.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "NextAuth.js" },
      { name: "TypeScript" },
      { name: "Zod" },
      { name: "ShadCN" },
    ],
    image: "/reddish.png",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/Reddish-clone",
  },
  {
    num: "11",
    category: "Full-stack",
    title: "E-Learning Platform",
    description:
      "A versatile e-learning platform with role-restricted access for three types of users: admin, student, and instructor. The admin has complete control over courses, users, and content.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "JavaScript" },
    ],
    image: "/e-learning.jpg",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/e-learning",
  },
  {
    num: "12",
    category: "Full-stack",
    title: "Job Board",
    description:
      "A job posting platform connecting employers and job seekers with real-time updates. Includes seamless authentication and secure user management powered by WorkOS.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "TypeScript" },
      { name: "WorkOS" },
    ],
    image: "/job.png",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/job-board",
  },
  {
    num: "13",
    category: "Full-stack",
    title: "Marketplace App",
    description:
      "An online marketplace where users can list products with owner contact information. Simple yet effective design, without payment integration.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "JavaScript" },
    ],
    image: "/marketplace.jpg",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/market-place",
  },
  {
    num: "14",
    category: "Front End",
    title: "Google Clone",
    description:
      "A dynamic clone of Google with a clean, responsive interface. This project demonstrates the ability to replicate Google’s core search functionality and design, making use of Next.js and Tailwind CSS.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
    ],
    image: "/google.jpg",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/google-clone",
  },
  {
    num: "15",
    category: "Front End",
    title: "IDMB Clone",
    description:
      "A replica of IMDb with an engaging UI to showcase movie listings, ratings, and reviews. It allows users to explore movies and TV shows, using Next.js and Tailwind CSS to build the layout.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "JavaScript" },
    ],
    image: "/idmb.jpg",
    live: "",
    github: "https://github.com/AbdelazizEbrahim/IDMb-clone",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 overflow-x-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project title */}
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.title}
              </h2>
              {/* Project description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/60"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project */}
                <Link href={project.live || "#"} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub Repo */}
                <Link href={project.github || "#"} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Swiper */}
          <div className="w-full xl:w-[50%] xl:max-w-[600px] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[460px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] w-full relative group overflow-hidden rounded-2xl">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    {/* Image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Slider Buttons */}
              <WorkSliderBtn
                containerStyles="absolute top-1/2 -translate-y-1/2 w-full px-4 z-30 flex justify-between"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
