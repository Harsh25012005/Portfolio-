import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/hero"
import { ProjectCard } from "@/components/project-card"

export default function Page() {
  return (
    <main id="main">
      <SiteHeader />
      <Hero />

      {/* Selected Work */}
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
          <a href="/work" className="text-sm underline underline-offset-4">
            View all
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Fintech Dashboard"
            description="Data-dense dashboard redesigned for clarity and speed. Reduced time-to-task by 32%."
            href="/work/fintech-dashboard"
            meta="Product Design"
          />
          <ProjectCard
            title="Mobile Banking App"
            description="Streamlined onboarding and IA; increased activation by 18%."
            href="/work/mobile-banking"
            meta="UX Strategy"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 border-t border-neutral-200">
        <h2 className="text-2xl md:text-3xl font-semibold">Capabilities</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-neutral-200 p-5">
            <h3 className="font-semibold">Product Strategy</h3>
            <ul className="mt-2 text-neutral-600 leading-relaxed list-disc pl-5">
              <li>Discovery workshops & research</li>
              <li>Problem framing & KPI definition</li>
              <li>Opportunity sizing</li>
            </ul>
          </div>
          <div className="border border-neutral-200 p-5">
            <h3 className="font-semibold">Interface Design</h3>
            <ul className="mt-2 text-neutral-600 leading-relaxed list-disc pl-5">
              <li>Flows, wireframes, high fidelity</li>
              <li>Interactive prototypes</li>
              <li>Accessibility & performance</li>
            </ul>
          </div>
          <div className="border border-neutral-200 p-5">
            <h3 className="font-semibold">Systems & Ops</h3>
            <ul className="mt-2 text-neutral-600 leading-relaxed list-disc pl-5">
              <li>Design systems & tokens</li>
              <li>Handoffs & documentation</li>
              <li>Experimentation & analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach (expanded) */}
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 border-t border-neutral-200">
        <h2 className="text-2xl md:text-3xl font-semibold">Approach</h2>
        <ol className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="border border-neutral-200 p-5">
            <h3 className="font-semibold">01. Discover</h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Research, interviews, audits, and alignment on goals and constraints.
            </p>
            <ul className="mt-3 text-sm text-neutral-600 list-disc pl-5">
              <li>Stakeholder interviews</li>
              <li>Journey mapping</li>
              <li>Heuristic audits</li>
            </ul>
          </li>
          <li className="border border-neutral-200 p-5">
            <h3 className="font-semibold">02. Define</h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Problem framing, success metrics, IA, flows, and system architecture.
            </p>
            <ul className="mt-3 text-sm text-neutral-600 list-disc pl-5">
              <li>Personas & scenarios</li>
              <li>Information architecture</li>
              <li>Success metrics</li>
            </ul>
          </li>
          <li className="border border-neutral-200 p-5">
            <h3 className="font-semibold">03. Design</h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Wireframes to high fidelity, prototypes, and design system tokens.
            </p>
            <ul className="mt-3 text-sm text-neutral-600 list-disc pl-5">
              <li>Hi‑fi prototypes</li>
              <li>Design tokens</li>
              <li>Specs & handoff</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 border-t border-neutral-200">
        <h2 className="text-2xl md:text-3xl font-semibold">Results</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-neutral-200 p-4">
            <p className="text-xs uppercase tracking-wide text-neutral-600">Activation</p>
            <p className="mt-1 text-2xl font-semibold">+18%</p>
          </div>
          <div className="border border-neutral-200 p-4">
            <p className="text-xs uppercase tracking-wide text-neutral-600">Time‑to‑task</p>
            <p className="mt-1 text-2xl font-semibold">-32%</p>
          </div>
          <div className="border border-neutral-200 p-4">
            <p className="text-xs uppercase tracking-wide text-neutral-600">Retention</p>
            <p className="mt-1 text-2xl font-semibold">+12%</p>
          </div>
          <div className="border border-neutral-200 p-4">
            <p className="text-xs uppercase tracking-wide text-neutral-600">Errors</p>
            <p className="mt-1 text-2xl font-semibold">-24%</p>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 border-t border-neutral-200">
        <h2 className="text-2xl md:text-3xl font-semibold">Engagements</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-neutral-200 p-5">
            <h3 className="font-semibold">Design Sprint</h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              1–2 weeks to align, explore, and de-risk a focused problem. Delivers key flows, hi‑fi prototype, and a
              prioritized roadmap.
            </p>
            <ul className="mt-3 text-sm text-neutral-600 list-disc pl-5">
              <li>Discovery, flows, hi‑fi prototype</li>
              <li>Usability test plan and findings</li>
              <li>Roadmap + effort estimates</li>
            </ul>
          </div>
          <div className="border border-neutral-200 p-5">
            <h3 className="font-semibold">Embedded / Retainer</h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Ongoing partnership to ship features and systems. Integrates with product, engineering, and analytics.
            </p>
            <ul className="mt-3 text-sm text-neutral-600 list-disc pl-5">
              <li>Backlog shaping and delivery</li>
              <li>Design system growth</li>
              <li>Experiments and measurement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 border-t border-neutral-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Let’s make it effortless.</h2>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Available for product design, UX strategy, and systems work.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 border border-black bg-black text-white hover:opacity-90"
          >
            Start a conversation
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
