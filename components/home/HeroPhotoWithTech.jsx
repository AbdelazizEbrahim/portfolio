"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroTechLabels } from "@/lib/skills";

const ORBIT_POSITIONS = [
  "top-0 left-1/2 -translate-x-1/2 -translate-y-1",
  "top-[12%] right-0 translate-x-1",
  "top-1/2 right-0 translate-x-2 -translate-y-1/2",
  "bottom-[12%] right-0 translate-x-1",
  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1",
  "bottom-[12%] left-0 -translate-x-1",
  "top-1/2 left-0 -translate-x-2 -translate-y-1/2",
  "top-[12%] left-0 -translate-x-1",
];

export default function HeroPhotoWithTech() {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[340px] xl:max-w-[400px] aspect-square mx-auto xl:mx-0 xl:ml-auto shrink-0">
      {/* Tech labels around circle */}
      {heroTechLabels.map((label, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2 + i * 0.06, duration: 0.35 }}
          className={`absolute z-20 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium
            bg-primary/90 border border-accent/40 text-accent whitespace-nowrap shadow-lg ${ORBIT_POSITIONS[i]}`}
        >
          {label}
        </motion.span>
      ))}

      {/* Animated ring */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="transparent"
        aria-hidden
      >
        <motion.circle
          cx="200"
          cy="200"
          r="188"
          stroke="#00ff99"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ transformOrigin: "center" }}
        />
      </motion.svg>

      {/* Profile image — circular */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.45 } }}
        className="absolute inset-[10%] rounded-full overflow-hidden border-2 border-accent/60 bg-primary shadow-[0_0_40px_rgba(0,255,153,0.15)]"
      >
        <Image
          src="/my-image1.png"
          alt="Abdelaziz Ebrahim"
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 280px, 360px"
          className="object-cover object-top"
        />
      </motion.div>
    </div>
  );
}
