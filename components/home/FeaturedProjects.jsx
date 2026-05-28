"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import toast from "react-hot-toast";
import { flagshipProjects } from "@/lib/projects";
import ProjectCoverImage from "@/components/project/ProjectCoverImage";
import ProjectStatusBadge from "@/components/work/ProjectStatusBadge";

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function FeaturedProjects() {
  return (
    <section
      id="flagship-work"
      className="py-8 sm:py-12 xl:py-16 border-t border-white/10 overflow-hidden"
      aria-labelledby="flagship-heading"
    >
      <div className="container mx-auto max-w-full">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5 sm:mb-8 xl:mb-10">
          <div className="text-center sm:text-left">
            <p className="text-accent text-sm uppercase tracking-widest mb-2">
              Featured work
            </p>
            <h2 id="flagship-heading" className="h2 text-white">
              Enterprise platforms
            </h2>
          </div>
          <Link
            href="/work#enterprise"
            className="text-accent hover:text-accent-hover text-sm font-medium flex items-center justify-center sm:justify-end gap-1 transition-colors min-h-[44px]"
          >
            View all
            <FiArrowUpRight />
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {flagshipProjects.map((project, index) => (
            <motion.li
              key={project.slug}
              {...cardMotion}
              transition={{ delay: 0.1 * index, duration: 0.45, ease: "easeOut" }}
              className="flex min-w-0"
            >
              <article className="flex flex-col w-full min-w-0 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-accent/40 transition-colors duration-300">
                <div className="relative aspect-[16/10] w-full bg-primary/50">
                  <ProjectCoverImage
                    slug={project.slug}
                    preferredSrc={project.coverSrc}
                    legacyImage={project.legacyImage}
                    alt={`${project.title} screenshot`}
                    priority={index === 0}
                  />
                  <span className="absolute top-3 left-3 z-10">
                    <ProjectStatusBadge status={project.status} />
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-4 gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-accent/90 text-xs sm:text-sm font-medium mt-1 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/80 border border-white/10"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 pt-1 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-3 rounded-full bg-accent text-primary text-xs sm:text-sm font-semibold hover:bg-accent-hover transition-colors"
                      >
                        <FiExternalLink />
                        Live demo
                      </a>
                    )}
                    <div className="flex gap-2">
                      {project.hasCaseStudy ? (
                        <Link
                          href={`/work/${project.slug}`}
                          className="flex-1 inline-flex items-center justify-center min-h-[40px] px-3 rounded-full border border-white/20 text-xs sm:text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                        >
                          Case study
                        </Link>
                      ) : (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center min-h-[40px] px-3 rounded-full border border-white/20 text-xs sm:text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                        >
                          Visit site
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          if (project.githubPrivate || !project.githubUrl) {
                            toast.error("Private enterprise project");
                          } else {
                            window.open(project.githubUrl, "_blank");
                          }
                        }}
                        className="w-10 h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <BsGithub className="text-lg" />
                      </button>
                    </div>
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
