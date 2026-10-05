/**
 * Editorial content.
 * PLACEHOLDER: testimonials and FAQ answers are sample copy that mirrors the
 * structure of the reference. Replace them with genuine customer reviews and
 * your real policies before publishing — do not ship invented reviews.
 */

export type Testimonial = { name: string; role: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: "Customer name",
    role: "Placeholder review",
    quote: "Replace this with a real customer review — a sentence or two about the piece and how it felt to receive it.",
  },
  {
    name: "Customer name",
    role: "Placeholder review",
    quote: "Short, specific reviews read best here: what they bought, the moment they wore it, and the detail they loved.",
  },
  {
    name: "Customer name",
    role: "Placeholder review",
    quote: "Keep each quote under forty words so the layout stays calm and the typography can breathe.",
  },
  {
    name: "Customer name",
    role: "Placeholder review",
    quote: "Four reviews work well in this section; the numbered list on the left switches between them.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do you offer custom designs?",
    a: "Placeholder answer — describe whether you take custom or personalised commissions and how a client should get in touch.",
  },
  {
    q: "What materials do you use?",
    a: "Placeholder answer — list the metals, stones and finishes used across the collection.",
  },
  {
    q: "How long does shipping take?",
    a: "Placeholder answer — add your processing time and delivery estimates by region.",
  },
  {
    q: "Do you offer repairs or resizing?",
    a: "Placeholder answer — explain your aftercare, resizing and repair options.",
  },
  {
    q: "What is your return policy?",
    a: "Placeholder answer — state your return window and the condition items must be returned in.",
  },
];

/** Jewelry-care guidance shown on the About page. General advice only. */
export const careNotes = [
  { title: "Last on, first off", body: "Put jewelry on after perfume, lotion and hairspray, and take it off before washing or exercise." },
  { title: "Store apart", body: "Keep pieces separately in soft pouches so stones and chains never rub against one another." },
  { title: "Clean gently", body: "A soft cloth and lukewarm water with a drop of mild soap is all most pieces ever need." },
];
