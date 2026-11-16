'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { useLanguage } from '@/lib/language-context'

export function FeaturedServices() {
  const { t } = useLanguage()
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('.fade-up, .fade-in, .scale-in, .slide-in-left, .slide-in-right').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="pb-24 sm:pb-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Owner - kartu cream dengan aksen maroon & gold */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 rounded-[2rem] bg-card border border-accent/40 p-8 md:p-12 shadow-xl shadow-primary/5 space-y-6 fade-up">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">{t('owner_badge')}</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              {t('owner_title_1')} <span className="text-primary italic">{t('owner_title_2')}</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">{t('owner_desc')}</p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[1, 2].map((n) => (
                <div key={n} className="border-l-2 border-accent pl-4">
                  <span className="font-serif text-2xl text-accent">0{n}</span>
                  <h4 className="font-bold text-sm text-foreground mt-1">{t(`owner_feature_${n}_title`)}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{t(`owner_feature_${n}_desc`)}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all group"
            >
              {t('owner_consult')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <blockquote className="lg:col-span-2 rounded-[2rem] bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-between gap-8 fade-up animation-delay-200">
            <span className="font-serif text-7xl leading-none text-accent">&ldquo;</span>
            <p className="font-serif text-2xl md:text-3xl italic leading-snug">Kecantikan sejati dimulai saat Anda menjadi diri sendiri.</p>
            <footer className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Melda Pasaribu</footer>
          </blockquote>
        </div>

        {/* Visi Misi */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-card border border-accent/40 p-8 md:p-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 fade-up">
            <span className="absolute -top-4 right-6 font-serif text-[7rem] font-bold text-accent/15 select-none">V</span>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Visi</p>
            <h3 className="text-2xl font-serif font-bold text-primary mt-2 mb-4">Visi Kami</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Menjadi standar emas layanan kecantikan di Tapanuli Utara, di mana profesionalisme bertemu dengan kenyamanan yang hangat dan hasil yang memukau.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-card border border-accent/40 p-8 md:p-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 fade-up animation-delay-200">
            <span className="absolute -top-4 right-6 font-serif text-[7rem] font-bold text-accent/15 select-none">M</span>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Misi</p>
            <h3 className="text-2xl font-serif font-bold text-primary mt-2 mb-4">Misi Kami</h3>
            <ol className="space-y-3">
              {["Inovasi teknik kecantikan berkelanjutan", "Integritas dalam penggunaan produk", "Membangun kepercayaan melalui hasil nyata"].map((misi, i) => (
                <li key={i} className="flex gap-4 text-sm text-muted-foreground">
                  <span className="font-serif font-bold text-accent">0{i + 1}</span>
                  {misi}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 text-center fade-up animation-delay-400">
          <Link 
            href="/layanan"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all shadow-lg active:scale-95"
          >
            Lihat Semua Layanan
          </Link>
        </div>
      </div>

    </section>
  )
}