import Link from "next/link";
import { FiArrowLeft, FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { getProjectBySlug } from "@/lib/projects";

export default function CaseStudyNav({ slug, prev, next, liveUrl }) {
  const prevProject = prev ? getProjectBySlug(prev) : null;
  const nextProject = next ? getProjectBySlug(next) : null;

  return (
    <nav
      className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between border-t border-white/10 pt-8 mt-12"
      aria-label="Case study navigation"
    >
      <Link
        href="/work#enterprise"
        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors min-h-[44px]"
      >
        <FiArrowLeft />
        Back to work
      </Link>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 rounded-full bg-accent text-primary text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            <FiExternalLink />
            Live demo
          </a>
        )}
        <div className="flex gap-2">
          {prev && prevProject ? (
            <Link
              href={`/work/${prev}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 min-h-[44px] px-4 rounded-full border border-white/20 text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <FiChevronLeft />
              <span className="truncate max-w-[120px]">{prevProject.title}</span>
            </Link>
          ) : (
            <span className="flex-1 sm:flex-none min-h-[44px] px-4 rounded-full border border-white/10 text-white/30 text-sm flex items-center justify-center">
              —
            </span>
          )}
          {next && nextProject ? (
            <Link
              href={`/work/${next}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 min-h-[44px] px-4 rounded-full border border-white/20 text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <span className="truncate max-w-[120px]">{nextProject.title}</span>
              <FiChevronRight />
            </Link>
          ) : (
            <span className="flex-1 sm:flex-none min-h-[44px] px-4 rounded-full border border-white/10 text-white/30 text-sm flex items-center justify-center">
              —
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
