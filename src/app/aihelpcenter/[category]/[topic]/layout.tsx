import type { Metadata } from "next";
import { data } from "../../lib/data";

export async function generateMetadata(
  { params }: { params: Promise<{ category: string; topic: string }> }
): Promise<Metadata> {
  const { category, topic } = await params;

  const categoryData = data.categories[category as keyof typeof data.categories];
  if (!categoryData) {
    return { title: "AI Help Center | Ivy Pro School" };
  }

  // Search for the topic across all subcategories
  for (const subcat of Object.values(categoryData.subcategories ?? {})) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const found = (subcat as any).topics?.find((t: any) => t.id === topic);
    if (found) {
      return {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        title: (found as any).metaTitle ?? `${found.title} | Ivy Pro School`,
        description: found.description,
      };
    }
  }

  return { title: "AI Help Center | Ivy Pro School" };
}

export default function TopicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
