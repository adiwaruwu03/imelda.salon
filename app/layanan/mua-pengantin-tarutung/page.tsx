"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const WHATSAPP_NUMBER = "6282285310686" // Format internasional tanpa +
const WHATSAPP_MESSAGE = (paket: string, harga: string) => 
  `Halo Imelda Salon, saya ingin memesan paket ${paket} dengan harga ${harga}. Mohon infokan ketersediaan jadwal untuk hari pernikahan saya. Terima kasih.`

export default function MUAPengantinPage() {
  const handleWhatsApp = (paket: string, harga: string) => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE(paket, harga))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">         
              <span className="block text-primary mt-2">MUA Pengantin Tarutung</span>
            </h1>
            
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Jasa Makeup Artist Pengantin profesional di Tarutung
              dengan hasil riasan elegan, tahan lama,
              dan sesuai adat maupun modern wedding.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-secondary/20 to-transparent" />
        <div className="absolute inset-y-0 left-0 -z-10 w-64 bg-gradient-to-r from-secondary/20 to-transparent" />
        <div className="absolute inset-y-0 right-0 -z-10 w-64 bg-gradient-to-l from-secondary/20 to-transparent" />
      </section>

{/* ================= DESKRIPSI SECTION ================= */}
<section className="py-20 sm:py-24">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">

      {/* ================= TEXT ================= */}
      <div className="space-y-6">

        <div className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Tentang Kami
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Jasa MUA Pengantin Profesional
          <span className="block text-primary mt-2">
            di Tarutung
          </span>
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Imelda Salon menyediakan layanan Makeup Artist
            pengantin di Tarutung untuk berbagai kebutuhan
            pernikahan, mulai dari adat Batak, nasional,
            hingga internasional wedding look.
          </p>

          <p>
            Dengan teknik rias modern, produk premium,
            dan pengalaman menangani berbagai acara,
            kami memastikan Anda tampil sempurna
            di hari spesial Anda.
          </p>
        </div>

        {/* Statistik */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/80 to-primary ring-2 ring-background"
              />
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              100+
            </span>{" "}
            pengantin bahagia
          </p>
        </div>
      </div>

      {/* ================= FOTO ================= */}
      <div className="relative">

        <img
          src="/pengantin/mua.jpg"
          alt="MUA Pengantin Tarutung"
          className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
        />

        {/* Badge pengalaman */}
        <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl px-4 py-3">
          <p className="text-xs text-muted-foreground">
            Makeup Artist Profesional
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


      {/* ================= PAKET HARGA SECTION ================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-secondary/30 to-secondary/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Paket Makeup Pengantin
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih paket sesuai kebutuhan pernikahan Anda
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                id: "makeup-pengantin",
                title: "Makeup Pengantin",
                price: "1.500.000",
                priceFormatted: "Rp 1.500.000",
                features: [
                  "Rias wajah pengantin",
                  "Sanggul modern/tradisional",
                  "Konsultasi look gratis",
                  "Touch up kit"
                ],
                popular: false,
                description: "Paket lengkap untuk hari pernikahan Anda"
              },
              {
                id: "makeup-lamaran",
                title: "Makeup Lamaran",
                price: "500.000",
                priceFormatted: "Rp 500.000",
                features: [
                  "Rias wajah natural",
                  "Touch up sederhana",
                  "Konsultasi look",
                  "Setting rambut basic"
                ],
                popular: false,
                description: "Tampil cantik di acara lamaran"
              },
              {
                id: "makeup-adat-batak",
                title: "Makeup Adat Batak",
                price: "2.000.000",
                priceFormatted: "Rp 2.000.000",
                features: [
                  "Rias wajah adat Batak",
                  "Sanggul adat lengkap",
                  "Aksesoris tradisional",
                  "Konsultasi adat",
                  "Touch up kit premium"
                ],
                popular: true,
                description: "Riasan adat Batak yang autentik dan modern"
              }
            ].map((paket, index) => (
              <div
                key={index}
                className={`
                  relative rounded-2xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col h-full
                  ${paket.popular ? 'ring-2 ring-primary' : ''}
                `}
              >
                {paket.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white whitespace-nowrap">
                    Paling Populer
                  </span>
                )}
                
                <h3 className="font-semibold text-lg mb-1">{paket.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{paket.description}</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{paket.priceFormatted}</span>
                </div>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {paket.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full gap-2 mt-auto"
                  variant={paket.popular ? "default" : "outline"}
                  onClick={() => handleWhatsApp(paket.title, paket.priceFormatted)}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.93 3.178 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.766-5.764-5.772zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.087.274.072.374-.043.1-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.01.476 1.184.563.174.087.289.13.332.202.043.072.043.419-.101.824z"/>
                  </svg>
                  Pesan via WhatsApp
                </Button>
              </div>
            ))}
          </div>
          
          {/* Custom Request Button */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Tidak menemukan paket yang sesuai?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const customMessage = encodeURIComponent(
                  `Halo Imelda Salon, saya ingin request paket makeup custom untuk acara saya. Mohon infokan ketersediaan dan harga. Terima kasih.`
                )
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${customMessage}`, '_blank')
              }}
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.93 3.178 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.766-5.764-5.772z"/>
              </svg>
              Request Paket Custom
            </Button>
          </div>
        </div>
      </section>

              {/* ================= GALLERY SECTION ================= */}
<section className="py-20 sm:py-24">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Hasil Makeup Pengantin
      </h2>
      <p className="text-lg text-muted-foreground">
        Inspirasi riasan untuk hari spesial Anda
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">

      {[
        "/pengantin/pengantin (1).jpg",
        "/pengantin/pengantin (2).jpg",
        "/pengantin/pengantin (3).jpg",
        "/pengantin/pengantin (4).jpg",
        "/pengantin/pengantin (5).jpg",
      ].map((src, index) => (
        <div
          key={index}
          className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
          onClick={() => {
            const message = encodeURIComponent(
              `Halo Imelda Salon, saya tertarik dengan hasil makeup pengantin di portfolio foto #${index + 1}. Mohon infokan detail paket dan ketersediaan jadwal. Terima kasih.`
            )
            window.open(
              `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
              "_blank"
            )
          }}
        >

          {/* FOTO */}
          <img
            src={src}
            alt={`Makeup Pengantin ${index + 1}`}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Text Hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm font-medium">
              Pengantin #{index + 1}
            </p>
            <p className="text-xs opacity-90">
              Makeup by Imelda Salon
            </p>
            <p className="text-xs mt-1">
              Klik untuk inquiry via WA
            </p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= KEUNGGULAN SECTION ================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Kenapa Pilih MUA Imelda Salon?
            </h2>
            <p className="text-lg text-muted-foreground">
              Keunggulan yang membuat kami berbeda
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "✨",
                title: "Makeup Tahan Lama",
                description: "Riasan awet dari akad hingga resepsi dengan teknik waterproof",
                color: "from-pink-500/20 to-rose-500/20"
              },
              {
                icon: "💄",
                title: "Produk Premium",
                description: "Menggunakan brand makeup berkualitas internasional yang aman di kulit",
                color: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: "👰",
                title: "Pengalaman Wedding",
                description: "Berpengalaman menangani berbagai adat dan konsep pernikahan",
                color: "from-blue-500/20 to-indigo-500/20"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <span className="mb-4 inline-block text-4xl">{item.icon}</span>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative isolate overflow-hidden bg-primary py-20 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-foreground/10 to-transparent" />
        
        {/* Decorative circles */}
        <div className="absolute left-0 top-0 -z-10 h-32 w-32 rounded-full bg-primary-foreground/10 blur-2xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-48 w-48 rounded-full bg-primary-foreground/10 blur-3xl" />
        
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Booking MUA Pengantin Sekarang
            </h2>
            
            <p className="text-lg text-primary-foreground/90">
              Jadwalkan rias pengantin Anda bersama Imelda Salon Tarutung.
              Dapatkan konsultasi gratis!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                variant="secondary" 
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all gap-2"
                onClick={() => handleWhatsApp("Makeup Pengantin", "Rp 1.500.000")}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.93 3.178 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.766-5.764-5.772z"/>
                </svg>
                Hubungi via WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 gap-2"
                onClick={() => {
                  const priceListMessage = encodeURIComponent(
                    `Halo Imelda Salon, saya ingin meminta pricelist lengkap untuk MUA Pengantin. Terima kasih.`
                  )
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${priceListMessage}`, '_blank')
                }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.93 3.178 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.766-5.764-5.772z"/>
                </svg>
                Minta Pricelist
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/80 pt-4 flex items-center justify-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.93 3.178 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.766-5.764-5.772z"/>
              </svg>
              Respon cepat via WhatsApp dalam 1x24 jam
            </p>
          </div>
        </div>
      </section>

      {/* ================= FLOATING WA BUTTON ================= */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full h-14 w-14 sm:h-16 sm:w-16 bg-green-500 hover:bg-green-600 shadow-xl hover:shadow-2xl transition-all"
          onClick={() => {
            const message = encodeURIComponent(
              `Halo Imelda Salon, saya ingin konsultasi tentang MUA Pengantin.`
            )
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
          }}
        >
          <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.93 3.178 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.766-5.764-5.772zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.087.274.072.374-.043.1-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.01.476 1.184.563.174.087.289.13.332.202.043.072.043.419-.101.824z"/>
          </svg>
          <span className="sr-only">Chat WhatsApp</span>
        </Button>
      </div>

      <Footer />
    </main>
  )
}