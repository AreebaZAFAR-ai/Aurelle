import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleHero } from "@/components/blog/ArticleHero";
import styles from "@/components/blog/Blog.module.css";
import { PostCard } from "@/components/blog/PostCard";
import { Reveal } from "@/components/Reveal";
import { formatDate, getPost, posts } from "@/data/posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date, images: [post.cover] },
  };
}

export default async function PostPage({ params }: Params) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <ArticleHero lines={post.statement} image={post.cover} />

      <article className={styles.article}>
        <Reveal className={styles.articleHead}>
          <p className="eyebrow">
            {post.category} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
          </p>
          <h2 className="h1">{post.title}</h2>
          <p className="muted" style={{ maxWidth: "52ch" }}>
            {post.excerpt}
          </p>
        </Reveal>
        <div className={styles.prose}>
          {post.body.map((block, i) => (
            <Reveal key={i}>
              {block.heading && <h2 className="h2">{block.heading}</h2>}
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} style={{ marginTop: 18 }}>
                  {p}
                </p>
              ))}
              {block.image && (
                <figure>
                  <img src={block.image} alt="" loading="lazy" />
                </figure>
              )}
            </Reveal>
          ))}
        </div>
        <p style={{ marginTop: 48 }}>
          <Link href="/blog" className="link-underline">
            ← Back to the journal
          </Link>
        </p>
      </article>

      <section className="container" style={{ paddingBottom: "var(--section)" }} aria-labelledby="more-title">
        <h2 id="more-title" className="h2" style={{ marginBottom: 32 }}>
          Keep reading
        </h2>
        <ul className={styles.grid}>
          {more.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
