"use client";

import { flagshipProjects } from "@/lib/projects";
import ProjectShowcase from "./ProjectShowcase";

export default function FlagshipSection() {
  return (
    <section
      id="flagship"
      className="scroll-mt-28 py-10 sm:py-12 xl:py-16"
      aria-labelledby="flagship-title"
    >
      <div className="container mx-auto">
        <header className="mb-8 sm:mb-10 xl:mb-12 text-center xl:text-left">
          <p className="text-accent text-sm uppercase tracking-widest mb-2">
            Flagship work
          </p>
          <h2 id="flagship-title" className="h2 text-white">
            Enterprise platforms
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 max-w-2xl mx-auto xl:mx-0">
            Multi-tenant POS, pharmacy, and cafe systems—production deployments
            with real-time operations, RBAC, and Ethiopian market integrations.
          </p>
        </header>

        <ProjectShowcase projects={flagshipProjects} variant="flagship" />
      </div>
    </section>
  );
}
