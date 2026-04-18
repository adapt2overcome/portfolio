import { useState, useEffect } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Menu01Icon,
  Cancel01Icon,
  Sun03Icon,
  Moon02Icon,
} from "@hugeicons/core-free-icons"
import { useTheme } from "@/components/theme-provider"
import { navLinks } from "@/data/portfolio-data"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-heading text-xl font-bold tracking-tight text-foreground"
        >
          NK<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            <HugeiconsIcon
              icon={theme === "dark" ? Sun03Icon : Moon02Icon}
              size={18}
            />
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            <HugeiconsIcon
              icon={theme === "dark" ? Sun03Icon : Moon02Icon}
              size={18}
            />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle menu"
          >
            <HugeiconsIcon
              icon={isMobileMenuOpen ? Cancel01Icon : Menu01Icon}
              size={20}
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
