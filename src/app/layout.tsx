import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/Providers";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/site";
import "./globals.css";

// Self-hosted (via @fontsource) so builds never depend on reaching Google Fonts.
const display = localFont({
  src: "../../node_modules/@fontsource/gentium-book-plus/files/gentium-book-plus-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-gentium",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "../../node_modules/@fontsource/familjen-grotesk/files/familjen-grotesk-latin-400-normal.woff2", weight: "400" },
    { path: "../../node_modules/@fontsource/familjen-grotesk/files/familjen-grotesk-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-familjen",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Fine Jewelry`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Fine Jewelry`,
    description: site.description,
    images: [{ url: "/media/img/editorial-emerald-noir.webp", width: 736, height: 910 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#090909",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Providers>
          <SmoothScroll />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
