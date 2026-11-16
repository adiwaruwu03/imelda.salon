'use client'

import { MapPin, Phone, Clock } from 'lucide-react'

export function Location() {
  const address = "Imelda Salon Hutagurgur, Aek Tangga, Kec. Garoga, Kabupaten Tapanuli Utara, Sumatera Utara 22473"
  
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 fade-up">
            <div className="space-y-4">
              <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Our Location</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Kunjungi Salon <br /><span className="text-primary italic">Kami Sekarang</span>
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 border-b border-border pb-5">
                <div className="h-6 w-6 mt-0.5 flex-shrink-0 text-accent">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-foreground">Alamat</h4>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>

              <div className="flex gap-4 border-b border-border pb-5">
                <div className="h-6 w-6 mt-0.5 flex-shrink-0 text-accent">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-foreground">Hubungi Kami</h4>
                  <p className="text-muted-foreground">+62 822-8531-0686</p>
                </div>
              </div>

              <div className="flex gap-4 border-b border-border pb-5">
                <div className="h-6 w-6 mt-0.5 flex-shrink-0 text-accent">
                  <Clock size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-foreground">Jam Operasional</h4>
                  <p className="text-muted-foreground">Senin - Sabtu: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-lg mx-auto aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-2 border-accent/50 p-2 bg-card scale-in">
             <iframe 
                src="https://www.google.com/maps?q=2.0216771,99.3032901&z=17&output=embed" 
                className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-[2rem]"
                loading="lazy"
                title="Google Maps"
              ></iframe>
             <a
                href="https://www.google.com/maps?q=2.0216771,99.3032901"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-bold shadow-xl shadow-primary/30 transition duration-300 ease-out hover:bg-deep hover:scale-105 whitespace-nowrap"
              >
                <MapPin size={16} className="text-accent" /> Buka di Google Maps
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}
