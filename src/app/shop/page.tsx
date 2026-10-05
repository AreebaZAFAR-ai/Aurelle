import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { films } from "@/data/films";
import { FilterableGrid } from "@/components/product/FilterableGrid";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop All Jewelry",
  description: "Browse every ring, necklace, earring and bracelet in the collection.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <Hero
        panels={[films.vault, films.riviera, films.evening]}
        sideLeft="Shop all"
        eyebrow="Shop all"
        title={
          <>
            Fine Jewelry for
            <br />
            Every Occasion
          </>
        }
      />
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ textAlign: "center", marginBottom: 28 }}>
              {products.length} pieces across four collections
            </p>
          </Reveal>
          <FilterableGrid products={products} pageSize={12} showSort />
        </div>
      </section>
    </>
  );
}
