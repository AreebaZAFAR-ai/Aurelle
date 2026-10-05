"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
  /** Load immediately rather than when scrolled near (use for above-the-fold video). */
  eager?: boolean;
};

/**
 * Muted, looping background video that only loads and plays while near the viewport,
 * and stays on its poster frame for users who prefer reduced motion.
 */
export function LazyVideo({ src, poster, className, eager = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      aria-hidden="true"
      {...(eager ? { src, autoPlay: true } : {})}
    />
  );
}
