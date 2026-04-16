"use client";

import { useEffect, useState } from "react";
import type { StagingProject } from "@/data/staging";

export default function StagingGallery({
  project,
}: {
  project: StagingProject;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {project.images.map((image, index) => (
          <div key={image}>
            <button
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group aspect-[4/3] w-full overflow-hidden bg-light-gray text-left"
              aria-label={`Enlarge ${project.title} image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${project.title} ${project.subtitle} image ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </button>
            {index >= 6 && (
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                Renderings
              </p>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-xs uppercase tracking-[0.25em] text-warm-white transition-colors hover:text-accent"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
          <img
            src={selectedImage}
            alt={`${project.title} enlarged gallery image`}
            className="max-h-[86vh] max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
