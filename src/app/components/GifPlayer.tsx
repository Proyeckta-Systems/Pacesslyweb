import React, { useEffect, useRef } from "react";
import { parseGIF, decompressFrames } from "gifuct-js";

interface GifPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

export function GifPlayer({ src, className, style, alt }: GifPlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;
    let animationId: number;

    async function loadGif() {
      try {
        const response = await fetch(src);
        const buffer = await response.arrayBuffer();
        const gif = parseGIF(buffer);
        const frames = decompressFrames(gif, true);

        if (!frames.length || cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = frames[0].dims.width;
        canvas.height = frames[0].dims.height;

        // Offscreen canvas for compositing with disposal methods
        const offCanvas = document.createElement("canvas");
        offCanvas.width = canvas.width;
        offCanvas.height = canvas.height;
        const offCtx = offCanvas.getContext("2d");
        if (!offCtx) return;

        let currentFrame = 0;
        let lastTimestamp = 0;

        function renderFrame(index: number) {
          const frame = frames[index];

          // Handle disposal method
          if (index > 0) {
            const prev = frames[index - 1];
            if (prev.disposalType === 2) {
              offCtx!.clearRect(
                prev.dims.left,
                prev.dims.top,
                prev.dims.width,
                prev.dims.height
              );
            }
          }

          const imageData = new ImageData(
            new Uint8ClampedArray(frame.patch),
            frame.dims.width,
            frame.dims.height
          );

          offCtx!.putImageData(imageData, frame.dims.left, frame.dims.top);
          ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
          ctx!.drawImage(offCanvas, 0, 0);
        }

        function animate(timestamp: number) {
          if (cancelled) return;

          const frame = frames[currentFrame];
          // gifuct-js returns delay in centiseconds → convert to ms
          const delay = (frame.delay ?? 10) * 10;

          if (timestamp - lastTimestamp >= delay) {
            renderFrame(currentFrame);
            lastTimestamp = timestamp;

            if (currentFrame < frames.length - 1) {
              currentFrame++;
              animationId = requestAnimationFrame(animate);
            }
            // Last frame reached → stop, do nothing → frozen on last frame
          } else {
            animationId = requestAnimationFrame(animate);
          }
        }

        animationId = requestAnimationFrame(animate);
      } catch (e) {
        console.error("GifPlayer: failed to parse GIF", e);
      }
    }

    loadGif();

    return () => {
      cancelled = true;
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={style}
      aria-label={alt}
    />
  );
}
