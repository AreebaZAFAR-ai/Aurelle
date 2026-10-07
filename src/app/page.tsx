import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { IndexList, type IndexItem } from "@/components/home/IndexList";
import { SignatureCollections } from "@/components/home/SignatureCollections";
import { Statement } from "@/components/home/Statement";
import { Testimonials } from "@/components/home/Testimonials";
import { FilterableGrid } from "@/components/product/FilterableGrid";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/content";
import { editorial } from "@/data/editorial";
import { featuredProducts, products } from "@/data/products";

const index: IndexItem[] = [
  { title: "Layered Pearls", href: "/collections/necklaces", poster: "/media/img/edit-layered-pearls.webp" },
  { title: "Pearl Drops", href: "/collections/earrings", poster: "/media/img/edit-pearl-drop.webp" },
  { title: "Stacking Rings", href: "/collections/rings", poster: "/media/img/edit-stacked-rings.webp" },
  { title: "Sculpted Gold", href: "/collections/earrings", poster: "/media/img/edit-sculpted-gold.webp" },
  { title: "Pearl Pendants", href: "/collections/necklaces", poster: "/media/img/edit-pearl-pendant.webp" },
  { title: "Everyday Pearls", href: "/collections/necklaces", poster: "/media/img/edit-pearl-choker.webp" },
  { title: "The Evening Edit", href: "/shop", poster: "/media/img/edit-evening-pearls.webp" },
];

export default function HomePage() {
  // Featured first, then the rest — the grid shows nine with "Load more".
  const ordered = [...featuredProducts, ...products.filter((p) => !p.featured)];

  return (
    <>
      <Hero />
      <SignatureCollections />

      <section className="section" aria-labelledby="occasion-title">
        <div className="container">
          <Reveal>
            <h2 id="occasion-title" className="h1" style={{ textAlign: "center", marginBottom: "clamp(32px, 3.4vw, 56px)" }}>
              Fine Jewelry for
              <br />
              Every Occasion
            </h2>
          </Reveal>
          <FilterableGrid products={ordered} pageSize={9} />
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <Link href="/shop" className="link-underline" style={{ fontSize: "var(--fs-small)" }}>
              View the full collection
            </Link>
          </p>
        </div>
      </section>

      <Testimonials
        items={testimonials}
        images={[editorial.pearlDrop, editorial.layeredPearls, editorial.pearlChoker, editorial.sculptedGold]}
      />
      <Statement lines={["Elegance in", "every detail,", "every day"]} image="/media/video/sparkle-poster.jpg" video="/media/video/sparkle.mp4" />
      <IndexList items={index} />
    </>
  );
}
