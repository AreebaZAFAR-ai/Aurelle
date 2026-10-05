import Link from "next/link";
import { formatDate, type Post } from "@/data/posts";
import styles from "./Blog.module.css";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug}`} className={styles.cardMedia} tabIndex={-1} aria-hidden="true">
        <img src={post.cover} alt="" loading="lazy" />
      </Link>
      <p className={styles.meta}>
        <span>{post.category}</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <h3 className="h3">
        <Link href={`/blog/${post.slug}`} className={styles.cardTitle}>
          {post.title}
        </Link>
      </h3>
      <p className="muted" style={{ fontSize: "var(--fs-small)" }}>
        {post.excerpt}
      </p>
    </article>
  );
}
