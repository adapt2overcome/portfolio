import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Mail01Icon,
  Linkedin01Icon,
  Github01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons"
import { personalInfo } from "@/data/portfolio-data"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"

type SubmitStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string }

const contactLinks = [
  {
    icon: Mail01Icon,
    label: "Email",
    value: "Get in touch via email",
    href: "mailto:nikolakozic95@gmail.com",
  },
  {
    icon: Linkedin01Icon,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/nikola-kozić",
  },
  {
    icon: Github01Icon,
    label: "GitHub",
    value: "Check out my code",
    href: "https://github.com/adapt2overcome",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" })

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const honeypot = (
      form.elements.namedItem("botcheck") as HTMLInputElement | null
    )?.value

    if (honeypot) {
      setStatus({ state: "success" })
      setFormData({ name: "", email: "", message: "" })
      return
    }

    setStatus({ state: "submitting" })

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Portfolio contact from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: "",
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({ state: "success" })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus({
          state: "error",
          message: data.message ?? "Something went wrong. Please try again.",
        })
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please try again or email me directly.",
      })
    }
  }

  const isSubmitting = status.state === "submitting"

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Contact
          </p>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn delay={100}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    size={20}
                    className="text-primary"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                    <HugeiconsIcon
                      icon={link.icon}
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{link.label}</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-heading mb-6 text-xl font-semibold text-foreground">
                Send a Message
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none disabled:opacity-50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {status.state === "success" && (
                  <p
                    role="status"
                    className="rounded-lg bg-primary/10 px-4 py-3 text-sm text-primary"
                  >
                    Thanks — your message was sent. I'll get back to you soon.
                  </p>
                )}
                {status.state === "error" && (
                  <p
                    role="alert"
                    className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
