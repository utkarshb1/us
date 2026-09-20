'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Countdown } from '@/components/countdown'
import { GaneshEmblem, PalaceSilhouette, PeacockAccent } from '@/components/indian-ornaments'
import { BASE_PATH } from '@/lib/base-path'
import { WEDDING } from '@/lib/wedding'

export function Hero() {
  return (
    <section className="hero-invitation relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#f7f0e2]">
      {/* Background video layer with poster fallback */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply saturate-[0.8]"
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
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-multiply saturate-[0.8]"
        style={{ backgroundImage: `url(${BASE_PATH}/hero.jpeg)` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.16 }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        aria-hidden="true"
      />

      {/* Readability gradients */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#f7f0e2]/75 via-[#f7f0e2]/45 to-[#f7f0e2]/95"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#f7f0e2]/90 via-transparent to-[#f7f0e2]/60"
        aria-hidden="true"
      />
      <div className="invitation-arch" aria-hidden="true" />
      <PalaceSilhouette />
      <PeacockAccent />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
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
          className="text-champagne text-xs font-medium uppercase tracking-[0.4em]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Together with our families
        </motion.p>

        <motion.h1
          className="font-serif mt-5 text-6xl font-light leading-none text-cream sm:text-8xl md:text-[8.5rem]"
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
          className="mt-6 sm:mt-10"
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
