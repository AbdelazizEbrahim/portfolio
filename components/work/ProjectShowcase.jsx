"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectCoverImage from "@/components/project/ProjectCoverImage";
import ProjectActionButtons from "./ProjectActionButtons";
import ProjectStatusBadge from "./ProjectStatusBadge";
import WorkSliderBtn from "@/components/WorkSliderBtn";

export default function ProjectShowcase({
  projects,
  variant = "flagship",
  initialIndex = 0,
}) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const project = projects[activeIndex] ?? projects[0];
  const isFlagship = variant === "flagship";

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  if (!project) return null;

  return (
    <div className="flex flex-col xl:flex-row xl:gap-8 gap-8">
      {/* Detail panel */}
      <div
        className={`w-full flex flex-col order-2 xl:order-none ${
          isFlagship ? "xl:w-[52%]" : "xl:w-[50%]"
        }`}
      >
        <div
          className={`flex flex-col gap-5 sm:gap-6 ${
            isFlagship ? "xl:min-h-[480px] xl:justify-between" : ""
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <div
              className={`leading-none font-extrabold text-transparent text-outline ${
                isFlagship
                  ? "text-6xl sm:text-7xl xl:text-8xl"
                  : "text-5xl sm:text-6xl"
              }`}
            >
              {project.num}
            </div>
            <ProjectStatusBadge status={project.status} />
          </div>

          <div>
            <p className="text-accent text-xs sm:text-sm uppercase tracking-wider mb-1">
              {project.category}
            </p>
            <h3
              className={`font-bold leading-tight text-white ${
                isFlagship
                  ? "text-2xl sm:text-3xl xl:text-[42px]"
                  : "text-xl sm:text-2xl xl:text-3xl"
              }`}
            >
              {project.title}
            </h3>
            {project.tagline && (
              <p className="text-white/70 text-sm sm:text-base mt-2 font-medium">
                {project.tagline}
              </p>
            )}
          </div>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {project.highlights?.length > 0 && (
            <ul className="space-y-2 sm:space-y-2.5">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm text-white/75 leading-snug"
                >
                  <span className="text-accent mt-1 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className={`px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-white/85 ${
                  isFlagship ? "text-xs sm:text-sm" : "text-xs"
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="border border-white/20" />

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <ProjectActionButtons
              project={project}
              size={isFlagship ? "lg" : "md"}
            />
            {project.hasCaseStudy && (
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-full border border-accent/50 text-accent text-sm font-semibold hover:bg-accent hover:text-primary transition-colors w-full sm:w-auto"
              >
                Full case study
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Swiper */}
      <div
        className={`w-full order-1 xl:order-none relative ${
          isFlagship ? "xl:w-[48%] xl:max-w-[620px]" : "xl:w-[50%] xl:max-w-[560px]"
        }`}
      >
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          initialSlide={initialIndex}
          className={`mb-10 xl:mb-0 ${
            isFlagship
              ? "h-[240px] sm:h-[320px] md:h-[380px] xl:h-[480px]"
              : "h-[220px] sm:h-[280px] xl:h-[400px]"
          }`}
          onSlideChange={handleSlideChange}
        >
          {projects.map((p, index) => (
            <SwiperSlide key={p.slug} className="w-full h-full">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
                <div className="absolute inset-0 z-0">
                  <ProjectCoverImage
                    slug={p.slug}
                    preferredSrc={p.coverSrc}
                    legacyImage={p.legacyImage}
                    alt={`${p.title} preview`}
                    priority={index === 0}
                    sizes="(max-width: 1280px) 100vw, 560px"
                  />
                </div>
                <div className="absolute top-3 right-3 z-20">
                  <ProjectStatusBadge status={p.status} />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <WorkSliderBtn
            containerStyles="absolute top-1/2 -translate-y-1/2 w-full px-3 sm:px-4 z-30 flex justify-between pointer-events-none [&_button]:pointer-events-auto"
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-lg sm:text-[22px] w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center transition-all rounded-full shadow-lg"
          />
        </Swiper>

        {/* Mobile slide dots */}
        <div className="flex justify-center gap-2 mt-4 xl:hidden">
          {projects.map((p, i) => (
            <span
              key={p.slug}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-white/30"
              }`}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
