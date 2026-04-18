export const personalInfo = {
  name: "Nikola Kozic",
  title: "Senior Frontend & OTT Engineer",
  location: "Serbia",
  summary:
    "Senior Frontend & OTT Engineer with 6+ years of experience building high-performance applications across Smart TV, Web, and Mobile platforms. Specialized in IPTV and video delivery systems, with strong expertise in performance optimization, scalable architecture, and user-centric design.",
  tagline:
    "Building high-performance experiences for Smart TV, Web & Mobile — from living rooms across Europe to screens worldwide.",
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
    items: ["Caching", "Virtualization", "Lazy Loading"],
  },
  {
    category: "APIs & Data",
    items: ["GraphQL", "REST"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Webpack", "Jira", "Scrum", "Postman"],
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
    title: "Senior Frontend & OTT Engineer",
    company: "Shindiri Studio",
    period: "Feb 2022 — Present",
    description: [
      "Contributed to scalable IPTV platforms serving millions of users across Europe on Smart TVs and Set-Top Boxes",
      "Developed and maintained core features such as DVR, favorites, and interactive video content",
      "Engineered custom caching mechanisms to significantly improve UI responsiveness on low-performance devices",
      "Implemented virtualization and lazy loading strategies to efficiently handle large datasets",
      "Designed fallback systems and error handling mechanisms to ensure high reliability and uptime",
      "Led end-to-end feature development from architecture to optimization and maintenance",
    ],
    technologies: ["LightningJS", "TypeScript", "Redux Toolkit", "React", "Tizen", "webOS"],
    achievements: [
      "Improved performance and memory usage on constrained TV hardware",
      "Delivered consistent cross-platform experiences across Tizen and webOS ecosystems",
    ],
  },
  {
    title: "Frontend & Mobile Developer",
    company: "Company 2",
    period: "2021 — 2022",
    description: [
      "Developed cross-platform solution with React Native mobile app and web dashboard",
      "Integrated AI-based food recognition and volume estimation",
      "Built interactive dashboards for nutritional data visualization",
    ],
    technologies: ["React", "React Native", "TensorFlow.js", "Redux", "D3.js"],
  },
  {
    title: "Software Developer",
    company: "Company 1",
    period: "2019 — 2020",
    description: [
      "Developed Android applications and games using Kotlin and Java",
      "Managed full development lifecycle from architecture to deployment",
      "Maintained and upgraded legacy applications for modern Android versions",
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
    title: "Arena+",
    subtitle: "Balkan Diaspora Streaming",
    description:
      "IPTV platform targeting Balkan diaspora with VOD and Live TV content. Built high-performance Smart TV apps for Samsung and LG ecosystems.",
    technologies: ["React", "Tizen", "webOS"],
    highlights: [
      "VOD and Live TV streaming",
      "Cross-platform Samsung & LG apps",
      "Consistent UX across devices",
    ],
  },
  {
    title: "Vidflow",
    subtitle: "Premium Video Streaming",
    description:
      "Refactored Samsung (Tizen) and LG (webOS) applications for a premium video streaming platform with improved architecture and performance.",
    technologies: ["LightningJS", "Axiom"],
    highlights: [
      "Application architecture refactor",
      "Improved maintainability and performance",
      "White-label experience for end clients",
    ],
  },
  {
    title: "Daignal (JawwyTV)",
    subtitle: "Large-scale VOD Platform",
    description:
      "Refactored a large-scale VOD platform using LightningJS with complex UI features including infinite scroll and RTL support.",
    technologies: ["LightningJS", "TypeScript"],
    highlights: [
      "RTL language support",
      "Infinite scroll implementation",
      "Secure payment flow integration",
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
