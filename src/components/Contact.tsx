import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the mailto link below still works.
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 font-mono text-xs text-signal-amber">contact</p>
        <h2 className="max-w-prose text-balance font-display text-3xl font-medium leading-tight text-inktext-primary sm:text-4xl">
          Open to fullstack roles — happy to walk through any project in detail.
        </h2>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm bg-signal-amber px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-signal-amber/90"
          >
            {profile.email}
          </a>
          <button
            onClick={copyEmail}
            aria-label="Copy email address"
            className="flex items-center gap-1.5 rounded-sm border border-ink-600 px-3.5 py-2.5 font-mono text-xs text-inktext-muted transition-colors hover:border-signal-amber/60 hover:text-signal-amber"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-700/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-inktext-muted transition-colors hover:text-signal-amber"
            >
              <GithubIcon width={15} height={15} /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-inktext-muted transition-colors hover:text-signal-amber"
            >
              <LinkedinIcon width={15} height={15} /> LinkedIn
            </a>
          </div>
          <p className="font-mono text-[11px] text-inktext-faint">
            {profile.name} · built with React &amp; TypeScript
          </p>
        </div>
      </div>
    </section>
  );
}
