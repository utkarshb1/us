export const WEDDING = {
  couple: ['Saloni', 'Utkarsh'] as const,
  dateLabel: 'December 1 – 2, 2026',
  location: 'Ujjain, India',
  venue: 'Shipra Riverside Gardens',
  venueAddress: 'Ujjain, Madhya Pradesh, India',
  // First celebration — used for the hero countdown (local ISO, IST)
  date: new Date('2026-12-01T11:00:00+05:30'),
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

export type ScheduleDay = {
  label: string
  dateLabel: string
  events: ScheduleItem[]
}

export const SCHEDULE: ScheduleDay[] = [
  {
    label: 'Day One',
    dateLabel: 'Tuesday, December 1, 2026',
    events: [
      {
        title: 'Phoolon ki Haldi',
        time: '11:00 AM',
        start: new Date('2026-12-01T11:00:00+05:30'),
        durationMinutes: 120,
        venue: 'Garden Lawn',
        address: WEDDING.venueAddress,
        description: 'A blossom-filled haldi — showers of flower petals in place of turmeric to bless the couple.',
      },
      {
        title: 'Engagement',
        time: '4:00 PM',
        start: new Date('2026-12-01T16:00:00+05:30'),
        durationMinutes: 120,
        venue: 'The Riverside Terrace',
        address: WEDDING.venueAddress,
        description: 'The exchange of rings as families come together to celebrate the promise.',
      },
      {
        title: 'Sangeet',
        time: '7:30 PM',
        start: new Date('2026-12-01T19:30:00+05:30'),
        durationMinutes: 240,
        venue: 'The Grand Ballroom',
        address: WEDDING.venueAddress,
        description: 'A night of music, dance, and dhol. Bring your best moves to the floor.',
      },
    ],
  },
  {
    label: 'Day Two',
    dateLabel: 'Wednesday, December 2, 2026',
    events: [
      {
        title: 'Wedding Ceremony',
        time: '11:40 AM',
        start: new Date('2026-12-02T11:40:00+05:30'),
        durationMinutes: 180,
        venue: 'The Mandap',
        address: WEDDING.venueAddress,
        description: 'The pheras beneath the mandap at the auspicious muhurat. Please be seated by 11:20.',
      },
      {
        title: 'Mayra',
        time: '4:00 PM',
        start: new Date('2026-12-02T16:00:00+05:30'),
        durationMinutes: 120,
        venue: 'The Courtyard',
        address: WEDDING.venueAddress,
        description: 'The maternal family arrives bearing blessings and gifts for the couple.',
      },
      {
        title: 'Reception',
        time: '7:30 PM',
        start: new Date('2026-12-02T19:30:00+05:30'),
        durationMinutes: 240,
        venue: 'The Grand Ballroom',
        address: WEDDING.venueAddress,
        description: 'An evening of dinner, celebration, and dancing to close the festivities.',
      },
    ],
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
