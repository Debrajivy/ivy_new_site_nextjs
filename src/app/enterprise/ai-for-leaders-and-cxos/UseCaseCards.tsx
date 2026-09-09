"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Plus, Minus } from "lucide-react";
import styles from "./use-case-cards.module.css";

export default function UseCaseCards({ cases }: { cases: readonly (readonly string[])[] }) {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [position, setPosition] = useState({ start: 0, end: 1, atStart: true, atEnd: false });
  const track = useRef<HTMLDivElement>(null);
  const trackId = useId();

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const cards = Array.from(element.children) as HTMLElement[];
      if (!cards.length) return;
      const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : cards[0].offsetWidth;
      const start = Math.round(element.scrollLeft / step);
      const visible = Math.max(1, Math.round(element.clientWidth / step));
      setPosition({ start, end: Math.min(cases.length, start + visible), atStart: element.scrollLeft <= 2, atEnd: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    return () => { observer.disconnect(); element.removeEventListener("scroll", update); };
  }, [cases.length]);

  const move = (direction: number) => {
    const element = track.current;
    if (!element) return;
    const cards = element.children;
    const first = cards[0] as HTMLElement | undefined;
    const second = cards[1] as HTMLElement | undefined;
    const step = first && second ? second.offsetLeft - first.offsetLeft : element.clientWidth;
    element.scrollBy({ left: direction * step, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="AI use cases">
    <div className={styles.toolbar}>
      <span className={styles.counter} aria-live="polite"><strong>{String(position.start + 1).padStart(2, "0")}–{String(position.end).padStart(2, "0")}</strong> / {String(cases.length).padStart(2, "0")} use cases</span>
      <div className={styles.controls}>
        <button type="button" onClick={() => move(-1)} disabled={position.atStart} aria-label="Previous use case" aria-controls={trackId}><ArrowLeft size={19} aria-hidden="true" /></button>
        <button type="button" onClick={() => move(1)} disabled={position.atEnd} aria-label="Next use case" aria-controls={trackId}><ArrowRight size={19} aria-hidden="true" /></button>
      </div>
    </div>
    <div ref={track} id={trackId} className={styles.track} tabIndex={0} aria-label="Use-case cards; use left and right arrow keys to browse" onKeyDown={event => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); }
    }}>
      {cases.map(([category, title, description], index) => {
        const isOpen = expanded.includes(title);
        const descriptionId = `${trackId}-${index}`;
        return <article key={title} className={styles.card} aria-roledescription="slide" aria-label={`${index + 1} of ${cases.length}: ${title}`}>
          <div className={styles.topline}><span className={styles.category}>{category}</span><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span></div>
          <h3 className={styles.title}>{title}</h3>
          <p id={descriptionId} className={styles.description} data-expanded={isOpen}>{description}</p>
          <button type="button" className={styles.action} aria-expanded={isOpen} aria-controls={descriptionId} onClick={() => setExpanded(current => current.includes(title) ? current.filter(item => item !== title) : [...current, title])}>
            {isOpen ? "Show less" : "Show more"}<span className={styles.toggle}>{isOpen ? <Minus size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}</span>
          </button>
        </article>;
      })}
    </div>
  </div>;
}
