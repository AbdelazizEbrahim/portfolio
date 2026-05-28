"use client";

import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectGithubButton from "@/components/project/ProjectGithubButton";

export default function ProjectActionButtons({ project, size = "lg" }) {
  const dim =
    size === "lg"
      ? "w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] text-2xl sm:text-3xl"
      : "w-[48px] h-[48px] text-xl";

  const hasLive = Boolean(project.liveUrl);

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            {hasLive ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${dim} rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-colors`}
                aria-label="Open live project"
              >
                <BsArrowUpRight className="text-white group-hover:text-accent" />
              </Link>
            ) : (
              <span
                className={`${dim} rounded-full bg-white/5 flex justify-center items-center opacity-40 cursor-not-allowed`}
                aria-disabled
              >
                <BsArrowUpRight className="text-white/50" />
              </span>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>{hasLive ? "Live project" : "No live demo"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <ProjectGithubButton project={project} size={size} />
    </div>
  );
}
