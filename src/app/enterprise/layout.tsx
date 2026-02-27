import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Training Solutions | AI, Data Science & Leadership | Ivy Pro School",
  description:
    "Upskill your workforce with Ivy Pro School's enterprise training programs in GenAI, Data Science, Analytics, and Leadership. Trusted by 40+ Fortune 500 clients. Custom L&D solutions for teams.",
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
