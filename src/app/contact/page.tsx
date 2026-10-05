import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about a piece, an order or a custom request.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className={`container ${styles.page}`}>
      <Reveal className={styles.intro}>
        <h1 className="h1">Get in Touch</h1>
        <p className="muted">Questions about a piece, an order, or something made just for you — send a note and we&apos;ll reply.</p>
        <ul className={styles.info}>
          <li>
            <Icon name="mail" />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <Icon name="phone" />
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
          </li>
          <li>
            <Icon name="clock" />
            <span>{site.hours}</span>
          </li>
        </ul>
        <ul className={styles.socials}>
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                <Icon name={s.icon as IconName} size={16} />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1}>
        <ContactForm />
      </Reveal>
    </section>
  );
}
