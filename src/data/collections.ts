import type { HeroPanel } from "@/components/home/Hero";
import { films } from "@/data/films";

export type CollectionSlug = "rings" | "necklaces" | "earrings" | "bracelets";

export type Collection = {
  slug: CollectionSlug;
  name: string;
  headline: string;
  intro: string;
  cover: string;
  /** The three hero films; the centre one is this collection's own. */
  heroPanels: HeroPanel[];
  heroImage: string;
};

export const collections: Collection[] = [
  {
    slug: "rings",
    name: "Rings",
    headline: "Made for the Hand",
    intro: "Solitaires, halos and stacking bands — pieces for the hand that are meant to be noticed.",
    cover: "/media/img/ring-oval-halo.webp",
    heroPanels: [films.earcuff, films.vault, films.sparkle],
    heroImage: "/media/img/ring-pave-dome.webp",
  },
  {
    slug: "necklaces",
    name: "Necklaces",
    headline: "Close to the Collarbone",
    intro: "From fine chains to graduated tennis lines, necklaces that sit close and catch the light.",
    cover: "/media/img/necklace-tennis-bow.webp",
    heroPanels: [films.evening, films.tennis, films.vault],
    heroImage: "/media/img/necklace-triple-row.webp",
  },
  {
    slug: "earrings",
    name: "Earrings",
    headline: "To Frame the Face",
    intro: "Pearls, drops and sculpted gold — earrings that frame the face with quiet confidence.",
    cover: "/media/img/earring-pearl-cluster.webp",
    heroPanels: [films.sparkle, films.earcuff, films.evening],
    heroImage: "/media/img/earring-gold-knocker.webp",
  },
  {
    slug: "bracelets",
    name: "Bracelets",
    headline: "Worn Every Day",
    intro: "Tennis lines, cuffs and bangles to be worn alone or layered without a second thought.",
    cover: "/media/img/bracelet-classic-tennis.webp",
    heroPanels: [films.tennis, films.riviera, films.earcuff],
    heroImage: "/media/img/bracelet-sculptural-cuffs.webp",
  },
];

export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
