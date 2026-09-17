import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../types/project";
import { FilterBar } from "./FilterBar";
import { ProjectCard } from "./ProjectCard";

export function ProjectDashboard() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category))),
    []
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: projects.length };
    for (const category of categories) {
      map[category] = projects.filter((p) => p.category === category).length;
    }
    return map;
  }, [categories]);

  const sorted = useMemo(
    () =>
      [...projects].sort((a, b) => {
        if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
        return b.date.localeCompare(a.date);
      }),
    []
  );

  const visible = sorted.filter((p) => active === "all" || p.category === active);

  return (
    <section id="work" className="border-b border-ink-700/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs text-signal-amber">work</p>
            <h2 className="font-display text-3xl font-medium text-inktext-primary sm:text-4xl">
              Projects
            </h2>
          </div>
          {categories.length > 1 && (
            <FilterBar
              categories={categories}
              active={active}
              onChange={setActive}
              counts={counts}
            />
          )}
        </div>

        {visible.length === 0 ? (
          <p className="py-16 text-center font-mono text-sm text-inktext-faint">
            Nothing in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
