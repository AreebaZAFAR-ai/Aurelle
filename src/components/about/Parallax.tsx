"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Moves its children vertically against the scroll — used for the reference's drifting image cards. */
export function Parallax({
  children,
  distance = 120,
  className,
  style,
}: {
  children: React.ReactNode;
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </motion.div>
  );
}

/** A line of oversized type that slides horizontally as the band crosses the viewport. */
export function SlidingLine({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-35%"]);
  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.p className={className} style={{ x, whiteSpace: "nowrap" }} aria-hidden="true">
        {text} · {text} · {text}
      </motion.p>
    </div>
  );
}
