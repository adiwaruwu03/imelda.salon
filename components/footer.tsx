'use client'

import Link from 'next/link'
import { MessageCircle, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const whatsappNumber = '6282285310686'

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">IMELDA</span>
              <span className="text-sm font-medium text-primary-foreground/70">SALON</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Imelda Salon adalah  salon kecantikan profesional di Garoga, Tarutung, 
              Tapanuli Utara yang menyediakan layanan potong rambut, styling, 
              dan makeup artist (MUA) untuk berbagai acara spesial.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition"
              >
                <MessageCircle size={18} />
                <span>Chat WhatsApp</span>
              </a>

              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5" />
                <span>Hutagurgur - Garoga, Tarutung</span>
              </div>

              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Buka: 09.00 - 18.00 WIB</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Menu</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:opacity-80 transition">
                Beranda
              </Link>
              <Link href="/layanan" className="hover:opacity-80 transition">
                Layanan
              </Link>
              <Link href="/galeri" className="hover:opacity-80 transition">
                Galeri
              </Link>
              <Link href="/kontak" className="hover:opacity-80 transition">
                Kontak
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Imelda Salon. Semua hak dilindungi.
        </div>

      </div>
    </footer>
  )
}