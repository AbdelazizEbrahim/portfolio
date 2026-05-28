"use client";

import { enterpriseProjects } from "@/lib/projects";
import ProjectShowcase from "./ProjectShowcase";

export default function EnterpriseSection() {
  return (
    <section
      id="enterprise"
      className="scroll-mt-24 pt-0 pb-8 sm:pb-10 xl:pb-14"
      aria-labelledby="enterprise-title"
    >
      <div className="container mx-auto">
        <header className="mb-6 sm:mb-8 xl:mb-10 text-center xl:text-left">
          <p className="text-accent text-sm uppercase tracking-widest mb-2">
            Enterprise platforms
          </p>
          <h2 id="enterprise-title" className="h2 text-white">
            Selected work
          </h2>
        </header>

        <ProjectShowcase projects={enterpriseProjects} variant="flagship" />
      </div>
    </section>
  );
}
