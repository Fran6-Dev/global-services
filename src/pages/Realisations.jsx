import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import CTABand from '../components/CTABand.jsx'
import { realisationsHeroImage, galleryCategories, galleryItems } from '../data/content.js'

export default function Realisations() {
  const [active, setActive] = useState('Tous')
  const filtered = active === 'Tous' ? galleryItems : galleryItems.filter((g) => g.category === active)

  return (
    <>
      {/* <PageHeader eyebrow="Nos réalisations" title="Des projets menés à bien" image={realisationsHeroImage} /> */}

      <section className="py-16">
        <div className="container-page">
          <p className='eyebrow'>Réalisations</p>
          <h2 className='text-6xl text-ink md:text-4xl'>Des projets menés à bien</h2>
          <p className="max-w-2xl text-base leading-relaxed text-ink">
            Chaque chantier, chaque affaire, chaque intervention est le reflet de notre
            savoir-faire. Découvrez en images quelques-unes de nos réalisations récentes
            au service de nos clients.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {galleryCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active === c ? 'bg-brand text-white' : 'bg-cloud text-ink hover:bg-mist'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <figure key={item.id} className="group relative overflow-hidden bg-cloud">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/85 to-transparent p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {item.category}
                  </span>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-ink/50">
              Aucune réalisation dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>

      <CTABand />
    </>
  )
}
