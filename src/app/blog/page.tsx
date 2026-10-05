import type { Metadata } from "next";
import styles from "@/components/blog/Blog.module.css";
import { PostCard } from "@/components/blog/PostCard";
import { Hero } from "@/components/home/Hero";
import { editorial as e } from "@/data/editorial";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Journal",
  description: "Styling notes, buying guides and jewelry care.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Hero
        panels={[
          { images: [e.sculptedGold, e.pearlPendant] },
          { images: [e.layeredPearls, e.pearlChoker, e.pearlDrop] },
          { images: [e.eveningPearls, e.stackedRings] },
        ]}
        sideLeft="Journal"
        eyebrow="Blog"
        title={
          <>
            Notes on Wearing
            <br />
            and Keeping Jewelry
          </>
        }
      />
      <section className="section container">
        <Reveal>
          <h2 className="h1" style={{ textAlign: "center", marginBottom: "clamp(40px, 4vw, 64px)" }}>
            From the Journal
          </h2>
        </Reveal>
        <ul className={styles.grid}>
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.08}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
