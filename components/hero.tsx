'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import { Countdown } from '@/components/countdown'
import { FireworkShow } from '@/components/firework-show'
import { BASE_PATH } from '@/lib/base-path'
import { WEDDING } from '@/lib/wedding'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      {/* Background video layer with poster fallback */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster={`${BASE_PATH}/hero.jpeg`}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={`${BASE_PATH}/hero.mp4`} type="video/mp4" />
      </video>

      {/* Slow cinematic drift on the still layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BASE_PATH}/hero.jpeg)` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.16 }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        aria-hidden="true"
      />

      {/* Readability gradients */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0b0a09]/70 via-[#0b0a09]/35 to-[#0b0a09]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-transparent to-[#0b0a09]/40"
        aria-hidden="true"
      />
      <FireworkShow />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          className="mb-5 flex items-center gap-3 text-champagne/75"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-champagne/70" />
          <span className="font-serif text-xl">❦</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-champagne/70" />
        </motion.div>
        <motion.p
          className="text-champagne text-xs font-medium uppercase tracking-[0.4em]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Together with our families
        </motion.p>

        <motion.h1
          className="font-serif mt-6 text-6xl font-light leading-none text-cream sm:text-8xl md:text-[8.5rem]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {WEDDING.couple[0]}
          <span className="mx-3 inline-block text-champagne/90 sm:mx-5">&amp;</span>
          {WEDDING.couple[1]}
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-col items-center gap-2 text-cream/85"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            {WEDDING.dateLabel}
          </p>
          <p className="flex items-center gap-1.5 text-sm text-cream/70">
            <MapPin className="size-3.5 text-champagne" aria-hidden="true" />
            {WEDDING.location}
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <Countdown target={WEDDING.date} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#moments"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/60 transition-colors hover:text-cream"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-5" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  )
}
