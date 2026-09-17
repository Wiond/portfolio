export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "backend"
  | "embedded"
  | "data";

export type ProjectStatus = "shipped" | "in-progress" | "academic" | "archived";

export interface ProjectLink {
  label: string;
  url: string;
  /** Used to pick an icon in the UI. */
  kind: "repo" | "demo" | "docs" | "paper" | "video" | "other";
}

export interface ProjectMetric {
  /** e.g. "96.3%" */
  value: string;
  /** e.g. "Distance-estimation accuracy" */
  label: string;
}

export interface Project {
  /** Unique, url-safe. Used for anchors/keys — keep stable once published. */
  slug: string;
  title: string;
  /** One or two sentences. Shown on the dashboard card. */
  summary: string;
  /** Longer writeup shown when a card is expanded. Plain text, 2-4 short paragraphs. */
  description: string;
  /** What you actually did — helps an employer see it wasn't a tutorial clone. */
  role: string;
  category: ProjectCategory;
  status: ProjectStatus;
  techStack: string[];
  /** Optional standout numbers — omit the array entirely if there's nothing worth flagging. */
  metrics?: ProjectMetric[];
  links: ProjectLink[];
  /** ISO date (YYYY-MM) the project was completed or last meaningfully updated. Drives dashboard ordering. */
  date: string;
  /** Show this project in the featured/top slot on the dashboard. */
  featured?: boolean;
}
