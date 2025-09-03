import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import RevealProvider from "@/components/reveal-provider"
import { ThemeProvider } from "@/components/theme-provider"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans">
        {/* Add skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 px-3 py-2 border border-black bg-white text-black dark:bg-black dark:text-white dark:border-white"
        >
          Skip to content
        </a>
        {/* Wrap app with ThemeProvider for class-based light/dark themes */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {/* Mount reveal observer once for whole app */}
          <RevealProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
