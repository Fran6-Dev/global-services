import CTABand from '../components/CTABand.jsx'
import Icon from '../components/Icon.jsx'
import { engagementsHeroImage, satisfactionPoints } from '../data/content.js'

export default function Engagements() {
  return (
    <>
      {/* Intro: text + list left, photo right */}
      <section className="py-14 md:py-20">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Nos engagements</p>
            <h1 className="text-3xl text-ink md:text-4xl">Votre satisfaction, notre priorité</h1>
            <p className="mt-5 text-base leading-relaxed text-ink">
              Chez Global Services, nous souhaitons construire notre développement sur
              une relation simple et durable avec nos clients.
            </p>

            <div className="mt-8 flex flex-col divide-y divide-mist border-t border-mist">
              {satisfactionPoints.map((p) => (
                <div key={p.title} className="flex items-start gap-4 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Icon name={p.icon} className="h-5 w-5 text-brand" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={engagementsHeroImage}
              alt="Poignée de main Global Services"
              className="h-full w-full object-cover"
            />
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

      <CTABand />
    </>
  )
}