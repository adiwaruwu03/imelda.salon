'use client'

import Image from 'next/image'

export function About() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group max-w-lg mx-auto lg:mx-0 w-full fade-up">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[10rem] rounded-b-[2.5rem] border border-accent" />
            <div className="relative aspect-[4/5] rounded-t-[10rem] rounded-b-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20">
              <Image 
                src="/album/Pengantin2.jpg" 
                alt="Imelda Salon Experience" 
                fill 
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-accent p-6 md:p-8 rounded-[2rem] shadow-xl shadow-primary/30 hidden md:block">
              <div className="text-4xl font-serif font-bold">5+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/80">Tahun <br />Pengalaman</div>
            </div>
          </div>

          <div className="space-y-8 slide-in-right">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Tentang Kami</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Mewujudkan <br />
                <span className="text-accent italic">Kecantikan Sejati</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Imelda Salon lahir dari kecintaan kami pada seni kecantikan. Kami percaya bahwa setiap orang berhak merasa percaya diri dan memesona. Dengan tim profesional dan produk berkualitas premium, kami berkomitmen memberikan transformasi yang tidak hanya memukau di luar, tapi juga memberi kenyamanan dari dalam.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2 border-l-2 border-accent pl-4">
                <span className="block font-serif text-3xl text-accent">01</span>
                <h4 className="font-bold text-foreground">Layanan Profesional</h4>
                <p className="text-sm text-muted-foreground">Didukung oleh tenaga ahli bersertifikat dan berpengalaman.</p>
              </div>
              <div className="space-y-2 border-l-2 border-accent pl-4">
                <span className="block font-serif text-3xl text-accent">02</span>
                <h4 className="font-bold text-foreground">Produk Eksklusif</h4>
                <p className="text-sm text-muted-foreground">Hanya menggunakan brand kecantikan ternama dan aman.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
