import type { Metadata } from "next";
import Index from "@/pages/Index";


export default function Home() {
  return (
    <Index/>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "https://ivyproschool.com/" },
};
