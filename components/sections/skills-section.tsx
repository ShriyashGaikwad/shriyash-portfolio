import { SectionTitle } from "@/components/section-title";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <div>
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="flex flex-col gap-4">
        {skillGroups.map((group) => (
          <section
            key={group.label}
            className="rounded-2xl border border-border bg-panel p-5 shadow-lg shadow-black/30"
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-primary">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-secondary px-3.5 py-2 text-sm text-foreground transition-all duration-200 hover:scale-95 hover:border-primary hover:shadow-lg hover:shadow-black/25"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
