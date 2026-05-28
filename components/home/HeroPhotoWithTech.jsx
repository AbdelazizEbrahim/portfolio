"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DesktopSkillsOrbit from "./DesktopSkillsOrbit";
import MobileSkillsMarquee from "./MobileSkillsMarquee";

export default function HeroPhotoWithTech() {
  return (
    <div className="flex flex-col items-center xl:items-end w-full xl:w-auto">
      <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] xl:w-[480px] xl:h-[480px] mx-auto xl:ml-auto xl:mr-0 shrink-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.45, ease: "easeIn" } }}
          className="relative w-full h-full"
        >
          <motion.svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
              w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] xl:w-[460px] xl:h-[460px]"
            viewBox="0 0 506 506"
            fill="transparent"
            aria-hidden
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ transformOrigin: "center center" }}
            />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.3, duration: 0.45, ease: "easeInOut" },
            }}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2
              w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] xl:w-[400px] xl:h-[400px]
              mix-blend-lighten max-xl:mix-blend-normal
              xl:rounded-full xl:overflow-hidden xl:border-2 xl:border-accent/60
              xl:bg-primary/30 xl:shadow-[0_0_48px_rgba(0,255,153,0.12)]"
          >
            <Image
              src="/my-image1.png"
              alt="Abdelaziz Ebrahim"
              fill
              priority
              quality={100}
              sizes="(max-width: 1280px) 200px, 400px"
              className="object-contain object-center"
            />
          </motion.div>

          <DesktopSkillsOrbit />
        </motion.div>
      </div>

      <MobileSkillsMarquee />
    </div>
  );
}
