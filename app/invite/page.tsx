import { WeddingSite } from '@/components/wedding-site'
import { MOMENTS, SECOND_MOMENTS, US_WEDDING_MOMENTS } from '@/lib/wedding'

const moments =
  process.env.NEXT_PUBLIC_SITE === 'reception'
    ? MOMENTS
    : process.env.NEXT_PUBLIC_INVITE_VARIANT === 'us_wedding'
      ? US_WEDDING_MOMENTS
      : SECOND_MOMENTS

export default function InvitePage() {
  return <WeddingSite moments={moments} />
}
