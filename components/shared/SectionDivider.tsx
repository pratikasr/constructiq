/**
 * Angled divider between sections.
 * variant="dark-to-light" places a light triangle at the bottom of the dark section.
 * variant="light-to-dark" places a dark triangle at the bottom of the light section.
 * variant="subtle" is a soft 80px gradient between two dark shades.
 */

type Variant = 'dark-to-light' | 'light-to-dark' | 'subtle'

export function SectionDivider({
  variant,
  color = '#F1F5F9',
}: {
  variant: Variant
  color?: string
}) {
  if (variant === 'subtle') {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none h-20 w-full"
        style={{
          background:
            'linear-gradient(180deg, #0A1628 0%, #0D1B2A 100%)',
        }}
      />
    )
  }

  if (variant === 'dark-to-light') {
    return (
      <svg
        aria-hidden="true"
        className="block w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: 60, display: 'block', marginTop: -1 }}
      >
        <polygon points="0,60 1440,0 1440,60" fill={color} />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      className="block w-full"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ height: 60, display: 'block', marginTop: -1 }}
    >
      <polygon points="0,0 1440,60 0,60" fill={color} />
    </svg>
  )
}
