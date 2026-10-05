import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { films } from "@/data/films";
import { Reveal } from "@/components/Reveal";
import { collections } from "@/data/collections";
import { productsIn } from "@/data/products";
import styles from "./collections.module.css";

export const metadata: Metadata = {
  title: "Collections",
  description: "Rings, necklaces, earrings and bracelets — explore each collection.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <>
      <Hero
        panels={[films.tennis, films.sparkle, films.vault]}
        sideLeft="Collections"
        eyebrow="Collections"
        title={
          <>
            Four Collections,
            <br />
            One Quiet Language
          </>
        }
      />

      <section className="section">
        <div className={`container ${styles.list}`}>
          {collections.map((c, i) => (
            <Reveal key={c.slug} className={styles.row} as="figure">
              <Link href={`/collections/${c.slug}`} className={styles.media} data-flip={i % 2 || undefined}>
                <img src={c.heroImage} alt={`${c.name} collection`} loading="lazy" />
                <img src={c.cover} alt="" loading="lazy" className={styles.inset} />
              </Link>
              <figcaption className={styles.copy}>
                <span className="eyebrow">
                  {String(i + 1).padStart(2, "0")} — {productsIn(c.slug).length} pieces
                </span>
                <h2 className="h1">{c.name}</h2>
                <p>{c.intro}</p>
                <Link href={`/collections/${c.slug}`} className="btn">
                  Explore {c.name}
                </Link>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
