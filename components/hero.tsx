'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-background text-foreground pt-28 md:pt-24 md:h-[calc(100svh-3.75rem)] md:min-h-[520px]">
      {/* Tekstur radial halus */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_25%_70%,#c5a14a26,transparent_50%),radial-gradient(ellipse_at_90%_10%,#3b0913,transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-end md:h-full">
        {/* Foto owner (kiri) */}
        <div className="relative mx-auto w-full max-w-[280px] md:max-w-none md:w-fit md:h-[calc(100svh-10rem)] animate-fade-up-soft">
          {/* Lingkaran hijau pandan + teks melingkar berjalan */}
          <div className="absolute left-1/2 top-[4%] w-[130%] md:w-[170%] aspect-square -translate-x-1/2">
            <div className="absolute inset-[1.5%] rounded-full border border-accent/50" />
            <div className="absolute inset-[4%] rounded-full bg-[#4c8c4a]" />
            {/* Teks berjalan di dalam lingkaran, dekat tepinya */}
            <svg viewBox="0 0 200 200" aria-hidden className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite] motion-reduce:animate-none">
              <defs>
                <path id="hero-ring" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text className="fill-[#faf4eb] font-sans font-bold uppercase" fontSize="8" letterSpacing="2">
                <textPath href="#hero-ring" textLength="500" lengthAdjust="spacing">
                  Ayo datang dan tampil cantik untuk dirimu sendiri •
                </textPath>
              </text>
            </svg>
          </div>
          <Image
            src="/album/founder-nobg.png"
            alt="Melda Pasaribu, owner Imelda Salon"
            width={567}
            height={866}
            priority
            className="relative z-10 w-full h-auto md:h-full md:w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
          />

          {/* Label nama & jabatan owner */}
          <div className="absolute z-20 bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap rounded-full bg-foreground pl-5 pr-1.5 py-1.5 shadow-xl shadow-black/40 ring-1 ring-accent/60">
            <span className="font-serif italic text-base md:text-lg leading-none text-background">Melda Pasaribu</span>
            <span className="rounded-full bg-accent px-3 py-1.5 text-[9px] md:text-[10px] leading-none font-bold uppercase tracking-[0.3em] text-accent-foreground">
              Founder
            </span>
          </div>
        </div>

        {/* Teks (kanan) */}
        <div className="pb-12 md:pb-0 md:self-center space-y-4 lg:space-y-5 text-center md:text-left animate-fade-up-soft animate-delay-1">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">{t('hero_badge')}</p>
          <h1 className="text-5xl md:text-[clamp(2.75rem,8vh,4.5rem)] font-serif font-bold leading-[1.05]">
            {t('hero_title_1')} <br />
            <span className="italic font-normal text-accent">{t('hero_title_2')}</span>
          </h1>
          <div className="h-px w-24 bg-accent mx-auto md:mx-0" />
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-md mx-auto md:mx-0 leading-relaxed">
            {t('hero_desc')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link href="/contact" className="rounded-full bg-accent text-accent-foreground px-8 py-3.5 text-sm font-bold transition duration-300 ease-out hover:scale-105 hover:shadow-[0_0_30px_#c5a14a80]">
              {t('hero_booking')}
            </Link>
            <Link href="/layanan" className="rounded-full border border-accent/60 px-8 py-3.5 text-sm font-bold transition duration-300 ease-out hover:bg-accent/10">
              {t('hero_see_services')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
