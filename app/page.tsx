import { Hero } from '@/components/hero'
import { Moments } from '@/components/moments'
import { Schedule } from '@/components/schedule'
import { Rsvp } from '@/components/rsvp'
import { MusicPlayer } from '@/components/music-player'
import { WEDDING } from '@/lib/wedding'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-[#0b0a09]">
      <Hero />
      <Moments />
      <Schedule />
      <Rsvp />

      <footer className="border-t border-cream/10 px-6 py-14 text-center">
        <p className="font-serif text-4xl font-light text-cream">
          {WEDDING.couple[0]}
          <span className="mx-2.5 text-champagne/90">&amp;</span>
          {WEDDING.couple[1]}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cream/50">
          {WEDDING.dateLabel} · {WEDDING.location}
        </p>
        <p className="mt-6 text-xs text-cream/30">
          Made with love, for the ones we love.
        </p>
      </footer>

      <MusicPlayer />
    </main>
  )
}
