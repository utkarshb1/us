import { BASE_PATH } from '@/lib/base-path'

export function GaneshEmblem() {
  return (
    <img
      src={`${BASE_PATH}/ganesha-emblem-clean.png`}
      alt="Lord Ganesha"
      className="h-20 w-20 object-contain mix-blend-multiply sm:h-24 sm:w-24"
    />
  )
}

