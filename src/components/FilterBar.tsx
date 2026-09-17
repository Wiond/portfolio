import type { ProjectCategory } from "../types/project";

const categoryLabels: Record<ProjectCategory, string> = {
  fullstack: "Fullstack",
  frontend: "Frontend",
  backend: "Backend",
  embedded: "Embedded",
  data: "Data",
};

interface FilterBarProps {
  categories: ProjectCategory[];
  active: ProjectCategory | "all";
  onChange: (category: ProjectCategory | "all") => void;
  counts: Record<string, number>;
}

export function FilterBar({ categories, active, onChange, counts }: FilterBarProps) {
  const options: Array<ProjectCategory | "all"> = ["all", ...categories];

  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const isActive = active === option;
        const label = option === "all" ? "All" : categoryLabels[option];
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={`rounded-sm border px-3.5 py-1.5 font-mono text-xs transition-colors ${
              isActive
                ? "border-signal-amber bg-signal-amber/10 text-signal-amber"
                : "border-ink-700 text-inktext-muted hover:border-ink-500 hover:text-inktext-primary"
            }`}
          >
            {label}
            <span className="ml-1.5 text-inktext-faint">{counts[option]}</span>
          </button>
        );
      })}
    </div>
  );
}
