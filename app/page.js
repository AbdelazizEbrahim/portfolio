import React from "react";
import { createPageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/home/HeroSection";

export const metadata = createPageMetadata(
  "Home",
  "Full-stack engineer — Dociva, Cyber POS, OrderPulse, Pharma Flow, and enterprise platforms."
);
import LandingStats from "@/components/home/LandingStats";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function Home() {
  return (
    <div className="h-full mb-12 xl:mb-20 overflow-x-hidden max-w-full">
      <HeroSection />
      <LandingStats />
      <FeaturedProjects />
    </div>
  );
}
