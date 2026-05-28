"use client";

import { motion } from "framer-motion";
import { techStackGroups } from "@/lib/projects";

export default function TechStack() {
  return (
    <section
      className="py-12 xl:py-14 border-t border-white/10"
      aria-labelledby="tech-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8 xl:mb-10">
          <p className="text-accent text-sm uppercase tracking-widest mb-2">
            Stack
          </p>
          <h2 id="tech-heading" className="h2 text-white">
            Technologies I work with
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 max-w-5xl mx-auto">
          {techStackGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: groupIndex * 0.1, duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/15 text-white/85 bg-primary/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
