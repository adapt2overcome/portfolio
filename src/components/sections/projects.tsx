import { projects } from "@/data/portfolio-data"
import { FadeIn } from "@/components/fade-in"

export function Projects() {
  return (
    <section id="projects" className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Projects
          </p>
          <h2 className="font-heading mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Work
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 80}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-card transition-colors hover:border-primary/30">
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4">
                    <h3 className="font-heading mb-1 text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary">{project.subtitle}</p>
                  </div>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mb-4 space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary/60" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
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
    </section>
  )
}
