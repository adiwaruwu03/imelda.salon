// Ornamen feminin (pita, ranting bunga, pemisah hati) — sama dengan gaya poster di public/poster.

export function Bow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 210 110" className={className} aria-hidden>
      <defs>
        <linearGradient id="bowg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbe9ea" /><stop offset="1" stopColor="#e7b3b8" />
        </linearGradient>
      </defs>
      <path d="M105 52 C 70 10, 18 12, 14 40 C 10 66, 60 72, 105 56 Z" fill="url(#bowg)" stroke="#c5a14a" strokeWidth="2" />
      <path d="M105 52 C 140 10, 192 12, 196 40 C 200 66, 150 72, 105 56 Z" fill="url(#bowg)" stroke="#c5a14a" strokeWidth="2" />
      <path d="M98 58 L 70 104 L 86 98 L 92 108 L 104 62 Z" fill="url(#bowg)" stroke="#c5a14a" strokeWidth="2" />
      <path d="M112 58 L 140 104 L 124 98 L 118 108 L 106 62 Z" fill="url(#bowg)" stroke="#c5a14a" strokeWidth="2" />
      <ellipse cx="105" cy="54" rx="13" ry="11" fill="#e7b3b8" stroke="#c5a14a" strokeWidth="2" />
    </svg>
  )
}

export function Sprig({ className = '' }: { className?: string }) {
  const flower = (fill: string) => (
    <g fill={fill}>
      <circle cx="0" cy="-10" r="9" /><circle cx="9.5" cy="-3" r="9" /><circle cx="6" cy="8" r="9" />
      <circle cx="-6" cy="8" r="9" /><circle cx="-9.5" cy="-3" r="9" />
    </g>
  )
  return (
    <svg viewBox="0 0 230 230" fill="none" className={className} aria-hidden>
      <path d="M20 210 C 40 140, 90 80, 210 20" stroke="#c5a14a" strokeWidth="1.6" strokeOpacity=".8" />
      <g fill="#c5a14a" fillOpacity=".85">
        <path d="M70 128 q-26 -4 -30 -28 q24 2 30 28z" /><path d="M104 88 q-6 -26 14 -38 q8 22 -14 38z" />
        <path d="M140 64 q-24 -10 -22 -34 q22 8 22 34z" /><path d="M50 168 q-24 4 -36 -16 q24 -6 36 16z" />
      </g>
      <g transform="translate(176 40)">{flower('#d98e9a')}<circle r="5" fill="#c5a14a" /></g>
      <g transform="translate(86 112) scale(.7)">{flower('#f4d9da')}<circle r="5" fill="#c5a14a" /></g>
    </svg>
  )
}

export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 text-[#d98e9a]" aria-hidden>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />♥<span className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
    </div>
  )
}

/** Judul section: label kecil + judul huruf sambung + pemisah hati */
export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#f4d9da]">{kicker}</p>
      <h2 className="font-script text-5xl md:text-6xl text-accent leading-tight">{title}</h2>
      <Divider />
    </div>
  )
}
