import { BASE_PATH } from '@/lib/base-path'

export function GaneshEmblem() {
  return (
    <img
      src={`${BASE_PATH}/ganesha-web.svg`}
      alt="Lord Ganesha"
      className="h-24 w-24 object-contain sm:h-28 sm:w-28"
    />
  )
}

export function PalaceSilhouette() {
  return (
    <img
      src={`${BASE_PATH}/palace-web.png`}
      alt=""
      className="pointer-events-none absolute -bottom-4 left-1/2 z-[4] w-[220%] max-w-none -translate-x-1/2 opacity-15 mix-blend-multiply sm:w-[150%]"
      aria-hidden="true"
    />
  )
}

export function PeacockAccent() {
  return (
    <img
      src={`${BASE_PATH}/peacock-web.png`}
      alt=""
      className="pointer-events-none absolute bottom-1 left-1 z-[6] h-28 w-24 object-contain object-bottom sm:h-48 sm:w-40"
      aria-hidden="true"
    />
  )
}
