import PageHeader from '../components/PageHeader.jsx'
import DevisForm from '../components/DevisForm.jsx'
import { devisHeroImage } from '../data/content.js'

export default function Devis() {
  return (
    <>
      {/* <PageHeader eyebrow="Demande de devis" title="Demandez votre devis rapidement" image={devisHeroImage} small /> */}

      <section className="py-16">
        <div className="container-page grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow mb-3">Demande de devis</p>
            <h2 className="mb-3 text-2xl text-ink md:text-3xl">
              Demandez votre devis rapidement
            </h2>
            <p className="text-base leading-relaxed text-ink">
              Vous souhaitez obtenir un devis rapide et sans engagement pour un besoin
              en bennes, terrassement, transport ou stockage ? Que vous soyez
              particulier ou professionnel, notre équipe étudie votre demande.
            </p>
            <div className="mt-8 overflow-hidden">
              <img src={devisHeroImage} alt="Devis Global Services" className="h-72 w-full object-cover" />
            </div>
          </div>

          <div className="border border-mist p-7 md:p-10">
            <DevisForm />
          </div>
        </div>
      </section>
    </>
  )
}
