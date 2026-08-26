import PageHeader from "../components/PageHeader.jsx";
import CTABand from "../components/CTABand.jsx";
import IconFeature from "../components/IconFeature.jsx";
import StatBar from "../components/StatBar.jsx";
import {
  aboutHeroImage,
  aboutTeamImage,
  values,
  aboutStats,
} from "../data/content.js";

export default function About() {
  return (
    <>
      {/* <PageHeader
        eyebrow="À propos"
        title="Une nouvelle entreprise. Une expérience solidement ancrée dans le terrain."
        image={aboutHeroImage}
      /> */}

      <section className="py-16">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden">
            <img
              src={aboutTeamImage}
              alt="L'équipe Global Services"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 8%, rgba(255,255,255,0.8) 16%, rgba(255,255,255,0.55) 24%, rgba(255,255,255,0.3) 32%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 50%)",
              }}
            />
          </div>
          <div>
            <p className="eyebrow mb-3">À propos</p>
            <h2 className="text-2xl text-ink md:text-3xl">
              Une nouvelle entreprise. Une expérience solidement ancrée dans le
              terrain.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink">
              Bien que nouvelle, notre société possède déjà une solide
              expérience de son métier. Deux fondateurs, chacun professionnels
              et expérimentés, unissent leurs forces pour proposer aux
              particuliers et aux professionnels des solutions adaptées, fiables
              et de qualité.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              15 à 18 ans d’expérience de terrain, une connaissance fine du
              secteur et une envie commune : mettre ce savoir-faire au service
              de nos clients dans le Loiret et partout en France.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="container-page">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-3xl text-ink md:text-4xl other-title">NOS VALEURS</p>
            {/* <h2 className="text-3xl text-ink md:text-4xl">Ce qui nous porte au quotidien</h2> */}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5">
            {values.map((v) => (
              <IconFeature key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      <StatBar stats={aboutStats} />
      <CTABand />
    </>
  );
}
