export const WEDDING = {
  couple: ['Saloni', 'Utkarsh'] as const,
  dateLabel: 'September 12, 2027',
  location: 'Big Sur, California',
  venue: 'The Bluff at Ventana',
  venueAddress: '48123 Highway 1, Big Sur, CA 93920',
  // Ceremony start — used for the hero countdown (local ISO)
  date: new Date('2027-09-12T16:00:00-07:00'),
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Ventana+Big+Sur+California',
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
    time: '4:00 PM',
    start: new Date('2027-09-12T16:00:00-07:00'),
    durationMinutes: 45,
    venue: 'Cliffside Terrace',
    address: WEDDING.venueAddress,
    description: 'Arrive, grab a spritz, and watch the fog roll off the Pacific.',
  },
  {
    title: 'The Ceremony',
    time: '5:00 PM',
    start: new Date('2027-09-12T17:00:00-07:00'),
    durationMinutes: 45,
    venue: 'The Bluff',
    address: WEDDING.venueAddress,
    description: 'Vows at golden hour, ocean at our backs. Please be seated by 4:45.',
  },
  {
    title: 'Dinner & Toasts',
    time: '6:30 PM',
    start: new Date('2027-09-12T18:30:00-07:00'),
    durationMinutes: 120,
    venue: 'The Long Table',
    address: WEDDING.venueAddress,
    description: 'A family-style feast under the redwoods with the people we love.',
  },
  {
    title: 'After Party',
    time: '9:00 PM',
    start: new Date('2027-09-12T21:00:00-07:00'),
    durationMinutes: 180,
    venue: 'The Barn',
    address: WEDDING.venueAddress,
    description: 'Lights down, volume up. Dance until the last song plays.',
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
    title: 'Coastal Evenings Get Cool',
    body: 'Big Sur nights drop fast. Bring a beautiful layer you will not mind dancing in.',
  },
]

export const MOMENTS = [
  { src: '/moment-1.png', alt: 'The couple laughing together in golden light', span: 'row' },
  { src: '/moment-2.png', alt: 'Champagne glasses clinking under string lights' },
  { src: '/moment-3.png', alt: 'Candlelit coastal table setting with dried grasses' },
  { src: '/moment-5.png', alt: 'The couple walking a misty Big Sur cliff path', span: 'col' },
  { src: '/moment-4.png', alt: 'Guests dancing under warm festival lights' },
  { src: '/moment-6.png', alt: 'Delicate cream and blush wedding florals' },
]
