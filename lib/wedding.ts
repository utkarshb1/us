import { BASE_PATH } from '@/lib/base-path'

export const WEDDING = {
  couple: ['Saloni', 'Utkarsh'] as const,
  dateLabel: 'December 1 – 2, 2026',
  location: 'Ujjain, India',
  venue: 'Suman Wedding & Events Venue - Marriage Garden',
  venueAddress: 'Ujjain, Madhya Pradesh, India',
  // First celebration — used for the hero countdown (local ISO, IST)
  date: new Date('2026-12-01T10:00:00+05:30'),
  mapsUrl: 'https://maps.app.goo.gl/KiXzjEyKrdMZhYLw5',
  musicUrl: 'https://music.youtube.com/watch?v=Het4pXDENBI&si=Q5SzqQqMNPfFrXeB',
}

export const IS_RECEPTION = process.env.NEXT_PUBLIC_SITE === 'reception'

export const RECEPTION = {
  dateLabel: 'December 4, 2026',
  location: 'Ramtek, Nagpur',
  venue: 'Takkamore Celebration Hall',
  venueAddress: 'Ramtek, Nagpur 441106',
  date: new Date('2026-12-04T19:30:00+05:30'),
  mapsUrl: 'https://maps.app.goo.gl/DtNtHXfDydXS4bFE6',
  inviteLine: 'we cordially invite you to our reception',
}

export type ScheduleItem = {
  title: string
  time: string
  start: Date
  durationMinutes: number
  venue: string
  address: string
  description: string
  note?: string
  calendarLocation?: string
  mapsUrl?: string
}

export type ScheduleDay = {
  label: string
  dateLabel: string
  events: ScheduleItem[]
  separated?: boolean
}

export const SCHEDULE: ScheduleDay[] = [
  {
    label: 'Day One',
    dateLabel: 'Tuesday, December 1, 2026',
    events: [
      {
        title: 'Phoolon ki Haldi',
        time: '10:00 AM',
        start: new Date('2026-12-01T10:00:00+05:30'),
        durationMinutes: 120,
        venue: 'Garden Lawn',
        address: WEDDING.venueAddress,
        description: 'A blossom-filled haldi — showers of flower petals in place of turmeric to bless the couple.',
      },
      {
        title: 'Engagement',
        time: '3:00 PM',
        start: new Date('2026-12-01T15:00:00+05:30'),
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
        description: 'A night of music, dance, and DJ. Bring your best moves to the floor.',
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
        description: 'Mangalashtak, followed by the sacred pheras beneath the mandap.',
        note: 'P.S. The baraat is where the party begins—don’t miss it!',
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
  {
    label: 'Reception at Ramtek',
    dateLabel: 'Friday, December 4, 2026',
    separated: true,
    events: [
      {
        title: 'Reception',
        time: '7:30 PM onwards',
        start: RECEPTION.date,
        durationMinutes: 240,
        venue: RECEPTION.venue,
        address: RECEPTION.venueAddress,
        description: 'Dinner and celebration at Takkamore Celebration Hall, Ramtek.',
        calendarLocation: `${RECEPTION.venue}, ${RECEPTION.venueAddress}`,
        mapsUrl: RECEPTION.mapsUrl,
      },
    ],
  },
]

export const RECEPTION_SCHEDULE: ScheduleDay[] = [
  {
    label: 'Reception',
    dateLabel: 'Friday, December 4, 2026',
    events: [
      {
        title: 'Reception',
        time: '7:30 PM onwards',
        start: RECEPTION.date,
        durationMinutes: 240,
        venue: RECEPTION.venue,
        address: RECEPTION.venueAddress,
        description: 'Dinner and celebration at the groom’s home in Ramtek.',
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

export type Moment = {
  src: string
  alt: string
  span?: 'row' | 'col'
}

export const MOMENTS: Moment[] = [
  { src: `${BASE_PATH}/moment-1.jpeg`, alt: 'The couple laughing together in golden light', span: 'row' },
  { src: `${BASE_PATH}/moment-2.jpeg`, alt: 'Champagne glasses clinking under string lights' },
  {
    src: `${BASE_PATH}/moment-3.jpeg`,
    alt: 'The couple taking a selfie together outdoors',
    span: 'row',
  },
  { src: `${BASE_PATH}/moment-5.jpg`, alt: 'The couple walking hand in hand at dusk' },
  {
    src: `${BASE_PATH}/moment-6.jpeg`,
    alt: 'The couple standing together outside a temple',
    span: 'row',
  },
  { src: `${BASE_PATH}/moment-4.jpeg`, alt: 'Guests dancing under warm festival lights' },
  { src: `${BASE_PATH}/moment-7.JPG`, alt: 'The couple walking together beneath the trees' },
]

export const SECOND_MOMENTS: Moment[] = [
  { src: `${BASE_PATH}/moment-1.jpeg`, alt: 'The couple laughing together in golden light', span: 'row' },
  { src: `${BASE_PATH}/second/moment-2.jpeg`, alt: 'The couple holding flower bouquets in traditional attire' },
  {
    src: `${BASE_PATH}/moment-3.jpeg`,
    alt: 'The couple taking a selfie together outdoors',
    span: 'row',
  },
  { src: `${BASE_PATH}/moment-5.jpg`, alt: 'The couple walking hand in hand at dusk' },
  {
    src: `${BASE_PATH}/moment-6.jpeg`,
    alt: 'The couple standing together outside a temple',
    span: 'row',
  },
  { src: `${BASE_PATH}/second/moment-4.jpeg`, alt: 'The couple walking hand in hand in wedding attire' },
  { src: `${BASE_PATH}/second/moment-7.jpeg`, alt: 'The couple smiling together at a café' },
]

export const US_WEDDING_MOMENTS: Moment[] = [
  { src: `${BASE_PATH}/us_wedding/moment-1.jpeg`, alt: 'The couple walking together along a tree-lined path', span: 'row' },
  { src: `${BASE_PATH}/second/moment-2.jpeg`, alt: 'The couple holding flower bouquets in traditional attire' },
  {
    src: `${BASE_PATH}/moment-3.jpeg`,
    alt: 'The couple taking a selfie together outdoors',
    span: 'row',
  },
  { src: `${BASE_PATH}/moment-5.jpg`, alt: 'The couple walking hand in hand at dusk' },
  {
    src: `${BASE_PATH}/moment-6.jpeg`,
    alt: 'The couple standing together outside a temple',
    span: 'row',
  },
  { src: `${BASE_PATH}/second/moment-4.jpeg`, alt: 'The couple walking hand in hand in wedding attire' },
  { src: `${BASE_PATH}/second/moment-7.jpeg`, alt: 'The couple smiling together at a café' },
]
