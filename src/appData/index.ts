// Data for portfolio
import {
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Service Data
export const serviceData = [
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building component-driven UIs with React and hooks.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js & SSG/SSR',
    shortDescription: 'Creating SEO-friendly, server-rendered React apps.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing REST APIs and real‑time services.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing responsive UIs with utility-first Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'Node.js', icon: NodejsIcon },
  { name: 'Tailwind CSS', icon: TailwindCSS },
]

// Footer Links
export const footerLinks = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Services', href: '#services' },
  { title: 'Contact', href: '#contact' },
]

// Theme Options
export const themes = [
  {
    name: 'Light',
    colors: ['#ffffff', '#1f2937', '#e5e7eb', '#1f2937', '#2563eb'],
  },
  {
    name: 'Dark',
    colors: ['#0f172a', '#cbd5e1', '#1e293b', '#2563eb', '#10b981'],
  },
]

// Language Options
export const languages = ['En', 'Hu']