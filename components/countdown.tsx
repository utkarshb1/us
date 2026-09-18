'use client'

import { useEffect, useState } from 'react'

function diff(target: Date) {
  const total = Math.max(0, target.getTime() - Date.now())
  const days = Math.floor(total / 86_400_000)
  const hours = Math.floor((total % 86_400_000) / 3_600_000)
  const minutes = Math.floor((total % 3_600_000) / 60_000)
  const seconds = Math.floor((total % 60_000) / 1000)
  return { days, hours, minutes, seconds }
}

export function Countdown({ target }: { target: Date }) {
  // Start null to keep server and first client render identical (no hydration shift).
  const [time, setTime] = useState<ReturnType<typeof diff> | null>(null)

  useEffect(() => {
    setTime(diff(target))
    const id = setInterval(() => setTime(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: time?.days },
    { label: 'Hours', value: time?.hours },
    { label: 'Minutes', value: time?.minutes },
    { label: 'Seconds', value: time?.seconds },
  ]

  return (
    <div className="flex items-stretch gap-2 sm:gap-3">
      {units.map((u) => (
        <div
          key={u.label}
          className="glass flex min-w-[68px] flex-col items-center rounded-xl px-3 py-3 sm:min-w-[84px] sm:px-5 sm:py-4"
        >
          <span
            className="font-serif text-3xl font-light tabular-nums text-cream sm:text-4xl"
            aria-hidden={u.value === undefined}
          >
            {u.value === undefined ? '--' : String(u.value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-cream/60">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  )
}
