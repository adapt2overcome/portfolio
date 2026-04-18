import { skills } from "@/data/portfolio-data"
import { FadeIn } from "@/components/fade-in"

export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Skills
          </p>
          <h2 className="font-heading mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technologies & Expertise
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <FadeIn key={group.category} delay={index * 80}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
