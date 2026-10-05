import { Icon } from "@/components/Icon";
import type { Testimonial } from "@/data/content";
import styles from "./About.module.css";

/** Reference: a dark band of cream review cards drifting sideways, one highlighted in burgundy. */
export function TestimonialMarquee({ items }: { items: Testimonial[] }) {
  const loop = [...items, ...items];
  return (
    <div className={styles.marquee}>
      <ul className={styles.marqueeTrack}>
        {loop.map((t, i) => (
          <li key={i} className={styles.review} data-accent={i % items.length === 2 || undefined} aria-hidden={i >= items.length || undefined}>
            <span className={styles.reviewStars} aria-label="Five stars">
              {Array.from({ length: 5 }, (_, s) => (
                <Icon key={s} name="star" size={12} />
              ))}
            </span>
            <p>{t.quote}</p>
            <div>
              <p className={styles.reviewName}>{t.name}</p>
              <p className={styles.reviewRole}>{t.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
