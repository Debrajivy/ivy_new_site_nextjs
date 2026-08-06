import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harness Engineering in AI: A Guide to Reliable AI Agents",
  description: "Learn how AI agent harnesses combine context, tools, memory, controls and evaluation to turn capable models into reliable systems.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
