// Template halaman detail layanan (feminin & eksklusif). Tiap /layanan/<slug>/page.tsx
// hanya mengisi data ServiceDetail lalu merender <ServiceDetailPage data={...} />.
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Bow, Sprig, Divider, SectionTitle } from '@/components/ornaments'
import { PromoMarquee } from '@/components/promo-marquee'
import { ArrowRight, MessageCircle, FileImage, Star } from 'lucide-react'

const WHATSAPP = '6282285310686'
const wa = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

export type Package = {
  name: string
  price?: string // "500K", "1,5JT"; kosong = tanya harga
  note?: string // label kecil kanan atas
  items?: string[] // isi paket (chip)
  rows?: [string, string][] // atau daftar harga baris
  featured?: boolean
  tag?: string
}

export type ServiceDetail = {
  name: string // untuk pesan WA & schema
  title: string
  script: string
  description: string
  heroImage: string
  heroPos?: string
  from?: string
  highlights: string[]
  packages: Package[]
  packagesNote?: string
  features: { title: string; text: string }[]
  gallery: string[]
  poster?: string
  testimonials?: { name: string; text: string }[]
  promo?: string[] // teks berjalan di bawah navbar
}

const steps = [
  { title: 'Konsultasi', text: 'Ceritakan look impianmu lewat WhatsApp.' },
  { title: 'Pilih Jadwal', text: 'Tentukan tanggal dan jam yang pas.' },
  { title: 'Perawatan', text: 'Dikerjakan langsung oleh Melda dengan telaten.' },
  { title: 'Tampil Cantik', text: 'Siap memukau di hari spesialmu.' },
]

