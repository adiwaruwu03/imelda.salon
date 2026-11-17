import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PromoMarquee } from '@/components/promo-marquee'
import { Bow, Sprig, SectionTitle, Divider } from '@/components/ornaments'

export const metadata = {
  title: 'Blog Imelda Salon - Tips Kecantikan & Makeup Tarutung',
  description:
    'Baca tips hairdo pengantin, makeup wisuda, harga MUA, dan tren rambut terbaru di Tarutung bersama Imelda Salon.',
}

const articles = [
  {
    title: 'Tips Hairdo Pengantin Agar Tahan Seharian',
    slug: '/blog/tips-hairdo-pengantin',
    image: '/rambut/rambut (1).jpeg',
    excerpt: 'Rahasia tatanan rambut pengantin yang tetap elegan dan kokoh dari akad sampai resepsi selesai.',
    category: 'Hairdo',
    readTime: '5 menit',
    date: '15 Jan 2024',
  },
  {
    title: 'Panduan Memilih MUA Pengantin di Tarutung',
    slug: '/blog/harga-mua-tarutung',
    image: '/album/Pengantin.jpg',
    excerpt: 'Jangan salah pilih! Poin penting saat memilih makeup artist untuk hari bahagiamu, lengkap dengan kisaran harga.',
    category: 'Makeup',
    readTime: '4 menit',
    date: '10 Jan 2024',
  },
  {
    title: 'Inspirasi Makeup Wisuda: Natural vs Glam',
    slug: '/blog/inspirasi-makeup-wisuda',
    image: '/wisuda/wisudamakeup.webp',
    excerpt: 'Bingung memilih gaya makeup untuk wisuda? Simak perbandingan gaya natural dan glamour di sini.',
    category: 'Makeup',
    readTime: '6 menit',
    date: '5 Jan 2024',
  },
  {
    title: 'Model Rambut Wanita Trend 2026',
    slug: '/blog/model-rambut-trend-2026',
    image: '/poster/foto/haircare.jpg',
    excerpt: 'Dari short bob modern sampai butterfly cut, inspirasi potongan rambut yang sedang tren tahun ini.',
    category: 'Hair',
    readTime: '7 menit',
    date: '1 Jan 2024',
  },
]

export default function BlogPage() {
  const [featured, ...rest] = articles

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <PromoMarquee items={['Tips cantik dari Imelda Salon', 'Inspirasi makeup, hairdo & nail art', 'Konsultasi gratis via WhatsApp', 'Ayo datang & tampil cantik untuk dirimu sendiri']} />

      {/* Hero */}
      <section className="relative px-6 pt-14 pb-12 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#f4d9da_1.2px,transparent_1.4px)] [background-size:36px_36px]" />
        <Sprig className="pointer-events-none absolute left-0 top-4 w-28 md:w-44" />
        <Sprig className="pointer-events-none absolute right-0 top-4 w-28 md:w-44 -scale-x-100" />
        <div className="relative space-y-3 animate-fade-up-soft">
          <Bow className="mx-auto w-24" />
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#f4d9da]">Beauty Journal</p>
          <h1 className="font-script text-6xl md:text-8xl text-accent leading-tight">Jurnal Kecantikan</h1>
          <Divider />
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed pt-2">
            Tips perawatan, inspirasi look, dan tren kecantikan terbaru dari Imelda Salon Tarutung.
          </p>
        </div>
      </section>

      {/* Artikel utama */}
      <section className="px-6 pb-16">
        <Link
          href={featured.slug}
          className="group relative mx-auto grid max-w-6xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#fbe9ea] via-[#f4d9da] to-[#efc9cc] text-[#5a1120] ring-2 ring-accent shadow-2xl shadow-black/40 md:grid-cols-2"
        >
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <span className="absolute top-5 left-5 rounded-full bg-[#5a1120] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f4d9da] ring-1 ring-accent">Artikel Pilihan ♥</span>
          </div>
          <div className="relative flex flex-col justify-center gap-4 p-8 md:p-12">
            <Sprig className="pointer-events-none absolute -right-8 -bottom-8 w-36 opacity-70" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9a6b1e]">
              {featured.category} · {featured.date} · {featured.readTime}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">{featured.title}</h2>
            <p className="text-[#6b2a37] leading-relaxed">{featured.excerpt}</p>
            <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#5a1120] px-7 py-3 text-sm font-bold text-[#faf4eb] transition duration-300 group-hover:scale-105">
              Baca Selengkapnya <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* Artikel lainnya */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Baca Juga" title="Artikel Terbaru" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {rest.map((a, i) => (
              <Link key={a.slug} href={a.slug} className={`group block ${i === 1 ? 'md:mt-10' : ''}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2rem] ring-4 ring-[#f4d9da]/80 shadow-2xl shadow-black/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.image} alt={a.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#f4d9da] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5a1120] ring-1 ring-accent">
                    {a.category}
                  </span>
                </div>
                <div className="mt-6 space-y-2 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">{a.date} · {a.readTime}</p>
                  <h3 className="font-serif text-xl font-bold leading-snug transition-colors group-hover:text-accent">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                    Baca <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA konsultasi (menggantikan form newsletter yang tidak terhubung ke mana pun) */}
      <section className="px-6 pb-28">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] bg-card p-10 md:p-14 text-center ring-1 ring-accent/50 shadow-2xl shadow-black/40">
          <Sprig className="pointer-events-none absolute -left-6 -bottom-6 w-36 opacity-80" />
          <Sprig className="pointer-events-none absolute -right-6 -top-6 w-36 rotate-180 opacity-80" />
          <Bow className="relative mx-auto w-20" />
          <h2 className="relative mt-4 font-serif text-3xl md:text-4xl font-bold">Masih bingung pilih look?</h2>
          <p className="relative font-script text-5xl text-accent">tanya langsung ke Melda</p>
          <a
            href={`https://wa.me/6282285310686?text=${encodeURIComponent('Halo Imelda Salon, saya ingin konsultasi look.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 font-bold text-accent-foreground transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_#c5a14a80]"
          >
            <MessageCircle className="h-5 w-5" /> Konsultasi Gratis
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
