import Image from 'next/image'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  ArrowLeft,
  Sparkles,
  CheckCircle,
  Camera,
  Home,
  GraduationCap,
  Heart,
  Star,
  MessageCircle,
  Phone,
  MapPin
} from 'lucide-react'

export const metadata = {
  title: 'Inspirasi Makeup Wisuda Natural & Elegan | Imelda Salon Tarutung',
  description:
    'Inspirasi makeup wisuda natural dan elegan di Tarutung. Bisa panggilan ke rumah, tahan lama untuk foto & acara kampus.',
}

const features = [
  {
    icon: Sparkles,
    title: 'Foundation Ringan',
    description: 'Coverage bagus tapi tetap terasa ringan di wajah'
  },
  {
    icon: Sparkles,
    title: 'Soft Glam Eye',
    description: 'Eye makeup elegan tidak berlebihan'
  },
  {
    icon: Sparkles,
    title: 'Bulu Mata Natural',
    description: 'Lentik natural untuk tampilan fresh'
  },
  {
    icon: Sparkles,
    title: 'Lipstik Nude/Pink',
    description: 'Warna-warna lembut yang elegan'
  },
  {
    icon: Sparkles,
    title: 'Highlight Lembut',
    description: 'Glowing natural di kamera'
  }
]

const serviceLocations = [
  'Wisuda kampus',
  'Foto studio',
  'Foto keluarga',
  'Acara syukuran'
]

const testimonials = [
  {
    name: 'Sarah Wijaya',
    comment: 'Makeupnya tahan seharian dari acara wisuda sampai foto keluarga. Hasilnya natural banget!',
    rating: 5
  },
  {
    name: 'Putri Siregar',
    comment: 'Pelayanannya profesional, datang tepat waktu, makeupnya sesuai request. Recommended!',
    rating: 5
  }
]

export default function Page() {
  return (
    <main className="bg-background">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Makeup Wisuda</span>
        </nav>
      </div>

      {/* HERO SECTION - REDESIGNED */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-background py-16 md:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime="2024-01-05">5 Jan 2024</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>6 menit membaca</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Tim Imelda</span>
            </div>
          </div>
          
          {/* Judul */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Inspirasi Makeup Wisuda <br />Natural & Elegan
        </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rekomendasi makeup wisuda tahan lama dan cocok untuk sesi foto, 
            dengan layanan panggilan ke rumah di Tarutung.
          </p>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto">
            <path fill="var(--background)" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"></path>
          </svg>
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 leading-relaxed">
        

        {/* TREND SECTION */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-lg">
              ✨
            </span>
            Makeup Wisuda Natural Lagi Tren
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Tahun 2026 ini, tren makeup wisuda semakin mengarah ke tampilan yang 
                fresh, natural, dan tetap photogenic. Para wisudawati ingin terlihat 
                seperti diri sendiri namun dengan versi yang lebih glowing dan flawless.
              </p>
              <p className="text-muted-foreground">
                Kuncinya ada pada skin preparation yang baik dan pemilihan produk 
                yang ringan namun tahan lama. Hasilnya adalah makeup yang nyaman 
                dipakai seharian dari acara wisuda hingga sesi foto keluarga.
              </p>
            </div>
            
            {/* Image dengan desain lebih menarik */}
            <div className="relative group">
              <div className="relative h-[250px] w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/wisuda/wisudamakeup.webp"
                  alt="Inspirasi Makeup Wisuda Natural"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Intro dengan highlight */}
        <div className="bg-gradient-to-r from-secondary/20 to-transparent p-6 rounded-xl mb-10 border-l-4 border-primary">
          <p className="text-foreground leading-relaxed">
            Makeup wisuda natural menjadi pilihan favorit karena memberikan
            kesan segar, elegan, dan tetap terlihat seperti diri sendiri.
            Look ini sangat cocok untuk sesi foto close-up maupun foto bersama keluarga.
          </p>
        </div>
        </section>

        {/* CIRI MAKEUP ELEGAN */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-lg">
              💄
            </span>
            Ciri Makeup Wisuda Elegan
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="p-5 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* LAYANAN PANGGILAN */}
        <section className="mb-12 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
          <div className="relative p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Home className="w-4 h-4" />
                  <span>Layanan Home Service</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Bisa Panggilan ke Rumah 🎓
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  Buat kamu yang tidak sempat datang ke salon, 
                  <span className="font-semibold text-primary"> makeup wisuda bisa panggilan langsung ke rumah.</span>
                  Tim Imelda Salon siap datang ke lokasi kamu di Tarutung dan sekitarnya.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  Layanan ini cocok untuk:
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {serviceLocations.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">0822-8531-0686</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Tarutung & Garoga</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="relative bg-black from-primary to-accent w-48 h-48 rounded-2xl flex items-center justify-center text-white text-6xl shadow-xl">
                    <Home className="w-24 h-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-lg">
              💬
            </span>
            Kata Mereka yang Sudah Makeup Wisuda
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.comment}&quot;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-foreground">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        

        {/* CTA BOX - REDESIGNED */}
        <div className="relative overflow-hidden rounded-2xl mb-12">
          <div className="relative p-8 md:p-10 text-center text-white">
            <Heart className="w-12 h-12 mx-auto mb-4 text-black/80" />
            
            <h3 className="text-2xl md:text-3xl text-black font-bold mb-3">
              Booking Makeup Wisuda Sekarang
            </h3>

            <p className="text-black/90 mb-6 max-w-xl mx-auto">
              Tersedia paket hemat + bisa panggilan ke rumah. 
              Dapatkan free konsultasi untuk look makeup impian Anda!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/layanan/makeup-wisuda-tarutung"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Lihat Detail Layanan
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/6282285310686"
                target="_blank"
                 className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Booking via WhatsApp
              </a>
            </div>
            
            <p className="text-sm text-white/80">
              *Gratis konsultasi & tanpa biaya tambahan untuk area Tarutung
            </p>
          </div>
        </div>

        {/* ARTIKEL TERKAIT */}
        <div className="mt-12 p-6 bg-card rounded-xl border border-border">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary/10 text-primary rounded flex items-center justify-center text-sm">
              📖
            </span>
            Baca Juga:
          </h3>
          <ul className="space-y-3">
            <li>
              <Link 
                href="/blog/tips-hairdo-pengantin"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                <span>Tips Hairdo Pengantin Agar Tahan Seharian</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/blog/harga-mua-tarutung"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                <span>Harga MUA Pengantin Tarutung Terbaru</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* BACK TO BLOG */}
        <div className="text-center pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Blog
          </Link>
        </div>
      </article>
    </main>
  )
}