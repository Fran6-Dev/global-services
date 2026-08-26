import { Link } from 'react-router-dom'

export default function CTABand({
  title = 'Vous avez un projet ? Parlons-en.',
  text = 'Notre équipe est à votre écoute pour étudier votre besoin et vous proposer la solution la plus adaptée.',
  buttonLabel = 'Demander un devis',
  to = '/demande-de-devis',
}) {
  return (
    <section className="bg-ink">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl text-white md:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-sm text-white/60">{text}</p>
        </div>
        <Link to={to} className="btn btn-primary shrink-0">
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
