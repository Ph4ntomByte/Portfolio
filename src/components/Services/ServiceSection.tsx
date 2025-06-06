'use client'

import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  return (
    <section id="services" className="my-14">
      <SectionHeading title="Areas of Expertise" />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
        {serviceData.map((service, index) => (
          <div
            key={index}
            data-aos="flip-right"
            data-aos-delay={`${index * 100}`}
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              shortDescription={service.shortDescription}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceSection