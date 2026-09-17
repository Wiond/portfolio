import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ResumeButton } from "./ResumeButton";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-900/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-inktext-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-signal-amber" />
          </span>
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 text-sm text-inktext-muted sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-inktext-primary"
            >
              {item.label}
            </a>
          ))}
          <ResumeButton variant="nav" />
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-inktext-muted transition-colors hover:text-signal-amber"
          >
            <GithubIcon width={18} height={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-inktext-muted transition-colors hover:text-signal-amber"
          >
            <LinkedinIcon width={18} height={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-inktext-muted transition-colors hover:text-signal-amber"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
