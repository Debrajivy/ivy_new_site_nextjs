import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workshop for Entrepreneurs | Ivy Professional School",
  description: "See how Ivy’s hands-on AI workshop helped 50 entrepreneurs identify 86 use cases, build 18 prototypes and launch 14 pilots.",
  alternates: { canonical: "https://ivyproschool.com/casestudies/ai-workshop-for-entrepreneurs" },
  openGraph: {
    title: "AI Workshop for Entrepreneurs | Ivy Professional School",
    description: "See how Ivy’s hands-on AI workshop helped 50 entrepreneurs identify 86 use cases, build 18 prototypes and launch 14 pilots.",
    url: "https://ivyproschool.com/casestudies/ai-workshop-for-entrepreneurs",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
