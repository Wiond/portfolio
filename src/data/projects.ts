import type { Project } from "../types/project";

/**
 * HOW TO ADD A PROJECT
 * ---------------------------------------------------------------
 * Add a new object to this array. That's it — the dashboard,
 * filters, and counts all derive from this file automatically.
 * See src/types/project.ts for what each field means.
 *
 * Delete the two PLACEHOLDER entries once you've replaced them
 * with real projects (see PROJECT_IDEAS.md for suggestions).
 * ---------------------------------------------------------------
 */
export const projects: Project[] = [
  {
    slug: "ftm-cycling-safety",
    title: "FTM Cycling Safety System",
    summary:
      "A real-time distance-sensing system for parent-child e-bikes that automatically limits speed if the child drifts too far away.",
    description:
      "Bachelor's thesis project (Halmstad University, 2025) built with a lab partner to address a real safety gap for parents cycling with children on e-bikes. Two ESP32-S3 microcontrollers measure the distance between the bikes using the Wi-Fi Fine Time Measurement (FTM) protocol, apply a Kalman filter to smooth out noisy readings, and trigger a CAN bus message to cut the child's bike speed if the gap exceeds a configurable threshold.\n\nThe hard part wasn't reading a distance value once — it was making that value trustworthy while both bikes are moving. Raw FTM readings were noisy enough to be unusable outdoors, so most of the engineering effort went into a Kalman filter with bias correction, and into characterizing how antenna height and mounting position affected accuracy through repeated field testing.\n\nResults were validated against GPS and RSSI-based alternatives at short range and outperformed both.",
    role: "Co-built the full system with a lab partner: firmware for both microcontrollers, the FTM ranging and Kalman filtering pipeline, the CAN bus speed-limiting logic, and the outdoor test methodology used to validate it.",
    category: "embedded",
    status: "academic",
    techStack: [
      "C++",
      "Arduino",
      "ESP32-S3",
      "Wi-Fi FTM (802.11-2016)",
      "Kalman Filtering",
      "CAN Bus (TWAI)",
      "UDP",
    ],
    metrics: [
      { value: "96.3%", label: "Static outdoor accuracy (filtered)" },
      { value: "±0.43 m", label: "Mean absolute deviation" },
      { value: "~85%", label: "Boundary-detection accuracy while riding" },
    ],
    links: [
      { label: "Source", url: "https://github.com/Wiond/ftm-cycling-safety", kind: "repo" },
    ],
    date: "2025-06",
    featured: true,
  },

  // ── PLACEHOLDER — replace with a real fullstack project ──────────
  // Good candidates: a CRUD app with auth + a real database, or a
  // real-time feature (websockets/live sync). See PROJECT_IDEAS.md.
  {
    slug: "placeholder-fullstack-project",
    title: "Your next project goes here",
    summary:
      "Swap this card for a real fullstack build — something with a database, an API, and auth is ideal.",
    description:
      "This is placeholder content so you can see how a second dashboard card looks. Replace every field below with details from a real project: what problem it solved, the architecture, and what you specifically built.\n\nGood signal for employers: a proper data model, a real API (REST or GraphQL), authentication, and at least one non-trivial engineering decision you can explain in an interview.",
    role: "Describe what you built end to end — frontend, backend, schema, deployment.",
    category: "fullstack",
    status: "in-progress",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    links: [],
    date: "2026-01",
  },

  // ── PLACEHOLDER — replace with this portfolio site itself, or a
  // real-time / API-integration project ─────────────────────────────
  {
    slug: "placeholder-second-project",
    title: "Another project goes here",
    summary:
      "This portfolio site itself is a legitimate third entry once it's deployed — or swap in a real-time/API project.",
    description:
      "Once this site is live, it's honestly a solid example of your frontend and TypeScript ability: a typed, data-driven component architecture that scales without a database. Consider using it as your third card, and link the live site and its repo.\n\nAlternatively: a small project that consumes a public API, caches results, and exposes your own endpoint shows backend and integration skills that a purely frontend project can't.",
    role: "Describe your specific contribution and the trickiest problem you solved.",
    category: "frontend",
    status: "in-progress",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    links: [],
    date: "2026-01",
  },
];
