import { StatusBadge } from "./status-badge";
import { StatsGrid } from "./stats-grid";

export function Hero() {
   {/* SEO: Structured Data for Person/Organization */}
   <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{
     __html: JSON.stringify({
       "@context": "https://schema.org",
       "@type": "Person",
       "name": "UI/UX Designer",
       "jobTitle": "UI/UX Designer & Digital Product Strategist",
       "description": "I help brands and startups transform ideas into functional, scalable, and user-friendly digital products. From strategy to polished design, I create experiences that deliver results.",
       "url": typeof window !== 'undefined' ? window.location.origin : '',
       "sameAs": [],
       "knowsAbout": ["UI Design", "UX Design", "Digital Strategy", "Product Design", "User Experience"]
     })
   }}
 />
  return (
    <section className="relative bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-54">
        {/* Header Section */}
        <div className="text-center mb-16">
          <StatusBadge className="mb-6">
          Available for Freelance & Collaborations
          </StatusBadge>

          <h1 className="text-balance text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-black">
          Designing Experiences
            <br />
            That Speak Louder Than Words
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
          I help brands and startups transform ideas into functional, scalable, and user-friendly digital products.
          From strategy to polished design, I create experiences that deliver results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full px-8 py-4 bg-black text-white font-semibold"
            >
              Let’s Create
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
      </div>
    </section>
  );
}