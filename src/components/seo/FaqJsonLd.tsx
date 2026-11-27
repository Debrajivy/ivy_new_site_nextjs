import { FAQ_SCHEMA_HOLD } from "@/lib/faq-schema-hold";

/**
 * FAQPage JSON-LD built from the same question/answer data that renders the visible FAQ,
 * so the schema always matches the page word for word (SEO-012).
 * Answers on the hold list (src/lib/faq-schema-hold.ts) are left out of the schema until
 * marketing approves their wording; they stay visible on the page.
 * Render it once per page, next to the FAQ it describes. Outputs nothing for an empty list.
 */
export type FaqItem = { question: string; answer: string };

type FaqPageNode = {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: { "@type": "Question"; name: string; acceptedAnswer: { "@type": "Answer"; text: string } }[];
};

export function faqPageSchema(items: readonly FaqItem[]): FaqPageNode {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export default function FaqJsonLd({ items }: { items: readonly FaqItem[] }) {
  const approved = items.filter((f) => !FAQ_SCHEMA_HOLD.has(f.answer));
  if (!approved.length) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(approved)).replace(/</g, "\\u003c") }}
    />
  );
}
