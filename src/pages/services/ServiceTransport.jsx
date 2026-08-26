import CTABand from "../../components/CTABand.jsx";
import Icon from "../../components/Icon.jsx";
import { transportImage, transportSolutions } from "../../data/content.js";

export default function ServiceTransport() {
  return (
    <>
      {/* Intro: text left, photo right */}
      <section className="py-14 md:py-20">
        <div className="container-page grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Transport / Élevage</p>
            <h1 className="text-3xl text-ink md:text-4xl">
              Le transport de vos engins et matériel
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink">
              Global Services propose des solutions de transport destinées aux
              professionnels comme aux particuliers. BTP, agriculture, élevage
              ou manutention : nous étudions votre besoin pour déterminer la
              solution la plus adaptée.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={transportImage}
              alt="Transport Global Services"
              className="h-full w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 8%, rgba(255,255,255,0.8) 16%, rgba(255,255,255,0.55) 24%, rgba(255,255,255,0.3) 32%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 50%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Nos solutions */}
      <section className="pb-16">
        <div className="container-page">
          <h2 className="text-xl text-ink md:text-2xl">Nos solutions</h2>
          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              {transportSolutions.map((t) => (
                <div
                  key={t.title}
                  className="flex items-start gap-4 border border-mist p-5"
                >
                  <Icon
                    name={t.icon}
                    className="h-8 w-8 shrink-0 text-brand"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-heading text-base font-bold uppercase tracking-wide text-ink">
                      {t.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {transportSolutions.map((t) => (
                <div key={t.title} className="h-32 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Vous avez un transport à organiser ?"
        text="Décrivez-nous votre besoin et nous vous proposerons la solution de transport la plus adaptée."
      />
    </>
  );
}
