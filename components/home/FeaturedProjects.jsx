"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { flagshipProjects } from "@/lib/projects";
import ProjectCoverImage from "@/components/project/ProjectCoverImage";

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function FeaturedProjects() {
  return (
    <section
      id="flagship-work"
      className="py-12 xl:py-16 border-t border-white/10"
      aria-labelledby="flagship-heading"
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 xl:mb-10">
          <div className="text-center sm:text-left">
            <p className="text-accent text-sm uppercase tracking-widest mb-2">
              Flagship work
            </p>
            <h2 id="flagship-heading" className="h2 text-white">
              Enterprise platforms
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl mx-auto sm:mx-0">
              Multi-tenant POS, pharmacy, and cafe systems—live demos below.
            </p>
          </div>
          <Link
            href="/work#flagship"
            className="text-accent hover:text-accent-hover text-sm font-medium flex items-center justify-center sm:justify-end gap-1 transition-colors"
          >
            All projects
            <FiArrowUpRight />
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {flagshipProjects.map((project, index) => (
            <motion.li
              key={project.slug}
              {...cardMotion}
              transition={{ delay: 0.15 * index, duration: 0.45, ease: "easeOut" }}
              className="flex"
            >
              <article className="flex flex-col w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-accent/40 transition-colors duration-300">
                <div className="relative aspect-[16/10] w-full bg-primary/50">
                  <ProjectCoverImage
                    slug={project.slug}
                    preferredSrc={project.coverSrc}
                    legacyImage={project.legacyImage}
                    alt={`${project.title} screenshot`}
                    priority={index === 0}
                  />
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wide bg-accent text-primary">
                    Live
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white capitalize">
                      {project.title}
                    </h3>
                    <p className="text-accent/90 text-sm font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="text-[11px] sm:text-xs px-2 py-1 rounded-md bg-white/5 text-white/80 border border-white/10"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                    <a
                      href={project.liveUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-full bg-accent text-primary text-sm font-semibold hover:bg-accent-hover transition-colors"
                    >
                      <FiExternalLink className="text-base shrink-0" />
                      Live demo
                    </a>
                    <Link
                      href="/work#flagship"
                      className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-full border border-white/20 text-white/90 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
