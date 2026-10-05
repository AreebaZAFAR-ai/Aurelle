"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Icon } from "@/components/Icon";
import type { Testimonial } from "@/data/content";
import styles from "./Testimonials.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Pinned panel: scrolling steps through the reviews. A framed still changes on the
 * left; the quote, stars and name change on the right, with a numbered progress rail.
 */
export function Testimonials({ items, images }: { items: Testimonial[]; images: string[] }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(items.length - 1, Math.floor(v * items.length)));
  });

  const current = items[active];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      ref={ref}
      className={styles.section}
      style={{ height: `${items.length * 70 + 40}vh` }}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.sticky}>
        <div className={styles.media}>
          <AnimatePresence initial={false}>
            <motion.img
              key={active}
              src={images[active % images.length]}
              alt=""
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease }}
            />
          </AnimatePresence>
          <span className={styles.count} aria-hidden="true">
            {pad(active + 1)} <span>/ {pad(items.length)}</span>
          </span>
        </div>

        <div className={styles.copy}>
          <p className="eyebrow">Kind words</p>
          <h2 id="testimonials-title" className={`h2 ${styles.title}`}>
            In the Words of Our Clients
          </h2>

          <span className={styles.mark} aria-hidden="true">
            “
          </span>

          <div className={styles.quoteBox}>
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.55, ease }}
              >
                <blockquote className={styles.quote}>{current.quote}</blockquote>
                <figcaption className={styles.who}>
                  <span className={styles.stars} role="img" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Icon key={i} name="star" size={13} />
                    ))}
                  </span>
                  <span className={styles.name}>{current.name}</span>
                  <span className={styles.role}>{current.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <ol className={styles.rail} aria-hidden="true">
            {items.map((_, i) => (
              <li key={i} data-active={i === active || undefined} data-done={i < active || undefined} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
