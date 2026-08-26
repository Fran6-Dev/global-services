import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { company, nav } from '../data/content.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-black transition-shadow ${
        scrolled ? 'shadow-[0_2px_18px_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      <div className="container-page flex h-[76px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 py-2 font-heading text-[0.92rem] font-semibold tracking-wide uppercase transition-colors ${
                      isActive ? 'text-white underline decoration-brand underline-offset-8' : 'text-white hover:text-brand hover:underline hover:underline-offset-8 hover:decoration-brand'
                    }`
                  }
                >
                  {item.label}
                  <Icon name="chevronDown" className="h-3.5 w-3.5" strokeWidth={2.5} />
                </NavLink>
                <div
                  className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-150 ${
                    servicesOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1'
                  }`}
                >
                  <ul className="overflow-hidden rounded-sm border border-mist bg-white shadow-xl">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wide transition-colors ${
                              isActive ? 'bg-cloud text-brand' : 'text-ink hover:bg-cloud hover:text-brand'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `py-2 font-heading text-[0.92rem] font-semibold tracking-wide uppercase transition-colors ${
                    isActive ? 'text-white underline decoration-brand underline-offset-8' : 'text-white hover:text-brand hover:underline hover:underline-offset-8 hover:decoration-brand'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className="hidden items-center gap-2 bg-brand px-4 py-2.5 font-heading text-sm font-bold tracking-wide text-white transition-colors hover:bg-brand-dark md:flex"
          >
            <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
            {company.phone}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center border border-mist text-white lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-ink/50 transition-opacity duration-200 lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`ml-auto flex h-full w-[86%] max-w-sm flex-col bg-white transition-transform duration-200 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-[76px] items-center justify-between border-b border-mist px-5">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Fermer le menu"
            >
              <Icon name="close" className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-5">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between border-b border-mist py-3.5 font-heading text-base font-semibold uppercase tracking-wide text-ink"
                  >
                    {item.label}
                    <Icon
                      name="chevronDown"
                      className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      strokeWidth={2.5}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col bg-cloud pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="border-b border-mist py-3 font-heading text-sm font-semibold uppercase tracking-wide text-ink/80"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-mist py-3.5 font-heading text-base font-semibold uppercase tracking-wide text-ink"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="border-t border-mist p-5">
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="btn btn-primary w-full"
            >
              <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
              {company.phone}
            </a>
            <Link to="/demande-de-devis" onClick={() => setMobileOpen(false)} className="btn btn-dark mt-3 w-full">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
