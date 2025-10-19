import { Calendar, MapPin, Wrench } from 'lucide-react'

interface Experience {
  role: string
  organization: string
  location?: string
  date: string
  description: string[]
  tech?: string[]
}

interface ExperienceCardProps {
  data?: Experience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  if (!data) return null

  const { role, organization, location, date, description, tech } = data

  return (
    <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-secondary-content text-lg font-medium md:font-semibold">{role}</h3>
        <span className="text-sm text-neutral flex items-center gap-1 mt-1 sm:mt-0">
          <Calendar size={16} />
          {date}
        </span>
      </div>

      <p className="text-accent text-sm mt-1">{organization}</p>
      {location && (
        <p className="text-neutral text-sm flex items-center gap-1">
          <MapPin size={16} />
          {location}
        </p>
      )}

      <div className="bg-primary text-primary-content my-4 h-[110] overflow-scroll rounded-2xl px-4 py-2">
        <ul className="list-disc list-inside space-y-1 text-[14px] md:text-base">
          {description.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>

      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 text-sm text-neutral items-center">
          <Wrench size={16} />
          {tech.map((item, i) => (
            <span
              key={i}
              className="rounded-md bg-[#FFFFFF1A] px-2 py-[2px] backdrop-blur-[80px] text-xs md:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceCard
