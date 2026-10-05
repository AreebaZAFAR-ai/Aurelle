export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: string;
  cover: string;
  /** Large uppercase statement used on the article's opening band. */
  statement: [string, string];
  body: { heading?: string; paragraphs: string[]; image?: string }[];
};

const img = (name: string) => `/media/img/${name}.webp`;

export const posts: Post[] = [
  {
    slug: "the-art-of-layering-necklaces",
    title: "The Art of Layering Necklaces",
    excerpt: "Length, weight and spacing — a simple framework for building a layered neckline that looks intentional.",
    category: "Styling",
    date: "2026-09-18",
    readTime: "4 min read",
    cover: img("necklace-graduated-tennis-alt"),
    statement: ["Layered with", "intention"],
    body: [
      {
        paragraphs: [
          "A well-layered neckline looks effortless, but it rarely happens by accident. The difference between a tangle and a composition is usually spacing: each chain needs enough room to be read on its own.",
          "Start with the piece you love most and build around it. Everything else should support it rather than compete with it.",
        ],
      },
      {
        heading: "Vary the length",
        paragraphs: [
          "Leave roughly five centimetres between each layer. A choker or collar at the base of the neck, a mid-length chain at the collarbone, and a longer pendant below creates a natural cascade.",
        ],
        image: img("necklace-triple-row"),
      },
      {
        heading: "Mix weight, not everything",
        paragraphs: [
          "Pair one substantial piece — a tennis line or a pearl strand — with finer chains. Keeping metals consistent lets you play freely with texture and scale.",
          "When in doubt, remove one layer. Restraint is what makes the remaining pieces feel considered.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-perfect-ring",
    title: "How to Choose the Perfect Ring",
    excerpt: "Shape, setting and proportion: what to consider before choosing a ring you will wear every day.",
    category: "Guides",
    date: "2026-08-30",
    readTime: "5 min read",
    cover: img("ring-pave-dome"),
    statement: ["Shape, setting", "and proportion"],
    body: [
      {
        paragraphs: [
          "A ring is worn more than any other piece of jewelry, which makes proportion and comfort just as important as beauty.",
          "Before falling for a stone, consider how the ring will live on the hand day to day.",
        ],
      },
      {
        heading: "Consider the shape",
        paragraphs: [
          "Elongated shapes such as oval and emerald cuts lengthen the finger, while round and cushion shapes feel classic and soft. Try a few on — the right shape is usually obvious once it is on the hand.",
        ],
        image: img("ring-oval-halo"),
      },
      {
        heading: "Think about the setting",
        paragraphs: [
          "A halo makes the centre stone appear larger and adds brightness, while a simpler setting puts all the attention on the stone itself. Lower settings are easier to wear with gloves and knitwear.",
          "Finally, think about what it will sit beside. If you plan to stack, choose a band profile that leaves room for others.",
        ],
      },
    ],
  },
  {
    slug: "caring-for-pearls",
    title: "Caring for Pearls",
    excerpt: "Pearls are organic and softer than most gems. A few simple habits keep their lustre for decades.",
    category: "Care",
    date: "2026-08-12",
    readTime: "3 min read",
    cover: img("necklace-pearl-strand"),
    statement: ["Soft light,", "gentle care"],
    body: [
      {
        paragraphs: [
          "Pearls are formed rather than cut, which gives them their glow — and makes them more delicate than stones. They reward gentle, regular care.",
        ],
      },
      {
        heading: "Wear them often",
        paragraphs: [
          "Pearls benefit from being worn. Put them on last, after perfume and cosmetics, and wipe them with a soft, dry cloth before putting them away.",
        ],
        image: img("earring-pearl-cluster-alt"),
      },
      {
        heading: "Store them flat",
        paragraphs: [
          "Hanging a strand can stretch the silk over time. Lay pearls flat in a soft pouch, away from harder pieces that might scratch their surface.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
