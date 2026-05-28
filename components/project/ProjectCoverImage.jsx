"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

/**
 * Project cover with fallbacks: preferred → legacy public image → /projects/{slug}/01.*
 */
export default function ProjectCoverImage({
  slug,
  preferredSrc,
  legacyImage,
  alt,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px",
  priority = false,
}) {
  const candidates = useMemo(() => {
    const list = [
      preferredSrc,
      legacyImage,
      `/projects/${slug}/01.webp`,
      `/projects/${slug}/01.png`,
      `/projects/${slug}/01.jpg`,
      `/projects/${slug}/01.svg`,
    ];
    return [...new Set(list.filter(Boolean))];
  }, [preferredSrc, legacyImage, slug]);

  const [index, setIndex] = useState(0);
  const src = index < candidates.length ? candidates[index] : null;

  if (!src) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-primary/80 text-accent ${className}`}
        aria-hidden
      >
        <span className="text-sm uppercase tracking-widest text-white/40">
          {slug}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setIndex((i) => i + 1)}
    />
  );
}
