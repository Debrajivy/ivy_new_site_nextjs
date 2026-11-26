"use client";
import { useEffect, useMemo, useState } from "react";

export default function AutoPlayYouTube({
  id,
  title = "YouTube video",
  className = "",
  aspect = 16 / 9,
  delay = 800, // ms to wait after the page has loaded before injecting the iframe
}: { id: string; title?: string; className?: string; aspect?: number; delay?: number }) {
  const [active, setActive] = useState(false);
  const paddingTop = `${100 / aspect}%`;

  // YouTube thumbnail (hqdefault = 480p, maxresdefault = 1080p if available)
  const poster = useMemo(
    () => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    [id]
  );

  // The YouTube player is about 1.5 MB (scripts + video). Start it only after
  // the page has finished loading and the browser is idle, so it does not
  // compete with the page's own files. The thumbnail shows until then.
  useEffect(() => {
    let timer: number | undefined;
    let idle: number | undefined;
    const start = () => {
      timer = window.setTimeout(() => {
        if ("requestIdleCallback" in window) {
          idle = window.requestIdleCallback(() => setActive(true), { timeout: 2000 });
        } else {
          setActive(true);
        }
      }, delay);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      if (timer !== undefined) window.clearTimeout(timer);
      if (idle !== undefined && "cancelIdleCallback" in window) window.cancelIdleCallback(idle);
    };
  }, [delay]);

  return (
    <div className={`relative overflow-hidden bg-black ${className}`} style={{ paddingTop }}>
      {active ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&modestbranding=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="eager"
        />
      ) : (
        <img
          src={poster}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      )}
    </div>
  );
}
