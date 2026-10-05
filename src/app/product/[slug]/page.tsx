import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { AddToCart } from "@/components/product/AddToCart";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import styles from "@/components/product/ProductDetail.module.css";
import { Reveal } from "@/components/Reveal";
import { careNotes } from "@/data/content";
import { getProduct, products, relatedTo } from "@/data/products";
import { formatPrice } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.description,
    alternates: { canonical: `/product/${p.slug}` },
    openGraph: { images: [p.image] },
  };
}

export default async function ProductPage({ params }: Params) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const images = [product.image, product.hoverImage].filter((x): x is string => Boolean(x));
  const related = relatedTo(product);

  return (
    <>
      <div className={`container ${styles.layout}`}>
        <ProductGallery images={images} name={product.name} />

        <div className={styles.info}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/shop">Shop</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/collections/${product.category}`}>{product.category}</Link>
          </nav>
          <h1 className="h1">{product.name}</h1>
          <p className={styles.price}>{formatPrice(product.price)}</p>
          <p className={styles.desc}>{product.description}</p>
          <ul className={styles.details}>
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <AddToCart slug={product.slug} name={product.name} />
          <Accordion
            variant="plain"
            items={[
              { title: "Details", body: <p>{product.details.join(" · ")}. Full material specifications to be added.</p> },
              { title: "Shipping & returns", body: <p>Placeholder — add your shipping times and return policy here.</p> },
              { title: "Care", body: <p>{careNotes.map((c) => c.body).join(" ")}</p> },
            ]}
          />
        </div>
      </div>

      {related.length > 0 && (
        <section className={`container ${styles.related}`} aria-labelledby="related-title">
          <Reveal>
            <h2 id="related-title" className="h2">
              You may also like
            </h2>
          </Reveal>
          <ul className={styles.relatedGrid}>
            {related.map((p) => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
