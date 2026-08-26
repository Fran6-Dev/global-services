import CTABand from "../../components/CTABand.jsx";
import Icon from "../../components/Icon.jsx";
import {
  stockageYardImage,
  stockageFeatures,
  company,
} from "../../data/content.js";

export default function ServiceStockage() {
  return (
    <>
  {/* Intro: photo as full background, text overlaid with white fade */}
<section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[620px]">
  <img
    src={stockageYardImage}
    alt="Espace de stockage Global Services"
    className="absolute inset-0 h-full w-full object-cover"
  />
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      background:
        'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.75) 38%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0.12) 70%, rgba(255,255,255,0) 85%)',
    }}
  />
  <div className="container-page relative py-16">
    <div className="max-w-xl">
      <p className="eyebrow mb-3">Stockage</p>
      <h1 className="text-3xl text-ink md:text-4xl">
        Votre espace de stockage dans le {company.city}
      </h1>
      <p className="mt-3 font-heading text-xl font-bold text-brand md:text-2xl">
        5 000 m³ disponibles
      </p>
      <p className="mt-5 text-base leading-relaxed text-ink">
        Vous manquez de place pour vos engins, votre matériel ou vos
        marchandises ? Global Services dispose d'un terrain de 5 000 m²
        dédié au stockage.
      </p>
      <p className="mt-4 text-base leading-relaxed text-ink">
        Cette solution peut répondre aux besoins ponctuels ou réguliers
        des entreprises, artisans, professionnels du BTP, agriculteurs ou
        particuliers.
      </p>
    </div>
  </div>
</section>


      {/* Features */}
      <section className="py-16">
        <div className="container-page grid grid-cols-2 gap-4 md:grid-cols-4">
          {stockageFeatures.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-3 border border-mist p-6 text-center"
            >
              <Icon
                name={f.icon}
                className="h-7 w-7 text-brand"
                strokeWidth={1.5}
              />
              <p className="font-heading text-xs font-bold uppercase tracking-wide text-ink">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Besoin d’un espace de stockage ?"
        text="Contactez-nous pour étudier votre besoin et connaître nos disponibilités."
        buttonLabel="Nous contacter"
        to="/contact"
      />
    </>
  );
}
