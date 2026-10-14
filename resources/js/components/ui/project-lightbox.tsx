"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ProjectLightboxImage {
  src: string;
  alt: string;
}

export interface ProjectLightboxProps {
  images: ProjectLightboxImage[];
  title?: string;
  subtitle?: string;
  /** Public URL of the live project. Renders a "Kunjungi Website" link when set. */
  link?: string;
  initialIndex?: number;
  onClose: () => void;
}

/**
 * Full-screen project gallery modal.
 *
 * Rendered through a portal onto `document.body` on purpose: the portfolio
 * carousel lives inside a `.reveal` ancestor that owns a CSS `transform`,
 * which establishes a containing block and would trap `position: fixed` if
 * this were rendered inline.
 */
export function ProjectLightbox({
  images,
  title,
  subtitle,
  link,
  initialIndex = 0,
  onClose,
}: ProjectLightboxProps) {
  const total = images.length;

  const clampIndex = React.useCallback(
    (value: number) => {
      if (total === 0) return 0;
      return Math.min(Math.max(value, 0), total - 1);
    },
    [total],
  );

  const [index, setIndex] = React.useState(() => clampIndex(initialIndex));
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const goPrev = React.useCallback(() => {
    setIndex((current) => (total === 0 ? 0 : (current - 1 + total) % total));
  }, [total]);

  const goNext = React.useCallback(() => {
    setIndex((current) => (total === 0 ? 0 : (current + 1) % total));
  }, [total]);

  // Lock body scroll and manage focus for the lifetime of the dialog.
  React.useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);

  // Escape closes; arrows navigate.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, onClose]);

  if (total === 0) return null;

  const current = images[clampIndex(index)];
  const hasMultiple = total > 1;
  const projectLink = link?.trim();
  const hasLink = Boolean(projectLink);

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Galeri proyek"}
      tabIndex={-1}
      onClick={(event) => {
        // Close only when the backdrop itself is clicked, not the stage content.
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[9999] flex flex-col bg-ink-900/85 backdrop-blur-md outline-none"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <div className="min-w-0">
          {title && (
            <p className="truncate font-serif text-lg font-semibold tracking-tight text-cream-50 sm:text-xl">
              {title}
            </p>
          )}
          {subtitle && (
            <p className="truncate text-xs text-cream-200/80 sm:text-sm">
              {subtitle}
            </p>
          )}
          {hasLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-3.5 py-1.5 text-xs font-semibold leading-tight text-cream-50 transition hover:bg-accent-700 active:scale-95 sm:text-sm"
            >
              Kunjungi Website
              <ArrowUpRight className="size-4 shrink-0" />
            </a>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="text-sm tabular-nums text-cream-200/80">
            {clampIndex(index) + 1} / {total}
          </span>
          <button
            type="button"
            aria-label="Tutup galeri"
            onClick={onClose}
            className="rounded-full bg-cream-50/10 p-2 text-cream-50 transition hover:bg-cream-50/20 active:scale-95"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* Stage */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16">
        <img
          key={index}
          src={current.src}
          alt={current.alt}
          className="max-h-full max-w-full rounded-xl object-contain shadow-2xl duration-300 animate-in fade-in zoom-in-95 motion-reduce:animate-none"
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label="Gambar sebelumnya"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-cream-50/10 p-3 text-cream-50 transition hover:bg-cream-50/20 active:scale-95"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Gambar berikutnya"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-cream-50/10 p-3 text-cream-50 transition hover:bg-cream-50/20 active:scale-95"
            >
              <ChevronRight className="size-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {hasMultiple && (
        <div className="flex items-center justify-center gap-2 overflow-x-auto px-4 py-3 sm:py-4">
          {images.map((image, thumbIndex) => {
            const isActive = thumbIndex === index;
            return (
              <button
                key={thumbIndex}
                type="button"
                aria-current={isActive}
                aria-label={`Lihat gambar ${thumbIndex + 1}`}
                onClick={() => setIndex(thumbIndex)}
                className={cn(
                  "h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-cream-200/20 transition",
                  isActive
                    ? "opacity-100 ring-2 ring-accent-600"
                    : "opacity-50 hover:opacity-90",
                )}
              >
                <img
                  src={image.src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>,
    document.body,
  );
}
