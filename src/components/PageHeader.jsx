import Icon from './Icon.jsx'

export default function PageHeader({ eyebrow, title, image, small }) {
  return (
    <section
      className={`relative flex items-end overflow-hidden bg-ink ${small ? 'min-h-[280px]' : 'min-h-[380px]'}`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        loading="eager"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/20" />
      <div className="container-page relative py-10 md:py-14">
        {eyebrow && (
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand">
            <Icon name="pin" className="h-3.5 w-3.5" strokeWidth={2.5} />
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl text-white md:text-5xl">{title}</h1>
      </div>
    </section>
  )
}
