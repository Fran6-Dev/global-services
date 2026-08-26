import franceMapModule from '@svg-maps/france.departments'

// Real department outlines (CC BY 4.0, Victor Cazanave — github.com/VictorCazanave/svg-maps).
// Falls back to `.default` in case of CJS/ESM interop differences between dev and build.
const franceMap = franceMapModule.locations ? franceMapModule : franceMapModule.default

// Loiret (INSEE code 45) — where Global Services is based.
const HIGHLIGHT_ID = '45'
const HIGHLIGHT_LABEL = 'Loiret (45)'

// Centroid of the Loiret department's bounding box, precomputed from the
// path data above, used to place the pin.
const PIN = { x: 311.6, y: 202.7 }

export default function FranceMapCard() {
  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-sm border border-mist bg-cloud">
      <svg viewBox={franceMap.viewBox} className="h-[86%] w-[86%]" aria-hidden="true">
        {franceMap.locations.map((dep) => (
          <path
            key={dep.id}
            d={dep.path}
            fill={dep.id === HIGHLIGHT_ID ? '#e2231a' : '#ffffff'}
            fillOpacity={dep.id === HIGHLIGHT_ID ? 0.18 : 1}
            stroke={dep.id === HIGHLIGHT_ID ? '#e2231a' : '#d3d3d6'}
            strokeWidth={dep.id === HIGHLIGHT_ID ? 1.6 : 0.6}
            strokeLinejoin="round"
          />
        ))}

        <g transform={`translate(${PIN.x},${PIN.y})`}>
          <circle r="16" fill="#e2231a" opacity="0.18" />
          <path
            d="M0 -13c5.8 0 10.5 4.6 10.5 10.3C10.5 17.5 0 30 0 30S-10.5 17.5-10.5-2.7C-10.5-8.4-5.8-13 0-13Z"
            fill="#e2231a"
          />
          <circle cy="-2.7" r="3.6" fill="#fff" />
        </g>
      </svg>

      <span className="absolute bottom-4 left-4 rounded-sm bg-white px-3 py-1.5 font-heading text-xs font-bold tracking-wide text-ink shadow">
        {HIGHLIGHT_LABEL}
      </span>
      <span className="absolute bottom-1 right-2 text-[9px] text-ink/30">
        Carte : svg-maps.com (CC BY 4.0)
      </span>
    </div>
  )
}