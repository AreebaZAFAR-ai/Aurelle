"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { scrollLock } from "@/components/SmoothScroll";
import { collections } from "@/data/collections";
import { site } from "@/lib/site";
import styles from "./MobileMenu.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop all", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    scrollLock.lock();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      scrollLock.unlock();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className={styles.top}>
            <button onClick={onClose} className={styles.close} aria-label="Close menu" autoFocus>
              <Icon name="close" size={22} />
              <span>Close</span>
            </button>
            <span className={styles.logo}>
              <Logo />
            </span>
            <span />
          </div>

          <nav className={styles.nav} aria-label="Mobile">
            <ul>
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={l.href} onClick={onClose}>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.ul
            className={styles.collections}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            {collections.map((c) => (
              <li key={c.slug}>
                <Link href={`/collections/${c.slug}`} onClick={onClose}>
                  <img src={c.cover} alt="" loading="lazy" />
                  <span>{c.name}</span>
                </Link>
              </li>
            ))}
          </motion.ul>

          <p className={styles.foot}>{site.email}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
