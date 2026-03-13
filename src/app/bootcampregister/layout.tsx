import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register for Bootcamp | Live AI & Excel Workshop | Ivy Pro School",
  description:
    "Secure your spot in Ivy Pro School's live Excel & AI Agent Bootcamp. 2-day certified workshop covering AI automation, Excel advanced techniques, and hands-on AI agent building.",
  openGraph: {
    title: "Register for Bootcamp | Live AI & Excel Workshop | Ivy Pro School",
    description:
      "Register now for Ivy Pro School's live Excel & AI Agent Bootcamp. 2-day certified workshop — limited spots available.",
    url: "https://ivyproschool.com/bootcampregister",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Register for Bootcamp | Ivy Pro School",
    description:
      "Secure your spot in Ivy's live Excel & AI Agent Bootcamp. 2-day certified workshop — limited seats.",
    site: "@IvyProSchool",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  alternates: { canonical: "https://ivyproschool.com/bootcampregister" },
};

export default function BootcampRegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
