"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Check } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { profile } from "@/lib/data";

const quickContacts = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Phone,
    label: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, label: profile.location },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <div>
      <SectionTitle>Contact</SectionTitle>

      <div className="mb-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {quickContacts.map((c) => {
          const Icon = c.icon;
          const inner = (
            <>
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="size-[18px]" />
              </div>
              <span className="truncate text-sm text-foreground">
                {c.label}
              </span>
            </>
          );
          return c.href ? (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-3 rounded-2xl border border-border bg-panel p-4 transition-colors hover:border-primary/40"
            >
              {inner}
            </a>
          ) : (
            <div
              key={c.label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-panel p-4"
            >
              {inner}
            </div>
          );
        })}
      </div>

      <h3 className="mb-6 font-display text-2xl font-semibold text-foreground">
        Contact Form
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            name="name"
            type="text"
            placeholder="Full name"
            aria-label="Full name"
            className="rounded-xl border border-border bg-panel px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/30"
          />
          <input
            required
            name="email"
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            className="rounded-xl border border-border bg-panel px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/30"
          />
        </div>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Your Message"
          aria-label="Your message"
          className="resize-none rounded-xl border border-border bg-panel px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
        <div className="mt-3 flex items-center justify-end gap-4">
          {sent && (
            <span className="flex items-center gap-2 text-sm text-primary">
              <Check className="size-4" /> Message ready to send!
            </span>
          )}
          <button
            type="submit"
            className="send-message-button inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground"
          >
            <Send className="size-4" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
