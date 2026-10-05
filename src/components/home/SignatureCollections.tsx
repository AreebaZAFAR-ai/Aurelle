"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import styles from "./SignatureCollections.module.css";

type Float = {
  src: string;
  alt: string;
  href: string;
  label: string;
  /** Desktop position / width as % of the stage, mobile overrides after. */
  left: number;
  width: number;
  mLeft: number;
  mWidth: number;
  /** Vertical travel in vh across the section — faster items read as closer. */
  from: number;
  to: number;
};

const floats: Float[] = [
  { src: "/media/img/editorial-gold-sunglasses.webp", alt: "Woman in sunglasses wearing gold earrings", href: "/collections/earrings", label: "Earrings", left: 55, width: 26, mLeft: 40, mWidth: 56, from: 60, to: -140 },
  { src: "/media/img/ring-oval-halo.webp", alt: "Oval halo ring on a hand", href: "/collections/rings", label: "Rings", left: 84, width: 14, mLeft: 4, mWidth: 34, from: 20, to: -100 },
  { src: "/media/img/editorial-emerald-noir.webp", alt: "Emerald drop necklace and earrings on black", href: "/collections/necklaces", label: "Necklaces", left: 28, width: 20, mLeft: 6, mWidth: 44, from: 120, to: -110 },
  { src: "/media/img/editorial-studs-bracelet.webp", alt: "Stud earrings and tennis bracelet", href: "/collections/bracelets", label: "Bracelets", left: 12, width: 13, mLeft: 58, mWidth: 36, from: 165, to: -60 },
  { src: "/media/img/editorial-chair-bracelet.webp", alt: "Hand with rings and bracelet resting on a chair", href: "/collections/bracelets", label: "Bracelets", left: 70, width: 18, mLeft: 8, mWidth: 40, from: 190, to: -70 },
  { src: "/media/img/editorial-layered-fine.webp", alt: "Layered fine necklaces and bracelets", href: "/collections/necklaces", label: "Necklaces", left: 44, width: 17, mLeft: 52, mWidth: 42, from: 240, to: -40 },
];

function FloatItem({ item, progress }: { item: Float; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [`${item.from}vh`, `${item.to}vh`]);
  return (
    <motion.div
      className={styles.float}
      style={{
        y,
        ...({
          "--l": `${item.left}%`,
          "--w": `${item.width}%`,
          "--ml": `${item.mLeft}%`,
          "--mw": `${item.mWidth}%`,
        } as React.CSSProperties),
      }}
    >
      <Link href={item.href} className={styles.floatLink}>
        <img src={item.src} alt={item.alt} loading="lazy" />
        <span className={styles.caption}>{item.label}</span>
      </Link>
    </motion.div>
  );
}

export function SignatureCollections() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className={styles.section} aria-labelledby="signature-title">
      <div className={styles.sticky}>
        <h2 id="signature-title" className={`h1 ${styles.title}`}>
          Explore Our
          <br />
          Signature Collections
        </h2>
        <div className={styles.stage}>
          {floats.map((f) => (
            <FloatItem key={f.src} item={f} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
