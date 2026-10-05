"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Icon } from "@/components/Icon";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/site";
import styles from "./Spotlight.module.css";

const DOTS = 15;

/**
 * Reference: on black, a sand-coloured product card alternates sides as you
 * scroll, while a dotted rail in the centre tracks progress with a square marker.
 */
export function Spotlight({ products }: { products: Product[] }) {
  const ref = useRef<HTMLElement>(null);
  const { add } = useCart();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(DOTS - 1, Math.max(0, Math.floor(v * DOTS))));
  });

  return (
    <section ref={ref} className={styles.section} aria-labelledby="spotlight-title">
      <header className={`container ${styles.head}`}>
        <p className="eyebrow">Handpicked for you</p>
        <h2 id="spotlight-title" className="h2">
          Spotlight Pieces
        </h2>
      </header>

      <div className={styles.body}>
      <div className={styles.railTrack} aria-hidden="true">
        <div className={styles.rail}>
          {Array.from({ length: DOTS }, (_, i) => (
            <span key={i} className={styles.dot} data-active={i === active || undefined} />
          ))}
        </div>
      </div>

      <ol className={styles.list}>
        {products.map((p, i) => (
          <li key={p.slug} className={styles.row} data-side={i % 2 ? "left" : "right"}>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.cardHead}>
                <h3>
                  <Link href={`/product/${p.slug}`}>{p.name}</Link>
                </h3>
                <span>{formatPrice(p.price)}</span>
              </div>
              <Link href={`/product/${p.slug}`} className={styles.cardMedia} tabIndex={-1} aria-hidden="true">
                <img src={p.image} alt="" loading="lazy" />
              </Link>
              <button className={`btn btn--pill ${styles.add}`} onClick={() => add(p.slug)}>
                <Icon name="cart" size={15} />
                Add to Cart
              </button>
            </motion.div>

            <motion.div
              className={styles.copy}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
              transition={{ duration: 0.9 }}
            >
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <p className={styles.desc}>{p.description}</p>
              <Link href={`/product/${p.slug}`} className={`link-underline ${styles.view}`}>
                View the piece
              </Link>
            </motion.div>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
