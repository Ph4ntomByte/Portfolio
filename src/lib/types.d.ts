interface Project {
  priority: int
  title: string
  shortDescription: string
  liveView?: string
  githubLink?: string
  type?: string
  cover: string
  tech?: string[] 
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string
  stars: number
  createdAt: string
}

interface Experience {
  logo: string
  role: string
  organization: string
  location?: string
  date: string
  description: string[]
  tech?: string[]
}