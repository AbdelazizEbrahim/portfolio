"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import FlagshipSection from "./FlagshipSection";
import MoreProjectsSection from "./MoreProjectsSection";

export default function WorkPageContent() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] overflow-x-hidden pb-16 xl:pb-24"
    >
      <div className="container mx-auto pt-4 sm:pt-8 pb-6">
        <header className="text-center xl:text-left max-w-3xl mx-auto xl:mx-0">
          <h1 className="h1 text-white mb-3">My work</h1>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Flagship enterprise builds first, then selected projects across
            health, documents, and marketplace domains.
          </p>
        </header>
      </div>

      <FlagshipSection />
      <MoreProjectsSection />
    </motion.div>
  );
}
