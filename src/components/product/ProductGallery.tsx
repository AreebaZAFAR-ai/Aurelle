"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./ProductDetail.module.css";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.gallery} data-single={images.length === 1 || undefined}>
      <div className={styles.main}>
        <AnimatePresence initial={false}>
          <motion.img
            key={images[active]}
            src={images[active]}
            alt={`${name}, view ${active + 1} of ${images.length}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
      </div>
      {images.length > 1 && (
        <div className={styles.thumbs} role="group" aria-label="Product images">
          {images.map((src, i) => (
            <button
              key={src}
              className={styles.thumb}
              aria-pressed={i === active}
              aria-label={`Show image ${i + 1}`}
              onClick={() => setActive(i)}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
