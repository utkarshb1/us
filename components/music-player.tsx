'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Pause, Play } from 'lucide-react'
import { useState } from 'react'
import { WEDDING } from '@/lib/wedding'

function Equalizer({ active }: { active: boolean }) {
  const bars = [0, 1, 2, 3]
  return (
    <span className="flex h-4 items-end gap-[2px]" aria-hidden="true">
      {bars.map((b) => (
        <span
          key={b}
          className="w-[3px] origin-bottom rounded-full bg-[#2a2119]"
          style={{
            height: '100%',
            animation: active
              ? `equalize 0.9s ease-in-out ${b * 0.15}s infinite`
              : 'none',
            transform: active ? undefined : 'scaleY(0.3)',
          }}
        />
      ))}
    </span>
  )
}

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-pressed={playing}
        aria-label={playing ? 'Pause wedding vibe' : 'Play wedding vibe'}
        className="flex items-center gap-2.5 rounded-full bg-champagne py-2.5 pl-3 pr-4 text-[#2a2119] shadow-lg shadow-black/30 transition-transform hover:scale-105"
      >
        <span className="flex size-6 items-center justify-center">
          {playing ? (
            <Pause className="size-4" aria-hidden="true" />
          ) : (
            <Play className="size-4 translate-x-[1px]" aria-hidden="true" />
          )}
        </span>
        <Equalizer active={playing} />
        <span className="text-xs font-semibold uppercase tracking-[0.15em]">
          {playing ? 'Now Playing' : 'Wedding Vibe'}
        </span>
      </button>
      <a
        href={WEDDING.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the playlist on Spotify"
        className="glass flex size-10 items-center justify-center rounded-full text-cream/80 transition-colors hover:text-cream"
      >
        <ExternalLink className="size-4" aria-hidden="true" />
      </a>
    </motion.div>
  )
}
