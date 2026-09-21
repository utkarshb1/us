import { BASE_PATH } from '@/lib/base-path'

export function GaneshEmblem() {
  return (
    <img
      src={`${BASE_PATH}/ganesha-emblem-transparent.png`}
      alt="Lord Ganesha"
      className="h-24 w-24 object-contain sm:h-28 sm:w-28"
    />
  )
}

