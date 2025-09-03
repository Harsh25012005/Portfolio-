import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function MobileBankingCaseStudy() {
  return (
    <main id="main">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm mb-4">
          <a href="/work" className="underline underline-offset-4">
            Work
          </a>
          <span aria-hidden> / </span>
          <span>Mobile Banking App</span>
        </nav>

        <header className="border-b border-neutral-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Mobile Banking App</h1>
          <section className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Role</p>
              <p className="font-medium">UX Designer</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Team</p>
              <p className="font-medium">Design, PM, Eng</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Timeline</p>
              <p className="font-medium">8 weeks</p>
            </div>
          </section>
        </header>

        <figure className="reveal-item mt-8 border border-neutral-200">
          <img
            src="/images/mobile-banking.jpg"
            alt="Black and white mobile banking app UI overview"
            className="img-mono block w-full object-cover"
          />
          <figcaption className="px-4 py-2 text-xs text-neutral-600 border-t border-neutral-200">
            Onboarding and dashboard from the mobile banking experience (monochrome preview)
          </figcaption>
        </figure>

        <section className="mt-8 grid gap-4">
          <h2 className="text-xl font-semibold">Challenges</h2>
          <p className="text-neutral-600 leading-relaxed">
            Complex onboarding, unclear IA, and drop-offs during verification.
          </p>
        </section>

        <section className="mt-8 grid gap-4">
          <h2 className="text-xl font-semibold">Solutions</h2>
          <ul className="list-disc pl-6 text-neutral-600 leading-relaxed">
            <li>Reduced steps with progressive disclosure</li>
            <li>Clearer status and error feedback</li>
            <li>Simplified nav with descriptive labels</li>
          </ul>
        </section>

        <section className="mt-8 grid gap-4">
          <h2 className="text-xl font-semibold">Goals & Constraints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc pl-6 text-neutral-600 leading-relaxed">
              <li>Improve onboarding completion</li>
              <li>Clarify IA and navigation</li>
              <li>Reduce verification drop‑offs</li>
            </ul>
            <ul className="list-disc pl-6 text-neutral-600 leading-relaxed">
              <li>Compliance and KYC regulations</li>
              <li>Performance on low‑end devices</li>
              <li>Localization constraints</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-4">
          <h2 className="text-xl font-semibold">Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Activation</p>
              <p className="text-2xl font-semibold">+18%</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Support tickets</p>
              <p className="text-2xl font-semibold">-22%</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">Completion time</p>
              <p className="text-2xl font-semibold">-15%</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">NPS</p>
              <p className="text-2xl font-semibold">+0.4</p>
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
