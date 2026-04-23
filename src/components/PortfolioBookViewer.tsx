"use client";

import { useEffect, useRef, useState } from "react";
import type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";

type PdfJs = typeof import("pdfjs-dist");

type PageImage = {
  pageNumber: number;
  src: string;
};

const firstBookPage = 2;

async function renderPage(page: PDFPageProxy, targetWidth: number) {
  const viewport = page.getViewport({ scale: 1 });
  const scale = targetWidth / viewport.width;
  const scaledViewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas rendering is not available.");
  }

  canvas.width = Math.ceil(scaledViewport.width);
  canvas.height = Math.ceil(scaledViewport.height);

  await page.render({
    canvas,
    canvasContext: context,
    viewport: scaledViewport,
  }).promise;

  return canvas.toDataURL("image/jpeg", 0.9);
}

export default function PortfolioBookViewer({
  title,
  coverImage,
  pdfUrl,
}: {
  title: string;
  coverImage: string;
  pdfUrl: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(firstBookPage);
  const [pages, setPages] = useState<(PageImage | null)[]>([null, null]);
  const [previousPages, setPreviousPages] = useState<(PageImage | null)[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const cacheRef = useRef<Map<number, string>>(new Map());
  const pdfJsRef = useRef<PdfJs | null>(null);

  useEffect(() => {
    if (!isOpen || pdf) return;

    let cancelled = false;

    async function loadPdf() {
      setIsLoading(true);
      const pdfJs = await import("pdfjs-dist");
      pdfJs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
      pdfJsRef.current = pdfJs;
      const loadedPdf = await pdfJs.getDocument(pdfUrl).promise;
      if (!cancelled) {
        setPdf(loadedPdf);
      }
      setIsLoading(false);
    }

    loadPdf().catch(() => {
      if (!cancelled) setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [isOpen, pdf, pdfUrl]);

  useEffect(() => {
    if (!pdf) return;

    let cancelled = false;
    const document = pdf;

    async function loadSpread() {
      setIsLoading(true);
      const pageNumbers = [currentPage, currentPage + 1].filter(
        (pageNumber) => pageNumber <= document.numPages
      );

      const renderedPages = await Promise.all(
        pageNumbers.map(async (pageNumber) => {
          const cached = cacheRef.current.get(pageNumber);
          if (cached) return { pageNumber, src: cached };

          const page = await document.getPage(pageNumber);
          const src = await renderPage(page, 950);
          cacheRef.current.set(pageNumber, src);
          return { pageNumber, src };
        })
      );

      if (!cancelled) {
        setPages([renderedPages[0] ?? null, renderedPages[1] ?? null]);
        if (previousPages) {
          setIsAnimating(true);
          window.setTimeout(() => {
            if (!cancelled) {
              setIsAnimating(false);
              setPreviousPages(null);
            }
          }, 900);
        }
        setIsLoading(false);
      }
    }

    loadSpread().catch(() => {
      if (!cancelled) setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [currentPage, pdf, previousPages]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const totalPages = pdf?.numPages ?? 0;
  const canGoPrev = currentPage > firstBookPage;
  const canGoNext = Boolean(pdf && currentPage + 2 <= pdf.numPages);

  function goPrev() {
    setCurrentPage((page) => {
      if (page <= firstBookPage) return page;
      setDirection("prev");
      setPreviousPages(pages);
      return Math.max(firstBookPage, page - 2);
    });
  }

  function goNext() {
    setCurrentPage((page) => {
      if (!pdf || page + 2 > pdf.numPages) return page;
      setDirection("next");
      setPreviousPages(pages);
      return page + 2;
    });
  }

  return (
    <div className="mb-16">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block w-full text-left"
        aria-label={`Open ${title} as a digital book`}
      >
        <div className="img-zoom aspect-[4/3] overflow-hidden bg-light-gray">
          <img
            src={coverImage}
            alt={`${title} cover`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal transition-colors group-hover:text-accent">
          Open Book
        </p>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-charcoal/95 p-4 text-warm-white md:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent">
                {title}
              </p>
              <p className="mt-1 text-xs font-light text-warm-white/55">
                {totalPages
                  ? `Pages ${currentPage}-${Math.min(
                      currentPage + 1,
                      totalPages
                    )} of ${totalPages}`
                  : "Loading portfolio"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-[0.25em] text-warm-white transition-colors hover:text-accent"
            >
              Close
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <div
              className="book-spread relative grid min-h-0 flex-1 gap-3 md:grid-cols-2"
            >
              {pages.map((page, index) => (
                <div
                  key={page?.pageNumber ?? index}
                  className={`book-page ${
                    index === 0 ? "book-page-left" : "book-page-right"
                  } flex min-h-0 items-center justify-center bg-warm-white p-2 shadow-2xl`}
                >
                  {page ? (
                    <img
                      src={page.src}
                      alt={`${title} page ${page.pageNumber}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="h-full w-full bg-light-gray" />
                  )}
                </div>
              ))}

              {isAnimating && previousPages && (
                <div className="pointer-events-none absolute inset-0 hidden md:grid md:grid-cols-2 md:gap-3">
                  {direction === "next" ? (
                    <>
                      <div />
                      <div className="book-page-turn book-page-turn-next flex min-h-0 items-center justify-center bg-warm-white p-2 shadow-2xl">
                        {previousPages[1] ? (
                          <img
                            src={previousPages[1].src}
                            alt={`${title} page ${previousPages[1].pageNumber}`}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <div className="h-full w-full bg-light-gray" />
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="book-page-turn book-page-turn-prev flex min-h-0 items-center justify-center bg-warm-white p-2 shadow-2xl">
                        {previousPages[0] ? (
                          <img
                            src={previousPages[0].src}
                            alt={`${title} page ${previousPages[0].pageNumber}`}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <div className="h-full w-full bg-light-gray" />
                        )}
                      </div>
                      <div />
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goPrev}
                disabled={!canGoPrev || isLoading}
                className="border border-warm-white/30 px-5 py-3 text-xs uppercase tracking-[0.25em] text-warm-white transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
              >
                Previous
              </button>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[10px] uppercase tracking-[0.25em] text-warm-white/50 transition-colors hover:text-accent"
              >
                Open PDF
              </a>
              <button
                type="button"
                onClick={goNext}
                disabled={!canGoNext || isLoading}
                className="border border-warm-white/30 px-5 py-3 text-xs uppercase tracking-[0.25em] text-warm-white transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
