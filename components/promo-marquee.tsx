// Pita teks berjalan berisi ajakan/promo, diletakkan tepat di bawah navbar.
// Header fixed setinggi ~72px, jadi pita diberi jarak atas agar tidak tertutup.
export function PromoMarquee({ items }: { items: string[] }) {
  return (
    <div className="pt-[68px] md:pt-[76px]">
      <div className="overflow-hidden border-y border-accent/40 bg-gradient-to-r from-[#f4d9da] via-[#fbe9ea] to-[#f4d9da] py-2.5 text-[#5a1120]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((k) => (
            <div key={k} aria-hidden={k === 1} className="flex shrink-0">
              {[...items, ...items].map((t, i) => (
                <span key={i} className="flex items-center whitespace-nowrap px-6 text-sm font-semibold tracking-wide">
                  <span className="mr-6 text-[#b8566a]">✿</span>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
