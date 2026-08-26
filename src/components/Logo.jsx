import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Global Services - accueil">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <path d="M4 26 L14 4 L20 4 L10 26 Z" fill="#e2231a" />
        <path d="M15 26 L25 4 L30 4 L20 26 Z" fill={light ? '#ffffff' : '#111111'} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-xl font-extrabold tracking-wide text-white`}
        >
          GLOBAL
        </span>
        <span className="font-heading text-[0.65rem] font-semibold tracking-[0.35em] text-brand">
          SERVICES
        </span>
      </span>
    </Link>
  )
}
