'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Home, Grid, MessageSquare, BookOpen, ShoppingBag, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'
import { services } from '@/lib/services'

export function MobileNav() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [drawer, setDrawer] = useState(false)

  // Tutup laci saat pindah halaman / tekan Escape; kunci scroll halaman selama laci terbuka
  useEffect(() => setDrawer(false), [pathname])
  useEffect(() => {
    if (!drawer) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrawer(false) }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [drawer])

  const navItems = [
    { label: t('nav_home'), href: '/', icon: Home },
    { label: t('nav_services'), href: '/layanan', icon: Grid },
    { label: t('nav_shop'), href: '/shop', icon: ShoppingBag },
    { label: t('nav_contact'), href: '/contact', icon: MessageSquare },
    { label: t('nav_blog'), href: '/blog', icon: BookOpen },
  ]

  return (
    <>
      {/* Latar gelap + laci layanan (naik dari bawah) */}
      <div
        onClick={() => setDrawer(false)}
        className={cn('md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300', drawer ? 'opacity-100' : 'pointer-events-none opacity-0')}
        aria-hidden
      />
      <div
        id="laci-layanan-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Layanan Kami"
        className={cn(
          'md:hidden fixed inset-x-0 bottom-0 z-40 max-h-[85vh] overflow-y-auto rounded-t-[2.5rem] border-t-2 border-accent bg-card px-5 pt-3 pb-32 shadow-2xl transition-transform duration-300 ease-out',
          drawer ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-[#f4d9da]/50" />
        <div className="flex items-center justify-between">
          <p className="font-script text-4xl text-accent">Layanan Kami</p>
          <button onClick={() => setDrawer(false)} aria-label="Tutup" className="rounded-full p-2 ring-1 ring-accent/40 text-[#f4d9da]">
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="mt-4 space-y-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/layanan/${s.slug}`} className="flex items-center gap-4 rounded-[1.5rem] p-2 ring-1 ring-accent/25 active:bg-[#f4d9da]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt="" className="h-16 w-14 shrink-0 rounded-t-full rounded-b-xl object-cover ring-2 ring-[#f4d9da]/70" />
                <div className="min-w-0 flex-1">
                  <p className="font-serif font-bold leading-tight">{s.title}</p>
                  <p className="font-script text-xl leading-none text-accent">{s.script}</p>
                </div>
                {s.from && (
                  <span className="shrink-0 rounded-full bg-[#f4d9da] px-3 py-1 text-[10px] font-bold text-[#5a1120]">mulai {s.from}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/layanan" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-bold text-accent-foreground">
          Lihat Semua Layanan <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border px-6 py-3 pb-8">
        <div className="flex justify-between items-center max-w-lg mx-auto">
          {navItems.map((item) => {
            const isServices = item.href === '/layanan'
            const isActive = isServices ? drawer || pathname.startsWith('/layanan') : !drawer && pathname === item.href
            const inner = (
              <>
                <div className={cn(
                  'p-2 rounded-2xl transition-all duration-300',
                  isActive ? 'bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/20' : 'text-muted-foreground'
                )}>
                  <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={cn('text-[10px] font-bold uppercase tracking-widest transition-colors', isActive ? 'text-accent' : 'text-muted-foreground')}>
                  {item.label}
                </span>
              </>
            )
            return isServices ? (
              <button
                key={item.href}
                type="button"
                onClick={() => setDrawer((v) => !v)}
                aria-expanded={drawer}
                aria-controls="laci-layanan-mobile"
                className="flex flex-col items-center space-y-1"
              >
                {inner}
              </button>
            ) : (
              <Link key={item.href} href={item.href} className="flex flex-col items-center space-y-1">
                {inner}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
