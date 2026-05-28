import Link from "next/link";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { flagshipProjects } from "@/lib/projects";

export default function FlagshipProjectsSection() {
  return (
    <section
      className="mb-12 sm:mb-16 text-center xl:text-left"
      aria-labelledby="resume-flagship-heading"
    >
      <h2
        id="resume-flagship-heading"
        className="text-2xl sm:text-3xl font-bold text-white mb-2"
      >
        Enterprise platforms
      </h2>
      <p className="text-white/60 text-sm sm:text-base mb-6 max-w-2xl mx-auto xl:mx-0">
        Production systems — live deployments and case studies.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {flagshipProjects.map((project) => (
          <li
            key={project.slug}
            className="bg-[#232329] rounded-xl p-5 flex flex-col gap-3 text-left"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-bold text-white">{project.title}</h3>
              <span className="text-accent text-[10px] uppercase shrink-0">
                Live
              </span>
            </div>
            <p className="text-white/55 text-xs line-clamp-2">{project.tagline}</p>
            <ul className="space-y-1 flex-1">
              {project.highlights.slice(0, 2).map((line) => (
                <li
                  key={line}
                  className="text-white/70 text-xs flex gap-2 leading-snug"
                >
                  <span className="text-accent shrink-0">▸</span>
                  <span className="line-clamp-2">{line}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 text-xs">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent inline-flex items-center gap-1 min-h-[40px]"
                >
                  <FiExternalLink />
                  Live
                </a>
              )}
              {project.hasCaseStudy && (
                <Link
                  href={`/work/${project.slug}`}
                  className="text-accent hover:underline inline-flex items-center gap-1 min-h-[40px]"
                >
                  Case study
                  <FiArrowUpRight />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
