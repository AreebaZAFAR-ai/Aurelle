"use client";

import { MotionConfig } from "motion/react";
import { CartProvider } from "@/components/cart/CartProvider";

/** Client-side providers. `reducedMotion="user"` drops transform animations for users who ask for less motion. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <CartProvider>{children}</CartProvider>
    </MotionConfig>
  );
}
