import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        placeContent: "center",
        justifyItems: "center",
        gap: 24,
        textAlign: "center",
        background: "var(--ink)",
        color: "var(--gold)",
        padding: "var(--header-h) var(--gutter) 0",
      }}
    >
      <p style={{ color: "#e3dbcd", fontSize: "var(--fs-small)" }}>404</p>
      <h1 className="display-hero">This Piece Has Gone Missing</h1>
      <Link href="/" className="btn btn--light">
        Return home
      </Link>
    </section>
  );
}
