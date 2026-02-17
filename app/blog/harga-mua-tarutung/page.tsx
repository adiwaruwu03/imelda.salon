import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, 
  ChevronRight, 
  Calendar, 
  Star, 
  CheckCircle, 
  MapPin, 
  Phone, 
  MessageCircle,
  Award,
  Users,
  Clock,
  Heart
} from 'lucide-react'

export const metadata = {
  title: 'Harga MUA Pengantin Tarutung Terbaru 2026 | Imelda Salon',
  description:
    'Informasi harga MUA pengantin Tarutung terbaru lengkap dengan paket wedding, rias adat Batak, dan tips memilih jasa MUA terbaik.',
}

const pricePackages = [
  {
    title: 'Paket Akad / Pemberkatan',
    price: 'Rp 1.500.000 – Rp 3.000.000',
    features: [
      'Makeup pengantin',
      'Hairdo / sanggul',
      'Bulu mata & aksesoris',
      'Touch up ringan'
    ],
    icon: '💒',
    popular: false,
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Paket Wedding Lengkap',
    price: 'Rp 3.500.000 – Rp 7.000.000',
    features: [
      'Makeup akad & resepsi',
      'Hairdo 2x',
      'Hijab styling',
      'Touch up acara'
    ],
    icon: '💍',
    popular: true,
    color: 'from-primary/20 to-secondary/20'
  },
  {
    title: 'Paket Adat Batak',
    price: 'Rp 5.000.000 – Rp 10.000.000+',
    features: [
      'Makeup full adat',
      'Hairdo Batak',
      'Sortali & bulang',
      'Asisten rias'
    ],
    icon: '🎭',
    popular: false,
    color: 'from-amber-500/20 to-orange-500/20'
  }
]

const factors = [
  {
    title: 'Pengalaman MUA',
    description: 'Semakin berpengalaman, harga semakin kompetitif dengan kualitas terjamin',
    icon: Award
  },
  {
    title: 'Produk Makeup',
    description: 'Penggunaan brand terkenal dan produk premium',
    icon: Sparkles
  },
  {
    title: 'Lokasi Acara',
    description: 'Jarak tempuh dan transportasi tim',
    icon: MapPin
  },
  {
    title: 'Jumlah Orang',
    description: 'Ibu, saudara, atau pengiring pengantin',
    icon: Users
  }
]

const tips = [
  {
    number: 1,
    title: 'Lihat Portofolio Asli',
    description: 'Minta foto hasil makeup sebelumnya tanpa editan berlebihan',
    icon: Star
  },
  {
    number: 2,
    title: 'Lakukan Trial Makeup',
    description: 'Pastikan cocok dengan konsep dan jenis kulit Anda',
    icon: Calendar
  },
  {
    number: 3,
    title: 'Tanyakan Ketahanan',
    description: 'Makeup harus tahan 12+ jam di cuaca tropis',
    icon: Clock
  },
  {
    number: 4,
    title: 'Booking Jauh Hari',
    description: 'Idealnya 3-6 bulan sebelum hari H',
    icon: Heart
  }
]

