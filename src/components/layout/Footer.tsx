import Link from "next/link";
import { LazyVideo } from "@/components/LazyVideo";
import { Wordmark } from "@/components/Logo";
import { Newsletter } from "@/components/Newsletter";
import { collections } from "@/data/collections";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Shop all", href: "/shop" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <ul className={styles.col}>
          {pages.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="link-underline">
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.col}>
          {collections.map((c) => (
            <li key={c.slug}>
              <Link href={`/collections/${c.slug}`} className="link-underline">
                Product - {c.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/collections" className="link-underline">
              Collections
            </Link>
          </li>
        </ul>

        <div className={styles.news}>
          <h2 className={styles.newsTitle}>Stay Connected</h2>
          <p>New releases, collections and selected brand updates.</p>
          <Newsletter />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.film}>
          <LazyVideo src="/media/video/footer-jewelry.mp4" poster="/media/video/footer-jewelry-poster.jpg" />
        </div>
        <div className={styles.word} aria-hidden="true">
          <Wordmark tracking={0.06} />
        </div>
        <div className={`container ${styles.legal}`}>
          <p>© 2026 {site.name}. All rights reserved.</p>
          <ul>
            <li>
              <Link href="/privacy" className="link-underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="link-underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
