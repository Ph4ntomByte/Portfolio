import ContactForm from './ContactForm'
import { CodeAnimation } from '@/components/Contact/CodeAnimation'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Talk</h3>
          <p className="text-neutral mt-8">
          </p>
        </div>

        <div className="bg-secondary rounded-2xl p-6 border border-border h-full min-h-[400px]">
          <CodeAnimation /> 
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
