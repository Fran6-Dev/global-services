import Icon from './Icon.jsx'

export default function IconFeature({ icon, title, text, dark = false }) {
  return (
    <div className="flex flex-col items-center gap-3.5 text-center">
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-full'
        }`}
      >
        <Icon name={icon} className={`h-6 w-6 ${dark ? 'text-brand' : 'text-brand'}`} strokeWidth={1.75} />
      </span>
      <h3 className={`text-base ${dark ? 'text-brand' : 'text-ink'}`}>{title}</h3>
      <p className={`max-w-[220px] text-sm leading-relaxed ${dark ? 'text-white/55' : 'text-ink/60'}`}>
        {text}
      </p>
    </div>
  )
}
