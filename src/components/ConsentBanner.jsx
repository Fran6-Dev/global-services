import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'gs-cookie-consent'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      // localStorage unavailable (private browsing, etc.) — show the banner anyway
      setVisible(true)
    }
  }, [])

  const choose = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore — nothing to persist to
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] bg-ink">
      <div className="container-page flex flex-col items-start gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
          Nous utilisons des cookies pour assurer le bon fonctionnement du site.
          Avec votre accord, nous pourrions également les utiliser pour mesurer
          l’audience. Vous pouvez accepter ou refuser ces cookies. En savoir plus
          dans notre{' '}
          <Link to="/politique-de-confidentialite" className="text-white underline underline-offset-2 hover:text-brand">
            politique de confidentialité
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button type="button" onClick={() => choose('rejected')} className="btn btn-outline">
            Refuser
          </button>
          <button type="button" onClick={() => choose('accepted')} className="btn btn-primary">
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
