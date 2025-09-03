import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <main id="main">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">About</h1>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          I’m a UI/UX designer focused on clarity, usability, and outcomes. My work spans complex dashboards, consumer
          apps, and scalable design systems. I believe in accessible, performance-minded interfaces grounded in user
          insight and measurable results.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="border border-neutral-200 p-5">
            <h2 className="font-semibold">Expertise</h2>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Product design, interaction design, UX strategy, information architecture, prototyping, and design
              systems.
            </p>
          </div>
          <div className="border border-neutral-200 p-5">
            <h2 className="font-semibold">Toolbox</h2>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Figma, FigJam, prototyping tools, accessibility testing, analytics-informed iteration.
            </p>
          </div>

          {/* Principles */}
          <div className="border border-neutral-200 p-5">
            <h2 className="font-semibold">Principles</h2>
            <ul className="mt-2 text-neutral-600 leading-relaxed list-disc pl-5">
              <li>Start with user outcomes and measurable impact.</li>
              <li>Design systems that scale across teams and platforms.</li>
              <li>Accessibility is a requirement, not an add-on.</li>
              <li>Prototype early, test often, iterate intentionally.</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="border border-neutral-200 p-5">
            <h2 className="font-semibold">Experience</h2>
            <ul className="mt-2 grid gap-3">
              <li className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">Senior Product Designer · Fintech Co.</p>
                  <p className="text-neutral-600 text-sm">Dashboards, risk workflows, design system expansion</p>
                </div>
                <span className="text-sm text-neutral-600">2022—Present</span>
              </li>
              <li className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">Product Designer · Mobile Bank</p>
                  <p className="text-neutral-600 text-sm">Onboarding, IA, money movement</p>
                </div>
                <span className="text-sm text-neutral-600">2020—2022</span>
              </li>
              <li className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">Designer · Studio</p>
                  <p className="text-neutral-600 text-sm">E‑commerce, content sites, CMS systems</p>
                </div>
                <span className="text-sm text-neutral-600">2017—2020</span>
              </li>
            </ul>
          </div>

          {/* Collaboration */}
          <div className="border border-neutral-200 p-5">
            <h2 className="font-semibold">How I Collaborate</h2>
            <ul className="mt-2 text-neutral-600 leading-relaxed list-disc pl-5">
              <li>Embed with product and engineering during planning and delivery.</li>
              <li>Run lightweight research and synthesize insights with stakeholders.</li>
              <li>Maintain tokens and components to keep design and code aligned.</li>
            </ul>
          </div>

          {/* CTA card */}
          <div className="border border-black p-5 bg-white">
            <h2 className="font-semibold">Let’s collaborate</h2>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Available for product design, UX strategy, and systems work.
            </p>
            <a
              href="/contact"
              className="mt-3 inline-flex items-center px-4 py-2 border border-black bg-black text-white hover:opacity-90"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
