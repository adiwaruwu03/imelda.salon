import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const treatments = ['Hair Spa', 'Bridal Makeup', 'Nail Art', 'Facial Glow', 'Creambath', 'Hairdo Wedding', 'Makeup Wisuda']

const services = [
  { title: 'MUA Pengantin', desc: 'Riasan bridal mewah dan tahan lama untuk hari paling berharga Anda.', href: '/layanan/mua-pengantin-tarutung', img: '/album/Pengantin.jpg', featured: true },
  { title: 'Hairdo Wedding', desc: 'Sanggul dan styling elegan yang serasi dengan busana.', href: '/layanan/hairdo-wedding-tarutung', img: '/rambut/rambut (3).jpeg', pos: 'object-[center_35%]' },
  { title: 'Makeup Wisuda', desc: 'Tampil segar dan natural di momen kelulusan.', href: '/layanan/makeup-wisuda-tarutung', img: '/wisuda/wisudamakeup.webp' },
  { title: 'Potong & Styling', desc: 'Potongan modern sesuai bentuk wajah Anda.', href: '/layanan/potong-styling-rambut-tarutung', img: '/potong/Butterfly Cut.jpg', pos: 'object-top' },
]

export function SignatureServices() {
  return (
    <>
      {/* Marquee */}
      <div className="bg-deep text-accent py-4 overflow-hidden border-y border-accent/30">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} aria-hidden={k === 1} className="flex shrink-0">
              {treatments.map((x) => (
                <span key={x} className="font-serif italic text-lg md:text-xl px-6 whitespace-nowrap">
                  {x} <span className="pl-6 not-italic text-accent/60">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bento layanan */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Signature Services</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
              Layanan <span className="text-primary italic">Unggulan</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-5 md:h-[640px]">
            {services.map((s, i) => (
              <div key={s.href} className={`fade-up ${s.featured ? 'md:row-span-2' : ''} ${i === 3 ? 'md:col-span-2' : ''}`}>
                <Link
                  href={s.href}
                  className={`group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[2rem] transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/20 ${
                    s.featured ? 'bg-primary text-primary-foreground' : 'bg-card border border-accent/40'
                  }`}
                >
                  <div className={`relative overflow-hidden ${s.featured ? 'flex-1' : 'h-44 md:flex-1'}`}>
                    <Image src={s.img} alt={s.title} fill sizes="(min-width:768px) 33vw, 100vw" className={`object-cover ${s.pos ?? ''} transition-transform duration-700 ease-out group-hover:scale-105`} />
                    {s.featured && (
                      <span className="absolute top-4 left-4 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Best Seller</span>
                    )}
                  </div>
                  <div className="p-6 flex items-end justify-between gap-4">
                    <div>
                      <h3 className={`font-serif text-2xl font-bold ${s.featured ? 'text-accent' : 'text-primary'}`}>{s.title}</h3>
                      <p className={`text-sm mt-1 ${s.featured ? 'text-primary-foreground/75' : 'text-muted-foreground'}`}>{s.desc}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
