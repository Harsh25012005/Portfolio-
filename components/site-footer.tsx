export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600 flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="hidden sm:block">Design & UX crafted with care.</p>
      </div>
    </footer>
  )
}
