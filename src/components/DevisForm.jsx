import { useRef, useState } from 'react'
import Icon from './Icon.jsx'

const initial = {
  name: '',
  phone: '',
  email: '',
  prestation: '',
  date: '',
  postal: '',
  details: '',
  consent: false,
}

const prestations = [
  'Location de bennes',
  'Terrassement',
  'Transport / Élevage',
  'Stockage',
  'Autre / plusieurs prestations',
]

export default function DevisForm() {
  const [values, setValues] = useState(initial)
  const [files, setFiles] = useState([])
  const [dragOver, setDragOver] = useState(false)
  const [status, setStatus] = useState('idle')
  const fileInput = useRef(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
  }

  const addFiles = (list) => {
    setFiles((f) => [...f, ...Array.from(list)])
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // NOTE: no backend wired up yet — plug in your API / email service here
    // (Formspree, EmailJS, a custom endpoint...) and replace this timeout.
    setTimeout(() => {
      setStatus('sent')
      setValues(initial)
      setFiles([])
    }, 700)
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center gap-3 border border-mist bg-cloud p-10 text-center">
        <Icon name="check" className="h-10 w-10 text-brand" strokeWidth={1.5} />
        <h3 className="text-xl text-ink">Votre demande de devis a bien été envoyée !</h3>
        <p className="max-w-sm text-sm text-ink/60">
          Notre équipe étudie votre besoin et revient vers vous rapidement.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="link-arrow mt-2">
          Faire une nouvelle demande
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="NOM / PRÉNOM">
          <input
            name="name"
            required
            value={values.name}
            onChange={onChange}
            className="input"
          />
        </Field>
        <Field label="TÉLÉPHONE">
          <input
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={onChange}
            className="input"
          />
        </Field>
      </div>

      <Field label="E-MAIL">
        <input
          name="email"
          type="email"
          required
          value={values.email}
          onChange={onChange}
          className="input"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="TYPE DE PRESTATION" className="sm:col-span-2">
          <select name="prestation" required value={values.prestation} onChange={onChange} className="input">
            <option value="" disabled>
              Sélectionnez une prestation
            </option>
            {prestations.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
        <Field label="DATE SOUHAITÉE">
          <input name="date" type="date" value={values.date} onChange={onChange} className="input" />
        </Field>
      </div>

      <Field label="CODE POSTAL">
        <input
          name="postal"
          inputMode="numeric"
          maxLength={5}
          value={values.postal}
          onChange={onChange}
          className="input max-w-[200px]"
        />
      </Field>

      <Field label="DÉTAILS DE VOTRE DEMANDE">
        <textarea
          name="details"
          rows={5}
          required
          value={values.details}
          onChange={onChange}
          className="input resize-none"
        />
      </Field>

      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold tracking-wide text-ink/60">
          PIÈCES JOINTES (OPTIONNEL)
        </span>
        <div
          onDragOver={(e) => {
            e.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragOver(false)
            addFiles(e.dataTransfer.files)
          }}
          onClick={() => fileInput.current?.click()}
          className={`flex cursor-pointer flex-col items-center gap-2 border-2 border-dashed px-6 py-8 text-center transition-colors ${
            dragOver ? 'border-brand bg-brand/5' : 'border-mist bg-cloud'
          }`}
        >
          <Icon name="upload" className="h-7 w-7 text-ink/40" strokeWidth={1.5} />
          <p className="text-sm text-ink/70">
            Glissez-déposez vos fichiers ici ou{' '}
            <span className="font-semibold text-brand">Parcourir</span>
          </p>
          <p className="text-xs text-ink/40">Formats acceptés : PDF, JPG, PNG (10 Mo max)</p>
          <input
            ref={fileInput}
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>
        {files.length > 0 && (
          <ul className="mt-2 flex flex-col gap-1 text-sm text-ink/70">
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`} className="flex items-center justify-between border border-mist px-3 py-1.5">
                <span className="truncate">{f.name}</span>
                <button
                  type="button"
                  onClick={() => setFiles((list) => list.filter((_, idx) => idx !== i))}
                  className="ml-3 text-ink/40 hover:text-brand"
                  aria-label={`Retirer ${f.name}`}
                >
                  <Icon name="close" className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <label className="flex items-start gap-2.5 text-sm text-ink/70">
        <input
          type="checkbox"
          name="consent"
          required
          checked={values.consent}
          onChange={onChange}
          className="mt-1 h-4 w-4 accent-[#e2231a]"
        />
        J’accepte que mes données soient utilisées pour traiter ma demande.
      </label>

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary self-start">
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </button>
    </form>
  )
}

function Field({ label, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-semibold tracking-wide text-ink/60">{label}</span>
      {children}
    </div>
  )
}
