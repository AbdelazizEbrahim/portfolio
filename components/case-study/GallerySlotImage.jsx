"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const EXTENSIONS = ["webp", "png", "jpg", "jpeg", "svg"];

export default function GallerySlotImage({
  slug,
  slot,
  alt,
  isActive,
  onClick,
  className = "",
}) {
  const num = String(slot).padStart(2, "0");
  const candidates = useMemo(
    () => EXTENSIONS.map((ext) => `/projects/${slug}/${num}.${ext}`),
    [slug, num]
  );

  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const src = !hidden && index < candidates.length ? candidates[index] : null;

  if (hidden) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative overflow-hidden rounded-lg border-2 transition-all aspect-video w-full ${
        isActive ? "border-accent ring-2 ring-accent/30" : "border-white/10 hover:border-white/30"
      } ${className}`}
      aria-label={`View image ${slot}`}
      aria-pressed={isActive}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 33vw, 120px"
          className="object-cover"
          onError={() => {
            if (index + 1 < candidates.length) {
              setIndex((i) => i + 1);
            } else {
              setHidden(true);
            }
          }}
        />
      ) : null}
    </button>
  );
}
