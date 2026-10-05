"use client";

import { useEffect, useState } from "react";
import styles from "./Slideshow.module.css";

type Props = {
  images: string[];
  className?: string;
  /** Milliseconds each image stays up. */
  interval?: number;
  /** Delay before the first change, so neighbouring slideshows don't turn in step. */
  offset?: number;
  eager?: boolean;
};

/** Crossfading stills with a slow drift; holds on the first image for users who prefer reduced motion. */
export function Slideshow({ images, className, interval = 4500, offset = 0, eager = false }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setActive((i) => (i + 1) % images.length);
      timer = setInterval(() => setActive((i) => (i + 1) % images.length), interval);
    }, interval + offset);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [images.length, interval, offset]);

  return (
    <div className={`${styles.show} ${className ?? ""}`} aria-hidden="true">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          data-active={i === active || undefined}
          loading={eager && i === 0 ? "eager" : "lazy"}
          fetchPriority={eager && i === 0 ? "high" : undefined}
        />
      ))}
    </div>
  );
}
