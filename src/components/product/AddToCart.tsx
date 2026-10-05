"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { useCart } from "@/components/cart/CartProvider";
import styles from "./ProductDetail.module.css";

export function AddToCart({ slug, name }: { slug: string; name: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className={styles.buy}>
      <div className={styles.qty}>
        <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
          <Icon name="minus" size={14} />
        </button>
        <output aria-live="polite" aria-label="Quantity">
          {qty}
        </output>
        <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
          <Icon name="plus" size={14} />
        </button>
      </div>
      <button className="btn" style={{ flex: 1 }} onClick={() => add(slug, qty)} aria-label={`Add ${qty} ${name} to cart`}>
        <Icon name="cart" size={16} />
        Add to Cart
      </button>
    </div>
  );
}
