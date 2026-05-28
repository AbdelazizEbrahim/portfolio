"use client";

import { moreProjects } from "@/lib/projects";
import ProjectShowcase from "./ProjectShowcase";

export default function MoreProjectsSection() {
  return (
    <section
      id="more-projects"
      className="scroll-mt-28 py-10 sm:py-12 xl:py-16 border-t border-white/10"
      aria-labelledby="more-projects-title"
    >
      <div className="container mx-auto">
        <header className="mb-8 sm:mb-10 text-center xl:text-left">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-2">
            More work
          </p>
          <h2 id="more-projects-title" className="h2 text-white/90">
            Additional projects
          </h2>
          <p className="text-white/50 text-sm sm:text-base mt-3 max-w-xl mx-auto xl:mx-0">
            Healthcare, document workflows, and marketplace applications.
          </p>
        </header>

        <div className="opacity-95">
          <ProjectShowcase projects={moreProjects} variant="secondary" />
        </div>
      </div>
    </section>
  );
}
