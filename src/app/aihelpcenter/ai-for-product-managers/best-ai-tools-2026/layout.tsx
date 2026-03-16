import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best AI Tools for 2026 | AI For Product Managers | Ivy Pro School",
  description:
    "A complete guide to the best AI tools for 2026 — ChatGPT, Google Gemini, Claude, Microsoft Copilot, AI agents, and how to use AI strategically as a product manager.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
