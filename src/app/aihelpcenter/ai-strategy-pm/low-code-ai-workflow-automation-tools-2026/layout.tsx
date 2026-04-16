import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Low-Code AI Workflow Automation Tools in 2026 + How to Implement Them | AI Strategy (PM) | Ivy Pro School",
  description:
    "Discover the top low-code AI workflow automation tools in 2026 — Zapier, Make, n8n, Power Automate, Vellum AI and more. Learn how to implement AI workflows step by step with real use cases.",
  openGraph: {
    title: "Top Low-Code AI Workflow Automation Tools in 2026 + How to Implement Them",
    description:
      "Discover the top low-code AI workflow automation tools in 2026 — Zapier, Make, n8n, Power Automate, Vellum AI and more. Learn how to implement AI workflows step by step with real use cases.",
    url: "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/low-code-ai-workflow-automation-tools-2026",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Low-Code AI Workflow Automation Tools in 2026 + How to Implement Them",
    description:
      "Zapier, Make, n8n, Power Automate, Vellum AI — discover the best low-code AI workflow tools and learn how to build your first AI workflow step by step.",
  },
  alternates: {
    canonical:
      "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/low-code-ai-workflow-automation-tools-2026",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
