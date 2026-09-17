import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" className="border-b border-ink-700/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr]">
          <p className="font-mono text-xs text-signal-amber">about</p>
          <div className="max-w-prose">
            {profile.bio.map((paragraph, i) => (
              <p
                key={i}
                className="mb-5 text-balance font-display text-2xl font-light leading-snug text-inktext-primary last:mb-0 sm:text-3xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
