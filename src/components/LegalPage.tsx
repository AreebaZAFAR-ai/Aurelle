export function LegalPage({ title, sections }: { title: string; sections: { heading: string; body: string }[] }) {
  return (
    <article
      className="container"
      style={{ maxWidth: 820, paddingTop: "calc(var(--header-h) + clamp(48px, 7vw, 110px))", paddingBottom: "var(--section)" }}
    >
      <h1 className="h1" style={{ marginBottom: 16 }}>
        {title}
      </h1>
      <p className="muted" style={{ marginBottom: 48, fontSize: "var(--fs-small)" }}>
        Placeholder text — replace with your own policy, reviewed by a qualified professional.
      </p>
      <div style={{ display: "grid", gap: 32 }}>
        {sections.map((s) => (
          <section key={s.heading} style={{ display: "grid", gap: 10 }}>
            <h2 className="h3">{s.heading}</h2>
            <p style={{ color: "#d4ccbf" }}>{s.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
