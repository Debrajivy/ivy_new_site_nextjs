import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI for Sales & MIS Automation | Ivy Professional School",
  description: "A customized enterprise AI program that helps Sales and MIS teams automate recurring reporting, reconciliation, analysis and follow-up workflows with responsible AI and Microsoft 365 Copilot.",
  keywords: ["AI for sales", "MIS automation", "sales automation training", "Microsoft 365 Copilot training", "enterprise AI training"],
  alternates: { canonical: "/enterprise/ai-for-sales" },
  openGraph: {
    title: "AI for Sales & MIS Automation",
    description: "Turn recurring Sales and MIS work into structured, refreshable workflows with practical enterprise AI training.",
    url: "/enterprise/ai-for-sales",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Sales & MIS Automation",
    description: "Practical AI and Microsoft 365 Copilot training for Sales and MIS teams.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
