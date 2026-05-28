"use client";

import CountUp from "react-countup";
import { landingStats } from "@/lib/projects";

export default function LandingStats() {
  return (
    <section className="pt-2 pb-10 xl:pt-4 xl:pb-12" aria-label="Statistics">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-5xl mx-auto xl:max-w-none">
          {landingStats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center xl:justify-start text-center xl:text-left p-4 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0"
            >
              <div className="flex items-baseline justify-center xl:justify-start">
                <CountUp
                  end={item.num}
                  duration={4}
                  delay={1.2}
                  className="text-3xl sm:text-4xl xl:text-6xl font-extrabold text-white"
                />
                {item.suffix && (
                  <span className="text-3xl sm:text-4xl xl:text-6xl font-extrabold text-accent">
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm leading-snug text-white/75 max-w-[140px] sm:max-w-[120px] xl:max-w-[150px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
