"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { heroContent } from "@/lib/projects";

const socialIconStyles =
  "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500";

export default function HeroSection() {
  return (
    <section className="mb-10 xl:mb-16">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-12 xl:pt-8 xl:pb-8">
          <div className="w-full text-center xl:text-left order-2 xl:order-none">
            <p className="text-accent text-sm sm:text-base font-medium tracking-wide uppercase mb-3 xl:mb-4 mt-4 xl:mt-0">
              {heroContent.role}
            </p>
            <h1 className="h1 mb-4 xl:mb-6">
              <span className="block text-white/90 text-[28px] sm:text-[36px] xl:text-[48px] font-medium leading-tight mb-1">
                Hello, I&apos;m
              </span>
              <span className="text-accent block">Abdelaziz Ebrahim</span>
            </h1>
            <p className="text-lg sm:text-xl text-white font-semibold max-w-[540px] mx-auto xl:mx-0 mb-4 leading-snug">
              {heroContent.headline}
            </p>
            <p className="max-w-[540px] mx-auto xl:mx-0 mb-8 text-white/70 text-sm sm:text-base leading-relaxed">
              {heroContent.intro}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center xl:justify-start gap-4 sm:gap-5 mb-8 xl:mb-0">
              <Link href="/work#flagship" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto uppercase flex items-center justify-center gap-2"
                >
                  <span>View flagship work</span>
                  <FiArrowRight className="text-lg" />
                </Button>
              </Link>
              <a
                href="/Abdelaziz Ebrahim CV.pdf"
                download="Abdelaziz Ebrahim CV"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto uppercase flex items-center justify-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>
            </div>

            <div className="flex justify-center xl:justify-start">
              <Socials
                containerStyles="flex gap-5 sm:gap-6"
                iconStyles={socialIconStyles}
              />
            </div>
          </div>

          <div className="order-1 xl:order-none w-full flex justify-center xl:justify-end shrink-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
