'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

import { useLanguage } from '@/lib/language-context'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <nav className={cn("hidden md:flex items-center gap-1 p-1.5 rounded-full border border-accent/30 transition-all duration-500", onHero ? "bg-transparent" : "bg-card/50 backdrop-blur-xl shadow-lg shadow-primary/5")}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300",
                  isActive(item.href)
                    ? onHero ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : onHero ? "text-primary-foreground/70 hover:text-accent" : "text-foreground/60 hover:text-accent hover:bg-card/70"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

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

