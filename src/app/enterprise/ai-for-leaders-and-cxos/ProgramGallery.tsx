"use client";

import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./leaders.module.css";

type ProgramPhoto = { src: StaticImageData; alt: string };

export default function ProgramGallery({ photos }: { photos: ProgramPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setCurrentIndex(index => (index + 1) % photos.length), 3800);
    return () => window.clearInterval(timer);
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") setActiveIndex(index => index === null ? null : (index - 1 + photos.length) % photos.length);
      if (event.key === "ArrowRight") setActiveIndex(index => index === null ? null : (index + 1) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, photos.length]);

  return <>
    <div className={styles.programGallery}>
      <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {photos.map((photo, index) => <button className={styles.photoCard} type="button" onClick={() => setActiveIndex(index)} aria-label={`Expand image ${index + 1}: ${photo.alt}`} key={photo.alt}>
          <Image src={photo.src} alt={photo.alt} sizes="(max-width: 600px) calc(100vw - 30px), (max-width: 900px) 44vw, 33vw" priority={index < 2}/>
          <span className={styles.photoCaption}><span>{String(index + 1).padStart(2, "0")}</span><small>VIEW LARGE</small></span>
        </button>)}
      </div>
    </div>
    <div className={styles.carouselControls} aria-label="Gallery controls">
      <button type="button" onClick={() => setCurrentIndex(index => (index - 1 + photos.length) % photos.length)} aria-label="Previous photograph"><ChevronLeft/></button>
      <div className={styles.carouselDots}>{photos.map((photo, index) => <button type="button" className={index === currentIndex ? styles.activeDot : ""} onClick={() => setCurrentIndex(index)} aria-label={`Show photograph ${index + 1}`} aria-current={index === currentIndex ? "true" : undefined} key={photo.alt}/>)}</div>
      <button type="button" onClick={() => setCurrentIndex(index => (index + 1) % photos.length)} aria-label="Next photograph"><ChevronRight/></button>
    </div>

    {activeIndex !== null && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Expanded program photograph" onClick={() => setActiveIndex(null)}>
      <button className={styles.lightboxClose} type="button" onClick={() => setActiveIndex(null)} aria-label="Close expanded image"><X/></button>
      <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} type="button" onClick={event => { event.stopPropagation(); setActiveIndex((activeIndex - 1 + photos.length) % photos.length); }} aria-label="Previous image"><ChevronLeft/></button>
      <div className={styles.lightboxImage} onClick={event => event.stopPropagation()}>
        <Image src={photos[activeIndex].src} alt={photos[activeIndex].alt} priority sizes="95vw"/>
        <p><span>{String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>{photos[activeIndex].alt}</p>
      </div>
      <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} type="button" onClick={event => { event.stopPropagation(); setActiveIndex((activeIndex + 1) % photos.length); }} aria-label="Next image"><ChevronRight/></button>
    </div>}
  </>;
}