export function ServiceDetailPage({ data: d }: { data: ServiceDetail }) {
  const booking = (paket?: string) =>
    wa(`Halo Imelda Salon, saya ingin booking ${d.name}${paket ? `.\n\nPaket: ${paket}` : '.'}\nTanggal:\nJam:\n\nTerima kasih 🙏`)

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <PromoMarquee
        items={d.promo ?? [
          `${d.name} mulai ${d.from ?? 'harga terjangkau'}`,
          'Konsultasi gratis via WhatsApp 0822-8531-0686',
          'Ayo datang & tampil cantik untuk dirimu sendiri',
          'Hutagurgur, Garoga · Tarutung',
        ]}
      />

      {/* ================= HERO ================= */}
      <section className="relative pt-14 pb-20 px-6">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#f4d9da_1.2px,transparent_1.4px)] [background-size:36px_36px]" />
        <Sprig className="pointer-events-none absolute left-0 top-20 w-28 md:w-44" />
        <Sprig className="pointer-events-none absolute right-0 bottom-0 w-28 md:w-44 rotate-180" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="text-center md:text-left space-y-5 animate-fade-up-soft">
            <Bow className="w-24 mx-auto md:mx-0" />
            <nav className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f4d9da]/80">
              <Link href="/layanan" className="hover:text-accent">Layanan</Link> <span className="text-accent">♥</span> Tarutung
            </nav>
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">{d.title}</h1>
              <p className="font-script text-5xl md:text-6xl text-accent leading-tight">{d.script}</p>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">{d.description}</p>
            <ul className="flex flex-wrap justify-center md:justify-start gap-2">
              {d.highlights.map((h) => (
                <li key={h} className="rounded-full px-4 py-1.5 text-xs font-semibold ring-1 ring-accent/40 text-[#f4d9da]">
                  <span className="text-[#d98e9a]">✿</span> {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <a href={booking()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_#c5a14a80]">
                <MessageCircle className="h-4 w-4" /> Booking via WhatsApp
              </a>
              <a href="#paket" className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold ring-1 ring-accent/60 text-accent transition hover:bg-accent/10">
                Lihat Paket <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-full rounded-b-[3rem] border border-accent" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[3rem] ring-4 ring-[#f4d9da]/80 shadow-2xl shadow-black/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.heroImage} alt={`${d.name} Imelda Salon Tarutung`} className="h-full w-full object-cover" style={{ objectPosition: d.heroPos ?? 'center' }} />
            </div>
            {d.from && (
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#f4d9da] px-6 py-2.5 shadow-xl ring-1 ring-accent">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b2a37]">Mulai </span>
                <span className="font-serif text-2xl font-bold text-[#5a1120]">{d.from}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= PAKET ================= */}
      <section id="paket" className="scroll-mt-28 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Price List" title="Pilihan Paket" />
          <div className={`mt-12 grid gap-6 ${d.packages.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : d.packages.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-4xl mx-auto'}`}>
            {d.packages.map((p) => (
              <div key={p.name}
                className={`relative flex flex-col rounded-[2.5rem] p-8 transition duration-300 hover:-translate-y-1.5 ${
                  p.featured
                    ? 'bg-gradient-to-br from-[#fbe9ea] via-[#f4d9da] to-[#efc9cc] text-[#5a1120] ring-2 ring-accent shadow-2xl shadow-black/40 md:-translate-y-3'
                    : 'bg-card ring-1 ring-accent/40'
                }`}>
                {p.tag && (
                  <span className="absolute -top-3.5 right-8 rounded-full bg-[#5a1120] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f4d9da] ring-1 ring-accent">{p.tag}</span>
                )}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl font-bold"><span className={p.featured ? 'text-[#b8566a]' : 'text-[#d98e9a]'}>✿</span> {p.name}</h3>
                  {p.note && <span className={`pt-2 text-[10px] font-bold uppercase tracking-[0.25em] ${p.featured ? 'text-[#9a6b1e]' : 'text-accent'}`}>{p.note}</span>}
                </div>
                {p.price && (
                  <p className="mt-3">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${p.featured ? 'text-[#6b2a37]' : 'text-muted-foreground'}`}>Mulai </span>
                    <span className={`font-serif text-4xl font-bold ${p.featured ? 'text-[#5a1120]' : 'text-accent'}`}>{p.price}</span>
                  </p>
                )}
                {p.rows && (
                  <ul className="mt-4 space-y-2.5">
                    {p.rows.map(([l, v]) => (
                      <li key={l} className="flex items-baseline gap-3">
                        <span className={p.featured ? 'text-[#6b2a37]' : 'text-muted-foreground'}>{l}</span>
                        <span className="flex-1 border-b border-dotted border-current opacity-30" />
                        <span className={`font-serif text-xl font-bold ${p.featured ? 'text-[#5a1120]' : 'text-accent'}`}>{v}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {p.items && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.items.map((it) => (
                      <li key={it} className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${p.featured ? 'bg-white/60 ring-1 ring-[#5a1120]/20 text-[#6b2a37]' : 'ring-1 ring-accent/40 text-muted-foreground'}`}>{it}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-7">
                  <a href={booking(p.name)} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition duration-300 hover:scale-[1.02] ${
                      p.featured ? 'bg-[#5a1120] text-[#faf4eb]' : 'ring-1 ring-accent text-accent hover:bg-accent hover:text-accent-foreground'
                    }`}>
                    <MessageCircle className="h-4 w-4" /> {p.price || p.rows ? 'Pesan Paket' : 'Tanya Harga'}
                  </a>
                </div>
              </div>
            ))}
          </div>
          {d.packagesNote && <p className="mt-8 text-center text-sm text-muted-foreground"><span className="text-accent">✿</span> {d.packagesNote}</p>}
        </div>
      </section>

      {/* ================= KENAPA ================= */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Kenapa Imelda" title="Sentuhan Istimewa" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {d.features.map((f, i) => (
              <div key={f.title} className="rounded-[2rem] bg-card p-7 ring-1 ring-accent/30 transition duration-300 hover:ring-accent">
                <span className="font-script text-5xl text-accent leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-serif text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALERI ================= */}
      {d.gallery.length > 0 && (
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <SectionTitle kicker="Galeri" title="Hasil Karya" />
            <div className="mt-12 columns-2 md:columns-3 gap-4 [&>*]:mb-4">
              {d.gallery.map((src, i) => (
                <div key={src} className={`overflow-hidden ring-1 ring-accent/40 shadow-xl shadow-black/30 group ${i % 3 === 0 ? 'rounded-t-full rounded-b-[2rem]' : 'rounded-[2rem]'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${d.name} Imelda Salon`} loading="lazy" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PROSES ================= */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionTitle kicker="Cara Booking" title="Mudah & Nyaman" />
          <ol className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f4d9da] ring-4 ring-background shadow-[0_0_0_5px_#c5a14a66]">
                  <span className="font-script text-4xl text-[#5a1120]">{i + 1}</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= TESTIMONI ================= */}
      {d.testimonials && (
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <SectionTitle kicker="Testimoni" title="Kata Mereka" />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {d.testimonials.map((t, i) => (
                <figure key={t.name} className={`relative rounded-[2rem] p-8 ${i === 1 ? 'bg-gradient-to-br from-[#fbe9ea] to-[#efc9cc] text-[#5a1120] ring-2 ring-accent md:mt-8' : 'bg-card ring-1 ring-accent/40'}`}>
                  <span aria-hidden className="absolute -top-4 right-5 font-serif text-8xl leading-none opacity-20">&rdquo;</span>
                  <div className="flex gap-1">{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-accent text-accent" />)}</div>
                  <blockquote className={`mt-4 italic leading-relaxed ${i === 1 ? 'text-[#6b2a37]' : 'text-muted-foreground'}`}>&ldquo;{t.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 font-serif font-bold">{t.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= POSTER + CTA ================= */}
      <section className="px-6 pt-10 pb-28">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#fbe9ea] via-[#f4d9da] to-[#efc9cc] p-10 md:p-14 text-[#5a1120] ring-2 ring-accent shadow-2xl shadow-black/40">
          <Sprig className="pointer-events-none absolute -left-6 -bottom-6 w-40 opacity-80" />
          <Sprig className="pointer-events-none absolute -right-6 -top-6 w-40 opacity-80 rotate-180" />
          <div className={`relative grid gap-10 items-center ${d.poster ? 'md:grid-cols-[1fr_260px]' : ''}`}>
            <div className={`text-center ${d.poster ? 'md:text-left' : ''}`}>
              <Bow className={`w-20 mx-auto ${d.poster ? 'md:mx-0' : ''}`} />
              <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold leading-tight">Siap tampil cantik?</h2>
              <p className="font-script text-5xl text-[#b8862e]">untuk dirimu sendiri</p>
              <p className="mt-3 text-[#6b2a37]">Hutagurgur, Garoga · Tarutung, Tapanuli Utara</p>
              <div className={`mt-7 flex flex-wrap gap-3 justify-center ${d.poster ? 'md:justify-start' : ''}`}>
                <a href={booking()} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#5a1120] px-8 py-3.5 font-bold text-[#faf4eb] shadow-xl transition duration-300 hover:scale-105">
                  <MessageCircle className="h-5 w-5" /> Booking Sekarang
                </a>
                {d.poster && (
                  <a href={d.poster} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-bold ring-1 ring-[#5a1120]/40 transition hover:bg-white/50">
                    <FileImage className="h-5 w-5" /> Price List
                  </a>
                )}
              </div>
            </div>
            {d.poster && (
              <a href={d.poster} target="_blank" rel="noopener noreferrer" className="mx-auto block w-56 md:w-full rotate-2 transition duration-300 hover:rotate-0 hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.poster} alt={`Price list ${d.name}`} className="w-full rounded-[1.5rem] ring-2 ring-accent shadow-2xl shadow-black/40" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-10"><Divider /></div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BeautySalon',
            name: 'Imelda Salon',
            telephone: '+6282285310686',
            address: { '@type': 'PostalAddress', addressLocality: 'Tarutung', addressRegion: 'Sumatera Utara', addressCountry: 'ID' },
            makesOffer: { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${d.name} Tarutung`, description: d.description } },
          }),
        }}
      />
    </main>
  )
}
