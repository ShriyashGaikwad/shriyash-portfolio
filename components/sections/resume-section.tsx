import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Award,
  Download,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { education, experience, certifications, seminars } from "@/lib/data";

type TimelineItem = {
  title: string;
  period: string;
  detail: string;
};

function Timeline({
  icon: Icon,
  heading,
  items,
}: {
  icon: typeof GraduationCap;
  heading: string;
  items: TimelineItem[];
}) {
  return (
    <section className="mb-10">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
          <Icon className="size-5" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-foreground">
          {heading}
        </h3>
      </div>

      <ol className="relative ml-5 border-l border-border">
        {items.map((item) => (
          <li key={item.title} className="relative pb-8 pl-8 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-primary bg-background" />
            <h4 className="font-display text-base font-semibold text-foreground text-pretty">
              {item.title}
            </h4>
            <p className="mt-1 text-sm font-medium text-primary">
              {item.period}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ResumeSection() {
  return (
    <div>
      <SectionTitle>Resume</SectionTitle>

      <Timeline
        icon={GraduationCap}
        heading="Education"
        items={education.map((e) => ({
          title: e.school,
          period: e.period,
          detail: e.detail,
        }))}
      />

      <Timeline
        icon={Briefcase}
        heading="Experience"
        items={experience.map((e) => ({
          title: e.role,
          period: e.period,
          detail: e.detail,
        }))}
      />

      <Timeline
        icon={BookOpen}
        heading="Seminars & Workshops"
        items={seminars.map((s) => ({
          title: s.title,
          period: `${s.provider} · ${s.date}`,
          detail: s.detail,
        }))}
      />

      <section>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
            <Award className="size-5" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground">
            Certifications
          </h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-panel p-4 transition-colors hover:border-primary/50
              shadow-lg shadow-black/30"
            >
              <h4 className="font-display text-sm font-semibold text-foreground text-pretty">
                {c.title}
              </h4>
              <div className="mt-2 flex items-center justify-between gap-2 text-xs">
                <span className="text-muted-foreground">{c.provider}</span>
                <span className="font-medium text-primary">{c.score}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <a
          href="/Shriyash-Gaikwad-CV.pdf"
          download
          className="send-message-button inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground"
        >
          <Download className="size-4" />
          Download My CV
        </a>
      </div>
    </div>
  );
}
