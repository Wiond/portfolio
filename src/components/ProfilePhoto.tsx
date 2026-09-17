import { useState } from "react";
import { profile } from "../data/profile";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .toUpperCase();

/**
 * Looks for /public/profile.jpg (or .png/.webp). If it's missing, or the
 * file hasn't been added yet, this renders a styled placeholder with your
 * initials instead of a broken image — so the site always looks finished.
 *
 * To add your photo: drop a square-ish image into the `public/` folder
 * named exactly `profile.jpg` (or update the `src` below to match your
 * filename), ideally at least 400x400px.
 */
export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`Placeholder portrait for ${profile.name}`}
        className="flex h-28 w-28 shrink-0 items-center justify-center rounded-sm border border-dashed border-ink-500 bg-ink-800/60 font-display text-3xl font-medium text-inktext-faint sm:h-32 sm:w-32"
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
      <img
        src="/profile.jpg"
        alt={profile.name}
        onError={() => setFailed(true)}
        className="h-full w-full rounded-sm border border-ink-700 object-cover"
      />
      <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-signal-teal" />
    </div>
  );
}
