'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PromoMarquee } from '@/components/promo-marquee'
import { Bow, Sprig, Divider } from '@/components/ornaments'
import { MessageCircle, MapPin, Clock, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'

const services = [
  'Potong & Styling Rambut',
  'Smoothing / Rebonding',
  'Rias Pengantin & Pesta',
  'Makeup & Hairdo Wisuda',
  'Creambath & Hair Spa',
  'Pewarnaan Rambut',
  'Nail Art & Extension',
  'MUA Panggilan (On-site)',
]

const whatsappNumber = '6282285310686'
const phoneNumber = '+62 822-8531-0686'
const address = 'Imelda Salon Hutagurgur, Aek Tangga, Kec. Garoga, Kabupaten Tapanuli Utara, Sumatera Utara 22473'
const mapsUrl =
  'https://www.google.com/maps/place/IMELDA+SALON+KECANTIKAN-GAROGA+%26+TARUTUNG/@2.0216771,99.3032901,17z/data=!3m1!4b1!4m6!3m5!1s0x420aa6d91e906b99:0xc59376dc3990c2c6!8m2!3d2.0216771!4d99.3032901!16s%2Fg%2F11wty2kbwf'

const field =
  'w-full h-12 px-4 rounded-2xl bg-white/80 ring-1 ring-[#5a1120]/15 text-[#2a080f] placeholder:text-[#6b2a37]/50 outline-none transition focus:ring-2 focus:ring-[#c5a14a]'
const label = 'text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b2a37] ml-1'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '', time: '', notes: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert('Harap lengkapi data yang diperlukan!')
      return
    }
    const message = `Halo, saya ingin booking layanan di IMELDA SALON.\n\n📋 Detail Booking:\n- Nama: ${formData.name}\n- Nomor HP: ${formData.phone}\n- Layanan: ${formData.service}\n- Tanggal: ${formData.date}\n- Jam: ${formData.time}\n${formData.notes ? `- Catatan: ${formData.notes}` : ''}\n\nMohon dikonfirmasi. Terima kasih!`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const info = [
    { icon: MapPin, title: t('contact_info_location'), body: address, link: { href: mapsUrl, text: 'Buka di Google Maps' } },
    { icon: Clock, title: t('contact_info_hours'), body: 'Senin – Jumat 09:00 – 18:00 · Sabtu – Minggu 09:00 – 17:00' },
    { icon: Phone, title: t('contact_info_cs'), body: phoneNumber, link: { href: `https://wa.me/${whatsappNumber}`, text: 'Chat WhatsApp' } },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <PromoMarquee
        items={['Booking mudah lewat WhatsApp', 'Konsultasi look gratis', 'Bisa MUA panggilan ke rumah', 'Ayo datang & tampil cantik untuk dirimu sendiri']}
      />

      {/* Hero */}
      <section className="relative px-6 pt-14 pb-10 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#f4d9da_1.2px,transparent_1.4px)] [background-size:36px_36px]" />
        <Sprig className="pointer-events-none absolute left-0 top-4 w-28 md:w-44" />
        <Sprig className="pointer-events-none absolute right-0 top-4 w-28 md:w-44 -scale-x-100" />
        <div className="relative space-y-3 animate-fade-up-soft">
          <Bow className="mx-auto w-24" />
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#f4d9da]">Reserve Your Spot</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold">{t('contact_title')}</h1>
          <p className="font-script text-5xl md:text-7xl text-accent leading-tight">{t('contact_title_highlight')}</p>
          <Divider />
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed pt-2">{t('contact_desc')}</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_1fr] items-start">
          {/* Form booking: kartu blush */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#fbe9ea] via-[#f4d9da] to-[#efc9cc] p-8 md:p-10 text-[#5a1120] ring-2 ring-accent shadow-2xl shadow-black/40">
            <Sprig className="pointer-events-none absolute -right-8 -top-8 w-36 rotate-180 opacity-70" />
            <h2 className="relative font-serif text-3xl font-bold">Formulir Booking</h2>
            <p className="relative font-script text-3xl text-[#b8862e] -mt-1">langsung ke WhatsApp</p>

            <form onSubmit={handleSubmit} className="relative mt-6 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className={label} htmlFor="name">{t('contact_form_name')}</label>
                  <input id="name" name="name" placeholder="Nama Anda" value={formData.name} onChange={handleChange} className={field} />
                </div>
                <div className="space-y-2">
                  <label className={label} htmlFor="phone">{t('contact_form_phone')}</label>
                  <input id="phone" name="phone" type="tel" placeholder="08xx..." value={formData.phone} onChange={handleChange} className={field} />
                </div>
              </div>

              <div className="space-y-2">
                <span className={label}>{t('contact_form_service')}</span>
                <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={t('contact_form_service')}>
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      role="radio"
                      aria-checked={formData.service === s}
                      onClick={() => setFormData((p) => ({ ...p, service: s }))}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition duration-300 ${
                        formData.service === s ? 'bg-[#5a1120] text-[#faf4eb] shadow-lg' : 'bg-white/70 ring-1 ring-[#5a1120]/15 hover:ring-[#c5a14a]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className={label} htmlFor="date">{t('contact_form_date')}</label>
                  <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} className={field} />
                </div>
                <div className="space-y-2">
                  <label className={label} htmlFor="time">{t('contact_form_time')}</label>
                  <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} className={field} />
                </div>
              </div>

              <div className="space-y-2">
                <label className={label} htmlFor="notes">{t('contact_form_notes')}</label>
                <textarea id="notes" name="notes" rows={3} value={formData.notes} onChange={handleChange} placeholder="Contoh: look natural, rambut sebahu..." className={`${field} h-auto py-3 resize-none`} />
              </div>

              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#5a1120] py-4 text-lg font-bold text-[#faf4eb] shadow-xl transition duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <Send className="h-5 w-5" /> {t('contact_form_btn')}
              </button>
            </form>
          </div>

          {/* Info & peta */}
          <div className="space-y-5 lg:sticky lg:top-32">
            {info.map(({ icon: Icon, title, body, link }) => (
              <div key={title} className="flex gap-5 rounded-[2rem] bg-card p-6 ring-1 ring-accent/40 transition duration-300 hover:ring-accent">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f4d9da] text-[#5a1120] ring-4 ring-background shadow-[0_0_0_5px_#c5a14a55]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                  {link && (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-bold text-accent hover:underline">
                      {link.text} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Kartu peta: bingkai blush seperti bingkai foto, label lokasi di atas */}
            <div className="rounded-[2.25rem] bg-gradient-to-br from-[#fbe9ea] via-[#f4d9da] to-[#efc9cc] p-3 ring-2 ring-accent shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between gap-3 px-4 pt-2 pb-3 text-[#5a1120]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#b8566a]" />
                  <div>
                    <p className="font-serif text-lg font-bold leading-none">Imelda Salon</p>
                    <p className="font-script text-2xl leading-none text-[#b8862e]">Garoga · Tarutung</p>
                  </div>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full bg-[#5a1120] px-4 py-2 text-xs font-bold text-[#faf4eb] transition hover:scale-105"
                >
                  Petunjuk Arah
                </a>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-1 ring-[#5a1120]/20">
                <iframe
                  src="https://www.google.com/maps?q=2.0216771,99.3032901&z=16&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  title="Lokasi Imelda Salon"
                />
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Imelda Salon, saya ingin bertanya.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-accent py-4 font-bold text-accent-foreground transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_#c5a14a80]"
            >
              <MessageCircle className="h-5 w-5" /> Tanya Dulu via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
