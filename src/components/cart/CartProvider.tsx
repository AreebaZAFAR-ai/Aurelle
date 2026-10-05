"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProduct, type Product } from "@/data/products";

type Line = { slug: string; qty: number };
type CartLine = Line & { product: Product };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "cart.v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Line[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = useCallback((slug: string, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((l) => l.slug === slug);
      return found
        ? prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l))
        : [...prev, { slug, qty }];
    });
    setOpen(true);
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((l) => l.slug !== slug) : prev.map((l) => (l.slug === slug ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback((slug: string) => setItems((prev) => prev.filter((l) => l.slug !== slug)), []);

  const value = useMemo<CartContextValue>(() => {
    const lines = items
      .map((l) => ({ ...l, product: getProduct(l.slug) }))
      .filter((l): l is CartLine => Boolean(l.product));
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
      isOpen,
      open: () => setOpen(true),
      close: () => setOpen(false),
      add,
      setQty,
      remove,
    };
  }, [items, isOpen, add, setQty, remove]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
