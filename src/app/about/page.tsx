import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import styles from "@/components/about/About.module.css";
import { Parallax, SlidingLine } from "@/components/about/Parallax";
import { TestimonialMarquee } from "@/components/about/TestimonialMarquee";
import { Reveal } from "@/components/Reveal";
import { Slideshow } from "@/components/Slideshow";
import { careNotes, faqs, testimonials } from "@/data/content";
import { collections } from "@/data/collections";
import { editorialAll } from "@/data/editorial";
import { getProduct, products } from "@/data/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${site.name} — how we think about design, wear and care.`,
  alternates: { canonical: "/about" },
};

const collage = [
  { src: "/media/img/editorial-sea-stack.webp", alt: "Stacked gold rings and bangles by the sea", cls: "c1" },
  { src: "/media/img/earring-gold-flower.webp", alt: "Gold flower earring with pearl centre", cls: "c2" },
  { src: "/media/img/necklace-gold-teardrop.webp", alt: "Open teardrop pendant and earring", cls: "c3" },
  { src: "/media/img/ring-gold-stack.webp", alt: "Fine gold stacking rings on lace", cls: "c4" },
] as const;

export default function AboutPage() {
  const floatA = getProduct("emerald-collar-necklace");
  const floatB = getProduct("sculptural-gold-cuffs");

  return (
    <>
      {/* 1 — framed split hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Reveal className={styles.heroCopy}>
            <h1 className="h1">
              A House of
              <br />
              Quiet Luxury
            </h1>
            <p className="eyebrow">Jewelry House — {site.established}</p>
            <p>
              An edited collection of fine jewelry combining classic forms with a modern sense of ease, designed to be worn
              every day and kept for years.
            </p>
            <Link href="/shop" className="btn">
              Shop the Collection
            </Link>
          </Reveal>
          <div className={styles.heroMedia}>
            <Slideshow images={editorialAll} eager />
          </div>
        </div>
      </section>

      {/* 2 — care collage */}
      <section className={`section container ${styles.care}`}>
        <Reveal className={styles.careTitle}>
          <h2 className="h1">
            Cared For,
            <br />
            Piece by Piece
          </h2>
        </Reveal>
        <div className={styles.collage}>
          {collage.map((c, i) => (
            <Parallax key={c.src} className={styles[c.cls]} distance={40 + i * 25}>
              <img src={c.src} alt={c.alt} loading="lazy" />
            </Parallax>
          ))}
        </div>
        <div className={styles.careNotes}>
          <Reveal>
            <h2 className="h2">
              Simple Habits for
              <br />
              Jewelry That Lasts
            </h2>
          </Reveal>
          <ol>
            {careNotes.map((n, i) => (
              <Reveal as="li" key={n.title} delay={i * 0.08}>
                <h3 className="h3">{n.title}</h3>
                <p className="muted">{n.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 — testimonial cards (placeholder copy) */}
      <section className={styles.dark} aria-labelledby="kind-words">
        <Reveal>
          <h2 id="kind-words" className="h1" style={{ textAlign: "center" }}>
            Kind Words From
            <br />
            Those Who Wear It
          </h2>
        </Reveal>
        <TestimonialMarquee items={testimonials} />
      </section>

      {/* 4 — FAQ */}
      <section className={`section container ${styles.faq}`} aria-labelledby="faq-title">
        <Reveal>
          <h2 id="faq-title" className="h1">
            Frequently Asked
            <br />
            Questions
          </h2>
        </Reveal>
        <Accordion numbered items={faqs.map((f) => ({ title: f.q, body: <p>{f.a}</p> }))} />
      </section>

      {/* 5 — numbers + burgundy block with drifting cards */}
      <section className={styles.stats} aria-labelledby="stats-title">
        <div className={styles.statsCopy}>
          <Reveal>
            <h2 id="stats-title" className="h1">
              Considered in
              <br />
              Every Detail
            </h2>
          </Reveal>
          <div className={styles.statCards}>
            <Reveal className={styles.stat}>
              <span>{collections.length}</span>
              <p>Collections</p>
            </Reveal>
            <Reveal className={styles.stat} delay={0.1}>
              <span>{products.length}</span>
              <p>Jewelry designs</p>
            </Reveal>
          </div>
        </div>
        <div className={styles.wine}>
          {floatA && (
            <Parallax className={styles.floatA} distance={90}>
              <Link href={`/product/${floatA.slug}`} className={styles.floatCard}>
                <img src={floatA.image} alt="" loading="lazy" />
                <span>{floatA.name}</span>
              </Link>
            </Parallax>
          )}
          {floatB && (
            <Parallax className={styles.floatB} distance={160}>
              <Link href={`/product/${floatB.slug}`} className={styles.floatCard}>
                <img src={floatB.image} alt="" loading="lazy" />
                <span>{floatB.name}</span>
              </Link>
            </Parallax>
          )}
        </div>
      </section>

      {/* 6 — gold band */}
      <section className={styles.gold}>
        <SlidingLine text="Made with care" className="shout" />
      </section>
    </>
  );
}
