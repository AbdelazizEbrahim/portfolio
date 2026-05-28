"use client";

import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import toast from "react-hot-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PRIVATE_MESSAGE = "Private enterprise project";

export default function ProjectGithubButton({
  project,
  size = "lg",
  className = "",
}) {
  const dim =
    size === "lg"
      ? "w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] text-2xl sm:text-3xl"
      : size === "sm"
        ? "w-10 h-10 text-lg"
        : "w-[48px] h-[48px] text-xl";

  const isPrivate = project.githubPrivate || !project.githubUrl;

  const handlePrivateClick = () => {
    toast.error(PRIVATE_MESSAGE, { duration: 3500 });
  };

  const buttonClass = `${dim} rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-colors ${className}`;

  if (!project.showGithub) return null;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          {isPrivate ? (
            <button
              type="button"
              onClick={handlePrivateClick}
              className={buttonClass}
              aria-label="GitHub — private enterprise project"
            >
              <BsGithub className="text-white group-hover:text-accent" />
            </button>
          ) : (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
              aria-label="Open GitHub repository"
            >
              <BsGithub className="text-white group-hover:text-accent" />
            </Link>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{isPrivate ? PRIVATE_MESSAGE : "GitHub repository"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
