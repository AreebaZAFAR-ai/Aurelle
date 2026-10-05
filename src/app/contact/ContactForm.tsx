"use client";

import { useState } from "react";
import { collections } from "@/data/collections";
import styles from "./contact.module.css";

/** TODO: connect to your form backend or email service — submissions are not sent yet. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={styles.form} role="status">
        <p className="h3">Thank you.</p>
        <p className="muted">This form isn&apos;t connected to an inbox yet — link a form service to receive messages.</p>
      </div>
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
      <div className="field">
        <label htmlFor="c-name">First Name</label>
        <input id="c-name" name="name" className="input" placeholder="First Name" autoComplete="given-name" required />
      </div>
      <div className="field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" className="input" placeholder="jane@example.com" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="c-phone">Phone Number</label>
        <input id="c-phone" name="phone" type="tel" className="input" placeholder="+1 (555) 000-0000" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="c-date">Date</label>
        <input id="c-date" name="date" type="date" className="input" />
      </div>
      <div className="field">
        <label htmlFor="c-subject">Subject</label>
        <select id="c-subject" name="subject" className="input" defaultValue="Custom order">
          <option>Custom order</option>
          <option>Product question</option>
          <option>Order support</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="c-interest">Interested in</label>
        <select id="c-interest" name="interest" className="input" defaultValue="">
          <option value="">Any collection</option>
          {collections.map((c) => (
            <option key={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>
      <div className={`field ${styles.full}`}>
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" name="message" className="input" placeholder="Tell us a little about what you're looking for" required />
      </div>
      <div className={styles.full}>
        <button type="submit" className="btn">
          Send Message
        </button>
      </div>
    </form>
  );
}
