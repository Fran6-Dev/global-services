import { Link } from 'react-router-dom'
import Icon from '../../components/Icon.jsx'
import IconFeature from '../../components/IconFeature.jsx'
import {
  terrassementImage,
  excavators,
  terrassementPrestations,
  terrassementSteps,
  terrassementSols,
} from '../../data/content.js'

export default function ServiceTerrassement() {
  return (
    <>
      {/* Intro: text left, photo right */}
      <section className="py-14 md:py-20">
        <div className="container-page grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Terrassement</p>
            <h1 className="text-3xl text-ink md:text-4xl">Des moyens adaptés à vos travaux</h1>
            <p className="mt-5 text-base leading-relaxed text-ink">
              Préparation de terrain, nivellement, fouilles, tranchées, bassin de piscine, allée pavé ou
              terrassement : Global Services met son expérience et ses
              équipements au service de vos projets.
            </p>
          </div>
        <div className="relative overflow-hidden">
  <img src={terrassementImage} alt="Terrassement Global Services" className="h-full w-full object-cover" />
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      background:
        'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 8%, rgba(255,255,255,0.8) 16%, rgba(255,255,255,0.55) 24%, rgba(255,255,255,0.3) 32%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 50%)',
    }}
  />
</div>
        </div>
      </section>

      {/* Nos prestations de terrassement */}
      <section className="bg-cloud py-16">
        <div className="container-page">
          <h2 className="text-center text-2xl text-ink md:text-3xl">Nos prestations de terrassement</h2>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
            {terrassementPrestations.map((item) => (
              <IconFeature key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Marche à suivre */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="text-center text-2xl text-ink md:text-3xl">Marche à suivre</h2>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {terrassementSteps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-heading text-sm font-bold text-white">
                  {i + 1}
                </div>
                <p className="mt-4 font-heading text-sm font-bold text-ink">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de sols et terrains traités */}
      <section className="bg-cloud py-16">
        <div className="container-page">
          <h2 className="text-center text-2xl text-ink md:text-3xl">Types de sols et terrains traités</h2>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col divide-y divide-mist border-t border-b border-mist">
            {terrassementSols.map((s) => (
              <div key={s.title} className="flex items-start gap-4 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Icon name={s.icon} className="h-5 w-5 text-brand" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          {/* Notre approche */}
          <div className="mt-14 max-w-3xl">
            <h2 className="text-xl text-ink md:text-2xl">Notre approche</h2>
            <p className="mt-5 text-base leading-relaxed text-ink">
              Chaque chantier possède ses contraintes. La nature du sol,
              l’accessibilité du terrain ou la précision recherchée sont
              autant d’éléments que nous prenons en compte avant d’intervenir.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Notre objectif : vous proposer des moyens adaptés et efficaces à
              vos travaux et à vos contraintes.
            </p>

            <Link to="/demande-de-devis" className="btn btn-primary mt-7">
              Parler de votre projet
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}