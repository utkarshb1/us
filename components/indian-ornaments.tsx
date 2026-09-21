import { BASE_PATH } from '@/lib/base-path'

export function GaneshEmblem() {
  return (
    <img
      src={`${BASE_PATH}/ganesha-web.svg`}
      alt="Lord Ganesha"
      className="h-16 w-16 object-contain sm:h-20 sm:w-20"
    />
  )
}

