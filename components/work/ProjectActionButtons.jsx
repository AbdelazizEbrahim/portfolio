"use client";

import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectActionButtons({ project, size = "lg" }) {
  const dim =
    size === "lg"
      ? "w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] text-2xl sm:text-3xl"
      : "w-[48px] h-[48px] text-xl";

  const hasLive = Boolean(project.liveUrl);
  const hasGithub = project.showGithub && Boolean(project.githubUrl);

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
                title="No live demo"
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

      {hasGithub && (
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${dim} rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-colors`}
                aria-label="Open GitHub repository"
              >
                <BsGithub className="text-white group-hover:text-accent" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub repository</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}
