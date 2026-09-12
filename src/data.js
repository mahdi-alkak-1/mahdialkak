export const profile = {
  name: 'Mahdi Alkak',
  role: 'Full-Stack Software Developer',
  location: 'Beirut, Lebanon',
  email: 'mahdialkak1@gmail.com',
  phone: '+961 81 954659',
  github: 'https://github.com/mahdi-alkak-1',
  cv: '/Mahdi_Alkak_Resume.pdf',
}

export const projects = [
  {
    id: '01',
    codename: 'AUTO-HIGHLIGHT',
    title: 'HighlightIQ',
    subtitle: 'Automated Gaming Highlight Platform',
    description:
      'A multi-service video-processing platform that detects elimination events in gameplay footage, generates highlight clips, supports review, and automates publishing workflows.',
    stack: ['React', 'TypeScript', 'Go', 'Python', 'OpenCV', 'FFmpeg', 'MySQL', 'Docker', 'N8N'],
    github: 'https://github.com/mahdi-alkak-1/HighlightIQ',
    accent: 'cyan',
    status: 'PUBLIC REPO',
  },
  {
    id: '02',
    codename: 'COMMERCE-CORE',
    title: 'Ecommerce Template',
    subtitle: 'Full-Stack Ecommerce Platform',
    description:
      'A production-style ecommerce platform with product discovery, authentication, RBAC, cart synchronization, Stripe checkout, inventory validation, and cloud deployment.',
    stack: ['Next.js', 'React', 'TypeScript', 'Express', 'MongoDB', 'Stripe', 'Supabase'],
    live: 'https://ecommerce-template.shop',
    accent: 'violet',
    status: 'LIVE DEMO',
  },
  {
    id: '03',
    codename: 'COLLAB-NODE',
    title: 'DevTrack',
    subtitle: 'Collaborative Project & Issue Management',
    description:
      'A workspace platform for communities, projects, members, issues, scoped visibility, notifications, and project-level permissions.',
    stack: ['Laravel', 'Inertia.js', 'React', 'Tailwind CSS', 'MySQL'],
    accent: 'amber',
    status: 'BUILT',
  },
]

export const experience = [
  {
    period: 'MAY 01 — JUL 29, 2026',
    role: 'Full-Stack Developer',
    company: 'BUBU Company · Remote, Spain',
    detail:
      'Built and maintained features for a childcare application, contributing across REST APIs, notifications, persistence, and frontend communication workflows.',
    tech: 'NestJS · Next.js · Firebase · Firestore · Pub/Sub · PostgreSQL',
  },
  {
    period: 'NOV 2025 — JAN 2026',
    role: 'Full-Stack Software Engineering Bootcamp',
    company: 'SE Factory',
    detail:
      'Intensive engineering training focused on building full-stack applications, software fundamentals, teamwork, delivery, and production-minded development.',
    tech: 'JavaScript · React · TypeScript · PHP · Laravel · Git',
  },
  {
    period: '2021 — 2025',
    role: 'B.S. in Computer Science',
    company: 'Lebanese University · Faculty of Science',
    detail:
      'Computer Science degree with a foundation in programming, data structures, algorithms, databases, and software engineering.',
    tech: 'Computer Science · Software Engineering',
  },
]

export const skillGroups = [
  {
    label: 'LANGUAGES',
    items: ['C', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'Go'],
  },
  {
    label: 'FRONTEND',
    items: ['React', 'Next.js', 'Inertia.js', 'Tailwind CSS', 'HTML/CSS', 'SSR'],
  },
  {
    label: 'BACKEND',
    items: ['Node.js', 'NestJS', 'Laravel', 'Express', 'REST APIs', 'Authentication', 'RBAC'],
  },
  {
    label: 'DATA',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'MongoDB Atlas', 'Firestore'],
  },
  {
    label: 'OPS / TOOLS',
    items: ['Docker', 'GitHub Actions', 'Linux', 'Bash', 'Vercel', 'Render', 'Postman', 'N8N'],
  },
]
