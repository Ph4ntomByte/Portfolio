import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300','400','500','600','700'] })

const title = 'Rauf | 2nd‑Year CS Student & Full‑Stack Developer at ELTE'
const description =
  'Ambitious Computer Science student at ELTE Budapest, building high‑impact web & Java applications. Expert in React, Next.js, Node.js, Python & Java. Created Telegram bots, Java board games, Java Swing UIs, and browser puzzle games with persistence & leaderboards. Ready to drive your next project forward!'
const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://studentlifeishell.me'

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(url),
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Rauf Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@RaufDev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={firaCode.className}>
        <header><Navbar /></header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}
