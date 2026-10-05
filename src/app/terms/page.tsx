import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Service", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={[
        { heading: "Orders", body: "Set out how orders are placed, confirmed and paid for." },
        { heading: "Pricing", body: "Explain currency, taxes and how pricing errors are handled." },
        { heading: "Shipping & returns", body: "Summarise delivery times, return windows and the condition items must be returned in." },
        { heading: "Contact", body: "Tell customers how to reach you with questions about these terms." },
      ]}
    />
  );
}
