import { BASE_PATH } from '@/lib/base-path'

export function GaneshEmblem() {
  return (
    <img
      src={`${BASE_PATH}/ganesha-web.svg`}
      alt="Lord Ganesha"
      className="h-14 w-14 object-contain sm:h-16 sm:w-16"
    />
  )
}

