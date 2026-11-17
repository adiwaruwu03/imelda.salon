'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { ArrowRight, MessageCircle, FileImage } from 'lucide-react'
import { services } from '@/lib/services'
import { Bow, Sprig, Divider } from '@/components/ornaments'

const WHATSAPP = '6282285310686'

export default function LayananPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#f4d9da_1.2px,transparent_1.4px)] [background-size:36px_36px]" />
        <Sprig className="pointer-events-none absolute left-2 top-24 w-32 md:w-48 opacity-90" />
        <Sprig className="pointer-events-none absolute right-2 top-24 w-32 md:w-48 opacity-90 -scale-x-100" />
        <div className="relative space-y-3 animate-fade-up-soft">
          <Bow className="mx-auto w-28" />
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#f4d9da]">Imelda Salon · Exclusive</p>
          <h1 className="font-script text-6xl md:text-8xl text-accent leading-tight">{t('services_title')}</h1>
          <Divider />
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed pt-2">{t('services_desc')}</p>
        </div>
      </section>

      {/* Daftar layanan: zig-zag, warna kartu bergantian */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {services.map((s, i) => {
            const blush = i % 2 === 1
            return (
              <article key={s.slug} className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${blush ? 'md:[&>*:first-child]:order-2' : ''}`}>
                {/* Foto arch */}
                <div className="relative mx-auto w-full max-w-[340px]">
                  <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2.5rem] border border-accent" />
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2.5rem] ring-4 ring-[#f4d9da]/80 shadow-2xl shadow-black/40 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  {s.from && (
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#f4d9da] px-5 py-2 shadow-xl ring-1 ring-accent">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b2a37]">Mulai </span>
                      <span className="font-serif text-xl font-bold text-[#5a1120]">{s.from}</span>
                    </div>
                  )}
                  <span className="absolute -top-4 -left-3 font-script text-6xl text-accent select-none">{String(i + 1).padStart(2, '0')}</span>
                </div>

                {/* Teks */}
                <div
                  className={`relative rounded-[2.5rem] p-8 md:p-10 ${
                    blush ? 'bg-gradient-to-br from-[#fbe9ea] via-[#f4d9da] to-[#efc9cc] text-[#5a1120] ring-2 ring-accent' : 'bg-card ring-1 ring-accent/40'
                  }`}
                >
                  <span className={`absolute top-6 right-8 text-2xl ${blush ? 'text-[#b8566a]' : 'text-[#d98e9a]'}`} aria-hidden>✿</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold">{s.title}</h2>
                  <p className={`font-script text-4xl -mt-1 ${blush ? 'text-[#b8862e]' : 'text-accent'}`}>{s.script}</p>
                  <p className={`mt-4 leading-relaxed ${blush ? 'text-[#6b2a37]' : 'text-muted-foreground'}`}>{s.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold ${blush ? 'bg-white/60 ring-1 ring-[#5a1120]/20 text-[#6b2a37]' : 'ring-1 ring-accent/40 text-muted-foreground'}`}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={`/layanan/${s.slug}`}
                      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 ease-out hover:scale-105 ${
                        blush ? 'bg-[#5a1120] text-[#faf4eb]' : 'bg-accent text-accent-foreground hover:shadow-[0_0_24px_#c5a14a66]'
                      }`}
                    >
                      Lihat Detail <ArrowRight className="h-4 w-4" />
                    </Link>
                    {s.poster && (
                      <a
                        href={s.poster}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 ${
                          blush ? 'ring-1 ring-[#5a1120]/40 hover:bg-white/50' : 'ring-1 ring-accent/60 text-accent hover:bg-accent/10'
                        }`}
                      >
                        <FileImage className="h-4 w-4" /> Price List
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Galeri price list */}
      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#f4d9da]">Price List</p>
          <h2 className="font-script text-5xl md:text-6xl text-accent">Lengkap & Jelas</h2>
          <Divider />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.filter((s) => s.poster).map((s, i) => (
              <a
                key={s.slug}
                href={s.poster!}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block overflow-hidden rounded-[1.75rem] ring-1 ring-accent/50 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:ring-accent ${i % 2 ? 'md:mt-10' : ''}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.poster!} alt={`Price list ${s.title}`} className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#fbe9ea] via-[#f4d9da] to-[#efc9cc] p-10 md:p-16 text-center text-[#5a1120] ring-2 ring-accent shadow-2xl shadow-black/40">
          <Sprig className="pointer-events-none absolute -left-6 -bottom-6 w-40 opacity-80" />
          <Sprig className="pointer-events-none absolute -right-6 -top-6 w-40 opacity-80 rotate-180" />
          <Bow className="relative mx-auto w-24" />
          <h2 className="relative mt-4 font-serif text-3xl md:text-5xl font-bold leading-tight">{t('services_cta_title')}</h2>
          <p className="relative font-script text-5xl md:text-6xl text-[#b8862e]">{t('services_cta_title_highlight')}</p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Halo Imelda Salon, saya ingin booking layanan.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#5a1120] px-10 py-4 font-bold text-[#faf4eb] shadow-xl transition duration-300 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" /> {t('services_cta_btn')}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
