import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

const programs: Record<string, { title: string; audience: string }> = {
  "ai-for-finance-team": { title: "AI for Finance Team", audience: "finance leaders and teams" },
  "ai-for-hr-team": { title: "AI for HR Team", audience: "HR leaders and people teams" },
  "ai-for-sales": { title: "AI for Sales", audience: "sales leaders and revenue teams" },
  "ai-for-marketing": { title: "AI for Marketing", audience: "marketing leaders and growth teams" },
};

export function generateStaticParams() {
  return Object.keys(programs).map((program) => ({ program }));
}

export default async function EnterpriseProgramPage({ params }: { params: Promise<{ program: string }> }) {
  const { program } = await params;
  const item = programs[program];
  if (!item) notFound();

  return <>
    <Navbar />
    <main className="min-h-[72vh] bg-[radial-gradient(circle_at_80%_0,#135486_0,transparent_36%),linear-gradient(125deg,#06182b,#0a2c4d)] text-white">
      <div className="container mx-auto px-6 py-24 md:py-36">
        <p className="mb-5 text-xs font-black tracking-[0.2em] text-sky-300">ENTERPRISE AI CAPABILITY PROGRAM</p>
        <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">{item.title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">A customized, hands-on enterprise program designed for {item.audience}. Full program content and workshop photography will be added next.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="mailto:corporate@ivyproschool.com" className="inline-flex items-center gap-2 rounded-md bg-[#f7af34] px-6 py-4 font-bold text-[#071c33]">Discuss your program <ArrowRight size={18}/></a>
          <Link href="/enterprise" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-4 font-bold"><ArrowLeft size={18}/> Enterprise overview</Link>
        </div>
      </div>
    </main>
    <Footer />
  </>;
}
