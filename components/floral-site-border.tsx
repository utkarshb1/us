import { BASE_PATH } from '@/lib/base-path'

function FloralEdge({ side }: { side: 'left' | 'right' }) {
  return (
    <div
      className={`floral-site-edge floral-site-edge-${side} pointer-events-none fixed bottom-0 top-0 z-30 w-7 sm:w-14 lg:w-20`}
      aria-hidden="true"
    >
      <picture>
        <source
          media="(min-width: 900px) and (orientation: landscape)"
          srcSet={`${BASE_PATH}/indian-wedding-hero-desktop.png`}
        />
        <img
          src={`${BASE_PATH}/indian-wedding-hero-background.png`}
          alt=""
          className={`h-full w-full object-cover ${
            side === 'left' ? 'object-left' : 'object-right'
          }`}
        />
      </picture>
    </div>
  )
}

export function FloralSiteBorder() {
  return (
    <>
      <FloralEdge side="left" />
      <FloralEdge side="right" />
    </>
  )
}
