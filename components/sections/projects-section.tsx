"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { projects, projectFilters } from "@/lib/data";

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const visible = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <div>
      <SectionTitle>Projects</SectionTitle>

      <div className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-border bg-panel transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-secondary hover:shadow-2xl hover:shadow-primary/10
            shadow-lg shadow-black/35"
          >
            <div className="aspect-video overflow-hidden border-b border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} preview`}
                className="size-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Tech Stack: {project.stack}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
