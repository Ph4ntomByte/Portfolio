"use client"
import { useState } from 'react'
import { Project } from '@/lib/types'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    liveView,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  return (
    <div 
      className="relative h-[320px] w-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className="relative h-full w-full transition-transform duration-1500"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center rounded-[14px] border border-border bg-secondary p-5"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image
            src={cover}
            width={400}
            height={300}
            alt="Project Cover"
            className="h-full w-full rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </div>

        <div 
          className="absolute inset-0 rounded-[14px] border border-border bg-secondary"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex h-full flex-col p-5">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-secondary-content text-lg font-medium md:font-semibold">{title}</h3>
                <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
                  {(visitors || numberOfSales) && (
                    <IconText text={(visitors || numberOfSales)?.toString() || ''} icon={Likes} />
                  )}
                  {siteAge && <IconText text={siteAge} icon={Timer} />}
                  {earned && <IconText text={earned} icon={Earning} />}
                  {(ratings || githubStars) && (
                    <IconText text={(ratings || githubStars)?.toString() || ''} icon={Star} />
                  )}
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-content my-4 flex-1 overflow-y-auto rounded-2xl px-4 py-2">
              <p className="text-[14px] font-normal md:text-base">{shortDescription}</p>
            </div>
            
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-5">
                {liveView && (
                  <a
                    href={liveView}
                    className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
                    target="_blank">
                    <PreviewIcon className="h-auto w-[18px] md:w-5" />
                    <span>Live Preview</span>
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
                    target="_blank">
                    <GithubIcon className="w-[18px] md:w-5" />
                    <span>Github Link</span>
                  </a>
                )}
              </div>
              {type && (
                <span
                  className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] px-2 py-1 text-sm ${type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'} backdrop-blur-[80px]`}>
                  {type}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard