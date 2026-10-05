"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { collections, type CollectionSlug } from "@/data/collections";
import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import styles from "./FilterableGrid.module.css";

type Sort = "featured" | "price-asc" | "price-desc" | "name";

type Props = {
  products: Product[];
  /** Max items shown before "Load more" (omit for no limit). */
  pageSize?: number;
  showSort?: boolean;
  showFilters?: boolean;
};

export function FilterableGrid({ products, pageSize, showSort = false, showFilters = true }: Props) {
  const [filter, setFilter] = useState<"all" | CollectionSlug>("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [visible, setVisible] = useState(pageSize ?? Infinity);

  const filtered = useMemo(() => {
    const list = filter === "all" ? [...products] : products.filter((p) => p.category === filter);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [products, filter, sort]);

  const shown = filtered.slice(0, visible);
  const tabs = [{ slug: "all" as const, name: "All" }, ...collections];

  return (
    <div>
      <div className={styles.controls}>
        {showFilters && (
        <div className={styles.filters} role="group" aria-label="Filter by category">
          {tabs.map((t) => (
            <button
              key={t.slug}
              className={styles.pill}
              aria-pressed={filter === t.slug}
              onClick={() => {
                setFilter(t.slug);
                setVisible(pageSize ?? Infinity);
              }}
            >
              {t.name}
            </button>
          ))}
        </div>
        )}
        {showSort && (
          <label className={styles.sort}>
            <span className="sr-only">Sort products</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to high</option>
              <option value="price-desc">Price: High to low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </label>
        )}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} of {filtered.length} products
      </p>

      <motion.ul layout className={styles.grid}>
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: Math.min(i, 6) * 0.03 }}
            >
              <ProductCard product={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {shown.length < filtered.length && (
        <div className={styles.more}>
          <button className="btn" onClick={() => setVisible((v) => v + (pageSize ?? 9))}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
