import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink, X, FileText } from "lucide-react";

const RESUME_PATH = "/resume.pdf";
const RESUME_FILENAME = "William-Ondrejov-CV.pdf";

interface ResumeButtonProps {
  /** "nav" renders a plain text-style trigger for the header. "cta" renders a filled/outlined button like the hero CTAs. */
  variant?: "nav" | "cta";
}

export function ResumeButton({ variant = "nav" }: ResumeButtonProps) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {variant === "nav" ? (
        <button
          onClick={() => setOpen(true)}
          className="transition-colors hover:text-inktext-primary"
        >
          Resume
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-sm border border-ink-600 px-5 py-2.5 text-sm font-medium text-inktext-primary transition-colors hover:border-signal-amber/60 hover:text-signal-amber"
        >
          <FileText size={16} />
          View resume
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        >
          <div
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-ink-700 bg-ink-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-ink-700/60 px-5 py-3">
              <p className="font-mono text-xs text-inktext-muted">
                {RESUME_FILENAME}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-inktext-muted transition-colors hover:text-signal-amber"
                >
                  <ExternalLink size={14} />
                  Open in new tab
                </a>
                <a
                  href={RESUME_PATH}
                  download={RESUME_FILENAME}
                  className="flex items-center gap-1.5 font-mono text-xs text-inktext-muted transition-colors hover:text-signal-amber"
                >
                  <Download size={14} />
                  Download
                </a>
                <button
                  ref={closeButtonRef}
                  onClick={() => setOpen(false)}
                  aria-label="Close resume preview"
                  className="text-inktext-muted transition-colors hover:text-signal-amber"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <object
              data={RESUME_PATH}
              type="application/pdf"
              className="flex-1 bg-ink-800"
              aria-label="William Ondrejov resume preview"
            >
              {/* Shown if the browser can't render a PDF inline (common on mobile). */}
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <p className="max-w-xs text-sm text-inktext-muted">
                  Your browser can't preview PDFs inline. Use one of the options
                  above to view it instead.
                </p>
              </div>
            </object>
          </div>
        </div>
      )}
    </>
  );
}
