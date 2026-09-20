import { Hero } from '@/components/hero'
import { Moments } from '@/components/moments'
import { Schedule } from '@/components/schedule'
import { Rsvp } from '@/components/rsvp'
import { MusicPlayer } from '@/components/music-player'
import { PetalFall } from '@/components/petal-fall'
import { WEDDING } from '@/lib/wedding'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-[#0b0a09]">
      <PetalFall />
      <Hero />
      <Moments />
      <Schedule />
      <Rsvp />

      <footer className="border-t border-cream/10 px-6 pb-28 pt-14 text-center sm:pb-14">
        <p lang="hi" className="font-serif mb-8 text-lg tracking-[0.22em] text-champagne/75">
          ॥ शुभ विवाह ॥
        </p>
        <div className="mx-auto grid max-w-2xl grid-cols-[1fr_auto_1fr] items-start gap-3">
          <div>
            <p className="font-serif text-4xl font-light text-cream">{WEDDING.couple[0]}</p>
            <p className="mt-2 text-xs leading-relaxed text-cream/45">
              <span className="block">Daughter of</span>
              <span className="block">Kamal Kishor Patidar</span>
              <span className="block">Gayatri Patidar</span>
            </p>
          </div>
          <span className="font-serif pt-1 text-4xl font-light text-champagne/90">&amp;</span>
          <div>
            <p className="font-serif text-4xl font-light text-cream">{WEDDING.couple[1]}</p>
            <p className="mt-2 text-xs leading-relaxed text-cream/45">
              <span className="block">Son of</span>
              <span className="block">Subhash Kisanji Bhiogade</span>
              <span className="block">Surekha Bhiogade</span>
            </p>
          </div>
        </div>
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
