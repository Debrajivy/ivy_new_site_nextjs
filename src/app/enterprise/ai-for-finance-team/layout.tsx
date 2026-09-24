import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI for Finance | Ivy Professional School",
  description: "An applied enterprise AI program for finance teams covering productivity, reconciliation, reporting, controls, agents and governed automation.",
  keywords: ["AI for finance", "finance automation training", "finance reconciliation", "Microsoft 365 Copilot training", "enterprise AI training"],
  alternates: { canonical: "/enterprise/ai-for-finance-team" },
  openGraph: { title: "AI for Finance", description: "Practical, controlled AI learning for modern finance teams.", url: "/enterprise/ai-for-finance-team", type: "website" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
