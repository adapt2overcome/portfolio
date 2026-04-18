import { experience } from "@/data/portfolio-data"
import { FadeIn } from "@/components/fade-in"

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Experience
          </p>
          <h2 className="font-heading mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Career Journey
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 hidden w-px bg-border md:left-8 md:block" />

          <div className="space-y-12">
            {experience.map((role, index) => (
              <FadeIn key={role.company + role.period} delay={index * 100}>
                <div className="relative md:pl-20">
                  <div className="absolute top-1.5 left-0 hidden size-4 rounded-full border-2 border-primary bg-background md:left-6 md:block" />

                  <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {role.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {role.company}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {role.period}
                      </span>
                    </div>

                    <ul className="mb-4 space-y-2">
                      {role.description.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 block size-1 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {role.achievements && (
                      <div className="mb-4 rounded-lg bg-primary/5 p-4">
                        <p className="mb-2 text-xs font-semibold tracking-wide text-primary uppercase">
                          Key Achievements
                        </p>
                        <ul className="space-y-1">
                          {role.achievements.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-muted-foreground"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {role.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
