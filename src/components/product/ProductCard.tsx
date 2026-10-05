"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/site";
import styles from "./ProductCard.module.css";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { add } = useCart();
  const href = `/product/${product.slug}`;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Link href={href} tabIndex={-1} aria-hidden="true" className={styles.imageLink}>
          <img
            src={product.image}
            alt=""
            loading={priority ? "eager" : "lazy"}
            className={styles.primary}
          />
          {product.hoverImage && <img src={product.hoverImage} alt="" loading="lazy" className={styles.secondary} />}
        </Link>
        <button className={styles.quick} onClick={() => add(product.slug)} aria-label={`Quick add ${product.name} to cart`}>
          Quick Add
        </button>
      </div>
      <div className={styles.meta}>
        <h3 className={styles.name}>
          <Link href={href}>{product.name}</Link>
        </h3>
        <p className={styles.price}>{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
