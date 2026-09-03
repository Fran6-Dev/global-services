// Smooth, natural-looking white vignette used to blend a photo into the
// surrounding white page background. Uses an eased multi-stop curve
// (the "easing gradients" technique) instead of a naive 2-stop gradient,
// which avoids visible banding / a muddy grey edge on photos.
const EASED_STOPS = [
  [0, 1],
  [19, 0.738],
  [34, 0.541],
  [47, 0.382],
  [56.5, 0.278],
  [65, 0.194],
  [73, 0.126],
  [80.6, 0.075],
  [87.6, 0.037],
  [94.2, 0.015],
  [100, 0],
]

export default function PhotoFade({ direction = 'right', extent = 50 }) {
  const stops = EASED_STOPS.map(
    ([pos, alpha]) => `rgba(255,255,255,${alpha}) ${((pos * extent) / 100).toFixed(1)}%`
  ).join(', ')

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ background: `linear-gradient(to ${direction}, ${stops})` }}
    />
  )
}
