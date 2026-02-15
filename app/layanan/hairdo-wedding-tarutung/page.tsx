import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

/* ================= SEO META ================= */

export const metadata = {
  title: "Hairdo Wedding Tarutung — Jasa Hairdo Pengantin Terbaik",
  description:
    "Layanan hairdo wedding di Tarutung untuk pengantin, bridesmaid, dan pesta. Ditangani hair stylist profesional dengan hasil elegan & tahan lama.",
  keywords: [
    "Hairdo Wedding Tarutung",
    "Hairdo Pengantin Tarutung",
    "Jasa Hairdo Tarutung",
    "Hairdo Bridesmaid Tarutung",
    "Salon Wedding Tarutung",
  ],
}

/* ================= PAGE ================= */

export default function HairdoWeddingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-secondary/30 py-24 sm:py-32">
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

{/* Wedding Decoration Pattern Image */}
<div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">

  <img
    src="/rambut/rambut (4).jpeg"
    alt="Wedding Ring Decoration"
    className="absolute top-10 left-10 w-16 h-16 object-contain"
  />

  <img
    src="/rambut/rambut (2).jpeg"
    alt="Bride Decoration"
    className="absolute bottom-10 right-10 w-20 h-20 object-contain"
  />

  <img
    src="/rambut/rambut (1).jpeg"
    alt="Sparkle Decoration"
    className="absolute top-20 right-20 w-12 h-12 object-contain"
  />

  <img
    src="/rambut/rambut (3).jpeg"
    alt="Flower Decoration"
    className="absolute bottom-20 left-20 w-14 h-14 object-contain"
  />

</div>


        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            {/* Wedding Badge */}
            <div className="inline-flex items-center justify-center">
              <span className="rounded-full bg-gradient-to-r from-primary/90 to-primary/80 px-4 py-1.5 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
                ✨ Wedding Hair Specialist
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Hairdo Wedding
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Tarutung
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Layanan hairdo pengantin, bridesmaid, dan pesta
              dengan styling elegan, modern, dan tahan lama.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all"
                >
                  <span className="mr-2">💇‍♀️</span>
                  Booking Hairdo Sekarang
                </Button>
              </Link>
              <Link href="#jenis-hairdo" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-2 hover:bg-secondary/50 transition-all"
                >
                  Lihat Jenis Hairdo
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-12 text-sm text-muted-foreground border-t border-border/50">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>50+ Wedding</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Stylist Berpengalaman</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Tahan Lama 12 Jam</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Home Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESKRIPSI SECTION ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="text-lg">👰</span>
                Wedding Hair Expert
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Jasa Hairdo Wedding Terbaik 
                <span className="block text-primary mt-2">di Tarutung</span>
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Kami menyediakan layanan hairdo wedding profesional
                  di Tarutung untuk berbagai kebutuhan acara seperti
                  pernikahan, lamaran, pesta, dan wisuda.
                </p>

                <p className="text-muted-foreground/90">
                  Ditangani langsung oleh hair stylist berpengalaman,
                  setiap tatanan rambut disesuaikan dengan bentuk wajah,
                  tema acara, serta busana pengantin.
                </p>
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  "Stylist Wedding",
                  "Tahan Lama",
                  "Home Service",
                  "Produk Premium",
                  "Konsultasi Gratis",
                  "Harga Terjangkau"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            
                        {/* Right Content - Image Grid */}
            <div className="grid grid-cols-2 gap-4">

              {/* Kolom Kiri */}
              <div className="space-y-4">

                {/* Foto 1 */}
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/rambut/rambut (1).jpeg"
                    alt="Potong Rambut Imelda Salon"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Foto 2 */}
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/rambut/rambut (2).jpeg"
                    alt="MUA Pengantin Imelda Salon"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>

              {/* Kolom Kanan */}
              <div className="pt-8">

                {/* Foto 3 */}
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/rambut/rambut (3).jpeg"
                    alt="Wedding Hairdo Imelda Salon"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

