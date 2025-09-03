"use client"

import { useReveal } from "./use-reveal"

export default function RevealProvider() {
  useReveal({ threshold: 0.15, rootMargin: "0px 0px -10% 0px" })
  return null
}
