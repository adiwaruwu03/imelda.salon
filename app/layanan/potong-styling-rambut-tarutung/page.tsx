import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PotongRambutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">         
              <span className="block text-primary mt-2">Potong Rambut & Styling Tarutung</span>
            </h1>
            
        {/* DESKRIPSI */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Tampil lebih percaya diri dengan gaya rambut modern
          bersama hair stylist berpengalaman di Imelda Salon.
        </p>
                    {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Stylist Profesional</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
            </div>

          </div>
        </div>
    </section>

      {/* ================= DESKRIPSI SECTION ================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Salon Potong Rambut Terbaik 
                di Tarutung
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Imelda Salon menyediakan layanan potong rambut wanita dan
                  pria dengan teknik modern dan stylist profesional.
                </p>
                <p>
                  Kami membantu Anda menemukan gaya rambut yang sesuai
                  dengan bentuk wajah dan karakter Anda.
                </p>
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Stylist Profesional</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Alat Steril</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Harga Terjangkau</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Tanpa Antri</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <img 
                    src="/potong/cut1.webp" 
                    alt="Hair styling"
                    className="h-full w-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden">
                  <img 
                    src="/potong/cut2.jpg"
                    alt="Hair cut"
                    className="h-full w-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img 
                    src="/potong/cut3.jpeg" 
                    alt="Salon"
                    className="h-full w-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEUNGGULAN SECTION ================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Kenapa Pilih Imelda Salon?
            </h2>
            <p className="text-lg text-muted-foreground">
              Pengalaman terbaik untuk rambut Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "💇‍♀️",
                title: 'Stylist Berpengalaman',
                desc: 'Ditangani hair stylist profesional & ramah.',
                color: 'from-blue-500/20 to-indigo-500/20'
              },
              {
                icon: "✨",
                title: 'Alat Higienis',
                desc: 'Peralatan steril & aman digunakan.',
                color: 'from-green-500/20 to-emerald-500/20'
              },
              {
                icon: "💰",
                title: 'Harga Terjangkau',
                desc: 'Mulai dari Rp 15.000 saja.',
                color: 'from-purple-500/20 to-pink-500/20'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <span className="mb-4 inline-block text-4xl">{item.icon}</span>
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HARGA SECTION ================= */}
      <section id="harga" className="py-20 sm:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Harga Layanan Potong & Styling Rambut
            </h2>
            <p className="text-lg text-muted-foreground">
              Harga terjangkau dengan kualitas premium
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Potong & Styling Rambut",
                price: "Rp 15.000 – 30.000",
                icon: "✂️",
                popular: false
              },
              {
                title: "Smooting / Rebonding",
                price: "Rp 150.000 – 500.000",
                icon: "💆‍♀️",
                popular: true
              },
              {
                title: "Pewarnaan Rambut",
                price: "Rp 50.000 – 100.000",
                icon: "🎨",
                popular: false
              },
              {
                title: "Ombre / Highlight",
                price: "Rp 100.000 – 200.000",
                icon: "✨",
                popular: false
              },
              {
                title: "Creambath & Hair Spa",
                price: "Rp 50.000 – 100.000",
                icon: "🧖‍♀️",
                popular: false
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  group relative rounded-2xl bg-white p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all
                  ${item.popular ? 'ring-2 ring-primary' : 'border border-border'}
                `}
              >
                {item.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white whitespace-nowrap">
                    Paling Laris
                  </span>
                )}
                
                <div className="text-center">
                  <span className="mb-3 inline-block text-3xl">{item.icon}</span>
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-primary bg-primary/5 py-2 px-4 rounded-full inline-block">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= TESTIMONI SECTION ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Testimoni
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Testimoni Client
            </h2>
            <p className="text-lg text-muted-foreground">
              Apa kata mereka tentang pelayanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Rina, Tarutung",
                text: "Potong rambut di sini rapi banget. Stylist nya ramah dan ngerti model yang aku mau. Recommended!",
                rating: 5,
                delay: "0s"
              },
              {
                name: "Maria, Sipoholon",
                text: "Harga murah tapi hasilnya gak murahan. Hair styling nya tahan lama dan bagus.",
                rating: 5,
                delay: "0.1s"
              },
              {
                name: "Dewi, Tarutung",
                text: "Salon terbaik di Tarutung menurutku. Udah langganan dari dulu.",
                rating: 5,
                delay: "0.2s"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl bg-white p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all border border-border/50"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-5 text-6xl">"</div>
                
                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(item.rating)].map((_, idx) => (
                    <svg key={idx} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-4 relative z-10">
                  “{item.text}”
                </p>

                {/* Client Name */}
                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white font-medium text-xs">
                    {item.name.charAt(0)}
                  </div>
                  <h3 className="font-medium text-sm">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="space-y-4 px-4">

          <h2 className="text-3xl font-bold">
            Booking MUA Pengantin Sekarang
          </h2>

          <p>
            Jadwalkan rias pengantin Anda bersama
            Imelda Salon Tarutung.
          </p>

              <Link href="/booking">
                <Button variant="secondary" size="lg">
                  Hubungi Kami
                </Button>
              </Link>

        </div>
      </section>

      <Footer />
    </main>
  )
}