import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { personalInfo } from "@/data/portfolio-data"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          {personalInfo.title}
        </div>

        <h1 className="font-heading mb-6 text-5xl leading-tight font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          {personalInfo.name.split(" ")[0]}
          <br />
          <span className="text-primary">{personalInfo.name.split(" ")[1]}</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="px-8"
            render={<a href="#projects" />}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8"
            render={<a href="#contact" />}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <HugeiconsIcon icon={ArrowDown01Icon} size={24} />
      </a>
    </section>
  )
}
