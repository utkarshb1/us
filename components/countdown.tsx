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
    <div className="flex items-stretch gap-1 sm:gap-3">
      {units.map((u) => (
        <div
          key={u.label}
          className="glass flex min-w-[54px] flex-col items-center rounded-lg px-2 py-2 sm:min-w-[72px] sm:rounded-xl sm:px-3 sm:py-3"
        >
          <span
            className="font-serif text-2xl font-light tabular-nums text-cream sm:text-3xl"
            aria-hidden={u.value === undefined}
          >
            {u.value === undefined ? '--' : String(u.value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.12em] text-cream/60 sm:text-[10px] sm:tracking-[0.22em]">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  )
}
