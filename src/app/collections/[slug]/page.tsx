import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { films } from "@/data/films";
import { FilterableGrid } from "@/components/product/FilterableGrid";
import { Reveal } from "@/components/Reveal";
import { collections, getCollection } from "@/data/collections";
import { productsIn } from "@/data/products";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = getCollection((await params).slug);
  if (!c) return {};
  return {
    title: c.name,
    description: c.intro,
    alternates: { canonical: `/collections/${c.slug}` },
    openGraph: { images: [c.cover] },
  };
}

export default async function CollectionPage({ params }: Params) {
  const collection = getCollection((await params).slug);
  if (!collection) notFound();
  const items = productsIn(collection.slug);

  return (
    <>
      <Hero panels={collection.heroPanels} sideLeft={collection.name} eyebrow={collection.name} title={collection.headline} />

      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: "grid", gap: 14, justifyItems: "center", textAlign: "center", marginBottom: 40 }}>
              <h2 className="h1">{collection.name}</h2>
              <p className="muted" style={{ maxWidth: "48ch" }}>
                {collection.intro}
              </p>
            </div>
          </Reveal>
          <FilterableGrid products={items} showFilters={false} showSort />
          <nav aria-label="Other collections" style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginTop: 64 }}>
            {collections
              .filter((c) => c.slug !== collection.slug)
              .map((c) => (
                <Link key={c.slug} href={`/collections/${c.slug}`} className="link-underline h3">
                  {c.name}
                </Link>
              ))}
          </nav>
        </div>
      </section>
    </>
  );
}
