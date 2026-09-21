'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Countdown } from '@/components/countdown'
import { GaneshEmblem } from '@/components/indian-ornaments'
import { BASE_PATH } from '@/lib/base-path'
import { WEDDING } from '@/lib/wedding'

export function Hero() {
  return (
    <section
      className="hero-invitation relative flex min-h-[100svh] w-full items-start justify-center overflow-hidden bg-[#f7f0e2] bg-cover bg-top bg-no-repeat px-5 pb-40 pt-14 sm:bg-contain sm:px-8 sm:pb-44 sm:pt-16"
      style={{ backgroundImage: `url(${BASE_PATH}/indian-wedding-hero-background.png)` }}
    >

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <motion.div
          className="mb-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GaneshEmblem />
        </motion.div>
        <motion.p
          lang="hi"
          className="font-serif mb-5 text-sm tracking-[0.18em] text-[#a96949]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          श्री गणेशाय नमः
        </motion.p>
        <motion.p
          className="text-champagne text-[10px] font-medium uppercase tracking-[0.34em] sm:text-xs sm:tracking-[0.4em]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Together with our families
        </motion.p>

        <motion.h1
          className="font-serif mt-4 text-5xl font-light leading-none text-cream sm:mt-5 sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {WEDDING.couple[0]}
          <span className="mx-3 inline-block text-champagne/90 sm:mx-5">&amp;</span>
          {WEDDING.couple[1]}
        </motion.h1>

        <motion.div
          className="mt-6 flex flex-col items-center gap-2 text-cream/85 sm:mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm sm:tracking-[0.3em]">
            {WEDDING.dateLabel}
          </p>
          <p className="flex items-center gap-1.5 text-sm text-cream/70">
            <MapPin className="size-3.5 text-champagne" aria-hidden="true" />
            {WEDDING.location}
          </p>
        </motion.div>

        <motion.div
          className="mt-5 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <Countdown target={WEDDING.date} />
        </motion.div>
      </div>

    </section>
  )
}
