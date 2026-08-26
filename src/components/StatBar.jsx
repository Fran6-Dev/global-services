import Icon from './Icon.jsx'

export default function StatBar({ stats }) {
  return (
    <section className="border-t border-white/10 bg-ink">
      <div className="container-page grid grid-cols-2 gap-6 py-9 md:grid-cols-4 md:gap-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2.5 text-center">
            <Icon name={s.icon} className="h-6 w-6 text-white" strokeWidth={1.75} />
            <p className="font-heading text-xs font-semibold tracking-wide text-white/85 md:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
