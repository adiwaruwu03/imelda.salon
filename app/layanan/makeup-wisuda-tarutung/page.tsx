"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { Sparkles, Check, Star, Clock, MapPin, Phone, Camera, Heart, Shield, Sparkle, ChevronRight, MessageCircle } from 'lucide-react'

export default function MakeupWisudaTarutungPage() {
  const WHATSAPP_NUMBER = "6281234567890"

  const handleBooking = (paket: string) => {
    const message = encodeURIComponent(
      `Halo Imelda Salon, saya ingin booking Makeup Wisuda.\n\n` +
      `📦 Paket: ${paket}\n` +
      `📍 Lokasi: Tarutung\n` +
      `📅 Tanggal: \n` +
      `⏰ Jam: \n\n` +
      `Mohon info ketersediaannya ya. Terima kasih 🙏`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }

  const features = [
    { icon: Sparkle, text: "Makeup Tahan Lama 8-10 Jam" },
    { icon: Camera, text: "Foto Friendly & HD" },
    { icon: Shield, text: "Produk Higienis & Berkualitas" },
    { icon: Clock, text: "Free Konsultasi Sebelum Hari H" },
  ]

  const testimonials = [
    {
      name: "Maria Siregar",
      role: "Mahasiswa UKI",
      comment: "Makeupnya awet dari pagi sampai malam. Hasilnya natural glowing, fotonya jadi cantik!",
      rating: 5,
      image: "/img/testimonial-1.jpg"
    },
    {
      name: "Ruth Simanjuntak",
      role: "Siswi SMA N 1 Tarutung",
      comment: "Kak Imelda ramah banget, makeupnya sesuai request. Recommended pokoknya!",
      rating: 5,
      image: "/img/testimonial-2.jpg"
    },
    {
      name: "Grace Hutapea",
      role: "Alumni STT HKBP",
      comment: "Sudah 2x pakai jasa sini, selalu puas. Next wisuda adik balik lagi!",
      rating: 5,
      image: "/img/testimonial-3.jpg"
    }
  ]

  const faqs = [
    {
      q: "Berapa lama proses makeup?",
      a: "Proses makeup sekitar 60-90 menit, tergantung paket yang dipilih."
    },
    {
      q: "Apakah bisa makeup di rumah?",
      a: "Bisa! Kami melayani home service di wilayah Tarutung dan sekitarnya."
    },
    {
      q: "Produk apa yang digunakan?",
      a: "Kami menggunakan produk berkualitas seperti Make Over, Emina, Wardah, dan brand professional lainnya."
    }
  ]

  return (
    <>
      <Header />
      
      {/* ===== HERO SECTION ELEGAN ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-pink-100">
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  ✨ Makeup Artist Profesional di Tarutung
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Makeup Wisuda
                  </span>
                  <br />
                  <span className="text-gray-800">Tarutung</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Tampil cantik maksimal di hari kelulusan dengan makeup wisuda 
                  profesional dari Imelda Salon. Hasil{' '}
                  <span className="text-pink-600 font-semibold">flawless, tahan lama,</span>{' '}
                  dan{' '}
                  <span className="text-purple-600 font-semibold">foto friendly</span>.
                </p>
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="p-1.5 bg-pink-100 rounded-lg">
                        <Icon className="w-4 h-4 text-pink-600" />
                      </div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* CTA & Contact */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => handleBooking("Konsultasi Makeup Wisuda")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Booking via WhatsApp
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>Tarutung, Tapanuli Utara</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">100+</span>{' '}
                  <span className="text-gray-500">Client Puas</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-gray-500">(50+ Review)</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/wisuda/wisuda.webp"
                  alt="Makeup Wisuda Tarutung"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[500px] lg:h-[600px]"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-100 rounded-lg">
                      <Sparkle className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Free Touch Up Kit</p>
                      <p className="text-xs text-gray-500">Untuk setiap booking paket Full Glam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAKET MAKEUP ELEGAN ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-600">Pilihan Paket</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pilih Paket Makeup{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Sesuai Kebutuhanmu
              </span>
            </h2>
            <p className="text-gray-600">
              Dapatkan hasil makeup terbaik dengan harga yang bersahabat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Natural Package */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                    Natural
                  </span>
                  <h3 className="text-2xl font-bold mt-4">Makeup Natural</h3>
                  <p className="text-gray-500 text-sm">Cocok untuk tampilan fresh & natural</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-pink-600">Rp150K</div>
                  <div className="text-xs text-gray-400">/sesi</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Makeup tahan lama 8-10 jam",
                  "Free bulu mata premium",
                  "Hairdo toga sederhana",
                  "Touch up kit (lipstik + bedak)",
                  "Konsultasi sebelum hari H"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-1 bg-green-100 rounded-full mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBooking("Makeup Natural")}
                className="w-full py-3 px-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 group/btn"
              >
                Pilih Paket Natural
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Full Glam Package */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-200 relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-6 right-0 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-1.5 text-sm font-semibold rounded-l-full shadow-lg">
                ⭐ PALING POPULER
              </div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    Full Glam
                  </span>
                  <h3 className="text-2xl font-bold mt-4">Makeup Full Glam</h3>
                  <p className="text-gray-500 text-sm">Tampilan glamor untuk foto stunning</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600">Rp250K</div>
                  <div className="text-xs text-gray-400">/sesi</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Semua benefit paket Natural",
                  "Softlens premium (warna natural)",
                  "Contouring & highlighting profesional",
                  "Setting spray tahan lama",
                  "False lashes double layer",
                  "Free touch up kit lengkap"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-1 bg-purple-100 rounded-full mt-0.5">
                      <Check className="w-3 h-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBooking("Makeup Full Glam")}
                className="w-full py-3 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2 group/btn"
              >
                Pilih Paket Full Glam
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              *Harga sudah termasuk hairdo toga dan free konsultasi
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
              <span className="text-sm font-medium text-yellow-600">Testimoni</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Apa Kata Mereka yang Sudah{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Makeup di Sini?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-medium text-blue-600">❓ FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pertanyaan yang{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Sering Diajukan
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <h3 className="font-semibold text-lg mb-2 flex items-start gap-2">
                  <span className="text-pink-600">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 ml-6">
                  <span className="text-purple-600 font-medium mr-2">A:</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ELEGAN ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Siap Tampil Cantik di Hari Wisudamu?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Slot terbatas setiap harinya. Booking sekarang dan dapatkan free touch up kit!
              </p>
              <button
                onClick={() => handleBooking("Makeup Wisuda")}
                className="group bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Booking Sekarang via WhatsApp
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}