import PageHeader from '../components/PageHeader.jsx'
import ContactForm from '../components/ContactForm.jsx'
import FranceMapCard from '../components/FranceMapCard.jsx'
import Icon from '../components/Icon.jsx'
import { contactHeroImage, company } from '../data/content.js'

export default function Contact() {
  return (
    <>
      {/* <PageHeader
        eyebrow="Contact"
        title="Une question, un projet ? Notre équipe est à votre écoute."
        image={contactHeroImage}
      /> */}

      <section className="py-16">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow mb-3">Contact</p>
            <h2 className="text-2xl text-ink md:text-3xl">
              Une question, un projet ? Notre équipe est à votre écoute.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Besoin d’une benne, d’un terrassement, d’un transport ou d’un espace de
              stockage ? Notre équipe étudie votre demande et vous accompagne à chaque
              étape.
            </p>

            <ul className="mt-8 flex flex-col gap-6">
              <li className="flex items-start gap-3.5">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
                <div>
                  <p className="text-xs font-semibold tracking-wide text-ink/50">ADRESSE</p>
                  <p className="text-sm text-ink">
                    {company.address}
                    <br />
                    {company.postal}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
                <div>
                  <p className="text-xs font-semibold tracking-wide text-ink/50">TÉLÉPHONE</p>
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-sm text-ink hover:text-brand">
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
                <div>
                  <p className="text-xs font-semibold tracking-wide text-ink/50">E-MAIL</p>
                  <a href={`mailto:${company.email}`} className="text-sm text-ink hover:text-brand">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
                <div>
                  <p className="text-xs font-semibold tracking-wide text-ink/50">HORAIRES</p>
                  <p className="text-sm text-ink">
                    {company.hoursWeek}
                    <br />
                    {company.hoursSat}
                  </p>
                </div>
              </li>
            </ul>

            {/* <div className="mt-8">
              <FranceMapCard />
            </div> */}
          </div>

          <div className="border border-mist p-7 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
