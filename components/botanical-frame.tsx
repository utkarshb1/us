function BotanicalBranch({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 205C52 172 64 120 92 78C117 40 153 20 211 6"
        stroke="#6f8258"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M43 171C25 145 31 122 51 111C63 132 59 153 43 171Z" fill="#8da36d" />
      <path d="M66 135C48 107 57 83 78 73C89 98 83 118 66 135Z" fill="#78945f" />
      <path d="M96 87C78 61 88 39 109 31C118 54 112 73 96 87Z" fill="#9cad79" />
      <path d="M84 113C112 94 135 100 145 121C119 132 100 127 84 113Z" fill="#6f8a58" />
      <path d="M126 54C151 37 175 44 184 63C160 73 141 69 126 54Z" fill="#879e68" />
      <g transform="translate(42 166)">
        <circle cx="0" cy="-12" r="12" fill="#db7197" />
        <circle cx="11" cy="-4" r="12" fill="#ed8bab" />
        <circle cx="7" cy="10" r="12" fill="#cf5f88" />
        <circle cx="-8" cy="10" r="12" fill="#e47ca1" />
        <circle cx="-12" cy="-4" r="12" fill="#f09ab4" />
        <circle r="6" fill="#dca43e" />
      </g>
      <g transform="translate(92 78) scale(.8)">
        <circle cx="0" cy="-12" r="12" fill="#db7197" />
        <circle cx="11" cy="-4" r="12" fill="#f0a0b8" />
        <circle cx="7" cy="10" r="12" fill="#ce6289" />
        <circle cx="-8" cy="10" r="12" fill="#e986a6" />
        <circle cx="-12" cy="-4" r="12" fill="#ef99b3" />
        <circle r="6" fill="#dba63f" />
      </g>
      <g transform="translate(158 29) scale(.58)">
        <circle cx="0" cy="-12" r="12" fill="#df7ca0" />
        <circle cx="11" cy="-4" r="12" fill="#f2a9bd" />
        <circle cx="7" cy="10" r="12" fill="#d5688d" />
        <circle cx="-8" cy="10" r="12" fill="#e98da9" />
        <circle cx="-12" cy="-4" r="12" fill="#f09eb6" />
        <circle r="6" fill="#dba63f" />
      </g>
    </svg>
  )
}

export function BotanicalFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" aria-hidden="true">
      <BotanicalBranch className="absolute -left-8 -top-8 w-52 -rotate-6 opacity-90 sm:w-64" />
      <BotanicalBranch className="absolute -right-8 -top-8 w-52 scale-x-[-1] rotate-6 opacity-90 sm:w-64" />
      <BotanicalBranch className="absolute -bottom-16 -left-12 w-60 scale-y-[-1] rotate-6 opacity-75 sm:w-72" />
      <BotanicalBranch className="absolute -bottom-16 -right-12 w-60 scale-[-1] -rotate-6 opacity-75 sm:w-72" />
    </div>
  )
}