export default function HargaMUATarutung() {
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
          <span className="text-foreground">Harga MUA Tarutung</span>
        </nav>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Header Section with Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Info Harga Terbaru 2026 </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Harga MUA Pengantin Tarutung <br />
            Terbaru 2026
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Panduan lengkap harga jasa makeup artist di Tarutung, dari paket dasar 
            hingga riasan adat Batak yang autentik.
          </p>
        </div>

        {/* Featured Image */}
        {/* Gambar Cover dengan Caption */}
      <figure className="relative mb-10">
        <div className="relative h-[500px] md:h-[1000px] w-full overflow-hidden rounded-2x1 shadow-lg">
            <Image
              src="/album/Pengantin.jpg"
              alt="Harga MUA Pengantin Tarutung - Imelda Salon"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
          <figcaption className="text-sm text-muted-foreground mt-3 text-center italic">
            Hasil riasan pengantin profesional oleh tim Imelda Salon Tarutung
          </figcaption>
        </figure>

        {/* Konten */}
        <div className="prose prose-lg max-w-none">
          {/* Intro dengan highlight */}
          <div className="bg-gradient-to-r from-secondary/20 to-transparent p-6 rounded-xl mb-8 border-l-4 border-primary">
            <p className="text-foreground leading-relaxed m-0">
              Menentukan Makeup Artist (MUA) pengantin adalah bagian penting dalam
              persiapan pernikahan. Harga jasa MUA di Tarutung bervariasi tergantung
              pengalaman, paket layanan, serta kompleksitas riasan adat maupun modern.
              Berikut panduan lengkap harga dan tips memilih MUA terbaik.
            </p>
          </div>

          {/* Harga Packages */}
<section className="mb-16">
  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
    <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
      💰
    </span>
    Kisaran Harga MUA Pengantin Tarutung <br />dengan harga terjangkau
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        title: "Makeup Pengantin",
        price: "Rp 1.500.000",
        features: [
          "Rias wajah pengantin",
          "Sanggul modern/tradisional",
          "Konsultasi look gratis",
          "Touch up kit",
        ],
        popular: false,
      },
      {
        title: "Makeup Lamaran",
        price: "Rp 500.000",
        features: [
          "Rias wajah natural",
          "Touch up sederhana",
          "Konsultasi look",
          "Setting rambut basic",
        ],
        popular: false,
      },
      {
        title: "Makeup Adat Batak",
        price: "Rp 2.000.000",
        features: [
          "Rias wajah adat Batak",
          "Sanggul adat lengkap",
          "Aksesoris tradisional",
          "Konsultasi adat",
          "Touch up kit premium",
        ],
        popular: true,
      },
    ].map((pkg, index) => {
      
      const message = encodeURIComponent(
        `Halo Imelda Salon, saya ingin booking paket ${pkg.title} dengan harga ${pkg.price}. Apakah masih tersedia?`
      )

      return (
        <div
          key={index}
          className={`relative group bg-card rounded-2xl border ${
            pkg.popular
              ? "border-primary shadow-lg shadow-primary/10"
              : "border-border"
          } overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
        >
          {pkg.popular && (
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULER
            </div>
          )}

          <div className="p-6 bg-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {pkg.title}
            </h3>

            <p className="text-2xl font-bold text-primary mb-4">
              {pkg.price}
            </p>

            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  ✓ {feature}
                </li>
              ))}
            </ul>

            {/* BUTTON WHATSAPP */}
            <a
              href={`https://wa.me/6282285310686?text=${message}`}
              target="_blank"
              className="block text-center bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      )
    })}
  </div>
</section>


          

          {/* Faktor yang Mempengaruhi Harga */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                📊
              </span>
              Faktor yang Mempengaruhi Harga
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {factors.map((factor, index) => {
                const Icon = factor.icon
                return (
                  <div key={index} className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/20 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{factor.title}</h3>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Tips Memilih MUA */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                💡
              </span>
              Tips Memilih MUA Pengantin
            </h2>
            
            <div className="space-y-4">
              {tips.map((tip) => {
                const Icon = tip.icon
                return (
                  <div key={tip.number} className="flex gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/20 transition-all group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-xl flex items-center justify-center font-bold text-lg">
                        {tip.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-foreground">{tip.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{tip.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Keunggulan Imelda Salon */}
          <section className="mb-16 p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-2xl border border-border">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Mengapa Memilih Imelda Salon?
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">10+ Tahun Pengalaman</h3>
                  <p className="text-sm text-muted-foreground">Melayani 500+ pasangan pengantin</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Produk Premium</h3>
                  <p className="text-sm text-muted-foreground">Makeup tahan lama & aman di kulit</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Tim Profesional</h3>
                  <p className="text-sm text-muted-foreground">Bersertifikasi & update tren terbaru</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Gratis Konsultasi</h3>
                  <p className="text-sm text-muted-foreground">Diskusikan konsep makeup impian Anda</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="py-20 bg-white text-primary-blue">
            
            <div className="relative p-8 md:p-10 text-center text-black">
              <h3 className="font-bold text-2xl md:text-3xl mb-3">
                Booking MUA Pengantin Sekarang
              </h3>

              <p className="text-black/90 mb-6 max-w-xl mx-auto">
                Wujudkan penampilan pengantin terbaik Anda bersama tim profesional Imelda Salon Tarutung.
                Konsultasi gratis & jadwalkan hari spesial Anda sekarang.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/layanan/mua-pengantin-tarutung"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
                >
                  Lihat Paket Layanan
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/6282285310686"
                  target="_blank"
                 className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Artikel Terkait */}
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
        </div>
      </article>
    </main>
  )
}