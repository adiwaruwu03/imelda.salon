'use client'

import Link from 'next/link'
import { MessageCircle, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'


export function Footer() {
  const whatsappNumber = '6282285310686'

  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-semiwhite">IMELDA</span>
            <span className="text-xs font-semibold text-muted-foreground">SALON</span>
          </Link>

          

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>hutagurgur-garoga</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Buka: 09:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-primary-foreground/60">
            &copy; 2024 IMELDA SALON. Semua hak dilindungi.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >          
          </a>
        </div>
      </div>
    </footer>
  )
}
