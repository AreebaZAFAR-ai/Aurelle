"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { useCart } from "@/components/cart/CartProvider";
import { primaryNav, secondaryNav, site } from "@/lib/site";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const { count, open: openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const showMega = () => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const hideMega = () => {
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 160);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const filmHero = pathname === "/" || pathname === "/shop" || pathname === "/blog" || pathname.startsWith("/collections");
  const transparent = filmHero && !scrolled && !megaOpen;

  return (
    <>
      <header
        className={styles.header}
        data-transparent={transparent || undefined}
        data-hidden={(hidden && !megaOpen && !mobileOpen) || undefined}
        onMouseLeave={hideMega}
      >
        <div className={styles.bar}>
          <nav className={styles.left} aria-label="Primary">
            <ul>
              {primaryNav.map((item) => (
                <li key={item.href} onMouseEnter={"mega" in item ? showMega : () => setMegaOpen(false)}>
                  <Link
                    href={item.href}
                    className={styles.link}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onFocus={"mega" in item ? showMega : undefined}
                    aria-expanded={"mega" in item ? megaOpen : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button className={styles.menuBtn} onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Icon name="menu" size={22} />
            <span>Menu</span>
          </button>

          <Link href="/" className={styles.logo} aria-label={`${site.name} — home`} onMouseEnter={() => setMegaOpen(false)}>
            <Logo />
          </Link>

          <nav className={styles.right} aria-label="Secondary" onMouseEnter={() => setMegaOpen(false)}>
            <ul>
              {secondaryNav.map((item) => (
                <li key={item.href} className={styles.hideMobile}>
                  <Link href={item.href} className={styles.link} aria-current={isActive(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button className={styles.link} onClick={openCart} aria-label={`Open cart, ${count} items`}>
                  <span className={styles.hideMobile}>My Cart {count}</span>
                  <span className={styles.cartIcon}>
                    <Icon name="cart" size={20} />
                    {count > 0 && <span className={styles.badge}>{count}</span>}
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <AnimatePresence>
          {megaOpen && (
            <motion.div
              className={styles.megaWrap}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={showMega}
            >
              <MegaMenu onNavigate={() => setMegaOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
