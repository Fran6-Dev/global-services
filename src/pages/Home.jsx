import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import IconFeature from "../components/IconFeature.jsx";
import CTABand from "../components/CTABand.jsx";
import FranceMapCard from "../components/FranceMapCard.jsx";
import {
  services,
  whyUs,
  heroImage,
  company,
} from "../data/content.js";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <img
          src="https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-construccion-total-2464540-5961982.jpg"
          alt="Chantier Global Services"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/40" />
        <div className="container-page relative flex min-h-[560px] flex-col justify-center py-16">
          <p className="eyebrow mb-4">
            Bennes · Terrassement · Transport · Stockage
          </p>
          <h1 className="max-w-2xl text-4xl text-white sm:text-5xl md:text-6xl">
            Des solutions <span className="text-brand">à la hauteur</span> de
            vos projets
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white">
            Global Services accompagne les particuliers et les professionnels
            dans leurs besoins en location de bennes, terrassement, transport et
            stockage. Porté par deux professionnels de 18 ans
            d’expérience dans le domaine, Global Services met son savoir-faire
            au service de vos chantiers, dans le Loiret et partout en France.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/nos-services" className="btn btn-primary">
              Nos services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <Icon
                name="phone"
                className="h-4 w-4 text-brand"
                strokeWidth={2}
              />
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="border-b border-mist">
        <div className="container-page -mt-16 relative z-10 grid grid-cols-1 gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* Pourquoi choisir Global Services */}
      <section className="relative bg-ink py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Pourquoi choisir Global Services ?</p>
            <h2 className="text-3xl text-white md:text-4xl">
              Une solide expérience du terrain, au service de vos projets.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white">
              Deux professionnels avec 18 ans d’expérience chacun mettent leur
              savoir-faire au service des particuliers et des professionnels.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {whyUs.map((item) => (
              <IconFeature key={item.title} {...item} dark />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-white" />
      </section>

      {/* Le Loiret et partout en France */}
      <section className="py-20">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Zone d’intervention</p>
            <h2 className="text-3xl text-ink md:text-4xl">
              Le Loiret et partout en France
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink">
              Basés à {company.postal.split(" ").slice(1).join(" ")}, nous avons
              vocation à répondre aux besoins de nos clients dans le Loiret et
              partout en France.
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink">
              Particuliers, artisans, entreprises, agriculteurs ou collectivités
              : nous étudions votre demande.
            </p>
            <Link to="/contact" className="btn btn-primary mt-7">
              Contactez-nous
            </Link>
          </div>
          <FranceMapCard />
        </div>
      </section>

      {/* <CTABand /> */}
    </>
  );
}
