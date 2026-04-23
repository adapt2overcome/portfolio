import { HugeiconsIcon } from "@hugeicons/react"
import { Github01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nikola Kozić. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <HugeiconsIcon icon={Github01Icon} size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <HugeiconsIcon icon={Linkedin01Icon} size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
