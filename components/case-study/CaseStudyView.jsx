"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import ProjectCoverImage from "@/components/project/ProjectCoverImage";
import ProjectStatusBadge from "@/components/work/ProjectStatusBadge";
import ProjectGallery from "./ProjectGallery";
import CaseStudyNav from "./CaseStudyNav";
import { getAdjacentCaseStudies } from "@/lib/caseStudies";

export default function CaseStudyView({ study }) {
  const { prev, next } = getAdjacentCaseStudies(study.slug);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.2, duration: 0.4 } }}
      className="pb-16 xl:pb-24"
    >
      <div className="container mx-auto">
        {/* Hero */}
        <header className="pt-4 sm:pt-8 mb-10 sm:mb-12">
          <Link
            href="/work#enterprise"
            className="text-sm text-white/50 hover:text-accent mb-6 inline-flex items-center min-h-[44px]"
          >
            ← Flagship work
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-accent text-sm uppercase tracking-widest">
              {study.category}
            </span>
            <ProjectStatusBadge status={study.status} />
          </div>

          <h1 className="h1 text-white mb-3">{study.title}</h1>
          <p className="text-lg sm:text-xl text-accent font-medium max-w-3xl mb-4">
            {study.tagline}
          </p>
          <p className="text-white/70 max-w-3xl text-sm sm:text-base leading-relaxed mb-6">
            {study.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full bg-accent text-primary font-semibold hover:bg-accent-hover transition-colors"
              >
                <FiExternalLink />
                Open live demo
              </a>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-full border border-white/25 text-white font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Hire me
            </Link>
          </div>
        </header>

        {/* Cover + gallery */}
        <section className="mb-12 sm:mb-16" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">
            Project gallery
          </h2>
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 mb-6 sm:hidden">
            <ProjectCoverImage
              slug={study.slug}
              preferredSrc={study.coverSrc}
              alt={`${study.title} cover`}
              priority
              sizes="100vw"
            />
          </div>
          <ProjectGallery slug={study.slug} title={study.title} />
        </section>

        {/* Problem / Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <h2 className="text-accent text-sm uppercase tracking-widest mb-3">
              Problem
            </h2>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              {study.problem}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <h2 className="text-accent text-sm uppercase tracking-widest mb-3">
              Solution
            </h2>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              {study.solution}
            </p>
          </div>
        </section>

        <p className="text-white/50 text-sm mb-12 sm:mb-16">
          <span className="text-white/70 font-medium">Role: </span>
          {study.role}
        </p>

        {/* Features */}
        <section className="mb-12 sm:mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="h2 text-white mb-6 sm:mb-8">
            Key features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {study.features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture */}
        <section className="mb-12 sm:mb-16" aria-labelledby="arch-heading">
          <h2 id="arch-heading" className="h2 text-white mb-3">
            Architecture
          </h2>
          <p className="text-white/60 text-sm sm:text-base mb-6 max-w-3xl">
            {study.architecture.summary}
          </p>
          <div className="rounded-2xl border border-accent/20 bg-primary/40 p-4 sm:p-8 overflow-x-auto">
            <div className="flex flex-col items-center gap-3 min-w-[280px]">
              {study.architecture.layers.map((layer, i) => (
                <div key={layer.name} className="w-full max-w-md">
                  <div className="rounded-xl border border-accent/40 bg-white/[0.04] px-4 py-3 sm:py-4 text-center">
                    <p className="text-accent font-semibold text-sm sm:text-base">
                      {layer.name}
                    </p>
                    <p className="text-white/55 text-xs sm:text-sm mt-1">
                      {layer.detail}
                    </p>
                  </div>
                  {i < study.architecture.layers.length - 1 && (
                    <p className="text-center text-accent/60 py-1 text-lg" aria-hidden>
                      ↓
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-12 sm:mb-16" aria-labelledby="tech-heading">
          <h2 id="tech-heading" className="h2 text-white mb-6 sm:mb-8">
            Tech stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {study.techDetails.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-white/10 p-5"
              >
                <h3 className="text-accent text-sm uppercase tracking-wider mb-3">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-sm px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section aria-labelledby="highlights-heading">
          <h2 id="highlights-heading" className="h2 text-white mb-6">
            Highlights
          </h2>
          <ul className="space-y-3 max-w-3xl">
            {study.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm sm:text-base text-white/75 leading-relaxed"
              >
                <span className="text-accent shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <CaseStudyNav
          slug={study.slug}
          prev={prev}
          next={next}
          liveUrl={study.liveUrl}
        />
      </div>
    </motion.article>
  );
}
