'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Check, Heart, PartyPopper } from 'lucide-react'
import { useState } from 'react'
import { Reveal, SectionHeading } from '@/components/reveal'

type Attendance = 'yes' | 'no'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdfVvKCzXl9Egz7eEpsm55NHE1SjAIl30xao2w9sU4x2AFLkg/formResponse'

const inputClass =
  'w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none transition-colors focus:border-champagne/60 focus:bg-cream/10'
const labelClass =
  'mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-cream/60'

const CONFETTI = [
  ['8%', '#f6b934', '0s'],
  ['15%', '#d96b5f', '0.12s'],
  ['23%', '#91a86b', '0.24s'],
  ['32%', '#d786a8', '0.08s'],
  ['41%', '#f6b934', '0.32s'],
  ['50%', '#9b79c6', '0.16s'],
  ['59%', '#91a86b', '0.28s'],
  ['68%', '#d96b5f', '0.04s'],
  ['77%', '#e4c692', '0.2s'],
  ['86%', '#d786a8', '0.36s'],
  ['93%', '#f6b934', '0.1s'],
] as const

function CelebrationConfetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {CONFETTI.map(([left, color, delay], index) => (
        <span
          key={index}
          className="confetti-piece"
          style={{ left, backgroundColor: color, animationDelay: delay }}
        />
      ))}
    </div>
  )
}

export function Rsvp() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [attendance, setAttendance] = useState<Attendance>('yes')
  const [guests, setGuests] = useState(1)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const formData = new FormData(e.currentTarget)

    try {
      const googleFormData = new URLSearchParams({
        'entry.877086558': String(formData.get('name')),
        'entry.1498135098': String(formData.get('email')),
        'entry.1424661284':
          attendance === 'yes' ? "Hell Yes, I'm in" : 'Regretfully Declining',
        fvv: '1',
        pageHistory: '0',
      })

      if (attendance === 'yes') {
        const arrivalDate = String(formData.get('arrivalDate'))
        const dateParts = arrivalDate.match(/^(\d{4})-(\d{2})-(\d{2})$/)

        if (!dateParts) {
          throw new Error('Invalid arrival date')
        }

        const [, year, month, day] = dateParts
        googleFormData.set('entry.2606285', guests === 2 ? 'Me + one' : 'Just me')
        googleFormData.set('entry.1491155061_year', year)
        googleFormData.set('entry.1491155061_month', String(Number(month)))
        googleFormData.set('entry.1491155061_day', String(Number(day)))
      }

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData,
      })

      setSubmitted(true)
    } catch {
      setError('We could not save your RSVP. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="rsvp" className="wedding-section section-sage relative px-6 py-24 sm:py-32">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-champagne/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="RSVP"
          title="Will we see you there?"
          className="text-center [&_div]:mx-auto"
        />
        <Reveal delay={0.1} className="mt-4 text-center">
          <p className="text-sm text-cream/60">Kindly respond by October 15, 2026.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="invitation-card glass mt-12 overflow-hidden rounded-3xl p-6 sm:p-9">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center overflow-hidden py-10 text-center"
                >
                  <CelebrationConfetti />
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 14 }}
                    className="flex size-16 items-center justify-center rounded-full bg-champagne text-[#2a2119]"
                  >
                    {attendance === 'yes' ? (
                      <PartyPopper className="size-7" aria-hidden="true" />
                    ) : (
                      <Heart className="size-7" aria-hidden="true" />
                    )}
                  </motion.span>
                  <h3 className="font-serif mt-6 text-3xl font-light text-cream">
                    {attendance === 'yes'
                      ? "You're on the list!"
                      : 'We will miss you.'}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/60">
                    {attendance === 'yes'
                      ? 'See you in Ujjain. We cannot wait to celebrate with you.'
                      : 'Thank you for letting us know — we will raise a glass to you from afar.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-champagne/80 underline-offset-4 hover:underline"
                  >
                    Send another response
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full name(s)
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Saloni Sharma & guest"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>

                  <fieldset>
                    <legend className={labelClass}>Attendance</legend>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {(
                        [
                          { v: 'yes', label: "Hell Yes, I'm In" },
                          { v: 'no', label: 'Regretfully Declining' },
                        ] as const
                      ).map((opt) => (
                        <label
                          key={opt.v}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                            attendance === opt.v
                              ? 'border-champagne/60 bg-champagne/10 text-cream'
                              : 'border-cream/15 bg-cream/5 text-cream/70 hover:border-cream/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="attendance"
                            value={opt.v}
                            checked={attendance === opt.v}
                            onChange={() => setAttendance(opt.v)}
                            className="sr-only"
                          />
                          <span
                            className={`flex size-4 items-center justify-center rounded-full border ${
                              attendance === opt.v
                                ? 'border-champagne bg-champagne'
                                : 'border-cream/40'
                            }`}
                            aria-hidden="true"
                          >
                            {attendance === opt.v && (
                              <Check className="size-3 text-[#2a2119]" />
                            )}
                          </span>
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <AnimatePresence>
                    {attendance === 'yes' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 overflow-hidden"
                      >
                        <div>
                          <label className={labelClass}>Number of guests</label>
                          <div className="flex gap-3">
                            {[1, 2].map((n) => (
                              <button
                                key={n}
                                type="button"
                                onClick={() => setGuests(n)}
                                className={`flex-1 rounded-xl border px-4 py-3 text-sm transition-colors ${
                                  guests === n
                                    ? 'border-champagne/60 bg-champagne/10 text-cream'
                                    : 'border-cream/15 bg-cream/5 text-cream/70 hover:border-cream/30'
                                }`}
                              >
                                {n === 1 ? 'Just me' : 'Me + plus one'}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="arrivalDate" className={labelClass}>
                            When are you planning to arrive?
                          </label>
                          <input
                            id="arrivalDate"
                            name="arrivalDate"
                            type="date"
                            required
                            className={inputClass}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {error && (
                    <p role="alert" className="text-center text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="diya-glow w-full rounded-xl bg-champagne py-3.5 text-sm font-semibold text-[#2a2119] transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-wait disabled:opacity-60"
                  >
                    {submitting
                      ? 'Sending…'
                      : attendance === 'yes'
                        ? 'Count me in'
                        : 'Send response'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
