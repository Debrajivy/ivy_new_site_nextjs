export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is few-shot prompting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Few-shot prompting includes two to five examples of ideal input and output pairs so the model can imitate the demonstrated pattern, format and classification standards.",
      },
    },
    {
      "@type": "Question",
      name: "What is chain-of-thought prompting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chain-of-thought prompting directs a model through intermediate reasoning steps before it gives a final answer. For modern reasoning models, specifying which checks to perform is more useful than simply saying to think step by step.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get ChatGPT to return JSON?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Provide an exact schema and allowed values, request only valid JSON with no commentary, and require null for missing information instead of allowing the model to guess.",
      },
    },
    {
      "@type": "Question",
      name: "What is prompt chaining?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prompt chaining divides a complex task into smaller prompts whose outputs feed later stages, with human review between stages.",
      },
    },
    {
      "@type": "Question",
      name: "Do advanced prompting techniques work on all AI models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Few-shot prompting, structured outputs and prompt chaining apply broadly. Reasoning-class models already reason internally, so explicit step-by-step instructions add less than directing the specific checks the model should perform.",
      },
    },
  ],
};
