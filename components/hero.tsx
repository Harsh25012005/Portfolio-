export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="inline-flex items-center gap-2 border border-black px-3 py-1 text-xs uppercase tracking-wide">
          <span className="h-2 w-2 rounded-full bg-black" aria-hidden />
          Available for freelance Q4
        </div>

        <h1 className="text-balance text-4xl md:text-6xl font-semibold leading-tight mt-4">
          UI/UX Designer crafting clear, usable, and elegant interfaces.
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
          Evidence-driven design, system thinking, and meticulous attention to detail. I help products feel effortless.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="/work"
            className="inline-flex items-center px-5 py-2.5 border border-black bg-black text-white hover:opacity-90"
          >
            View Work
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 border border-black text-black hover:bg-black hover:text-white"
          >
            Get in Touch
          </a>
        </div>

        {/* Impact stats */}
        <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-neutral-200 p-4">
            <dt className="text-xs uppercase tracking-wide text-neutral-600">Years</dt>
            <dd className="text-2xl font-semibold">7+</dd>
          </div>
          <div className="border border-neutral-200 p-4">
            <dt className="text-xs uppercase tracking-wide text-neutral-600">Projects</dt>
            <dd className="text-2xl font-semibold">40+</dd>
          </div>
          <div className="border border-neutral-200 p-4">
            <dt className="text-xs uppercase tracking-wide text-neutral-600">Activation</dt>
            <dd className="text-2xl font-semibold">+18%</dd>
          </div>
          <div className="border border-neutral-200 p-4">
            <dt className="text-xs uppercase tracking-wide text-neutral-600">Time‑to‑task</dt>
            <dd className="text-2xl font-semibold">-32%</dd>
          </div>
        </dl>
      </div>

      {/* subtle shard */}
      <div
        aria-hidden="true"
        className="h-8 md:h-10 bg-black"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)" }}
      />
    </section>
  )
}
