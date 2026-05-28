"use client";

import { skillList } from "@/lib/skills";

export default function MobileSkillsMarquee() {
  const labels = skillList.map((s) => s.name);
  const loop = [...labels, ...labels];

  return (
    <div
      className="xl:hidden w-full overflow-hidden mt-4 -mx-1"
      aria-label="Technical skills"
    >
      <div className="skills-marquee-mask relative">
        <div className="skills-marquee-track flex w-max items-center gap-3 py-1">
          {loop.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium
                bg-primary/95 border border-accent/45 text-accent whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
