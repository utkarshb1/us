const FIREWORKS = [
  { left: '14%', top: '20%', delay: '0s', color: 'firework-marigold' },
  { left: '34%', top: '13%', delay: '1.8s', color: 'firework-blush' },
  { left: '63%', top: '17%', delay: '0.9s', color: 'firework-champagne' },
  { left: '84%', top: '25%', delay: '2.6s', color: 'firework-leaf' },
  { left: '73%', top: '43%', delay: '4s', color: 'firework-marigold' },
] as const

export function FireworkShow() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
      {FIREWORKS.map((firework, index) => (
        <span
          key={index}
          className={`firework ${firework.color}`}
          style={{
            left: firework.left,
            top: firework.top,
            animationDelay: firework.delay,
          }}
        />
      ))}
    </div>
  )
}
