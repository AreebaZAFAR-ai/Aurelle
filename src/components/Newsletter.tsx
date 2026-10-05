"use client";

import { useId, useState } from "react";
import styles from "./Newsletter.module.css";

/** TODO: connect to your email provider — submissions are not stored yet. */
export function Newsletter() {
  const id = useId();
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p role="status" className={styles.done}>
        Thank you. Sign-ups will be collected once a newsletter provider is connected.
      </p>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input id={id} type="email" required placeholder="Your email" autoComplete="email" className={styles.input} />
      <button type="submit" className={styles.btn}>
        Subscribe
      </button>
    </form>
  );
}
