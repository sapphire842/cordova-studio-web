"use client";

import { useEffect, useState } from "react";

export default function ProjectGallery({
  title,
  images,
  captions,
  imageRadius,
}: {
  title: string;
  images: string[];
  captions?: string[];
  imageRadius?: "4px" | "5px" | "6px";
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage =
    selectedIndex === null
      ? null
      : { src: images[selectedIndex], caption: captions?.[selectedIndex] };
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const showNextImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return current === images.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousImage();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, images.length]);

  return (
    <>
      {images.length > 0 ? (
        <div className="mb-16 grid gap-4 md:grid-cols-2">
          {images.map((img, i) => (
            <div key={img}>
              <button
                type="button"
                onClick={() => setSelectedIndex(i)}
                className={`group aspect-[4/3] w-full overflow-hidden bg-light-gray text-left ${
                  imageRadius === "4px"
                    ? "rounded-[4px]"
                    : imageRadius === "5px"
                    ? "rounded-[5px]"
                    : imageRadius === "6px"
                      ? "rounded-[6px]"
                      : ""
                }`}
                aria-label={`Enlarge ${title} image ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`${title} — Image ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
              {captions?.[i] && (
                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                  {captions[i]}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-16 flex aspect-[16/9] items-center justify-center rounded-[6px] bg-[radial-gradient(circle_at_top,_rgba(181,131,105,0.18),_transparent_52%),linear-gradient(135deg,_#f6f0e7,_#ece3d6)] p-8 text-center">
          <div className="max-w-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
              Under Construction
            </p>
            <h3 className="mt-4 font-serif text-3xl text-charcoal">
              Imagery coming soon
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-charcoal/70">
              This section is being prepared and will be updated once project
              visuals are ready to share.
            </p>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-xs uppercase tracking-[0.25em] text-warm-white transition-colors hover:text-accent"
            onClick={() => setSelectedIndex(null)}
          >
            Close
          </button>
          {hasMultipleImages && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-warm-white/30 bg-charcoal/40 text-2xl leading-none text-warm-white transition-colors hover:border-accent hover:text-accent md:left-8"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-warm-white/30 bg-charcoal/40 text-2xl leading-none text-warm-white transition-colors hover:border-accent hover:text-accent md:right-8"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
              >
                ›
              </button>
            </>
          )}
          <div
            className="flex max-h-[86vh] max-w-full flex-col items-start"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={selectedImage.src}
              src={selectedImage.src}
              alt={`${title} enlarged gallery image`}
              className={`max-h-[82vh] max-w-full object-contain ${
                imageRadius === "4px"
                  ? "rounded-[4px]"
                  : imageRadius === "5px"
                  ? "rounded-[5px]"
                  : imageRadius === "6px"
                    ? "rounded-[6px]"
                    : ""
              }`}
            />
            {selectedImage.caption && (
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
