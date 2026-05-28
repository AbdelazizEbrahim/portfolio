"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroTechLabels } from "@/lib/skills";

const ORBIT_DURATION = 22;
const orbitTransition = {
  duration: ORBIT_DURATION,
  repeat: Infinity,
  ease: "linear",
};

export default function HeroPhotoWithTech() {
  const count = heroTechLabels.length;

  return (
    <div
      className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] xl:w-[480px] xl:h-[480px] mx-auto xl:ml-auto xl:mr-0 shrink-0 overflow-visible
        [--orbit-r:118px] sm:[--orbit-r:132px] xl:[--orbit-r:178px] pb-14 sm:pb-0"
    >
      {/* Skills — rotate around portrait */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none hidden sm:block"
        animate={{ rotate: 360 }}
        transition={orbitTransition}
        aria-hidden
      >
        {heroTechLabels.map((label, i) => {
          const angle = (360 / count) * i;
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{
                transform: `rotate(${angle}deg) translateY(calc(-1 * var(--orbit-r)))`,
              }}
            >
              <motion.span
                animate={{ rotate: -360 }}
                transition={orbitTransition}
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap
                  px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium
                  bg-primary/95 border border-accent/50 text-accent shadow-lg"
              >
                {label}
              </motion.span>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.45, ease: "easeIn" } }}
        className="relative w-full h-full"
      >
        {/* Animated accent ring (original Photo style) */}
        <motion.svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] xl:w-[460px] xl:h-[460px] z-10"
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

        {/* Profile image — visible on mobile; circular frame on md+ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.35, duration: 0.45, ease: "easeInOut" },
          }}
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2
            w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] xl:w-[400px] xl:h-[400px]
            mix-blend-lighten max-sm:mix-blend-normal
            md:rounded-full md:overflow-hidden md:border-2 md:border-accent/60
            md:bg-primary/30 md:shadow-[0_0_48px_rgba(0,255,153,0.12)]"
        >
          <Image
            src="/my-image1.png"
            alt="Abdelaziz Ebrahim"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 240px, 400px"
            className="object-contain object-center mt-1 sm:mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Mobile: static skill chips below image (orbit hidden on xs) */}
      <div className="sm:hidden absolute -bottom-2 left-0 right-0 flex flex-wrap justify-center gap-1.5 z-30 px-1">
        {heroTechLabels.slice(0, 6).map((label) => (
          <span
            key={label}
            className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/90 border border-accent/40 text-accent"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
