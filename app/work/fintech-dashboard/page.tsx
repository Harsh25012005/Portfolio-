import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function FintechCaseStudy() {
  return (
    <main id="main">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm mb-4">
          <a href="/work" className="underline underline-offset-4">
            Work
          </a>
          <span aria-hidden> / </span>
          <span>Fintech Dashboard</span>
        </nav>

        <header className="border-b border-neutral-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Fintech Dashboard</h1>
          <section className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Role</p>
              <p className="font-medium">Product Designer</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Team</p>
              <p className="font-medium">PM, Eng, Data</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Timeline</p>
              <p className="font-medium">12 weeks</p>
            </div>
          </section>
        </header>

        {/* Monochrome hero image for visual context */}
        <figure className="reveal-item mt-8 border border-neutral-200">
          <img
            src="/images/fintech-dashboard.jpg"
            alt="Black and white fintech dashboard UI overview"
            className="img-mono block w-full object-cover"
          />
          <figcaption className="px-4 py-2 text-xs text-neutral-600 border-t border-neutral-200">
            Overview screen from the redesigned fintech dashboard (monochrome preview)
          </figcaption>
        </figure>

        <section className="mt-8 grid gap-4">
          <h2 className="text-xl font-semibold">Context</h2>
          <p className="text-neutral-600 leading-relaxed">
            A data-heavy enterprise dashboard needed to improve clarity and reduce cognitive load. I restructured the
            information architecture and prioritized high-signal views.
          </p>
        </section>

        <section className="mt-8 grid gap-4">
          <h2 className="text-xl font-semibold">Process</h2>
          <ul className="list-disc pl-6 text-neutral-600 leading-relaxed">
            <li>Stakeholder interviews and usage analytics review</li>
            <li>Task analysis and flow mapping</li>
            <li>Wireframes to high-fidelity prototypes</li>
            <li>Usability testing and iteration</li>
          </ul>
        </section>

        <section className="mt-8 grid gap-4">
          <h2 className="text-xl font-semibold">Goals & Constraints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc pl-6 text-neutral-600 leading-relaxed">
              <li>Reduce time-to-task for key workflows</li>
              <li>Increase adoption of reporting features</li>
              <li>Improve error recovery and feedback</li>
            </ul>
            <ul className="list-disc pl-6 text-neutral-600 leading-relaxed">
              <li>Legacy data models and APIs</li>
              <li>Strict compliance requirements</li>
              <li>Limited screen real estate</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-4">
          <h2 className="text-xl font-semibold">Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Time‑to‑task</p>
              <p className="text-2xl font-semibold">-32%</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Adoption</p>
              <p className="text-2xl font-semibold">+14%</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Errors</p>
              <p className="text-2xl font-semibold">-20%</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Satisfaction</p>
              <p className="text-2xl font-semibold">+0.6</p>
            </div>
          </div>
        </section>

        <section className="mt-10 border-t border-neutral-200 pt-6 flex items-center justify-between">
          <a href="/work" className="text-sm underline underline-offset-4">
            ← Back to all work
          </a>
          <a
            href="/contact"
            className="text-sm inline-flex items-center px-4 py-2 border border-black bg-black text-white hover:opacity-90"
          >
            Discuss a project
          </a>
        </section>
      </article>
      <SiteFooter />
    </main>
  )
}
