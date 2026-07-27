import { type ReactNode } from 'react'

interface MarqueeProps {
  items: string[]
  reverse?: boolean
  duration?: number
  renderItem?: (item: string) => ReactNode
}

export default function Marquee({
  items,
  reverse = false,
  duration = 40,
  renderItem,
}: MarqueeProps) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const doubled = [...items, ...items]

  return (
    <div className="marquee-group marquee-mask overflow-hidden">
      <div
        className={`marquee-track gap-3 ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex-shrink-0">
            {renderItem ? (
              renderItem(item)
            ) : (
              <span className="liquid-glass inline-block whitespace-nowrap rounded-full border border-white/15 px-5 py-2.5 text-sm text-gray-200">
                {item}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
