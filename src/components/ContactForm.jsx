import { useState } from 'react'
import Icon from './Icon.jsx'

const initial = { name: '', phone: '', email: '', service: '', message: '' }

const serviceOptions = [
  'Location de bennes',
  'Terrassement',
  'Transport / Élevage',
  'Stockage',
  'Plusieurs services',
  'Autre demande',
]

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // NOTE: no backend wired up yet — plug in your API / email service here
    // (Formspree, EmailJS, a custom endpoint...) and replace this timeout.
    setTimeout(() => {
      setStatus('sent')
      setValues(initial)
    }, 700)
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center gap-3 border border-mist bg-cloud p-10 text-center">
        <Icon name="check" className="h-10 w-10 text-brand" strokeWidth={1.5} />
        <h3 className="text-xl text-ink">Merci pour votre message !</h3>
        <p className="max-w-sm text-sm text-ink/60">
          Notre équipe revient vers vous dans les plus brefs délais.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="link-arrow mt-2">
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold tracking-wide text-ink/60">
            NOM / PRÉNOM
          </label>
          <input
            id="name"
            name="name"
            required
            value={values.name}
            onChange={onChange}
            className="border border-mist bg-white px-4 py-3 text-sm outline-none focus:border-brand"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold tracking-wide text-ink/60">
            TÉLÉPHONE
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={onChange}
            className="border border-mist bg-white px-4 py-3 text-sm outline-none focus:border-brand"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold tracking-wide text-ink/60">
          E-MAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={onChange}
          className="border border-mist bg-white px-4 py-3 text-sm outline-none focus:border-brand"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-xs font-semibold tracking-wide text-ink/60">
          SERVICE CONCERNÉ
        </label>
        <select
          id="service"
          name="service"
          required
          value={values.service}
          onChange={onChange}
          className="border border-mist bg-white px-4 py-3 text-sm outline-none focus:border-brand"
        >
          <option value="" disabled>
            Sélectionnez un service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold tracking-wide text-ink/60">
          VOTRE MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={onChange}
          className="resize-none border border-mist bg-white px-4 py-3 text-sm outline-none focus:border-brand"
        />
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn btn-primary self-start">
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </button>
      <p className="text-xs text-ink/50">
        Nous nous engageons à vous répondre sous 24h ouvrées.
      </p>
    </form>
  )
}
