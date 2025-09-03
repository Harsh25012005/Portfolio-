"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"

  const handleToggle = React.useCallback(() => {
    if (!mounted) return
    setTheme(isDark ? "light" : "dark")
  }, [mounted, isDark, setTheme])

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={handleToggle}
      disabled={!mounted}
      className="h-9 w-9 rounded-md border border-border text-foreground hover:bg-accent"
    >
      <Sun className={`h-4 w-4 ${isDark ? "hidden" : "block"}`} aria-hidden={isDark} />
      <Moon className={`h-4 w-4 ${isDark ? "block" : "hidden"}`} aria-hidden={!isDark} />
    </Button>
  )
}
