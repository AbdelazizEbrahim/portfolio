"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import EnterpriseSection from "./EnterpriseSection";

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
      className="min-h-[80vh] overflow-x-hidden pb-16 xl:pb-24 max-w-full -mt-1 pt-0"
    >
      <EnterpriseSection />
    </motion.div>
  );
}
