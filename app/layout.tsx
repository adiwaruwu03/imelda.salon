import React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" })
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair" })

export const metadata: Metadata = {
  // ✅ TITLE SEO LOKAL KUAT
  title: "Imelda Salon| Salon & Makeup Artist Tarutung-Garoga Tapanuli Utara",

  // ✅ DESCRIPTION SEO LOKAL
  description:
    "Imelda Salon adalah salon kecantikan profesional di Garoga, Tarutung, Tapanuli Utara yang menyediakan layanan perawatan rambut, makeup artist (MUA), rias pengantin, hair styling, dan kecantikan wanita. Melayani pelanggan Tarutung dan sekitarnya dengan hasil riasan elegan, pelayanan ramah, dan harga terjangkau.",

  // ✅ KEYWORDS
  keywords: [
    "Salon Tarutung",
    "salon kecantikan Tarutung",
    "salon rambut Tarutung",
    "makeup artist Tarutung",
    "rias pengantin Tarutung",
    "potong rambut Tarutung",
    "hair styling Tarutung",
    "hairdo Tarutung",
    "salon wanita Tarutung",
    "salon tarutung garoga",
    "salon tarutung",
    "Salon Garoga",
    "Salon Tapanuli Utara",
    "Makeup Artist Tarutung",
    "Rias Pengantin Tarutung",
    "Salon Kecantikan Tarutung",
  ],

  // ✅ CANONICAL URL
  alternates: {
    canonical: "https://imelda-salon.vercel.app",
  },

  // ✅ OPEN GRAPH (SEO + SHARE FB/WA)
  openGraph: {
    title: "Imelda Salon Tarutung | Salon & Makeup Artist Garoga",
    description:
      "Salon kecantikan profesional di Garoga & Tarutung. Layanan rambut, makeup artist, dan rias pengantin.",
    url: "https://imelda-salon.vercel.app",
    siteName: "Imelda Salon",
    locale: "id_ID",
    type: "website",
  },

  // ✅ GOOGLE VERIFICATION (PUNYA KAMU)
  verification: {
    google: "EojTxLlWahNp6ERDt2i6uBGbyQxDm0tH4O1voWlgT4k",
  },

  generator: "Next.js",

  icons: {
    icon: "/apple-icon.png",
    apple: "/apple-icon.png",
  },
}

import { MobileNav } from "@/components/mobile-nav"
import { LanguageProvider } from "@/lib/language-context"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased pb-24 md:pb-0">
        <LanguageProvider>
          {children}
          <MobileNav />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
