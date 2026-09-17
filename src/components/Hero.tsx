import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { ProfilePhoto } from "./ProfilePhoto";
import { ResumeButton } from "./ResumeButton";

const techCount = new Set(projects.flatMap((p) => p.techStack)).size;
const shippedCount = projects.filter((p) => p.status !== "in-progress").length;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink-700/60 bg-grid bg-grid"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900 via-transparent to-ink-900" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
        <div className="animate-rise">
          <div className="mb-6 flex items-center gap-5">
            <ProfilePhoto />
            <div>
              <p className="mb-2 font-mono text-xs text-signal-amber">
                {profile.role} · {profile.location}
              </p>
              <h1 className="text-balance font-display text-4xl font-medium leading-[1.08] text-inktext-primary sm:text-5xl md:text-6xl">
                {profile.name}
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-prose text-balance font-display text-xl italic text-inktext-muted sm:text-2xl">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-sm bg-signal-amber px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-signal-amber/90"
            >
              See the work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-sm border border-ink-600 px-5 py-2.5 text-sm font-medium text-inktext-primary transition-colors hover:border-signal-amber/60 hover:text-signal-amber"
            >
              Get in touch
            </a>
            <ResumeButton variant="cta" />
          </div>
        </div>

        <div
          className="animate-rise self-start rounded-sm border border-ink-700 bg-ink-800/60 p-6 font-mono text-xs"
          style={{ animationDelay: "120ms" }}
        >
          <p className="mb-4 flex items-center justify-between text-inktext-faint">
            <span>readout</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-signal-teal" />
              live
            </span>
          </p>
          <dl className="space-y-4">
            <div className="flex items-baseline justify-between border-b border-ink-700/70 pb-3">
              <dt className="text-inktext-muted">projects shipped</dt>
              <dd className="text-lg text-inktext-primary">{shippedCount}</dd>
            </div>
            <div className="flex items-baseline justify-between border-b border-ink-700/70 pb-3">
              <dt className="text-inktext-muted">technologies used</dt>
              <dd className="text-lg text-inktext-primary">{techCount}</dd>
            </div>
            <div className="flex items-baseline justify-between">
              <dt className="text-inktext-muted">thesis result</dt>
              <dd className="text-lg text-signal-teal">96.3% acc.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
