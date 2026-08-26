import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center gap-4 py-28 text-center">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="text-4xl text-ink">Page introuvable</h1>
      <p className="max-w-md text-sm text-ink/60">
        La page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn btn-primary mt-2">
        Retour à l’accueil
      </Link>
    </section>
  )
}
