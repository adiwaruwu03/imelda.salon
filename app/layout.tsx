import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // ✅ TITLE SEO LOKAL KUAT
  title: "Imelda Salon Tarutung | Salon & Makeup Artist Garoga Tapanuli Utara",

  // ✅ DESCRIPTION SEO LOKAL
  description:
    "Imelda Salon adalah salon kecantikan profesional di Garoga, Tarutung, Tapanuli Utara yang menyediakan layanan perawatan rambut, makeup artist (MUA), rias pengantin, hair styling, dan kecantikan wanita. Melayani pelanggan Tarutung dan sekitarnya dengan hasil riasan elegan, pelayanan ramah, dan harga terjangkau.",

  // ✅ KEYWORDS
  keywords: [
    "Salon Tarutung",
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
    icon: [
      {
        url: "/apple-icon-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/apple-icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/apple-icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
