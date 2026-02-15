"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import {
  Sparkle,
  Check,
  Clock,
  MapPin,
  Camera,
  Shield,
  ChevronRight,
  MessageCircle
} from 'lucide-react'

export default function MakeupWisudaTarutungPage() {

  const WHATSAPP_NUMBER = "6282285310686"

  const handleBooking = (paket: string) => {
    const message = encodeURIComponent(
      `Halo Imelda Salon, saya ingin booking Makeup Wisuda.\n\n` +
      `📦 Paket: ${paket}\n📍 Lokasi: Tarutung\n📅 Tanggal:\n⏰ Jam:\n\nTerima kasih 🙏`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }

  const features = [
    { icon: Sparkle, text: "Makeup Tahan Lama 8–10 Jam" },
    { icon: Camera, text: "Foto Friendly & HD" },
    { icon: Shield, text: "Produk Higienis & Berkualitas" },
    { icon: Clock, text: "Free Konsultasi Sebelum Hari H" },
  ]

  return (
      <main className="min-h-screen bg-background"> <Header /> {/* ================= HERO SECTION ================= */} <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-24 sm:py-32"> <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"> <div className="mx-auto max-w-2xl text-center space-y-6"> <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"> <span className="block text-primary mt-2">Makeup Wisuda Tarutung</span> </h1> {/* DESKRIPSI */} <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"> Tampil lebih percaya diri dengan makeup wisuda profesional bersama makeup artist berpengalaman di Imelda Salon. </p> {/* Stats */} <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto border-t border-border"> <div className="text-center"> <div className="text-2xl font-bold text-foreground">500+</div> <div className="text-xs sm:text-sm text-muted-foreground">Client Puas</div> </div> <div className="text-center"> <div className="text-2xl font-bold text-foreground">10+</div> <div className="text-xs sm:text-sm text-muted-foreground">Stylist Profesional</div> </div> <div className="text-center"> <div className="text-2xl font-bold text-foreground">5+</div> <div className="text-xs sm:text-sm text-muted-foreground">Tahun Pengalaman</div> </div> </div> </div> </div> </section>

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-24 sm:py-32">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-8">

              <div className="space-y-4">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Jasa Makeup 
                  <span className="block text-primary">
                    Wisuda
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl">
                  Tampil cantik maksimal di hari kelulusan dengan layanan
                  makeup wisuda profesional dari Imelda Salon Tarutung.
                  Makeup flawless, tahan lama, dan foto friendly.
                </p>

              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((f, i) => {
                  const Icon = f.icon
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{f.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-4">

                <button
                  onClick={() => handleBooking("Makeup Wisuda")}
                  className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:opacity-90 transition flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Booking via WhatsApp
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>

                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  Tarutung, Tapanuli Utara
                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/wisuda/wisuda.webp"
                  alt="Makeup Wisuda Tarutung"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PAKET ================= */}
      <section className="py-20 sm:py-24 bg-muted">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-4 mb-12">

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Paket Makeup Wisuda Tarutung
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih paket makeup wisuda sesuai kebutuhan Anda.
              Dikerjakan oleh MUA profesional dengan hasil flawless.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* CARD 1 */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border space-y-6">

              <div>
                <h3 className="text-xl font-bold">
                  Makeup Natural
                </h3>
                <p className="text-muted-foreground text-sm">
                  Fresh & Natural Look
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Makeup tahan lama",
                  "Free bulu mata",
                  "Hairdo toga",
                  "Touch up kit",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBooking("Makeup Natural")}
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl"
              >
                Pilih Paket
              </button>

            </div>

            {/* CARD 2 */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border space-y-6">

              <div>
                <h3 className="text-xl font-bold">
                  Makeup Full Glam
                </h3>
                <p className="text-muted-foreground text-sm">
                  Glamour Look
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Softlens premium",
                  "Contouring",
                  "Setting spray",
                  "False lashes",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBooking("Makeup Full Glam")}
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl"
              >
                Pilih Paket
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center space-y-6">

            <h2 className="text-3xl font-bold">
              Booking Makeup Wisuda Sekarang
            </h2>

            <p className="max-w-xl mx-auto">
              Jadwalkan makeup wisuda Anda bersama
              Imelda Salon Tarutung dan tampil percaya diri
              di hari kelulusan.
            </p>

            <button
              onClick={() => handleBooking("Makeup Wisuda")}
              className="bg-background text-foreground px-8 py-4 rounded-xl font-semibold"
            >
              Booking Sekarang
            </button>

          </div>

        </div>
      </section>

      <Footer />

    </main>
  )
}
