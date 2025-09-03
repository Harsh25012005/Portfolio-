"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const navLink = (href: string) =>
    `hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:focus-visible:ring-white ${
      pathname === href ? "underline underline-offset-4" : ""
    }`

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          UI/UX Portfolio
          <span className="sr-only">Home</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <Link href="/work" className={navLink("/work")} aria-current={pathname === "/work" ? "page" : undefined}>
            Work
          </Link>
          <Link href="/about" className={navLink("/about")} aria-current={pathname === "/about" ? "page" : undefined}>
            About
          </Link>
          <Link
            href="/contact"
            className={navLink("/contact")}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
