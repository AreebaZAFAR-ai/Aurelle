import type { MetadataRoute } from "next";
import { collections } from "@/data/collections";
import { posts } from "@/data/posts";
import { products } from "@/data/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/shop",
    "/collections",
    "/about",
    "/blog",
    "/contact",
    ...collections.map((c) => `/collections/${c.slug}`),
    ...products.map((p) => `/product/${p.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
