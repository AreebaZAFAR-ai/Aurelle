import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { heading: "Information we collect", body: "Describe the personal information you collect, such as contact details submitted through forms and order information." },
        { heading: "How we use it", body: "Explain how this information is used — for example to fulfil orders, respond to enquiries and send updates people have opted into." },
        { heading: "Cookies", body: "List any cookies or analytics tools the site uses and how visitors can control them." },
        { heading: "Your rights", body: "Explain how people can access, correct or delete their information, and how to contact you." },
      ]}
    />
  );
}
