"use client"

import { useEffect } from "react"

export function useReveal(options?: { threshold?: number; rootMargin?: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    const supportsIO = "IntersectionObserver" in window
    const selector = "section, article, .reveal-item"

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))

    if (reduceMotion || !supportsIO) {
      nodes.forEach((el) => {
        el.classList.add("reveal-show")
        el.classList.remove("reveal-init")
      })
      return
    }

    nodes.forEach((el) => el.classList.add("reveal-init"))

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-show")
            entry.target.classList.remove("reveal-init")
            obs.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -10% 0px",
      },
    )

    nodes.forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [options?.threshold, options?.rootMargin])
}
