import React, { useRef, useEffect, useCallback } from "react";

interface AutoPlayVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  poster?: string;
}

export function AutoPlayVideo({
  src,
  className = "",
  style,
  poster,
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const retryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (retryTimer.current) clearTimeout(retryTimer.current);
        retryTimer.current = setTimeout(() => {
          video.play().catch(() => {});
        }, 500);
      });
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => attemptPlay();
    video.addEventListener("canplay", handleCanPlay);

    attemptPlay();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            attemptPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(video);

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        attemptPlay();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      if (retryTimer.current) clearTimeout(retryTimer.current);
    };
  }, [attemptPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
      className={className}
      style={style}
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
    />
  );
}
