"use client";

import { useState } from "react";
import Image from "next/image";
import GallerySlotImage from "./GallerySlotImage";

const SLOTS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const EXTENSIONS = ["webp", "png", "jpg", "jpeg", "svg"];

function MainGalleryImage({ slug, slot, alt }) {
  const num = String(slot).padStart(2, "0");
  const candidates = EXTENSIONS.map((ext) => `/projects/${slug}/${num}.${ext}`);
  const [index, setIndex] = useState(0);
  const src = index < candidates.length ? candidates[index] : null;

  if (!src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-white/5 text-white/40 text-sm">
        No image for slot {num}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={slot === 1}
      sizes="(max-width: 768px) 100vw, 900px"
      className="object-contain bg-black/40"
      onError={() => setIndex((i) => i + 1)}
    />
  );
}

export default function ProjectGallery({ slug, title }) {
  const [activeSlot, setActiveSlot] = useState(1);

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden border border-white/10 bg-primary/80">
        <MainGalleryImage
          slug={slug}
          slot={activeSlot}
          alt={`${title} screenshot ${activeSlot}`}
        />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 sm:gap-3">
        {SLOTS.map((slot) => (
          <GallerySlotImage
            key={slot}
            slug={slug}
            slot={slot}
            alt={`${title} thumbnail ${slot}`}
            isActive={activeSlot === slot}
            onClick={() => setActiveSlot(slot)}
          />
        ))}
      </div>
      <p className="text-white/40 text-xs text-center sm:text-left">
        Add screenshots as{" "}
        <code className="text-accent/80">public/projects/{slug}/01.webp</code>{" "}
        through <code className="text-accent/80">09.webp</code>
      </p>
    </div>
  );
}
