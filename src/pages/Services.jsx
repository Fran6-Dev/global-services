import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import CTABand from '../components/CTABand.jsx'
import { services, servicesHeroImage } from '../data/content.js'

export default function Services() {
  return (
    <>
      {/* <PageHeader eyebrow="Nos services" title="Des solutions adaptées à vos besoins" image={servicesHeroImage} /> */}

      <section className="py-16">
        <div className="container-page">
          <p className="eyebrow text">NOS SERVICES</p>
          <h2 className="my-3 text-5xl text-ink">DES SOLUTIONS ADAPTÉES A VOS BESOINS</h2>
          <p className="max-w-3xl text-base leading-relaxed text-ink">
            De la location de benne à l’organisation d’un transport, en passant par lesx
            travaux de terrassement et le stockage, Global Services vous propose des
            solutions concrètes et adaptées.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {services.map((s) => (
              <div
                key={s.slug}
                className="grid grid-cols-1 items-stretch border border-mist bg-white md:grid-cols-2"
              >
                <div className="h-64 overflow-hidden md:h-full">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
                </div>

                <div className="flex flex-col justify-center gap-3 p-7 md:p-9">
                  <h2 className="text-xl text-ink md:text-2xl">{s.title}</h2>
                  <p className="font-heading text-base font-bold text-ink">{s.subtitle}</p>

                  {s.factsText && <p className="text-sm leading-relaxed text-ink/60">{s.factsText}</p>}

                  {s.bulletList && (
                    <ul className="flex flex-col gap-1">
                      {s.bulletList.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-ink/60">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.description && <p className="text-sm leading-relaxed text-ink/60">{s.description}</p>}

                  <Link to={s.ctaTo || '/demande-de-devis'} className="btn btn-primary mt-3 self-start">
                    {s.ctaLabel || 'Demander un devis'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}