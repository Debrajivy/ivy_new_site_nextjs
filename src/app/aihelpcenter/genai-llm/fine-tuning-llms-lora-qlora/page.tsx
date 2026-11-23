import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import ArticleReviewProgress from "@/components/helpcenter/ArticleReviewProgress";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/fine-tuning-llms-lora-qlora";
const title = "LoRA and QLoRA Fine-Tuning for LLMs | Ivy Pro School";
const headline = "Fine-Tuning LLMs with LoRA and QLoRA: A Practical Guide";
const description =
  "LoRA and QLoRA fine-tuning explained: when to fine-tune vs prompt or RAG, rank and alpha, 4-bit NF4, data prep, GPU memory and Hugging Face TRL code.";
const keywords = [
  "lora qlora fine tuning",
  "fine-tuning llms",
  "lora rank alpha",
  "qlora nf4",
  "hugging face peft",
  "trl sfttrainer",
  "parameter efficient fine tuning",
  "gpu memory fine tuning",
];

const faqs = [
  ["What is the difference between LoRA and QLoRA?", "Both freeze the base model and train small low-rank adapter matrices. LoRA keeps the frozen base in 16-bit precision. QLoRA stores it in 4-bit NF4 with double quantization, cutting weight memory to about a quarter, so larger models fit on smaller GPUs. QLoRA is slower per step because weights are de-quantized during computation."],
  ["How many examples do I need to fine-tune an LLM with LoRA?", "For a narrow format or classification task, a few hundred consistent, high-quality examples often show clear gains, and one to a few thousand is a common working range. Quality and coverage of hard cases matter more than raw count. Keep a separate held-out set to measure the gain."],
  ["Can fine-tuning teach an LLM new facts?", "Poorly. Fine-tuning with LoRA reliably changes behaviour such as format, tone and task skill, but it is an unreliable way to store facts and costly to update. For company policies, product data or anything that changes, use retrieval-augmented generation and keep the documents current."],
  ["What rank and alpha should I use for LoRA?", "A common starting point is rank 16 with alpha 32, applied to all linear layers, a learning rate around 1e-4 to 2e-4, and two to three epochs. Lower the rank for simple tasks and raise it if the model underfits. Change one setting at a time and judge by held-out metrics."],
  ["Can I fine-tune an LLM on Google Colab?", "Yes, for small models. QLoRA on a 1B to 3B model, and on a 7B model with short sequences, can fit in the 16 GB of a T4 GPU. A T4 does not support bfloat16, so train in float16. Sessions can time out, so save checkpoints regularly."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline,
      description,
      inLanguage: "en-IN",
      datePublished: "2026-11-23",
      dateModified: "2026-11-23",
      mainEntityOfPage: canonicalUrl,
      articleSection: "GenAI / LLM",
      keywords: keywords.join(", "),
      about: ["LoRA", "QLoRA", "Fine-tuning large language models"],
      author: [
        { "@type": "Person", name: "Prateek Agrawal", jobTitle: "Founder, Ivy Professional School", sameAs: "https://www.linkedin.com/in/prateekagrawal" },
        { "@type": "Person", name: "Eeshani Agrawal", jobTitle: "Co-founder, Ivy Professional School", sameAs: "https://www.linkedin.com/in/eeshani-agrawal-b674045" },
      ],
      publisher: { "@type": "EducationalOrganization", name: "Ivy Professional School", url: "https://ivyproschool.com" },
      mentions: {
        "@type": "Course",
        name: "Advanced Generative AI Course",
        url: "https://ivyproschool.com/courses/generative-ai-course",
        provider: { "@type": "EducationalOrganization", name: "Ivy Professional School", url: "https://ivyproschool.com" },
      },
      citation: [
        "https://arxiv.org/abs/2106.09685",
        "https://arxiv.org/abs/2305.14314",
        "https://huggingface.co/docs/peft/developer_guides/lora",
        "https://huggingface.co/docs/trl/sft_trainer",
        "https://huggingface.co/docs/transformers/quantization/bitsandbytes",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "Fine-Tuning with LoRA and QLoRA" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [...keywords],
  authors: [{ name: "Prateek Agrawal" }, { name: "Eeshani Agrawal" }],
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title: headline,
    description,
    siteName: "Ivy Professional School",
    publishedTime: "2026-11-23T00:00:00+05:30",
    modifiedTime: "2026-11-23T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: { card: "summary_large_image", title: headline, description, site: "@IvyProSchool" },
};

export default function FineTuningLlmsLoraQloraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ArticleReviewProgress />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
