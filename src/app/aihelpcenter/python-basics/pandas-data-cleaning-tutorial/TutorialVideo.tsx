"use client";

import { useState } from "react";

const VIDEO_ID = "HA1q1FhR-S0";
const VIDEO_TITLE = "Data Cleaning in Pandas: Complete Video Tutorial";

export default function TutorialVideo() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="tutorial-video" aria-label="Pandas data cleaning video tutorial">
      <div className="tutorial-video-frame">
        {isPlaying ? (
          <iframe
            className="tutorial-video-player"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=1&playsinline=1&modestbranding=1&rel=0`}
            title={VIDEO_TITLE}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            className="tutorial-video-poster"
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${VIDEO_TITLE}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt=""
            />
            <span className="tutorial-video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.29-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
              </svg>
            </span>
            <span className="tutorial-video-replay">Play video</span>
          </button>
        )}

        <div className="tutorial-video-shade" aria-hidden="true" />
        <div className="tutorial-video-copy">
          <span>Tutorial video</span>
          <h2>{VIDEO_TITLE}</h2>
        </div>

        {isPlaying && (
          <button
            className="tutorial-video-stop"
            type="button"
            onClick={() => setIsPlaying(false)}
            aria-label={`Stop ${VIDEO_TITLE}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="6" width="12" height="12" rx="1" />
            </svg>
            Stop video
          </button>
        )}
      </div>
    </section>
  );
}
