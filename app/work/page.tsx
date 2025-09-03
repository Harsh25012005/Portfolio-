"use client"

import { useState, useMemo } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectCard } from "@/components/project-card"

export default function WorkPage() {
  const projects = [
    {
      title: "Fintech Dashboard",
      description: "Data-dense dashboard redesigned for clarity and speed.",
      href: "/work/fintech-dashboard",
      meta: "Product Design",
      category: "Product Design",
    },
    {
      title: "Mobile Banking App",
      description: "Onboarding and information architecture refinement for mobile.",
      href: "/work/mobile-banking",
      meta: "UX Strategy",
      category: "UX Strategy",
    },
    {
      title: "E-commerce Checkout",
      description: "Reduced friction, increased conversion, and improved error recovery.",
      href: "/work/checkout",
      meta: "UX/UI",
      category: "UX/UI",
    },
    {
      title: "Design System",
      description: "Tokenized, scalable system for multi-brand, multi-platform products.",
      href: "/work/design-system",
      meta: "Design System",
      category: "Design System",
    },
  ] as const

  const categories = ["All", "Product Design", "UX Strategy", "UX/UI", "Design System"] as const
  const [active, setActive] = useState<(typeof categories)[number]>("All")

  const filtered = useMemo(() => projects.filter((p) => active === "All" || p.category === active), [active, projects])

  return (
    <main id="main">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">All Work</h1>
        <p className="mt-2 text-neutral-600 max-w-2xl leading-relaxed">
          A selection of product design, UX strategy, and interface work. Case studies include goals, constraints, and
          measurable outcomes.
        </p>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {categories.map((c) => {
            const pressed = active === c
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={pressed}
                className={`px-3 py-1.5 text-sm border ${
                  pressed ? "border-black bg-black text-white" : "border-neutral-200 hover:border-black"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`}
              >
                {c}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.description} href={p.href} meta={p.meta} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
