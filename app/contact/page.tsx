"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  return (
    <main id="main">
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
        <p className="mt-2 text-neutral-600 leading-relaxed">
          For collaborations or inquiries, reach out via the form below.
        </p>

        <form
          aria-describedby="contact-help"
          className="mt-8 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            setStatus("sent")
          }}
          noValidate
        >
          <p id="contact-help" className="text-sm text-neutral-600">
            I typically reply within 1–2 business days.
          </p>

          {/* Honeypot */}
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <label className="grid gap-2">
            <span className="text-sm">Name</span>
            <input
              type="text"
              required
              className="h-10 px-3 border border-black outline-none focus:ring-2 focus:ring-black"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm">Email</span>
            <input
              type="email"
              required
              className="h-10 px-3 border border-black outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </label>

          {/* Project type (checkboxes) */}
          <fieldset className="grid gap-2 border border-neutral-200 p-4">
            <legend className="text-sm font-medium">Project Type</legend>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="accent-black" /> Product design
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="accent-black" /> UX strategy
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="accent-black" /> Design system
            </label>
          </fieldset>

          {/* Budget and timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="grid gap-2">
              <span className="text-sm">Budget</span>
              <select className="h-10 px-3 border border-black outline-none focus:ring-2 focus:ring-black">
                <option>Undisclosed</option>
                <option>$5k–$10k</option>
                <option>$10k–$25k</option>
                <option>$25k–$50k</option>
                <option>$50k+</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm">Timeline</span>
              <select className="h-10 px-3 border border-black outline-none focus:ring-2 focus:ring-black">
                <option>Flexible</option>
                <option>2–4 weeks</option>
                <option>1–2 months</option>
                <option>3+ months</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm">Message</span>
            <textarea
              required
              rows={6}
              className="px-3 py-2 border border-black outline-none focus:ring-2 focus:ring-black"
              placeholder="Tell me a bit about your project..."
            />
          </label>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 border border-black bg-black text-white hover:opacity-90"
            >
              Send
            </button>
            {/* Live status */}
            <p aria-live="polite" className="text-sm text-neutral-600">
              {status === "sent" ? "Thanks! Your message has been noted (demo)." : null}
            </p>
          </div>

          {/* Consent note */}
          <p className="text-xs text-neutral-600">
            By submitting, you agree to be contacted regarding your inquiry. No spam, ever.
          </p>

          {/* Alternate contact */}
          <p className="text-xs text-neutral-600">
            Prefer email? Write to{" "}
            <a href="mailto:hello@example.com" className="underline underline-offset-4">
              hello@example.com
            </a>
            .
          </p>
        </form>
      </section>
      <SiteFooter />
    </main>
  )
}
