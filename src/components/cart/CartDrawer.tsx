"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@/components/Icon";
import { scrollLock } from "@/components/SmoothScroll";
import { formatPrice } from "@/lib/site";
import { useCart } from "./CartProvider";
import styles from "./CartDrawer.module.css";

export function CartDrawer() {
  const { isOpen, close, lines, subtotal, setQty, remove } = useCart();
  const [note, setNote] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    scrollLock.lock();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      scrollLock.unlock();
      window.removeEventListener("keydown", onKey);
      setNote(false);
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.scrim}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.aside
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            data-lenis-prevent
          >
            <div className={styles.head}>
              <p>{lines.length ? `Your cart (${lines.reduce((n, l) => n + l.qty, 0)})` : "Your cart is empty"}</p>
              <button onClick={close} aria-label="Close cart" autoFocus>
                <Icon name="close" size={18} />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className={styles.empty}>
                <p className="h3">Nothing here yet.</p>
                <Link href="/shop" className="btn" onClick={close}>
                  Shop the collection
                </Link>
              </div>
            ) : (
              <>
                <ul className={styles.lines}>
                  {lines.map(({ slug, qty, product }) => (
                    <li key={slug} className={styles.line}>
                      <Link href={`/product/${slug}`} onClick={close} className={styles.thumb}>
                        <img src={product.image} alt={product.name} />
                      </Link>
                      <div className={styles.info}>
                        <div className={styles.row}>
                          <Link href={`/product/${slug}`} onClick={close} className={styles.name}>
                            {product.name}
                          </Link>
                          <span>{formatPrice(product.price * qty)}</span>
                        </div>
                        <p className="muted" style={{ fontSize: "var(--fs-micro)", textTransform: "capitalize" }}>
                          {product.category}
                        </p>
                        <div className={styles.row}>
                          <div className={styles.qty}>
                            <button onClick={() => setQty(slug, qty - 1)} aria-label={`Decrease ${product.name} quantity`}>
                              <Icon name="minus" size={14} />
                            </button>
                            <span aria-live="polite">{qty}</span>
                            <button onClick={() => setQty(slug, qty + 1)} aria-label={`Increase ${product.name} quantity`}>
                              <Icon name="plus" size={14} />
                            </button>
                          </div>
                          <button className={styles.remove} onClick={() => remove(slug)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className={styles.foot}>
                  <div className={styles.row}>
                    <span>Subtotal</span>
                    <span className={styles.total}>{formatPrice(subtotal)}</span>
                  </div>
                  <p className="muted" style={{ fontSize: "var(--fs-micro)" }}>
                    Shipping and taxes calculated at checkout.
                  </p>
                  <button className="btn btn--block" onClick={() => setNote(true)}>
                    Checkout
                  </button>
                  {note && (
                    <p role="status" className="muted" style={{ fontSize: "var(--fs-micro)" }}>
                      Checkout isn&apos;t connected yet — link your payment provider to enable it.
                    </p>
                  )}
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
