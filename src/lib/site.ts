/**
 * Brand configuration.
 * Brand name: Aurelle. PLACEHOLDER: the contact details and socials below are temporary —
 * replace them with your real brand information. Everything on the site reads from here.
 */
export const site = {
  name: "Aurelle",
  tagline: "Fine jewelry, considered.",
  description:
    "Rings, necklaces, earrings and bracelets — an edited collection of fine jewelry made to be worn every day and kept for a lifetime.",
  url: "https://example.com",
  established: "EST. 2026",
  email: "hello@example.com",
  phone: "+1 (555) 000-0000",
  hours: "Monday – Friday",
  socials: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" },
  ],
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/shop", mega: true },
  { label: "Collections", href: "/collections" },
  { label: "Blog", href: "/blog" },
] as const;

export const secondaryNav = [
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
