import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function ServiceCard({ service }) {
  return (
    <Link
      to={service.to}
      className="group flex flex-col overflow-hidden border border-mist bg-white transition-shadow hover:shadow-xl"
    >
      <div className="flex items-center gap-3 bg-white px-5 pb-4 pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand">
          <Icon name={service.icon} className="h-5 w-5 text-brand" strokeWidth={1.75} />
        </span>
        <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-wide text-ink">
          {service.title}
        </h3>
      </div>

      <div className="h-80 overflow-hidden bg-cloud">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-ink/60">{service.short}</p>
        <p className="text-sm leading-relaxed text-ink/60">{service.detail}</p>
        <span className="link-arrow mt-4">
          En savoir plus
          <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
        </span>
      </div>
    </Link>
  )
}