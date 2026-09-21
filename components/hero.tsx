'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Countdown } from '@/components/countdown'
import { GaneshEmblem } from '@/components/indian-ornaments'
import { BASE_PATH } from '@/lib/base-path'
import { WEDDING } from '@/lib/wedding'

export function Hero() {
  return (
    <section className="hero-invitation relative flex min-h-[max(100svh,177vw)] w-full items-start justify-center overflow-hidden bg-[#f7f0e2] px-5 pb-40 pt-20 sm:min-h-[100svh] sm:px-8 sm:pb-36 sm:pt-20 lg:pt-24">
      <picture className="absolute inset-0" aria-hidden="true">
        <source
          media="(min-width: 900px) and (orientation: landscape)"
          srcSet={`${BASE_PATH}/indian-wedding-hero-desktop.png`}
        />
        <img
          src={`${BASE_PATH}/indian-wedding-hero-background.png`}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute left-1/2 top-[12%] z-10 flex -translate-x-1/2 flex-col items-center text-center sm:top-[11%]">
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
          className="font-serif mb-2 text-xs tracking-[0.16em] text-[#a96949] sm:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          श्री गणेशाय नमः
        </motion.p>
      </div>

      <div className="absolute left-1/2 top-[43%] z-10 flex w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:top-[44%] sm:w-[calc(100%-4rem)]">
        <motion.p
          className="text-champagne text-[10px] font-medium uppercase tracking-[0.34em] sm:text-xs sm:tracking-[0.4em]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Together with our families
        </motion.p>

        <motion.h1
          className="font-serif mt-2 text-5xl font-light leading-none text-cream sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {WEDDING.couple[0]}
          <span className="mx-3 inline-block text-champagne/90 sm:mx-5">&amp;</span>
          {WEDDING.couple[1]}
        </motion.h1>

        <motion.div
          className="mt-4 flex flex-col items-center gap-1.5 text-cream/85 sm:mt-5"
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
          className="mt-4 sm:mt-5"
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
