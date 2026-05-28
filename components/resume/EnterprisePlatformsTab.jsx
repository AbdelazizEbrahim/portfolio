import Link from "next/link";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { flagshipProjects } from "@/lib/projects";

const section = {
  title: "Enterprise platforms",
  description:
    "Production multi-tenant systems—live deployments with real-time operations, RBAC, and Ethiopian market integrations.",
};

export default function EnterprisePlatformsTab() {
  return (
    <div className="mb-8 flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{section.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {section.description}
      </p>
      <ScrollArea className="h-[min(520px,70vh)]">
        <ul className="grid grid-cols-1 gap-5 pr-4">
          {flagshipProjects.map((project) => (
            <li
              key={project.slug}
              className="bg-[#232329] py-6 px-6 sm:px-8 rounded-xl flex flex-col gap-3 text-center lg:text-left"
            >
              <span className="text-accent text-sm">
                Live · {project.category.replace("Enterprise · ", "")}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {project.title}
              </h4>
              <p className="text-white/60 text-sm font-medium">{project.tagline}</p>
              <p className="text-white/70 text-sm leading-relaxed">
                {project.description}
              </p>
              <ul className="space-y-1.5 text-left">
                {project.highlights.map((line) => (
                  <li
                    key={line}
                    className="text-white/65 text-sm flex gap-2 leading-snug"
                  >
                    <span className="text-accent shrink-0">▸</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm hover:underline min-h-[40px] inline-flex items-center gap-1"
                  >
                    <FiExternalLink />
                    Live demo →
                  </a>
                )}
                {project.hasCaseStudy && (
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-white/70 hover:text-accent text-sm min-h-[40px] inline-flex items-center gap-1"
                  >
                    Case study
                    <FiArrowUpRight />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
