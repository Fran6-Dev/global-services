import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { company, nav, services } from '../data/content.js'

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    path: 'M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.3C16.3 4.2 15.4 4.1 14.3 4.1c-2.3 0-3.9 1.4-3.9 4v2.4H8v3h2.4V21h3.1Z',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm0 6.27a2.47 2.47 0 1 1 0-4.94 2.47 2.47 0 0 1 0 4.94ZM17.5 4h-11A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 17.5 4Zm1.17 13.5a1.17 1.17 0 0 1-1.17 1.17h-11a1.17 1.17 0 0 1-1.17-1.17v-11c0-.65.52-1.17 1.17-1.17h11c.65 0 1.17.52 1.17 1.17v11ZM16.9 7.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M6.94 8.5H4.1V20h2.84V8.5ZM5.52 4.2A1.65 1.65 0 1 0 5.53 7.5a1.65 1.65 0 0 0-.01-3.3ZM20 13.3c0-3.02-1.6-4.43-3.74-4.43-1.72 0-2.49.95-2.92 1.61V8.5H10.5c.04.8 0 11.5 0 11.5h2.84v-6.42c0-.34.02-.68.13-.93.28-.68.9-1.4 1.96-1.4 1.38 0 1.93 1.05 1.93 2.6V20H20v-6.7Z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Une nouvelle entreprise portée par deux professionnels avec 15 à 18 ans
            d’expérience chacun dans le domaine.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold tracking-[0.2em] text-white">Navigation</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {nav.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold tracking-[0.2em] text-white">Nos services</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.to} className="transition-colors hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold tracking-[0.2em] text-white">Contact</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
              <span>
                {company.address}
                <br />
                {company.postal}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-brand">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
              <a href={`mailto:${company.email}`} className="hover:text-brand">
                {company.email}
              </a>
            </li>
          </ul>
          <Link to="/demande-de-devis" className="btn btn-primary mt-6">
            Demander un devis
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Global Services — Tous droits réservés</p>
          <div className="flex gap-5">
            <Link to="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="hover:text-white">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
