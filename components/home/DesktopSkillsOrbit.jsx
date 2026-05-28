"use client";

import { heroTechLabels } from "@/lib/skills";

const ORBIT_RADIUS_PX = 248;

export default function DesktopSkillsOrbit() {
  const count = heroTechLabels.length;

  return (
    <div
      className="hidden xl:block absolute inset-0 z-30 pointer-events-none"
      aria-label="Technical skills"
    >
      {heroTechLabels.map((label, index) => {
        const deg = (360 / count) * index - 90;
        return (
          <div
            key={label}
            className="absolute left-1/2 top-1/2 flex h-0 w-0 items-center justify-center"
            style={{
              transform: `rotate(${deg}deg) translateY(-${ORBIT_RADIUS_PX}px)`,
            }}
          >
            <span
              className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap
                bg-primary/95 border border-accent/45 text-accent pointer-events-auto"
              style={{ transform: `rotate(${-deg}deg)` }}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
