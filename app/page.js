import React from "react";
import HeroSection from "@/components/home/HeroSection";
import LandingStats from "@/components/home/LandingStats";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <div className="h-full mb-12 xl:mb-20">
      <HeroSection />
      <LandingStats />
      <FeaturedProjects />
      <TechStack />
    </div>
  );
}
