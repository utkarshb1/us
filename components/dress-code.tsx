'use client'

import { DRESS_CARDS, PALETTE } from '@/lib/wedding'
import { Reveal, SectionHeading } from '@/components/reveal'

export function DressCode() {
  return (
    <section id="dress-code" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Dress Code"
          title="Cocktail, warmed by the coast"
          className="max-w-2xl"
        />

        {/* Palette swatches */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-3">
            {PALETTE.map((c) => (
              <div
                key={c.hex}
                className="flex items-center gap-2.5 rounded-full border border-cream/10 bg-cream/5 py-1.5 pl-1.5 pr-4"
              >
                <span
                  className="size-8 rounded-full ring-1 ring-inset ring-black/10"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden="true"
                />
                <span className="flex flex-col leading-tight">
                  <span className="text-xs font-medium text-cream/90">{c.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-cream/45">
                    {c.hex}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Moodboard cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {DRESS_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-champagne/30">
                <span className="font-serif text-3xl font-light text-champagne/80">
                  0{i + 1}
                </span>
                <h3 className="font-serif mt-3 text-xl font-light text-cream">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
