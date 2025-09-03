import { StatusBadge } from "./status-badge";
import { StatsGrid } from "./stats-grid";

export function Hero() {
  const stats = [
    { label: "Years", value: "7+" },
    { label: "Projects", value: "40+" },
    { label: "Activation", value: "+18%" },
    { label: "Time‑to‑task", value: "-32%" }
  ];

  return (
    <section className="relative bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <StatusBadge className="mb-6">
            Available for freelance Q4
          </StatusBadge>

          <h1 className="text-balance text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-black">
            Build Digital Experiences
            <br />
            That Drive Results
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
            We're a creative digital agency helping brands stand out through tailored web design, branding, and 
            digital strategies. Let's turn your vision into a powerful online presence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Get a Free Consultation
            </a>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <span className="font-semibold">5.0</span>
            <span>Based on our customer review</span>
          </div>
        </div>
        {/* Stats Section */}
        <StatsGrid stats={stats} className="mt-16" />
      </div>

      {/* Decorative bottom shard */}
      <div
        aria-hidden="true"
        className="h-8 md:h-10 bg-black"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)" }}
      />
    </section>
  );
}