const PETALS = [
  { left: '5%', delay: '0s', duration: '15s', size: 10 },
  { left: '13%', delay: '5s', duration: '18s', size: 8 },
  { left: '22%', delay: '2s', duration: '14s', size: 12 },
  { left: '33%', delay: '8s', duration: '19s', size: 9 },
  { left: '43%', delay: '4s', duration: '16s', size: 11 },
  { left: '53%', delay: '11s', duration: '20s', size: 8 },
  { left: '62%', delay: '1s', duration: '17s', size: 12 },
  { left: '72%', delay: '7s', duration: '15s', size: 9 },
  { left: '81%', delay: '3s', duration: '19s', size: 11 },
  { left: '90%', delay: '10s', duration: '16s', size: 8 },
] as const

export function PetalFall() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {PETALS.map((petal, index) => (
        <span
          key={index}
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: petal.size,
            height: petal.size * 1.45,
          }}
        />
      ))}
    </div>
  )
}
