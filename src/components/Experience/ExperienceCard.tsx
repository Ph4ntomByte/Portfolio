"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Wrench } from 'lucide-react'

interface Experience {
  logo: string
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
  const [isFlipped, setIsFlipped] = useState(false)

  if (!data) return null

  const { logo, role, organization, location, date, description, tech } = data

  return (
    <div 
      className="relative h-[260px] w-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
    >
      <div 
        className="relative h-full w-full transition-transform duration-1000"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center rounded-[14px] border border-border bg-secondary"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image src={logo} alt={`${organization} logo`} width={200} height={200} className="object-contain" />
        </div>

        <div 
          className="absolute inset-0 rounded-[14px] border border-border bg-secondary text-neutral flex flex-col justify-between p-5"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div>
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

            <div className="bg-primary text-primary-content my-4 max-h-[110px] overflow-y-auto rounded-2xl px-4 py-2">
              <ul className="list-disc list-inside space-y-1 text-[14px] md:text-base">
                {description.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
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
      </div>
    </div>
  )
}

export default ExperienceCard