"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./CategoryFaq.module.css";

export type FaqCategory = {
  id: string;
  label: string;
  title: string;
  items: readonly (readonly [question: string, answer: string])[];
};

type CategoryFaqProps = {
  eyebrow: string;
  heading: string;
  description: string;
  categories: readonly FaqCategory[];
};

export default function CategoryFaq({ eyebrow, heading, description, categories }: CategoryFaqProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const category = categories[activeCategory];

  const selectCategory = (index: number) => {
    setActiveCategory(index);
    setOpenQuestion(0);
  };

  if (!category) return null;

  return (
    <section className={styles.section} id="faqs">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.categories} aria-label="FAQ categories">
            <strong>Categories</strong>
            <div role="tablist" aria-orientation="vertical">
              {categories.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === index}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-tab-${item.id}`}
                  className={activeCategory === index ? styles.categoryActive : ""}
                  onClick={() => selectCategory(index)}
                >
                  <span>{item.label}</span>
                  <small>{item.items.length}</small>
                </button>
              ))}
            </div>
          </aside>

          <div
            className={styles.panel}
            role="tabpanel"
            id={`faq-panel-${category.id}`}
            aria-labelledby={`faq-tab-${category.id}`}
            key={category.id}
          >
            <header>
              <div>
                <span>Selected topic</span>
                <h3>{category.title}</h3>
              </div>
              <small>{category.items.length} questions</small>
            </header>

            <div className={styles.questions}>
              {category.items.map(([question, answer], index) => {
                const isOpen = openQuestion === index;
                const answerId = `faq-answer-${category.id}-${index}`;

                return (
                  <article className={styles.item} key={question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenQuestion(isOpen ? null : index)}
                    >
                      <span>{question}</span>
                      <ChevronDown className={isOpen ? styles.chevronOpen : ""} aria-hidden="true" />
                    </button>
                    {isOpen && <p id={answerId}>{answer}</p>}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
