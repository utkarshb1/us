export function GaneshEmblem() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="h-28 w-28 text-[#c76828] sm:h-32 sm:w-32"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Decorative Lord Ganesha illustration"
      role="img"
    >
      <path d="M75 66C52 40 27 56 39 91C47 112 65 112 79 98" strokeWidth="6" />
      <path d="M145 66C168 40 193 56 181 91C173 112 155 112 141 98" strokeWidth="6" />
      <path d="M81 52C91 37 129 37 139 52C151 72 144 103 123 111" strokeWidth="7" />
      <path d="M96 78C94 105 101 128 119 132C136 136 143 116 132 107" strokeWidth="7" />
      <path d="M119 132C112 150 91 153 80 139" strokeWidth="6" />
      <path d="M87 86C92 91 98 91 102 86" strokeWidth="4" />
      <path d="M125 86C130 91 136 91 140 86" strokeWidth="4" />
      <path d="M84 104L71 116" strokeWidth="5" />
      <path d="M139 104L151 116" strokeWidth="5" />
      <path d="M76 145C48 149 37 173 47 190" strokeWidth="7" />
      <path d="M144 145C172 149 183 173 173 190" strokeWidth="7" />
      <path d="M47 190C69 177 88 179 110 196C132 179 151 177 173 190" strokeWidth="7" />
      <path d="M76 145C86 165 134 165 144 145" strokeWidth="7" />
      <path d="M96 39L110 22L124 39" strokeWidth="5" />
      <path d="M86 48H134" strokeWidth="5" />
      <path d="M110 52V67" strokeWidth="4" />
      <path d="M104 59H116" strokeWidth="4" />
      <circle cx="110" cy="74" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function PalaceSilhouette() {
  return (
    <svg
      viewBox="0 0 900 230"
      className="pointer-events-none absolute bottom-0 left-1/2 z-[4] w-[115%] max-w-none -translate-x-1/2 text-[#8ca173]/30"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 230V190H55V160H105V190H160V142H207V106C207 77 232 53 262 53C292 53 317 77 317 106V142H366V180H405V129H426V93C426 63 450 40 480 40C510 40 534 63 534 93V129H555V180H594V142H643V106C643 77 668 53 698 53C728 53 753 77 753 106V142H800V190H845V160H900V230H0Z" />
      <path d="M236 53L262 12L288 53H236ZM454 40L480 0L506 40H454ZM672 53L698 12L724 53H672Z" />
      <path
        d="M244 142V112C244 101 252 92 262 92C272 92 280 101 280 112V142H244ZM462 129V99C462 88 470 79 480 79C490 79 498 88 498 99V129H462ZM680 142V112C680 101 688 92 698 92C708 92 716 101 716 112V142H680Z"
        fill="#f7f0e2"
      />
    </svg>
  )
}

export function PeacockAccent() {
  return (
    <svg
      viewBox="0 0 180 220"
      className="pointer-events-none absolute bottom-3 left-2 z-[6] hidden h-44 w-36 sm:block"
      aria-hidden="true"
    >
      <path
        d="M74 193C14 141 21 65 72 33C51 91 72 121 114 144C99 163 88 181 74 193Z"
        fill="#2f7f83"
      />
      <path d="M75 190C40 132 48 81 77 48" stroke="#e0af36" strokeWidth="5" fill="none" />
      <path d="M84 81C61 67 56 48 65 28C87 40 95 59 84 81Z" fill="#39909a" />
      <path d="M87 70C112 59 129 66 137 85C114 94 98 89 87 70Z" fill="#397c62" />
      <path d="M86 72C101 92 102 113 91 135" stroke="#315a48" strokeWidth="7" fill="none" />
      <circle cx="79" cy="45" r="4" fill="#1f3126" />
      <path d="M66 29L56 18M67 28L69 14M70 30L81 21" stroke="#315a48" strokeWidth="3" />
      <path d="M72 194L65 217M82 193L88 217" stroke="#8c6339" strokeWidth="4" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((column) => (
          <g key={`${row}-${column}`} transform={`translate(${47 + column * 22} ${105 + row * 22})`}>
            <ellipse rx="9" ry="13" fill="#397f72" transform={`rotate(${column * 12 - 12})`} />
            <circle r="4" fill="#d9ac35" />
            <circle r="2" fill="#31526c" />
          </g>
        )),
      )}
    </svg>
  )
}
