"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import styles from "./Blog.module.css";

/**
 * Reference article opening: gold band, two lines of black uppercase type with a
 * dark image wedged between them that grows to fill the screen as you scroll.
 */
export function ArticleHero({ lines, image }: { lines: [string, string]; image: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const y = useTransform(p, [0, 0.75], [33, 0]);
  const x = useTransform(p, [0, 0.75], [35, 0]);
  const clip = useMotionTemplate`inset(${y}% ${x}% ${y}% ${x}%)`;
  const textOpacity = useTransform(p, [0.45, 0.75], [1, 0.15]);

  return (
    <section ref={ref} className={styles.articleHero}>
      <div className={styles.articleSticky}>
        <motion.h1 className={`shout ${styles.articleLines}`} style={{ opacity: textOpacity }}>
          <span>{lines[0]}</span>
          <span>{lines[1]}</span>
        </motion.h1>
        <motion.div className={styles.articleFrame} style={{ clipPath: clip }}>
          <img src={image} alt="" />
        </motion.div>
      </div>
    </section>
  );
}
