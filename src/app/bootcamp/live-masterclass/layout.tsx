import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://ivyproschool.com/bootcamp/live-masterclass" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
