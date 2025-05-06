// Data for portfolio
import {
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Insta‑Reel‑to‑TG Bot',
    shortDescription:
      'Python Telegram bot using Instaloader: fetches Instagram Reels, packages them into MP4s, and posts directly to Telegram chats.',
    cover: '/images/insta-reel-to-tg.png',
    livePreview: 'https://github.com/Ph4ntomByte/insta-reel-to-tg',
    repoLink: 'https://github.com/Ph4ntomByte/insta-reel-to-tg',
    type: 'Open Source',
    siteAge: '1 month old',
    techStack: ['Python', 'Instaloader', 'python-telegram-bot'],
  },
  {
    priority: 2,
    title: 'Cities Game (CityMANIA)',
    shortDescription:
      'Java Swing multiplayer game: players name cities in turn, with real‑time validation, custom dialogs, and stateful map loading.',
    cover: '/images/cities-game.png',
    livePreview: 'https://github.com/Ph4ntomByte/Cities',
    repoLink: 'https://github.com/Ph4ntomByte/Cities',
    type: 'Academic Project',
    siteAge: '2 months old',
    techStack: ['Java', 'Swing', 'JOptionPane'],
  },
  {
    priority: 3,
    title: 'Web Programming Assignment',
    shortDescription:
      'Vanilla JavaScript/HTML/CSS puzzle game: drag‑and‑draw tile placement, LocalStorage persistence, dynamic leaderboards & timer.',
    cover: '/images/web-prog-assignment.png',
    livePreview: 'https://github.com/Ph4ntomByte/Web_Prog_Assignment',
    repoLink: 'https://github.com/Ph4ntomByte/Web_Prog_Assignment',
    type: 'Course Assessment',
    siteAge: '3 months old',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    priority: 4,
    title: 'Railways Simulator',
    shortDescription:
      'Interactive railway network simulator in JavaScript: visualize train routes, dynamic schedules, and user controls over map-based tracks.',
    cover: '/images/railways.png',
    livePreview: 'https://github.com/Ph4ntomByte/Railways',
    repoLink: 'https://github.com/Ph4ntomByte/Railways',
    type: 'Personal Project',
    siteAge: '1 month old',
    techStack: ['JavaScript', 'Canvas API', 'React'],
  },
]

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
