"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { LazyVideo } from "@/components/LazyVideo";
import styles from "./IndexList.module.css";

/** A film (with its poster) or, without `video`, a still image shown from `poster`. */
export type IndexItem = { title: string; href: string; video?: string; poster: string };

/**
 * Reference: a pinned, dimmed film fills the screen; a list of names at the
 * lower left and numbered markers on the right advance one step per scroll.
 */
export function IndexList({ items }: { items: IndexItem[] }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(items.length - 1, Math.floor(v * items.length)));
  });

  return (
    <section
      ref={ref}
      className={styles.section}
      style={{ height: `${items.length * 75 + 25}vh` }}
      aria-labelledby="index-title"
    >
      <div className={styles.sticky}>
        <h2 id="index-title" className="sr-only">
          Explore by mood
        </h2>
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            className={styles.bg}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {items[active].video ? (
              <LazyVideo src={items[active].video} poster={items[active].poster} />
            ) : (
              <>
                <img src={items[active].poster} alt="" loading="lazy" decoding="async" className={styles.fill} />
                <img src={items[active].poster} alt="" loading="lazy" decoding="async" className={styles.whole} />
              </>
            )}
          </motion.div>
        </AnimatePresence>
        <div className={styles.shade} />

        <ol className={styles.list}>
          {items.map((item, i) => (
            <li key={item.title} data-active={i === active || undefined}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ol>

        <ol className={styles.numbers} aria-hidden="true">
          {items.map((item, i) => (
            <li key={item.title} data-active={i === active || undefined}>
              {String(i + 1).padStart(2, "0")}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
