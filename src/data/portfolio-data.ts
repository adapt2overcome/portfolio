export const personalInfo = {
  name: "Nikola Kozić",
  title: "Frontend & OTT Engineer",
  location: "Serbia",
  summary:
    "Frontend & OTT Engineer with 6+ years of experience building high-performance, scalable applications across Web, Smart TV, and Mobile platforms. Specialized in React, TypeScript, and Next.js, with deep expertise in performance optimization, state management, and frontend architecture. Proven track record of delivering video-driven and data-intensive applications used by millions of users across European markets, with a strong focus on reliability, efficiency, and seamless cross-platform experiences on constrained devices such as Smart TVs and Set-Top Boxes.",
  tagline:
    "Building high-performance experiences for Smart TV, Web & Mobile - from living rooms across Europe to screens worldwide.",
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "Millions", label: "Users Reached" },
    { value: "4+", label: "IPTV Platforms" },
    { value: "10+", label: "Projects Delivered" },
  ],
}

export const skills = [
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Smart TV / OTT",
    items: ["LightningJS", "Tizen", "webOS", "STB Platforms"],
  },
  {
    category: "State Management",
    items: ["Redux", "Redux Toolkit", "Redux-Saga"],
  },
  {
    category: "Performance",
    items: [
      "Caching",
      "Virtualization",
      "Lazy Loading",
      "Memory usage optimization",
    ],
  },
  {
    category: "APIs & Data",
    items: ["GraphQL", "REST"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Webpack", "Vite", "Jira", "Postman"],
  },
  {
    category: "Cloud & Monitoring",
    items: ["AWS", "Sentry"],
  },
]

export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
  achievements?: string[]
}

export const experience: Experience[] = [
  {
    title: "Frontend & OTT Engineer",
    company: "Shindiri Studio",
    period: "Feb 2022 — Present",
    description: [
      "Contributed to scalable IPTV platforms (3SS) serving millions of users across Europe on Smart TVs and Set-Top Boxes",
      "Designed and developed core platform features such as DVR, favorites, and interactive video",
      "Built custom caching solutions improving UI responsiveness on low-performance devices",
      "Implemented virtualization and lazy loading for efficient rendering of large datasets",
      "Developed robust fallback and error-handling systems to ensure high reliability",
      "Owned features end-to-end: architecture → implementation → optimization → maintenance",
    ],
    technologies: ["LightningJS", "TypeScript", "Redux Toolkit"],
    achievements: [
      "Improved memory usage and performance on constrained TV hardware",
      "Delivered consistent cross-platform behavior across Tizen and webOS ecosystems",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Shindiri Studio - Zaven - Inflowmatix",
    period: "2022 — 2024",
    description: [
      "Developed and maintained a real-time infrastructure monitoring platform",
      "Built high-frequency data visualization features and anomaly detection tools",
      "Improved performance and reliability of large-scale data processing",
    ],
    technologies: ["React", "GraphQL", "Redux-Saga", "AWS", "D3.js"],
  },
  {
    title: "Frontend Engineer — Admin Platform",
    company: "Shindiri Studio - Zaven - Inflowmatix",
    period: "2022 — 2024",
    description: [
      "Built internal tools to automate workflows and reduce manual operations",
      "Improved team productivity and operational efficiency through custom dashboards",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "Webpack"],
  },
  {
    title: "Frontend & Mobile Developer",
    company: "5M",
    period: "2021 — 2022",
    description: [
      "Worked on the TONI-AI platform, combining mobile and web applications",
      "Developed React Native mobile app and web dashboard",
      "Integrated AI-based food recognition and volume estimation",
      "Built interactive dashboards for nutritional analytics",
    ],
    technologies: ["React", "React Native", "TensorFlow.js", "Redux", "D3.js"],
  },
  {
    title: "Software Developer",
    company: "Webelinx",
    period: "2019 — 2020",
    description: [
      "Developed Android applications and games using Kotlin and Java",
      "Managed full development lifecycle from architecture to deployment",
      "Maintained and modernized legacy applications",
    ],
    technologies: ["Kotlin", "Java", "Android Studio"],
  },
]

export interface Project {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: "3SS IPTV Platform",
    subtitle: "Enterprise IPTV Solution",
    description:
      "Scalable IPTV platform serving millions of users across Europe on Smart TVs and Set-Top Boxes. Core platform powering multiple white-label deployments.",
    technologies: ["LightningJS", "TypeScript", "Redux Toolkit"],
    highlights: [
      "Millions of active users across European markets",
      "Custom caching for low-performance hardware",
      "DVR, favorites, and interactive content features",
    ],
  },
  {
    title: "Inflowmatix",
    subtitle: "Real-time Infrastructure Monitoring",
    description:
      "Real-time infrastructure monitoring platform with high-frequency data visualization and anomaly detection for large-scale data streams.",
    technologies: ["React", "GraphQL", "Redux-Saga", "AWS", "D3.js"],
    highlights: [
      "High-frequency data visualization",
      "Anomaly detection features",
      "Large-scale data stream processing",
    ],
  },
  {
    title: "TONI-AI",
    subtitle: "AI-powered Nutrition Platform",
    description:
      "Cross-platform solution with React Native mobile app and web dashboard. Integrated AI-based food recognition and volume estimation.",
    technologies: ["React", "React Native", "TensorFlow.js", "D3.js"],
    highlights: [
      "AI-based food recognition",
      "Interactive nutrition dashboards",
      "Cross-platform mobile & web",
    ],
  },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]
