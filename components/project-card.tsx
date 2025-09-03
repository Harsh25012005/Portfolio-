import Link from "next/link"

type ProjectCardProps = {
  title: string
  description: string
  href: string
  meta?: string
  imageSrc?: string
  imageAlt?: string
}

export function ProjectCard({ title, description, href, meta, imageSrc, imageAlt }: ProjectCardProps) {
  return (
    <article className="reveal-item group border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors">
      <Link href={href} className="block">
        {imageSrc ? (
          <div className="overflow-hidden border-b border-neutral-200">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt ?? ""}
              className="img-mono block w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ) : null}
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            <span className="text-xs tracking-wide uppercase text-neutral-500">{meta ?? "Case Study"}</span>
          </div>
          <p className="mt-2 text-neutral-600 leading-relaxed">{description}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm">
            <span className="underline underline-offset-4">Read more</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
