import type { HeroPanel } from "@/components/home/Hero";

/** The high-quality films, by subject, for page heroes. */
const film = (name: string): HeroPanel => ({ src: `/media/video/${name}.mp4`, poster: `/media/video/${name}-poster.jpg` });

export const films = {
  earcuff: film("hero-earcuff"),
  riviera: film("hero-riviera"),
  evening: film("hero-evening"),
  vault: film("vault"),
  sparkle: film("sparkle"),
  tennis: film("tennis-home"),
};
