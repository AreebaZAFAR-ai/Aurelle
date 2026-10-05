"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@/components/Icon";
import styles from "./Accordion.module.css";

type Item = { title: string; body: React.ReactNode };

/** Reference FAQ: sand rows, burgundy square toggle; the open row turns burgundy. */
export function Accordion({ items, numbered = false, variant = "faq" }: { items: Item[]; numbered?: boolean; variant?: "faq" | "plain" }) {
  const [open, setOpen] = useState<number | null>(variant === "faq" ? 0 : null);
  const base = useId();

  return (
    <ul className={styles.list} data-variant={variant}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        return (
          <li key={item.title} className={styles.item} data-open={isOpen || undefined}>
            <h3>
              <button
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>
                  {numbered && `${i + 1}. `}
                  {item.title}
                </span>
                <span className={styles.toggle} aria-hidden="true">
                  <Icon name={isOpen ? "minus" : "plus"} size={16} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  className={styles.panel}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={styles.body}>{item.body}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
