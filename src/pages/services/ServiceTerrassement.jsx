import { Link } from 'react-router-dom'
import { terrassementImage, excavators } from '../../data/content.js'

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
              Préparation de terrain, nivellement, fouilles, tranchées ou
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

      {/* Notre parc */}
      <section className="pb-16">
        <div className="container-page">
          <h2 className="text-xl text-ink md:text-2xl">Notre parc</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {excavators.map((e) => (
              <div key={e.size} className="border border-mist p-6">
                <p className="font-heading text-lg font-bold uppercase text-ink">
                  {e.count} de {e.size}
                </p>
                <div className="mt-4 h-40 overflow-hidden">
                  <img src={terrassementImage} alt={`${e.count} de ${e.size}`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/60">{e.text}</p>
              </div>
            ))}
          </div>

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