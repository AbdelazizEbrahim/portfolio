"use client";

import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

const Services = () => {
  return (
    <section className="mb-10 pt-0">
      <div className="container mx-auto">
        <header className="text-center xl:text-left mb-8 sm:mb-10 max-w-2xl mx-auto xl:mx-0">
          <p className="text-accent text-sm uppercase tracking-widest mb-2">
            Services
          </p>
          <h1 className="h1 text-white mb-4">What I build</h1>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Full-stack delivery for operators who need inventory, POS, finance,
            and real-time coordination in one platform—see{" "}
            <Link href="/work#enterprise" className="text-accent hover:underline">
              flagship work
            </Link>{" "}
            for live examples.
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-5 sm:gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div
                  className="text-4xl sm:text-5xl font-extrabold text-outline text-transparent
                    group-hover:text-outline-hover transition-all duration-500"
                >
                  {service.num}
                </div>
                  {service.href.startsWith("http") ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 sm:w-[70px] sm:h-[70px] rounded-full bg-white 
                        group-hover:bg-accent transition-all duration-500 flex
                        justify-center items-center hover:-rotate-45 shrink-0"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <BsArrowDownRight className="text-primary text-2xl sm:text-3xl" />
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="w-14 h-14 sm:w-[70px] sm:h-[70px] rounded-full bg-white 
                        group-hover:bg-accent transition-all duration-500 flex
                        justify-center items-center hover:-rotate-45 shrink-0"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <BsArrowDownRight className="text-primary text-2xl sm:text-3xl" />
                    </Link>
                  )}
              </div>
              <h2 className="text-2xl sm:text-[42px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
