import { notFound } from "next/navigation";
import CaseStudyView from "@/components/case-study/CaseStudyView";
import { createPageMetadata } from "@/lib/metadata";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/caseStudies";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const study = getCaseStudy(params.slug);
  if (!study) {
    return createPageMetadata("Not found", "Project case study not found.");
  }
  return createPageMetadata(study.title, study.tagline);
}

export default function CaseStudyPage({ params }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  return <CaseStudyView study={study} />;
}
