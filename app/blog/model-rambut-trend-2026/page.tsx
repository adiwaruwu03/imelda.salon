import Image from 'next/image'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  ArrowLeft,
  Sparkles,
  Scissors,
  Star,
  Heart,
  MessageCircle,
  Phone,
  MapPin,
  TrendingUp,
  CheckCircle,
  Layers,
  Wand2
} from 'lucide-react'

export const metadata = {
  title: 'Model Rambut Wanita Trend 2026 | Inspirasi Terbaru Imelda Salon',
  description:
    'Inspirasi model rambut wanita trend 2026. Dari rambut pendek, layer, hingga korean style yang sedang populer.',
}

const trends = [
  {
    id: 1,
    title: 'Short Bob Modern',
    description: 'Model bob pendek tetap jadi favorit karena memberikan kesan elegan, dewasa, dan profesional. Cocok untuk kamu yang ingin tampil fresh tanpa ribet styling.',
    image: '/potong/Short Bob Modern.jpg',
    icon: '✂️',
    suitableFor: 'Wajah oval, bulat, dan heart shape',
    maintenance: 'Mudah, potong 4-6 minggu sekali'
  },
  {
    id: 2,
    title: 'Layer Panjang Natural',
    description: 'Rambut layer panjang memberi volume alami dan membuat wajah terlihat lebih tirus. Model ini cocok untuk kamu yang suka tampil feminin dan elegan.',
    image: '/potong/layer panjang Natural.jpg',
    icon: '💇‍♀️',
    suitableFor: 'Semua bentuk wajah, terutama panjang',
    maintenance: 'Sedang, potong 2-3 bulan sekali'
  },
  {
    id: 3,
    title: 'Korean Style Haircut',
    description: 'Terinspirasi dari drama Korea, model ini mengutamakan tekstur ringan, poni tipis, dan efek soft look yang manis.',
    image: '/potong/Korean Style Haircut.jpg',
    icon: '🇰🇷',
    suitableFor: 'Wajah oval dan heart shape',
    maintenance: 'Mudah, styling dengan hair dryer'
  },
  {
    id: 4,
    title: 'Butterfly Cut',
    description: 'Butterfly cut menjadi tren viral karena memberikan efek bervolume seperti sayap kupu-kupu. Cocok untuk rambut panjang yang ingin terlihat lebih hidup.',
    image: '/potong/Butterfly Cut.jpg',
    icon: '🦋',
    suitableFor: 'Rambut panjang, semua bentuk wajah',
    maintenance: 'Sedang, perlu layering rutin'
  }
]

const stylistTips = [
  {
    icon: Star,
    title: 'Sesuaikan dengan Bentuk Wajah',
    description: 'Konsultasi dengan stylist untuk model yang paling cocok'
  },
  {
    icon: Heart,
    title: 'Pertimbangkan Perawatan',
    description: 'Pilih model yang sesuai dengan rutinitas harianmu'
  },
  {
    icon: Sparkles,
    title: 'Gunakan Produk Tepat',
    description: 'Shampoo dan conditioner sesuai jenis rambut'
  },
  {
    icon: Scissors,
    title: 'Rutin Potong Ujung Rambut',
    description: 'Setiap 6-8 minggu untuk menjaga bentuk'
  }
]

