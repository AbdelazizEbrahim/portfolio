"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Socials from "@/components/Socials";
import HeroPhotoWithTech from "./HeroPhotoWithTech";
import { heroContent } from "@/lib/projects";

const socialIconStyles =
  "w-9 h-9 sm:w-11 sm:h-11 border border-accent rounded-full flex justify-center items-center text-accent text-sm sm:text-base hover:bg-accent hover:text-primary transition-all duration-500";

export default function HeroSection() {
  return (
    <section className="mb-6 sm:mb-10 xl:mb-16 overflow-hidden -mt-1 xl:mt-0">
      <div className="container mx-auto max-w-full">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-3 sm:gap-8 xl:gap-12 xl:pt-8 xl:pb-8">
          {/* Photo first on mobile */}
          <div className="order-1 xl:order-2 w-full xl:w-auto flex justify-center xl:justify-end shrink-0">
            <HeroPhotoWithTech />
          </div>

          <div className="w-full min-w-0 text-center xl:text-left order-2 xl:order-1 xl:flex-1 -mt-1 xl:mt-0">
            <p className="text-accent text-xs sm:text-sm xl:text-base font-medium tracking-wide uppercase mb-1.5 xl:mb-4">
              {heroContent.role}
            </p>
            <h1 className="mb-2 sm:mb-4 xl:mb-6">
              <span className="block text-white/90 text-[24px] sm:text-[36px] xl:text-[48px] font-medium leading-tight mb-0.5">
                Hello, I&apos;m
              </span>
              <span className="text-accent block text-[26px] sm:text-[40px] xl:text-[68px] font-semibold leading-tight">
                Abdelaziz Ebrahim
              </span>
            </h1>
            <p className="text-base sm:text-lg xl:text-xl text-white font-semibold max-w-[540px] mx-auto xl:mx-0 mb-2 sm:mb-4 leading-snug">
              {heroContent.headline}
            </p>
            <p className="max-w-[540px] mx-auto xl:mx-0 mb-4 sm:mb-6 xl:mb-8 text-white/70 text-xs sm:text-sm xl:text-base leading-relaxed line-clamp-4 sm:line-clamp-none">
              {heroContent.intro}
            </p>

            <div className="flex flex-col items-center xl:items-start gap-3 sm:gap-4 xl:gap-5 max-w-lg mx-auto xl:mx-0 xl:max-w-none">
              <Link href="/work#enterprise" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-11 sm:h-12 xl:h-12 uppercase flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <span>View flagship work</span>
                  <FiArrowRight className="text-lg" />
                </Button>
              </Link>

              {/* Mobile: CV then socials in one row below */}
              <div className="flex w-full flex-col items-center gap-3 xl:hidden">
                <a
                  href="/Abdelaziz Ebrahim CV.pdf"
                  download="Abdelaziz Ebrahim CV"
                  className="w-full max-w-[280px]"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-11 sm:h-12 uppercase flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <span>Download CV</span>
                    <FiDownload />
                  </Button>
                </a>
                <Socials
                  containerStyles="flex flex-row items-center justify-center gap-3 w-full flex-nowrap"
                  iconStyles={socialIconStyles}
                />
              </div>

              {/* Desktop: CV + socials same row */}
              <div className="hidden xl:flex flex-row items-center gap-4">
                <a
                  href="/Abdelaziz Ebrahim CV.pdf"
                  download="Abdelaziz Ebrahim CV"
                  className="shrink-0"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 uppercase flex items-center justify-center gap-2 whitespace-nowrap text-sm"
                  >
                    <span>Download CV</span>
                    <FiDownload />
                  </Button>
                </a>
                <Socials
                  containerStyles="flex items-center gap-4 shrink-0"
                  iconStyles={socialIconStyles}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
