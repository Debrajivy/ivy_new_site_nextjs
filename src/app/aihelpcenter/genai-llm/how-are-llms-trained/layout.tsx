import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Are LLMs Trained? The LLM Training Process Explained",
  description: "Learn how large language models are trained through tokenization, next-token prediction, loss, backpropagation, pretraining, fine-tuning, and alignment.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
