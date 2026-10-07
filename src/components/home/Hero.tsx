"use client";

import { useEffect, useRef } from "react";
import { preload } from "react-dom";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "motion/react";
import { LazyVideo } from "@/components/LazyVideo";
import { LogoMark } from "@/components/Logo";
import { Slideshow } from "@/components/Slideshow";
import { site } from "@/lib/site";
import styles from "./Hero.module.css";

/** A film, or a set of stills that crossfade. */
export type HeroPanel = { src: string; poster?: string } | { images: string[] };

const homePanels: HeroPanel[] = [
  { src: "/media/video/jewelry2.mp4", poster: "/media/video/jewelry2-poster.jpg" },
  { src: "/media/video/hero-evening.mp4", poster: "/media/video/hero-evening-poster.jpg" },
  { src: "/media/video/sparkle.mp4", poster: "/media/video/sparkle-poster.jpg" },
];

type Props = {
  /** Three films: left, centre (shown first, and alone on phones), right. */
  panels?: HeroPanel[];
  sideLeft?: string;
  sideRight?: string;
  eyebrow?: string;
  title?: React.ReactNode;
};

/**
 * Used on the home page and, with its own films and copy, at the top of other pages.
 * Reference behaviour: a small framed visual sits centred on black between
 * "EST." and "Premium Quality". Scrolling expands it to full-bleed, the side
 * copy and emblem dissolve, and the headline rises from the bottom.
 */
export function Hero({
  panels = homePanels,
  sideLeft = site.established,
  sideRight = "Fine Jewelry",
  eyebrow = site.established,
  title = (
    <>
      Timeless Pieces,
      <br />
      Made to Be Worn
    </>
  ),
}: Props = {}) {
  // The centre panel is the first thing painted, so fetch its still ahead of the scripts.
  const lead = panels[1];
  const leadStill = lead && ("images" in lead ? lead.images[0] : lead.poster);
  if (leadStill) preload(leadStill, { as: "image", fetchPriority: "high" });

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Frame: inset clip from a centred card to full-bleed.
  const insetY = useTransform(p, [0, 0.55], [23, 0]);
  const startX = useMotionValue(29.5);
  useEffect(() => {
    if (window.matchMedia("(max-width: 700px)").matches) startX.set(12);
  }, [startX]);
  const insetX = useTransform(() => startX.get() * (1 - Math.min(p.get() / 0.55, 1)));
  const clip = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}%)`;
  const scale = useTransform(p, [0, 0.55], [1.08, 1]);

  const sideOpacity = useTransform(p, [0, 0.25], [1, 0]);
  const markOpacity = useTransform(p, [0, 0.3], [1, 0]);
  const shade = useTransform(p, [0.3, 0.75], [0, 1]);
  const titleOpacity = useTransform(p, [0.55, 0.85], [0, 1]);
  const titleY = useTransform(p, [0.55, 0.9], [60, 0]);

  return (
    <section ref={ref} className={styles.hero} aria-label="Introduction">
      <div className={styles.sticky}>
        <motion.div
          className={styles.frame}
          style={{ clipPath: clip }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className={styles.panels} style={{ scale }}>
            {panels.map((v, i) => (
              <div key={i} className={styles.panel} data-index={i}>
                {"images" in v ? (
                  <Slideshow images={v.images} offset={i * 1500} eager={i === 1} />
                ) : (
                  <LazyVideo src={v.src} poster={v.poster} eager={i === 1} />
                )}
              </div>
            ))}
          </motion.div>
          <motion.div className={styles.shade} style={{ opacity: shade }} />
        </motion.div>

        <motion.div className={styles.mark} style={{ opacity: markOpacity }} aria-hidden="true">
          <LogoMark />
        </motion.div>

        <motion.p className={`${styles.side} ${styles.sideLeft}`} style={{ opacity: sideOpacity }}>
          {sideLeft}
        </motion.p>
        <motion.p className={`${styles.side} ${styles.sideRight}`} style={{ opacity: sideOpacity }}>
          {sideRight}
        </motion.p>

        <motion.div className={styles.title} style={{ opacity: titleOpacity, y: titleY }}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className="display-hero">{title}</h1>
        </motion.div>
      </div>
    </section>
  );
}
