"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { LazyVideo } from "@/components/LazyVideo";
import styles from "./Statement.module.css";

type Props = {
  lines: string[];
  image: string;
  /** Plays in place of the image when given; the image is its poster. */
  video?: string;
  /** Background behind the frame before it expands. */
  tone?: "cream" | "gold";
};

/**
 * Reference: a framed image sits mid-page with oversized uppercase type cropped
 * by its edges; scrolling opens the frame almost to full-bleed, revealing the line.
 */
export function Statement({ lines, image, video, tone = "cream" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const y = useTransform(p, [0, 0.7], [21, 2.5]);
  const x = useTransform(p, [0, 0.7], [20, 1.4]);
  const clip = useMotionTemplate`inset(${y}% ${x}% ${y}% ${x}%)`;
  const scale = useTransform(p, [0, 1], [1.12, 1]);

  return (
    <section ref={ref} className={styles.section} data-tone={tone}>
      <div className={styles.sticky}>
        <motion.div className={styles.frame} style={{ clipPath: clip }}>
          {video ? (
            <motion.div className={styles.image} style={{ scale }}>
              <LazyVideo src={video} poster={image} />
            </motion.div>
          ) : (
            <motion.img src={image} alt="" className={styles.image} style={{ scale }} loading="lazy" />
          )}
          <div className={styles.shade} />
          <h2 className={`shout ${styles.text}`}>
            {lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
