import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ChevronRight, ArrowRight, BookOpen, Sparkles, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Blog Imelda Salon - Tips Kecantikan & Makeup Tarutung',
  description:
    'Baca tips hairdo pengantin, makeup wisuda, harga MUA, dan tren rambut terbaru di Tarutung bersama Imelda Salon.',
}

const articles = [
  {
    title: 'Tips Hairdo Pengantin Agar Tahan Seharian',
    slug: '/blog/tips-hairdo-pengantin',
    image: 'rambut/rambut (1).jpeg',
    excerpt:
      'Pelajari tips hairdo pengantin agar tetap rapi dan elegan sepanjang acara pernikahan.',
    category: 'Hairdo',
    readTime: '5 menit',
    date: '15 Jan 2024',
    author: 'Tim Imelda',
  },
  {
    title: 'Harga MUA Pengantin Tarutung Terbaru',
    slug: '/blog/harga-mua-tarutung',
    image: 'album/Pengantin.jpg',
    excerpt:
      'Informasi lengkap harga jasa MUA pengantin di Tarutung beserta paketnya.',
    category: 'Makeup',
    readTime: '4 menit',
    date: '10 Jan 2024',
    author: 'Tim Imelda',
  },
  {
    title: 'Inspirasi Makeup Wisuda Natural & Elegan',
    slug: '/blog/inspirasi-makeup-wisuda',
    image: 'wisuda/wisudamakeup.webp',
    excerpt:
      'Rekomendasi makeup wisuda yang tahan lama dan cocok untuk sesi foto.',
    category: 'Makeup',
    readTime: '6 menit',
    date: '5 Jan 2024',
    author: 'Tim Imelda',
  },
  {
    title: 'Model Rambut Wanita Trend 2026',
    slug: '/blog/model-rambut-trend-2026',
    image: 'potong/cut2.jpg',
    excerpt:
      'Inspirasi model rambut wanita terbaru yang sedang tren tahun ini.',
    category: 'Rambut',
    readTime: '7 menit',
    date: '1 Jan 2024',
    author: 'Tim Imelda',
  },
]

const categories = ['Semua', 'Makeup', 'Hairdo', 'Rambut', 'Tips']

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-b from-background to-secondary">
      
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28 text-center bg-gradient-to-br from-secondary via-background to-background">
        
        {/* BG ORB */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Inspirasi Kecantikan Terbaru</span>
          </div>
          
          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground text-balance animate-fade-up">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-gradient-animate">
                BLOG IMELDA SALON
              </span>
            </span>
          </h1>
          {/* DESC */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Temukan tips kecantikan, inspirasi makeup, dan tren rambut terbaru 
            langsung dari para ahli Imelda Salon Tarutung.
          </p>
        </div>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="var(--background)"
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Artikel Terbaru
            </h2>
            <p className="text-muted-foreground mt-1">
              Temukan inspirasi untuk penampilan terbaik Anda
            </p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              
              {/* IMAGE */}
              <Link href={article.slug} className="block relative overflow-hidden h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-md border border-border">
                    {article.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              {/* CONTENT */}
              <div className="p-6">
                
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                </div>
                
                <h2 className="font-bold text-lg md:text-xl mb-2 line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
                  <Link href={article.slug}>{article.title}</Link>
                </h2>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <Link
                  href={article.slug}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Baca Selengkapnya
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* POPULAR */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-card-foreground">
              Artikel Populer
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {articles.slice(0, 4).map((article, idx) => (
              <Link
                key={idx}
                href={article.slug}
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {article.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        
        <div className="absolute inset-0 bg-pink-700 from-primary to-accent opacity-90"></div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center text-primary-foreground">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Jasa Makeup & Hairdo Profesional?
          </h2>

          <p className="text-lg text-primary-foreground/90 mb-8">
            Tim stylist berpengalaman kami siap membuat Anda tampil memukau di setiap acara spesial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link
              href="/layanan"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-lg font-semibold hover:bg-background/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Lihat Layanan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/kontak"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-lg font-semibold hover:bg-background/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
