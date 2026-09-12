"use client";

import { useState } from "react";
import { Mail, Phone, Calendar, MapPin, ChevronDown } from "lucide-react";
import { profile } from "@/lib/data";
import {
  LinkedInIcon,
  GitHubIcon,
  InstagramIcon,
} from "@/components/brand-icons";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: profile.altEmail,
    href: `mailto:${profile.altEmail}`,
  },
  {
    icon: Phone,
    label: "PHONE",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Calendar,
    label: "BIRTHDAY",
    value: profile.birthday,
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: profile.location,
  },
];

export function Sidebar() {
  const [contactsOpen, setContactsOpen] = useState(false);

  return (
    <aside className="relative rounded-3xl border border-border bg-card px-5 py-5 transition-[padding,top] duration-500 ease-out sm:px-7 sm:py-7 xl:sticky xl:top-10 xl:self-start xl:px-8 xl:py-7">
      <div className="flex flex-row items-center gap-4 pr-12 transition-[gap] duration-500 ease-out sm:gap-6 xl:flex-col xl:pr-0">
        <img
          src="/shri_linked.png"
          alt={`${profile.name}'s profile photo`}
          className="size-20 shrink-0 rounded-full object-cover ring-3 ring-border sm:size-28 xl:size-41"
        />

        <div className="text-left xl:text-center">
          <h1 className="font-display text-lg font-semibold text-foreground text-balance sm:text-xl xl:text-2xl">
            {profile.name}
          </h1>
          <p className="mt-2 inline-block rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            {profile.title}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setContactsOpen((open) => !open)}
        aria-expanded={contactsOpen}
        className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-lg bg-secondary px-3 py-2 text-xs font-medium text-primary transition-transform duration-200 active:scale-95 xl:hidden"
      >
        <span className="hidden sm:inline">
          {contactsOpen ? "Hide Contacts" : "Show Contacts"}
        </span>
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${contactsOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,margin] duration-500 ease-in-out ${
          contactsOpen ? "mt-6 grid-rows-[1fr]" : "grid-rows-[0fr]"
        } xl:mt-0 xl:grid-rows-[1fr]`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="my-6 h-px w-full bg-border" />

          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="size-[18px]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="truncate text-sm text-foreground">{item.value}</p>
                </div>
              </>
            );
            return (
              <li key={item.label} className="flex items-center gap-4">
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex w-full items-center gap-4 transition-colors hover:text-primary"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
          </ul>

          <ul className="flex items-center justify-center gap-4 pt-6 xl:justify-center">
          <li>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex size-10 items-center justify-center text-primary transition-all duration-200 hover:text-foreground active:scale-90"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </li>
          <li>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex size-10 items-center justify-center text-primary transition-all duration-200 hover:text-foreground active:scale-90"
            >
              <GitHubIcon className="size-5" />
            </a>
          </li>
          <li>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="flex size-10 items-center justify-center text-primary transition-all duration-200 hover:text-foreground active:scale-90"
            >
              <InstagramIcon className="size-5" />
            </a>
          </li>
          </ul>

          <div className="my-6 h-px w-full bg-border" />
        </div>
      </div>
    </aside>
  );
}
