import type { CollectionSlug } from "./collections";

/**
 * Product catalog.
 * Names describe what is visible in each supplied photograph and are temporary.
 * PLACEHOLDER: prices are sample values — replace them, along with names and
 * descriptions, with your real catalogue data. Materials are intentionally not
 * stated; `details` lists only what can be seen in the imagery.
 */
export type Product = {
  slug: string;
  name: string;
  category: CollectionSlug;
  price: number;
  image: string;
  hoverImage?: string;
  description: string;
  details: string[];
  featured?: boolean;
};

const img = (name: string) => `/media/img/${name}.webp`;

export const products: Product[] = [
  // Rings
  {
    slug: "oval-halo-ring",
    name: "Oval Halo",
    category: "rings",
    price: 1290,
    image: img("ring-oval-halo"),
    description: "An oval centre stone framed by a halo of smaller stones, paired with a pavé band.",
    details: ["Finish: white tone", "Centre stone: oval, white", "Setting: halo with pavé band"],
    featured: true,
  },
  {
    slug: "emerald-cut-halo-ring",
    name: "Emerald-Cut Halo",
    category: "rings",
    price: 1490,
    image: img("ring-emerald-cut-halo"),
    description: "A step-cut centre stone held within a squared halo — architectural and quietly bold.",
    details: ["Finish: white tone", "Centre stone: emerald cut, white", "Setting: squared halo"],
  },
  {
    slug: "cushion-halo-ring",
    name: "Cushion Halo",
    category: "rings",
    price: 1190,
    image: img("ring-cushion-halo"),
    description: "A cushion-shaped cluster on a slim gold band, made to sit low and wear daily.",
    details: ["Finish: yellow tone band", "Centre: cushion cluster, white", "Band: slim, polished"],
  },
  {
    slug: "pave-dome-ring",
    name: "Pavé Dome",
    category: "rings",
    price: 1890,
    image: img("ring-pave-dome"),
    description: "A sculpted cocktail ring with rows of pavé stones rising into a soft dome.",
    details: ["Finish: white tone", "Stones: pavé, white", "Profile: domed statement"],
    featured: true,
  },
  {
    slug: "dainty-stacking-rings",
    name: "Dainty Stack",
    category: "rings",
    price: 390,
    image: img("ring-dainty-stack"),
    hoverImage: img("ring-gold-stack"),
    description: "Three slim bands — twisted, faceted and stone-set — designed to be worn together.",
    details: ["Finish: yellow tone", "Set of three bands", "Profiles: twist, bar, beaded"],
  },
  {
    slug: "gold-stacking-set",
    name: "Gold Stack",
    category: "rings",
    price: 420,
    image: img("ring-gold-stack"),
    hoverImage: img("ring-dainty-stack"),
    description: "A set of fine gold bands with beaded and studded textures for effortless layering.",
    details: ["Finish: yellow tone", "Set of bands", "Textures: beaded, studded"],
  },

  // Necklaces
  {
    slug: "graduated-tennis-necklace",
    name: "Graduated Tennis",
    category: "necklaces",
    price: 2190,
    image: img("necklace-graduated-tennis"),
    hoverImage: img("necklace-graduated-tennis-alt"),
    description: "A continuous line of round stones that gently increases in size toward the centre.",
    details: ["Finish: yellow tone", "Stones: round, graduated", "Style: tennis"],
    featured: true,
  },
  {
    slug: "triple-row-necklace",
    name: "Triple Row",
    category: "necklaces",
    price: 3490,
    image: img("necklace-triple-row"),
    hoverImage: img("necklace-triple-row-alt"),
    description: "Three rows of stones layered as one piece — a necklace with the presence of many.",
    details: ["Finish: white tone", "Stones: round, white", "Rows: three"],
    featured: true,
  },
  {
    slug: "diamond-fringe-necklace",
    name: "Fringe Drop",
    category: "necklaces",
    price: 2890,
    image: img("necklace-diamond-fringe"),
    description: "A collar of pear-shaped drops that falls to a single pendant at the centre.",
    details: ["Finish: white tone", "Stones: pear and round", "Style: fringe collar"],
  },
  {
    slug: "canary-drop-necklace",
    name: "Canary Drop",
    category: "necklaces",
    price: 2590,
    image: img("necklace-canary-drop"),
    description: "Mixed-cut white stones leading to a yellow pear-shaped drop.",
    details: ["Finish: white tone", "Drop: pear, yellow", "Line: mixed cuts"],
  },
  {
    slug: "emerald-collar-necklace",
    name: "Emerald Collar",
    category: "necklaces",
    price: 3290,
    image: img("necklace-emerald-collar"),
    description: "A double-row collar finished with a green pear-shaped drop.",
    details: ["Finish: white tone", "Drop: pear, green", "Rows: two"],
    featured: true,
  },
  {
    slug: "diamond-collar-necklace",
    name: "Bezel Collar",
    category: "necklaces",
    price: 1890,
    image: img("necklace-diamond-collar"),
    description: "Round bezel-set stones linked into a soft collar that sits at the base of the neck.",
    details: ["Finish: yellow tone", "Stones: round, bezel set", "Style: collar"],
  },
  {
    slug: "pearl-strand-necklace",
    name: "Pearl Strand",
    category: "necklaces",
    price: 649,
    image: img("necklace-pearl-strand"),
    hoverImage: img("necklace-double-pearl"),
    description: "A single strand of evenly matched pearls — the most timeless piece in any wardrobe.",
    details: ["Pearls: round, white", "Style: single strand"],
    featured: true,
  },
  {
    slug: "double-pearl-choker",
    name: "Double Pearl",
    category: "necklaces",
    price: 790,
    image: img("necklace-double-pearl"),
    hoverImage: img("necklace-pearl-strand"),
    description: "Two strands of pearls worn close, with a fine gold drop beneath.",
    details: ["Pearls: round, white", "Strands: two", "Accent: gold drop"],
  },
  {
    slug: "gold-drop-pendant",
    name: "Gold Drop",
    category: "necklaces",
    price: 480,
    image: img("necklace-gold-drop"),
    hoverImage: img("necklace-gold-drop-alt"),
    description: "A polished, softly rounded drop on a fine snake chain.",
    details: ["Finish: yellow tone", "Pendant: solid drop", "Chain: fine snake"],
  },
  {
    slug: "gold-teardrop-pendant",
    name: "Open Teardrop",
    category: "necklaces",
    price: 420,
    image: img("necklace-gold-teardrop"),
    description: "An open teardrop outline in gold, suspended from a delicate chain.",
    details: ["Finish: yellow tone", "Pendant: open teardrop"],
  },
  {
    slug: "fine-chain-necklace",
    name: "Fine Chain",
    category: "necklaces",
    price: 290,
    image: img("necklace-fine-chain"),
    description: "An almost-invisible chain with a scattering of tiny stones — made for every day.",
    details: ["Finish: rose tone", "Stones: small, station set"],
  },

  // Earrings
  {
    slug: "pearl-cluster-drops",
    name: "Pearl Cluster",
    category: "earrings",
    price: 690,
    image: img("earring-pearl-cluster"),
    hoverImage: img("earring-pearl-cluster-alt"),
    description: "A sparkling cluster top with a large pearl drop — evening-ready, yet light to wear.",
    details: ["Drop: round pearl", "Top: stone cluster"],
    featured: true,
  },
  {
    slug: "pear-diamond-drops",
    name: "Pear Drop",
    category: "earrings",
    price: 1290,
    image: img("earring-pear-drop"),
    description: "Princess, round and pear-shaped stones in a graceful vertical line.",
    details: ["Finish: white tone", "Stones: princess, round, pear"],
  },
  {
    slug: "pearl-studs",
    name: "Pearl Studs",
    category: "earrings",
    price: 290,
    image: img("earring-pearl-stud"),
    hoverImage: img("earring-pearl-stud-alt"),
    description: "Classic round pearl studs — the quiet foundation of any jewelry box.",
    details: ["Pearls: round, white", "Style: stud"],
  },
  {
    slug: "sculpted-twist-hoops",
    name: "Twist Hoops",
    category: "earrings",
    price: 360,
    image: img("earring-twist-hoop"),
    hoverImage: img("earring-twist-hoop-alt"),
    description: "Polished gold hoops with a sculptural twist that catches light from every angle.",
    details: ["Finish: yellow tone", "Style: twisted hoop"],
    featured: true,
  },
  {
    slug: "gold-knocker-earrings",
    name: "Gold Knocker",
    category: "earrings",
    price: 520,
    image: img("earring-gold-knocker"),
    description: "Chunky, organic gold links worn as a bold door-knocker drop.",
    details: ["Finish: yellow tone", "Style: link drop"],
  },
  {
    slug: "gold-flower-earrings",
    name: "Gold Flower",
    category: "earrings",
    price: 410,
    image: img("earring-gold-flower"),
    description: "Fluted gold petals around a pearl centre — a modern take on a vintage motif.",
    details: ["Finish: yellow tone", "Centre: pearl", "Motif: flower"],
  },
  {
    slug: "pave-huggie-hoops",
    name: "Pavé Huggie",
    category: "earrings",
    price: 590,
    image: img("earring-pave-huggie"),
    description: "Close-fitting hoops lined with pavé stones, designed to be stacked.",
    details: ["Finish: yellow tone", "Stones: pavé, white", "Style: huggie"],
  },

  // Bracelets
  {
    slug: "classic-tennis-bracelet",
    name: "Classic Tennis",
    category: "bracelets",
    price: 1690,
    image: img("bracelet-classic-tennis"),
    hoverImage: img("bracelet-classic-tennis-alt"),
    description: "A single, uninterrupted line of round stones — refined enough for every day.",
    details: ["Finish: white tone", "Stones: round, white", "Style: tennis"],
    featured: true,
  },
  {
    slug: "halo-tennis-bracelet",
    name: "Halo Tennis",
    category: "bracelets",
    price: 1490,
    image: img("bracelet-halo-tennis"),
    description: "Each stone wrapped in its own halo for a softer, more luminous line.",
    details: ["Finish: white tone", "Stones: round, halo set"],
  },
  {
    slug: "round-tennis-bracelet",
    name: "Round Tennis",
    category: "bracelets",
    price: 1390,
    image: img("bracelet-round-tennis"),
    description: "Larger round stones set close together for a bracelet with real presence.",
    details: ["Finish: white tone", "Stones: round, white"],
  },
  {
    slug: "sculptural-gold-cuffs",
    name: "Sculptural Cuffs",
    category: "bracelets",
    price: 890,
    image: img("bracelet-sculptural-cuffs"),
    description: "Broad, polished gold cuffs with a modern, architectural silhouette.",
    details: ["Finish: yellow tone", "Style: open cuff"],
    featured: true,
  },
  {
    slug: "gold-bangle-stack",
    name: "Bangle Stack",
    category: "bracelets",
    price: 560,
    image: img("bracelet-gold-bangles"),
    description: "A polished bangle and a beaded chain bracelet, styled as a pair.",
    details: ["Finish: yellow tone", "Set of two"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsIn = (category: CollectionSlug) => products.filter((p) => p.category === category);
export const featuredProducts = products.filter((p) => p.featured);
export const relatedTo = (product: Product, count = 3) =>
  products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, count);