export default function Page() {
  return (
    <main className="bg-background text-foreground">
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
          <span className="text-foreground">Trend Rambut 2026</span>
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
              <time dateTime="2024-01-01">1 Jan 2024</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>7 menit membaca</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Tim Imelda</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Model Rambut Wanita <br />Trend 2026
            
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inspirasi model rambut wanita terbaru yang sedang tren tahun ini, 
            dari short bob hingga butterfly cut yang viral.
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
        

        {/* TRENDS SECTION - REDESIGNED */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-lg">
              💇‍♀️
            </span>
            Inspirasi Model Rambut Trend 2026
          </h2>
          
          <div className="space-y-12">
            {trends.map((trend, index) => (
              <div 
                key={trend.id}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="relative h-[300px] md:h-full overflow-hidden">
                    <Image
                      src={trend.image}
                      alt={trend.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {trend.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-primary font-medium">Trend #{trend.id}</span>
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      <span className="text-sm text-muted-foreground">2026</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {trend.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {trend.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Cocok untuk:</span> {trend.suitableFor}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Perawatan:</span> {trend.maintenance}
                        </span>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />

          {/* Intro dengan highlight */}
        <div className="bg-gradient-to-r from-secondary/20 to-transparent p-6 rounded-xl mb-10 border-l-4 border-primary">
          <p className="text-foreground leading-relaxed">
            Tahun 2026 IMELDA SALON menghadirkan banyak tren model rambut wanita yang fresh,
            stylish, dan tetap mudah dirawat. Mulai dari rambut pendek modern
            sampai layer panjang ala Korea, semuanya bisa disesuaikan dengan
            bentuk wajah kamu. Berikut inspirasi lengkapnya!
          </p>
        </div>
        </section>

        {/* TIPS FROM STYLIST */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-lg">
              💡
            </span>
            Tips Memilih Model Rambut dari Stylist
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {stylistTips.map((tip, index) => {
              const Icon = tip.icon
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
                      <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* TREND COMPARISON */}
        <section className="mb-16 p-6 md:p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-2xl border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-lg">
              📊
            </span>
            Perbandingan Model Rambut
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Model</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Kesulitan Styling</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Perawatan</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Cocok untuk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-secondary/10 transition-colors">
                  <td className="py-3 px-4 text-foreground">Short Bob Modern</td>
                  <td className="py-3 px-4 text-muted-foreground">Mudah</td>
                  <td className="py-3 px-4 text-muted-foreground">Rendah</td>
                  <td className="py-3 px-4 text-muted-foreground">Wajah oval, bulat</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary/10 transition-colors">
                  <td className="py-3 px-4 text-foreground">Layer Panjang</td>
                  <td className="py-3 px-4 text-muted-foreground">Sedang</td>
                  <td className="py-3 px-4 text-muted-foreground">Sedang</td>
                  <td className="py-3 px-4 text-muted-foreground">Semua bentuk</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary/10 transition-colors">
                  <td className="py-3 px-4 text-foreground">Korean Style</td>
                  <td className="py-3 px-4 text-muted-foreground">Mudah</td>
                  <td className="py-3 px-4 text-muted-foreground">Rendah</td>
                  <td className="py-3 px-4 text-muted-foreground">Oval, heart shape</td>
                </tr>
                <tr className="hover:bg-secondary/10 transition-colors">
                  <td className="py-3 px-4 text-foreground">Butterfly Cut</td>
                  <td className="py-3 px-4 text-muted-foreground">Sedang</td>
                  <td className="py-3 px-4 text-muted-foreground">Sedang</td>
                  <td className="py-3 px-4 text-muted-foreground">Rambut panjang</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA SECTION - REDESIGNED */}
        <div className="relative overflow-hidden rounded-2xl mb-12">
         
          
          <div className="relative p-8 md:p-10 text-center text-black">
            <Scissors className="w-16 h-16 mx-auto mb-4 text-black/80" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Mau Coba Model Rambut Trend 2026?
            </h3>

            <p className="text-black/90 mb-6 max-w-xl mx-auto">
              Tim stylist Imelda Salon siap bantu pilih model rambut
              sesuai bentuk wajah & karakter kamu. Gratis konsultasi!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/layanan/potong-styling-rambut-tarutung"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
              >
                <Wand2 className="w-5 h-5" />
                Lihat Layanan Haircut
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/6282285310686"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi WhatsApp
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/20 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0822-8531-0686</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jl. Sisingamangaraja No. 123, Tarutung</span>
              </div>
            </div>
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
                href="/blog/inspirasi-makeup-wisuda"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                <span>Inspirasi Makeup Wisuda Natural & Elegan</span>
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