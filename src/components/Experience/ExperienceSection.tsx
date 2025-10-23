import ExperienceCard from './ExperienceCard'
import SectionHeading from '../SectionHeading/SectionHeading';

const experiences = [
    {
        logo: "/images/eyp.png",
        role: 'Full Stack Developer Intern',
        organization: 'European Youth Parliament (Remote)',
        date: 'Jun 2025 – Present',
        description: [
            'Improved the Members’ Platform used by thousands of volunteers.',
            'Implemented new features, fixed bugs, and maintained stability.',
            'Worked in weekly sprints with designers and QA.',
        ],
        tech: ['Ruby on rails', 'Next.js', 'PostgreSQL'],
    },
    {
        logo: "/images/socar-fugro.png",
        role: 'IT Intern',
        organization: 'Socar Fugro',
        location: 'Baku, Azerbaijan',
        date: 'June - August 2025',
        description: [
            'Helped maintain company IT systems and workstations.',
            'Troubleshot software issues and handled system updates.',
            'Assisted the IT team with network and data security tasks.',
        ],
        tech: ['TypeScript', 'React'],

    },
    {
        logo: "/images/eyp.png",
        role: 'National Coordination member',
        organization: 'European Youth Parliament',
        date: '2023 – Present',
        description: [
            'Organized national events with 100+ participants, leading a 15-member team.',
            'Supported coordination of 10+ events yearly across the country.',
            'Facilitated sessions as chairperson and event safe person.',
        ],
    },
]

const ExperienceSection = () => (
    <section id="experience" className="py-10 max-w-6xl mx-auto flex flex-col gap-6">
      <SectionHeading title="Experience" />
        {experiences.map((exp, i) => (
            <ExperienceCard key={i} data={exp} />
        ))}
    </section>
)

export default ExperienceSection
