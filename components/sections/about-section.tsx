import {
  Server,
  Layers,
  Code2,
  Coffee,
  Database,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { about, services, achievements } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Layers,
  Code2,
  Coffee,
  Database,
  Sparkles,
};

export function AboutSection() {
  return (
    <div>
      <SectionTitle>About Me</SectionTitle>

      <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-pretty">
            {p}
          </p>
        ))}
      </div>

      <h3 className="mt-10 mb-6 font-display text-2xl font-semibold text-foreground">
        What I&apos;m Doing
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <div
              key={service.title}
              className="flex gap-4 rounded-2xl border border-border bg-panel p-5 transition-colors hover:border-primary/50
              shadow-lg shadow-black/30"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                {Icon ? <Icon className="size-5" /> : null}
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-foreground">
                  {service.title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {service.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="mt-10 mb-6 font-display text-2xl font-semibold text-foreground">
        Achievements
      </h3>
      <ul className="flex flex-col gap-3">
        {achievements.map((a) => (
          <li
            key={a.title}
            className="flex items-start gap-4 rounded-2xl border border-border bg-panel p-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-secondary hover:shadow-lg hover:shadow-primary/10
            shadow-lg shadow-black/30"
          >
            <span className="text-2xl leading-none" aria-hidden="true">
              {a.emoji}
            </span>
            <div>
              <h4 className="font-display text-base font-semibold text-foreground">
                {a.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {a.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
