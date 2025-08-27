"use client";
import { useEffect, useMemo, useState } from "react";

export default function AutoPlayYouTube({
  id,
  title = "YouTube video",
  className = "",
  aspect = 16 / 9,
  delay = 800, // ms delay before injecting iframe
}: { id: string; title?: string; className?: string; aspect?: number; delay?: number }) {
  const [active, setActive] = useState(false);
  const paddingTop = `${100 / aspect}%`;

  // YouTube thumbnail (hqdefault = 480p, maxresdefault = 1080p if available)
  const poster = useMemo(
    () => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    [id]
  );

  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
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
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}
