import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { BASE_PATH } from '@/lib/base-path'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://utkarshb1.github.io/us/'),
  title: 'Saloni & Utkarsh · Ujjain, India',
  description:
    'Join us for the wedding of Saloni & Utkarsh in Ujjain, India — December 2, 2026. RSVP, schedule, dress code, and more.',
  generator: 'v0.app',
  openGraph: {
    title: 'Saloni & Utkarsh · Ujjain, India',
    description:
      'Join us for the wedding of Saloni & Utkarsh in Ujjain, India — December 2, 2026.',
    images: [`${BASE_PATH}/hero.jpeg`],
    type: 'website',
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/icon-light-32x32.png`, media: '(prefers-color-scheme: light)' },
      { url: `${BASE_PATH}/icon-dark-32x32.png`, media: '(prefers-color-scheme: dark)' },
      { url: `${BASE_PATH}/icon.svg`, type: 'image/svg+xml' },
    ],
    apple: `${BASE_PATH}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#2f1921',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
