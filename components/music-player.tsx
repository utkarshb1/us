'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import { WEDDING } from '@/lib/wedding'

export function MusicPlayer() {
  return (
    <motion.a
      href={WEDDING.musicUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open the wedding vibe song on YouTube Music"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-champagne py-2.5 pl-3 pr-4 text-[#2a2119] shadow-lg shadow-black/30 transition-transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      <span className="flex size-6 items-center justify-center">
        <Play className="size-4 translate-x-[1px]" aria-hidden="true" />
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.15em]">Wedding Vibe</span>
      <ExternalLink className="size-3.5" aria-hidden="true" />
    </motion.a>
  )
}
