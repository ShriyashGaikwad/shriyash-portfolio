"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { AboutSection } from "@/components/sections/about-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";

const tabs = ["About", "Resume", "Projects", "Skills", "Contact"] as const;
type Tab = (typeof tabs)[number];

export function Portfolio() {
  const [active, setActive] = useState<Tab>("About");

  return (
    <main className="mx-auto min-h-screen w-full max-w-[680px] px-3 py-4 transition-[padding,max-width] duration-500 ease-out sm:max-w-[760px] sm:px-5 sm:py-6 lg:max-w-[1200px] lg:px-6 lg:py-8 xl:max-w-[1600px] xl:px-8 xl:py-10">
      <div className="grid gap-4 transition-[gap] duration-500 ease-out sm:gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <Sidebar />

        <div className="relative flex min-w-0 min-h-[calc(100vh-5rem)] flex-col rounded-3xl border border-border bg-card transition-[border-radius] duration-500 ease-out">
          <nav className="fixed inset-x-3 bottom-3 z-20 mx-auto flex max-w-[800px] justify-center rounded-2xl border border-border bg-card/95 px-2 py-2 shadow-xl shadow-black/30 backdrop-blur transition-[border-radius,box-shadow] duration-500 ease-out lg:static lg:mx-0 lg:max-w-none lg:justify-end lg:rounded-t-3xl lg:rounded-b-none lg:border-x-0 lg:border-t-0 lg:px-6 lg:shadow-none">
            <ul className="flex w-full flex-nowrap items-center justify-around gap-1 overflow-x-auto lg:w-auto lg:justify-end">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    type="button"
                    onClick={() => setActive(tab)}
                    aria-current={active === tab ? "page" : undefined}
                    className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:text-base lg:px-4 lg:py-3 ${
                      active === tab
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1 p-4 pb-24 sm:p-6 sm:pb-24 lg:p-8 lg:pb-8 xl:p-10">
            {active === "About" && <AboutSection />}
            {active === "Resume" && <ResumeSection />}
            {active === "Projects" && <ProjectsSection />}
            {active === "Skills" && <SkillsSection />}
            {active === "Contact" && <ContactSection />}
          </div>
        </div>
      </div>
    </main>
  );
}
