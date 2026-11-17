'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

import { useLanguage } from '@/lib/language-context'
import { services } from '@/lib/services'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Laci layanan: tutup saat pindah halaman, klik di luar, atau tekan Escape
  useEffect(() => setDrawer(false), [pathname])
  useEffect(() => {
    if (!drawer) return
    const onClick = (e: MouseEvent) => { if (!navRef.current?.contains(e.target as Node)) setDrawer(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrawer(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onClick); document.removeEventListener('keydown', onKey) }
  }, [drawer])

  const navItems = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_services'), href: '/layanan' },
    { label: t('nav_shop'), href: '/shop' },
    { label: t('nav_contact'), href: '/contact' },
    { label: t('nav_blog'), href: '/blog' },
  ]

  // Di atas hero maroon (beranda, belum scroll): navbar transparan dengan teks terang
  const onHero = pathname === '/' && !scrolled

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-accent/20 py-3 shadow-sm"
          : onHero ? "bg-transparent py-5" : "bg-background/80 backdrop-blur-md py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Left: Logo & Brand */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110">
              <Image
                src="/apple-icon.png"
                alt="Imelda Salon Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="ml-2 md:ml-3 flex flex-col">
              <span className={cn("text-sm md:text-lg font-serif font-bold tracking-tight leading-none transition-colors", onHero ? "text-primary-foreground" : "text-foreground")}>
                IMELDA
              </span>
              <span className={cn("text-[7px] md:text-[9px] font-sans font-black tracking-[0.3em] uppercase leading-none mt-1", onHero ? "text-accent" : "text-accent")}>
                SALON
              </span>
            </div>
          </Link>

          {/* Center: Pill Navigation (Desktop Only) */}
          <div ref={navRef} className="relative hidden md:block">
          <nav className={cn("flex items-center gap-1 p-1.5 rounded-full border border-accent/30 transition-all duration-500", onHero ? "bg-transparent" : "bg-card/50 backdrop-blur-xl shadow-lg shadow-primary/5")}>
            {navItems.map((item) => {
              const cls = cn(
                "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300",
                isActive(item.href) || (item.href === '/layanan' && drawer)
                  ? onHero ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : onHero ? "text-primary-foreground/70 hover:text-accent" : "text-foreground/60 hover:text-accent hover:bg-card/70"
              )
              return item.href === '/layanan' ? (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => setDrawer((v) => !v)}
                  aria-expanded={drawer}
                  aria-controls="laci-layanan"
                  className={cn(cls, "inline-flex items-center gap-1.5")}
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", drawer && "rotate-180")} />
                </button>
              ) : (
                <Link key={item.href} href={item.href} className={cls}>
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Laci layanan */}
          <div
            id="laci-layanan"
            className={cn(
              "absolute left-1/2 top-full mt-4 w-[min(860px,92vw)] -translate-x-1/2 origin-top transition-all duration-300 ease-out",
              drawer ? "opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 -translate-y-2 scale-[0.98]"
            )}
          >
            <div className="rounded-[2rem] border border-accent/40 bg-card/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/50">
              <div className="flex items-baseline justify-between px-2 pb-3">
                <p className="font-script text-3xl text-accent">Layanan Kami</p>
                <Link href="/layanan" className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#f4d9da] hover:text-accent">
                  Lihat Semua <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <ul className="grid grid-cols-5 gap-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/layanan/${s.slug}`}
                      className="group block rounded-[1.5rem] p-2 transition duration-300 hover:bg-[#f4d9da]/10"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-2xl ring-2 ring-[#f4d9da]/70">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        {s.from && (
                          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#f4d9da] px-2.5 py-0.5 text-[10px] font-bold text-[#5a1120]">
                            mulai {s.from}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-center font-serif text-sm font-bold text-foreground group-hover:text-accent">{s.title}</p>
                      <p className="text-center font-script text-lg leading-none text-accent">{s.script}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>

          {/* Right: Actions (Language Toggle) */}
          <div className="flex items-center">
            <div className={cn("flex items-center gap-2 rounded-full border border-accent/30 px-2.5 py-1.5 md:px-3 md:py-1.5 text-[9px] md:text-[10px] font-bold transition-all duration-500", onHero ? "bg-transparent" : "bg-card/50 shadow-sm backdrop-blur-md")}>
              <button
                onClick={() => setLanguage('id')}
                className={cn(
                  "transition-colors",
                  language === 'id' ? (onHero ? "text-accent" : "text-foreground") : (onHero ? "text-primary-foreground/60 hover:text-accent" : "text-muted-foreground hover:text-accent")
                )}
              >
                ID
              </button>
              <span className="text-border">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "transition-colors",
                  language === 'en' ? (onHero ? "text-accent" : "text-foreground") : (onHero ? "text-primary-foreground/60 hover:text-accent" : "text-muted-foreground hover:text-accent")
                )}
              >
                EN
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

