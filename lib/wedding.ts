export const WEDDING = {
  couple: ['Saloni', 'Utkarsh'] as const,
  dateLabel: 'December 2, 2026',
  location: 'Ujjain, India',
  venue: 'Shipra Riverside Gardens',
  venueAddress: 'Ujjain, Madhya Pradesh, India',
  // Ceremony start — used for the hero countdown (local ISO, IST)
  date: new Date('2026-12-02T19:00:00+05:30'),
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Ujjain+Madhya+Pradesh+India',
  spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
}

export type ScheduleItem = {
  title: string
  time: string
  start: Date
  durationMinutes: number
  venue: string
  address: string
  description: string
}

export const SCHEDULE: ScheduleItem[] = [
  {
    title: 'Welcome Drinks',
    time: '6:00 PM',
    start: new Date('2026-12-02T18:00:00+05:30'),
    durationMinutes: 60,
    venue: 'Garden Lawn',
    address: WEDDING.venueAddress,
    description: 'Arrive, grab a chai or cocktail, and settle in as the evening lights come on.',
  },
  {
    title: 'The Ceremony',
    time: '7:00 PM',
    start: new Date('2026-12-02T19:00:00+05:30'),
    durationMinutes: 90,
    venue: 'The Mandap',
    address: WEDDING.venueAddress,
    description: 'Vows beneath the mandap by the Shipra. Please be seated by 6:45.',
  },
  {
    title: 'Dinner & Toasts',
    time: '8:30 PM',
    start: new Date('2026-12-02T20:30:00+05:30'),
    durationMinutes: 120,
    venue: 'The Long Table',
    address: WEDDING.venueAddress,
    description: 'A feast under the winter sky with the people we love.',
  },
  {
    title: 'After Party',
    time: '10:30 PM',
    start: new Date('2026-12-02T22:30:00+05:30'),
    durationMinutes: 180,
    venue: 'The Courtyard',
    address: WEDDING.venueAddress,
    description: 'Lights down, dhol up. Dance until the last song plays.',
  },
]

export const PALETTE = [
  { name: 'Espresso', hex: '#3b2f27' },
  { name: 'Clay', hex: '#a9744f' },
  { name: 'Champagne', hex: '#e4c692' },
  { name: 'Cream', hex: '#f2ead9' },
  { name: 'Sage', hex: '#8a8b6f' },
]

export const DRESS_CARDS = [
  {
    title: 'Cocktail & Dancefloor Ready',
    body: 'Elevated but easy. Think flowing fabrics, tailored suits, and shoes you can actually move in.',
  },
  {
    title: 'Warm & Earthy Tones',
    body: 'Lean into the palette — espresso, clay, champagne, cream. Skip stark white and neon.',
  },
  {
    title: 'December Evenings Get Cool',
    body: 'Ujjain winter nights turn crisp. Bring a beautiful layer you will not mind dancing in.',
  },
]

export const MOMENTS = [
  { src: '/moment-1.png', alt: 'The couple laughing together in golden light', span: 'row' },
  { src: '/moment-2.png', alt: 'Champagne glasses clinking under string lights' },
  { src: '/moment-3.png', alt: 'Candlelit coastal table setting with dried grasses' },
  { src: '/moment-5.png', alt: 'The couple walking hand in hand at dusk', span: 'col' },
  { src: '/moment-4.png', alt: 'Guests dancing under warm festival lights' },
  { src: '/moment-6.png', alt: 'Delicate cream and blush wedding florals' },
]
