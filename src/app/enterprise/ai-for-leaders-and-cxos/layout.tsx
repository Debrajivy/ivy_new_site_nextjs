import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI for Leaders & CXOs Training Program | Ivy Professional School",
  description: "Practical AI training for CXOs and senior leaders covering GenAI, AI agents, responsible AI, business use cases, adoption strategy and measurable enterprise outcomes.",
  keywords: ["AI for leaders", "AI for CXOs", "executive AI training", "enterprise AI training", "generative AI for business leaders", "AI leadership program"],
  alternates: { canonical: "/enterprise/ai-for-leaders-and-cxos" },
  openGraph: {
    title: "AI for Leaders & CXOs Training Program",
    description: "Equip senior leaders to evaluate, apply and scale AI responsibly through practical, business-focused enterprise training.",
    url: "/enterprise/ai-for-leaders-and-cxos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Leaders & CXOs Training Program",
    description: "Practical enterprise AI training for senior leaders, CXOs and decision-makers.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
