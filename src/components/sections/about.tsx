import { personalInfo } from "@/data/portfolio-data"
import { FadeIn } from "@/components/fade-in"

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            About Me
          </p>
          <h2 className="font-heading mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Crafting Performant Digital
            <br />
            Experiences
          </h2>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3" delay={100}>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {personalInfo.summary}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From building IPTV platforms that serve millions of users across
              European markets to developing AI-powered mobile applications, I
              bring a deep understanding of performance constraints,
              cross-platform challenges, and user-centric design to every
              project.
            </p>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {personalInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="font-heading mb-1 text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
