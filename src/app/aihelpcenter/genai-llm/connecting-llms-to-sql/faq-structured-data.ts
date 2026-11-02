export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is text-to-SQL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Text-to-SQL converts an everyday-language question into a SQL query that a database can run. An LLM performs the conversion using the supplied database schema.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to know SQL to use a text-to-SQL agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Users do not need SQL to ask questions, but someone must configure the agent and verify its results. Basic SQL knowledge makes checking the generated queries safer.",
      },
    },
    {
      "@type": "Question",
      name: "Is a text-to-SQL agent the same as ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A text-to-SQL agent uses an LLM as one component and adds database access, schema context, validation, retries, permissions and result formatting.",
      },
    },
    {
      "@type": "Question",
      name: "Can a text-to-SQL agent change or delete my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A properly configured agent should use a read-only database login that prevents changes. Query validation adds another safeguard but does not replace database permissions.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is a text-to-SQL agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accuracy depends on schema documentation, question clarity, business definitions and the selected model. Test accuracy on representative questions by comparing results with analyst-written SQL.",
      },
    },
    {
      "@type": "Question",
      name: "Can a text-to-SQL agent run without sending data outside the company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. An on-premise setup can run an open-source model on company-managed infrastructure, although the company must maintain the hardware, models and performance.",
      },
    },
  ],
};
