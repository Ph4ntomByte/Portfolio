import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import { getAllProjects} from '@/services'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <main>
      <div data-aos="fade-down" data-aos-duration="700">
        <Hero />
      </div>
      <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">
        <Skills skills={skillList} />
      </div>
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
          <ProjectSection projects={projects} />
        </div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
          <ServiceSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
