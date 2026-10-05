import Link from "next/link";
import { collections } from "@/data/collections";
import { productsIn } from "@/data/products";
import styles from "./MegaMenu.module.css";

export function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className={styles.panel}>
      <ul className={styles.grid}>
        {collections.map((c) => (
          <li key={c.slug}>
            <Link href={`/collections/${c.slug}`} className={styles.card} onClick={onNavigate}>
              <img src={c.cover} alt="" loading="lazy" />
              <span className={styles.label}>
                <span>{c.name}</span>
                <span>( {productsIn(c.slug).length} )</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/shop" className={styles.all} onClick={onNavigate}>
        View all products
      </Link>
    </div>
  );
}
