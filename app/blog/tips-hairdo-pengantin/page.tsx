import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'Tips Hairdo Pengantin Agar Tahan Seharian | Imelda Salon Tarutung',
  description:
    'Pelajari tips hairdo pengantin agar tetap rapi dan tahan seharian. Mulai dari trial, pemilihan model, hingga rekomendasi hairdo pengantin terbaik di Tarutung.',
}

export default function TipsHairdoPengantin() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/blog" className="hover:text-primary transition-colors">
          Blog
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-700">Tips Hairdo Pengantin</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime="2024-01-15">15 Januari 2024</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>5 menit membaca</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Tim Imelda Salon</span>
          </div>
        </div>

        {/* Judul */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Tips Hairdo Pengantin Agar Tahan Seharian di Hari Pernikahan
        </h1>
        
        {/* Deskripsi Singkat */}
        <p className="text-lg text-gray-600">
          Rahasia tampil sempurna dari pagi hingga malam dengan hairdo pengantin yang tetap rapi dan elegan.
        </p>
      </header>

      {/* Gambar Cover dengan Caption */}
      <figure className="relative mb-10">
        <div className="relative h-[400px] md:h-[800px] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/pengantin/pengantin (4).jpg"
            alt="Hairdo Pengantin Elegan dengan sentuhan bunga segar"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>
        <figcaption className="text-sm text-gray-500 mt-3 text-center italic">
          Hairdo pengantin elegan dengan sentuhan aksesoris modern - Imelda Salon Tarutung
        </figcaption>
      </figure>

      {/* Isi Artikel dengan Styling yang Lebih Baik */}
      <article className="prose prose-lg prose-neutral max-w-none">
        {/* Intro dengan highlight */}
        <div className="bg-gradient-to-r from-secondary/5 to-transparent p-6 rounded-xl mb-8 border-l-4 border-primary">
          <p className="text-gray-700 leading-relaxed m-0">
            Hari pernikahan adalah momen sekali seumur hidup yang harus tampil sempurna dari ujung kepala hingga kaki. 
            Salah satu elemen terpenting adalah hairdo pengantin yang rapi, elegan, dan tahan seharian. 
            Berikut panduan lengkap dari para ahli Imelda Salon untuk memastikan hairdo Anda tetap cantik sepanjang acara.
          </p>
        </div>

        {/* Daftar Tips dengan Styling yang Lebih Menarik */}
        <div className="space-y-8">
          {/* Tip 1 */}
          <section className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">1</span>
              Pilih Hairdo Sesuai Bentuk Wajah
            </h2>
            <p className="text-gray-700 leading-relaxed pl-11">
              Setiap bentuk wajah memiliki model hairdo berbeda agar terlihat proporsional. 
              Wajah bulat cocok dengan hairdo yang memberikan kesan tinggi, sementara wajah oval lebih fleksibel dengan berbagai model. 
              Konsultasi dengan hairstylist sebelum hari H sangat disarankan.
            </p>
          </section>

          {/* Tip 2 */}
          <section className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">2</span>
              Lakukan Hair Trial Sebelum Hari H
            </h2>
            <p className="text-gray-700 leading-relaxed pl-11">
              Hair trial membantu memastikan model cocok, kuat, dan selaras dengan makeup serta busana pengantin. 
              Lakukan minimal 1-2 minggu sebelum hari H untuk memberikan waktu jika ada perubahan yang diperlukan.
            </p>
          </section>

          {/* Tip 3 */}
          <section className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">3</span>
              Pastikan Rambut Dalam Kondisi Sehat
            </h2>
            <p className="text-gray-700 leading-relaxed pl-11">
              Rambut sehat lebih mudah dibentuk. Lakukan hair mask, creambath, dan potong ujung rambut 2-3 minggu 
              sebelum hari pernikahan untuk hasil maksimal.
            </p>
          </section>

          {/* Tip 4 */}
          <section className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">4</span>
              Gunakan Hair Extension Jika Perlu
            </h2>
            <p className="text-gray-700 leading-relaxed pl-11">
              Extension membantu menambah volume agar sanggul terlihat lebih mewah dan seimbang. 
              Pilih extension dengan kualitas baik dan warna yang sesuai dengan rambut asli.
            </p>
          </section>

          {/* Tip 5 */}
          <section className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">5</span>
              Gunakan Produk Styling Profesional
            </h2>
            <p className="text-gray-700 leading-relaxed pl-11">
              Produk seperti hair spray extra hold dan mousse membantu hairdo tahan panas lampu dan aktivitas acara. 
              Kami di Imelda Salon hanya menggunakan produk berkualitas untuk hasil terbaik.
            </p>
          </section>

          {/* Tip 6 */}
          <section className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">6</span>
              Sesuaikan Hairdo dengan Tema Pernikahan
            </h2>
            <p className="text-gray-700 leading-relaxed pl-11">
              Hairdo adat, modern, atau hijab styling harus selaras dengan konsep pernikahan agar terlihat harmonis. 
              Diskusikan tema pernikahan Anda dengan stylist untuk rekomendasi terbaik.
            </p>
          </section>

          {/* Tip 7 */}
          <section className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">7</span>
              Gunakan Aksesoris yang Tidak Terlalu Berat
            </h2>
            <p className="text-gray-700 leading-relaxed pl-11">
              Aksesoris ringan menjaga keseimbangan sanggul agar tidak mudah turun. Pilih aksesoris yang proporsional 
              dengan ukuran dan model hairdo.
            </p>
          </section>

          {/* Tip 8 */}
          <section className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">8</span>
              Siapkan Touch Up Kit
            </h2>
            <p className="text-gray-700 leading-relaxed pl-11">
              Bobby pin, hair spray mini, dan sisir kecil wajib disiapkan sebagai antisipasi. 
              Serahkan touch up kepada stylist atau orang terpercaya agar tidak merusak hairdo.
            </p>
          </section>

          {/* Tip 9 */}
          <section className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">9</span>
              Gunakan Jasa Hairdo Profesional
            </h2>
            <p className="text-gray-700 leading-relaxed pl-11">
              Stylist profesional memahami teknik kuncian sanggul dan ketahanan styling untuk acara panjang. 
              Dengan pengalaman bertahun-tahun, tim Imelda Salon siap membuat hari istimewa Anda sempurna.
            </p>
          </section>
        </div>

        {/* Kesimpulan */}
        <div className="mt-10 p-6 bg-secondary/5 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Kesimpulan</h3>
          <p className="text-gray-700">
            Hairdo pengantin yang tahan lama adalah hasil dari persiapan matang, pemilihan model yang tepat, 
            dan eksekusi oleh profesional. Dengan mengikuti tips di atas dan mempercayakan hairdo Anda kepada 
            tim ahli Imelda Salon, Anda bisa tampil percaya diri dan memukau sepanjang hari pernikahan.
          </p>
        </div>
      </article>
<br />
<br />
<br />
<br />
<br />

      

 {/* ================= CTA SECTION ================= */}
        
        
        {/* Decorative circles */}
<section>       
        <div className="absolute bottom-0 right-0 -z-10 h-48 w-48 rounded-full bg-primary-foreground/10 blur-3xl" />
        
       
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Butuh Jasa Hairdo Pengantin Profesional?
            </h3>

            <p className="text-gray-600 text-lg mb-6">
              Tim stylist berpengalaman Imelda Salon siap membuat hari istimewa Anda sempurna dengan 
              hairdo yang elegan dan tahan lama.
            </p>
            <div className="flex gap-4 justify-center">
            <Link
              href="/layanan/hairdo-wedding-tarutung"
              className="px-8 py-4 bg-white text-primary rounded-xl font-semibold"
            >
              Lihat Layanan
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-xl font-semibold"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
        </section>
    </main>
  )
}
      