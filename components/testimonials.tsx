'use client'

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'

const testimonials = [
  {
    name: "Santi Kartika",
    role: "Regular Customer",
    content: {
      id: "Sangat puas dengan layanan makeup pengantin di Imelda Salon. Hasilnya natural tapi tetap kelihatan mewah. Terima kasih kak Melda!",
      en: "Very satisfied with the bridal makeup service at Imelda Salon. The result is natural but still looks luxurious. Thank you kak Melda!"
    },
    rating: 5
  },
  {
    name: "Maya Sari",
    role: "New Client",
    content: {
      id: "Pertama kali coba potong rambut di sini dan langsung suka! Stylistnya ngerti banget model yang cocok buat bentuk muka saya.",
      en: "First time trying a haircut here and I love it! The stylist really understands the right model for my face shape."
    },
    rating: 5
  },
  {
    name: "Putri Rahayu",
    role: "Regular Customer",
    content: {
      id: "Tempatnya nyaman banget, bersih, dan pelayanannya ramah. Rebonding hasilnya awet dan rambut tetep sehat.",
      en: "The place is very comfortable, clean, and the service is friendly. Rebonding results are long-lasting and hair stays healthy."
    },
    rating: 5
  }
]

export function Testimonials() {
  const { language } = useLanguage()
  
  return (
    <section className="py-24 md:py-28 bg-secondary/40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 relative z-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Testimonials</p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            {language === 'id' ? 'Apa Kata ' : 'What '} <span className="text-accent italic">{language === 'id' ? 'Mereka?' : 'They Say?'}</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'id' 
              ? 'Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman mereka bersama Imelda Salon.'
              : 'Customer satisfaction is our top priority. Here are their experiences with Imelda Salon.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:items-start">
          {testimonials.map((item, i) => {
            const hl = i === 1
            return (
              <div key={item.name} className={cn('fade-up', i === 1 && 'md:mt-12 animation-delay-200', i === 2 && 'md:mt-4 animation-delay-400')}>
                <figure
                  className={cn(
                    'relative overflow-hidden p-8 rounded-[2rem] transition duration-300 ease-out hover:-translate-y-1',
                    hl ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/30' : 'bg-card border border-accent/40 shadow-lg shadow-primary/5'
                  )}
                >
                  <span aria-hidden className={cn('absolute -top-6 right-4 font-serif text-[9rem] leading-none select-none', hl ? 'text-accent/20' : 'text-accent/10')}>&rdquo;</span>
                  <div className="relative space-y-6">
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className={cn('text-base leading-relaxed italic', hl ? 'text-primary-foreground/90' : 'text-muted-foreground')}>
                      &ldquo;{language === 'id' ? item.content.id : item.content.en}&rdquo;
                    </blockquote>
                    <figcaption className="flex items-center gap-4">
                      <div className={cn('h-10 w-10 rounded-full flex items-center justify-center font-serif font-bold', hl ? 'bg-accent text-accent-foreground' : 'bg-primary text-accent')}>
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className={cn('text-[10px] font-bold uppercase tracking-widest', hl ? 'text-accent' : 'text-muted-foreground')}>{item.role}</p>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