{/* ================= JENIS HAIRDO SECTION ================= */}
<section
  id="jenis-hairdo"
  className="py-20 sm:py-24 bg-gradient-to-b from-secondary/30 via-secondary/20 to-background relative overflow-hidden"
>
  {/* Background Decoration */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent" />
  </div>

  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center space-y-4 mb-12">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <span>💕</span>
        Pilihan Lengkap
      </span>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Jenis Hairdo Wedding
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Tampil memukau di hari spesial dengan berbagai pilihan tatanan rambut
      </p>
    </div>


    {/* Card Grid */}
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
      {[
        {
          icon: "👰‍♀️",
          title: "Hairdo Pengantin",
          desc: "Tatanan rambut elegan untuk hari pernikahan.",
          price: "Mulai Rp 800.000",
          features: ["Tahan lama", "Aksesoris", "Trial session"],
          popular: true,
          text: "Halo Imelda Salon, saya mau konsultasi Hairdo Pengantin"
        },
        {
          icon: "👯‍♀️",
          title: "Hairdo Bridesmaid",
          desc: "Styling rambut serasi untuk pendamping pengantin.",
          price: "Mulai Rp 250.000",
          features: ["Serasi", "Natural", "Cepat"],
          popular: false,
          text: "Halo Imelda Salon, saya mau konsultasi Hairdo Bridesmaid"
        },
        {
          icon: "✨",
          title: "Hairdo Pesta",
          desc: "Hair styling glamor untuk acara formal & pesta.",
          price: "Mulai Rp 200.000",
          features: ["Glamor", "Modern", "Elegant"],
          popular: false,
          text: "Halo Imelda Salon, saya mau konsultasi Hairdo Pesta"
        },
      ].map((item, i) => (

        <div
          key={i}
          className={`
            group relative rounded-2xl bg-white p-8 shadow-lg
            hover:-translate-y-2 hover:shadow-xl transition-all duration-300
            ${item.popular ? 'ring-2 ring-primary' : 'border border-border/60'}
          `}
        >

          {/* Popular Badge */}
          {item.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-4 py-1.5 text-xs font-semibold text-white shadow-lg whitespace-nowrap">
              ⭐ Paling Diminati
            </span>
          )}

          {/* Icon */}
          <div className="mb-4 text-5xl">{item.icon}</div>

          <h3 className="font-semibold text-xl mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {item.desc}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {item.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Price + Button */}
          <div className="pt-4 border-t border-border/50 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Harga</p>
              <p className="text-2xl font-bold text-primary">
                {item.price}
              </p>
            </div>

            {/* BUTTON WA */}
            <a
              href={`https://wa.me/6282285310686?text=${encodeURIComponent(item.text)}`}
              target="_blank"
              className="block w-full text-center rounded-xl bg-primary text-white py-2.5 font-medium hover:bg-primary/90 transition"
            >
              Konsultasi via WhatsApp
            </a>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>


      {/* ================= KEUNGGULAN SECTION ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              ✨ Why Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Kenapa Pilih Hairdo di Imelda Salon?
            </h2>
            <p className="text-lg text-muted-foreground">
              Pengalaman terbaik untuk hari spesial Anda
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💇‍♀️",
                title: "Stylist Wedding Berpengalaman",
                desc: "Ditangani oleh stylist khusus wedding dengan pengalaman 5+ tahun",
                color: "from-blue-500/20 to-indigo-500/20"
              },
              {
                icon: "⏰",
                title: "Tahan Lama Hingga Acara Selesai",
                desc: "Tahan hingga 12+ jam, tetap rapi dari akad hingga resepsi",
                color: "from-green-500/20 to-emerald-500/20"
              },
              {
                icon: "👤",
                title: "Disesuaikan Bentuk Wajah",
                desc: "Setiap tatanan dibuat custom sesuai karakter dan busana",
                color: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: "💎",
                title: "Produk Rambut Premium",
                desc: "Menggunakan produk berkualitas internasional yang aman",
                color: "from-yellow-500/20 to-amber-500/20"
              },
              {
                icon: "🏠",
                title: "Bisa Home Service",
                desc: "Layanan ke rumah untuk kenyamanan ekstra di hari H",
                color: "from-red-500/20 to-rose-500/20"
              },
              {
                icon: "💰",
                title: "Harga Terjangkau",
                desc: "Kualitas premium dengan harga yang bersahabat",
                color: "from-indigo-500/20 to-blue-500/20"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-border/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <span className="mb-4 inline-block text-3xl">{item.icon}</span>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-foreground transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              📋 Proses
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cara Booking Hairdo
            </h2>
            <p className="text-lg text-muted-foreground">
              4 langkah mudah untuk mendapatkan tatanan rambut impian
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Konsultasi", desc: "Diskusikan gaya rambut yang diinginkan", icon: "💭" },
              { step: "2", title: "Booking Jadwal", desc: "Pilih tanggal dan waktu", icon: "📅" },
              { step: "3", title: "Trial Session", desc: "Coba tatanan sebelum hari H", icon: "✨" },
              { step: "4", title: "Hairdo Wedding", desc: "Tampil cantik di hari spesial", icon: "👰" }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-border/50 text-center group hover:-translate-y-1">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <span className="text-4xl mb-3 inline-block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-2xl text-muted-foreground/30">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONI PREVIEW ================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              💬 Testimoni
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Kata Mereka Tentang Hairdo Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah, Tarutung",
                text: "Hairdo pengantinnya tahan lama dari pagi sampai selesai resepsi. Stylish banget!",
                rating: 5
              },
              {
                name: "Linda, Sibolga",
                text: "Stylistnya ramah dan ngerti banget sama yang saya mau. Hasilnya elegan.",
                rating: 5
              },
              {
                name: "Putri, Tarutung",
                text: "Home servicenya sangat membantu. Datang tepat waktu dan hasilnya rapi.",
                rating: 5
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all border border-border/50"
              >
                <div className="absolute top-4 right-4 text-6xl opacity-5">"</div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(item.rating)].map((_, idx) => (
                    <svg key={idx} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 relative z-10">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white font-medium">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-muted-foreground">Pengantin</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary to-primary/90 py-20 sm:py-24">
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-foreground/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-foreground/20 via-transparent to-transparent" />
        </div>
        
        {/* Wedding Decoration */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-10 left-10 text-8xl text-white">👰</div>
          <div className="absolute bottom-10 right-10 text-8xl text-white">💍</div>
          <div className="absolute top-1/2 left-1/4 text-6xl text-white">✨</div>
          <div className="absolute bottom-1/2 right-1/4 text-6xl text-white">🌸</div>
        </div>
        
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/10 text-white backdrop-blur-sm ring-4 ring-white/20">
              <span className="text-4xl">💇‍♀️</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Booking Hairdo Wedding Sekarang
            </h2>

            <p className="text-lg text-white/90 max-w-xl mx-auto">
              Jadwalkan hairdo terbaik Anda bersama tim profesional kami.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all"
                >
                  Hubungi Kami
                </Button>
              </Link>
              <Link href="/price" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white transition-all"
                >
                  Lihat Pricelist
                </Button>
              </Link>
            </div>

            {/* Wedding Guarantee */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Free Konsultasi</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Respon Cepat</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Harga Terjangkau</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Imelda Salon",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tarutung",
              addressCountry: "ID",
            },
            service: {
              "@type": "Service",
              name: "Hairdo Wedding Tarutung",
              description:
                "Layanan hairdo pengantin, bridesmaid, dan pesta di Tarutung.",
            },
          }),
        }}
      />
    </main>
  )
}