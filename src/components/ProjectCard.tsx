import { useState } from "react";
import { ExternalLink, FileText, PlayCircle, ChevronDown } from "lucide-react";
import type { Project, ProjectLink } from "../types/project";
import { GithubIcon } from "./icons";

const statusLabels: Record<Project["status"], string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  academic: "Academic",
  archived: "Archived",
};

const statusColors: Record<Project["status"], string> = {
  shipped: "text-signal-teal",
  "in-progress": "text-signal-amber",
  academic: "text-signal-amber",
  archived: "text-inktext-faint",
};

function linkIcon(kind: ProjectLink["kind"]) {
  switch (kind) {
    case "repo":
      return <GithubIcon width={13} height={13} />;
    case "demo":
      return <PlayCircle size={13} />;
    case "paper":
    case "docs":
      return <FileText size={13} />;
    default:
      return <ExternalLink size={13} />;
  }
}

function formatDate(iso: string) {
  const [year, month] = iso.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const isPlaceholder = project.slug.startsWith("placeholder-");

  return (
    <article
      className={`group relative flex flex-col rounded-sm border bg-ink-800/40 transition-colors ${
        isPlaceholder
          ? "border-dashed border-ink-600"
          : "border-ink-700 hover:border-ink-500"
      }`}
    >
      <div
        className={`h-[3px] w-full rounded-t-sm ${
          isPlaceholder ? "bg-ink-600" : "bg-signal-amber"
        }`}
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-medium text-inktext-primary">
            {project.title}
          </h3>
          {project.featured && (
            <span className="shrink-0 rounded-sm border border-signal-amber/40 px-2 py-0.5 font-mono text-[10px] text-signal-amber">
              featured
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-inktext-muted">{project.summary}</p>

        {project.metrics && project.metrics.length > 0 && (
          <dl className="mt-5 grid grid-cols-3 gap-3 border-y border-ink-700/60 py-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dd className="font-mono text-base text-signal-teal">{metric.value}</dd>
                <dt className="mt-1 text-[11px] leading-tight text-inktext-faint">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm bg-ink-700/70 px-2 py-1 font-mono text-[11px] text-inktext-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {expanded && (
          <div className="mt-5 space-y-3 border-t border-ink-700/60 pt-5">
            {project.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-inktext-muted">
                {paragraph}
              </p>
            ))}
            <p className="pt-1 text-sm leading-relaxed text-inktext-primary">
              <span className="text-inktext-faint">My role — </span>
              {project.role}
            </p>
          </div>
        )}

        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-5 flex items-center gap-1.5 self-start font-mono text-xs text-inktext-muted transition-colors hover:text-signal-amber"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown
            size={14}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <div className="mt-auto flex items-center justify-between pt-6">
          <div className="flex gap-4">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-inktext-muted transition-colors hover:text-signal-amber"
              >
                {linkIcon(link.kind)}
                {link.label}
              </a>
            ))}
            {isPlaceholder && (
              <span className="font-mono text-xs text-inktext-faint">
                — edit src/data/projects.ts
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-inktext-faint">
            <span className={statusColors[project.status]}>
              {statusLabels[project.status]}
            </span>
            <span aria-hidden>·</span>
            <span>{formatDate(project.date)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
