import CTABand from '../../components/CTABand.jsx'
import Icon from '../../components/Icon.jsx'
import { bennesImage, bennesSizes, wasteAccepted, wasteRefused, bennesSteps } from '../../data/content.js'

export default function ServiceBennes() {
  return (
    <>
      {/* Intro: text left, photo right */}
      <section className="py-14 md:py-20">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Location de bennes</p>
            <h1 className="text-3xl text-ink md:text-4xl">Une benne adaptée à chaque besoin</h1>
            <p className="mt-5 text-base leading-relaxed text-ink">
              Travaux, élimination, débarras, chantier ou évacuation de déchets :
              Global Services met à votre disposition des bennes adaptées à vos
              volumes.
            </p>
          </div>
          <div className="relative overflow-hidden">
  <img src={bennesImage} alt="Benne Global Services" className="h-full w-full object-cover" />
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

      {/* 12 bennes disponibles */}
      <section className="bg-cloud py-16">
        <div className="container-page">
          <h2 className="text-center text-2xl text-ink md:text-3xl">12 bennes disponibles</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {bennesSizes.map((b) => (
              <div key={b.size} className="flex flex-col items-center text-center">
                <p className="font-heading text-lg font-bold text-ink">{b.size}</p>
                <div className="mt-4 h-36 w-full overflow-hidden">
                  <img src={bennesImage} alt={b.size} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/60">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche ? */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="text-center text-2xl text-ink md:text-3xl">Comment ça marche ?</h2>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {bennesSteps.map((step, i) => (
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

      {/* Déchets acceptés */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="text-center text-2xl text-ink md:text-3xl">Déchets acceptés</h2>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5">
            {wasteAccepted.map((w) => (
              <div key={w.label} className="flex flex-col items-center gap-3 text-center">
                <Icon name={w.icon} className="h-8 w-8 text-brand" strokeWidth={1.5} />
                <p className="font-heading text-xs font-bold uppercase tracking-wide text-ink">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Déchets non acceptés */}
      <section className="bg-cloud py-16">
        <div className="container-page">
          <h2 className="text-center text-2xl text-ink md:text-3xl">Déchets non acceptés</h2>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {wasteRefused.map((w) => (
              <div key={w.label} className="flex flex-col items-center gap-3 text-center">
                <Icon name={w.icon} className="h-8 w-8 text-ink/40" strokeWidth={1.5} />
                <p className="font-heading text-xs font-bold uppercase tracking-wide text-ink">{w.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-ink/60">
            Un doute sur un type de déchet ? Contactez-nous, nous vous conseillons avant la livraison.
          </p>
        </div>
      </section>

      <CTABand
        title="Particuliers ou professionnels"
        text="Nous répondons aux demandes des particuliers comme des professionnels."
      />
    </>
  )
}