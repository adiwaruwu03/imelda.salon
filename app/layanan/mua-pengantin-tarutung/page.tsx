import type { Metadata } from 'next'
import { ServiceDetailPage, type ServiceDetail } from '@/components/service-detail'

export const metadata: Metadata = {
  title: "MUA Pengantin Tarutung — Makeup Pengantin & Adat Batak | Imelda Salon",
  description: "Jasa makeup artist pengantin di Tarutung: makeup lamaran, pengantin, dan adat Batak yang elegan dan tahan lama. Mulai 500K. Booking via WhatsApp.",
}

const data: ServiceDetail = {
  "name": "Makeup Pengantin",
  "title": "Bridal Makeup",
  "script": "Pengantin Tarutung",
  "description": "Riasan pengantin yang elegan, tahan lama, dan tetap menonjolkan kecantikan alamimu. Untuk lamaran, pemberkatan, hingga pesta adat Batak.",
  "heroImage": "/poster/foto/makeup.jpg",
  "heroPos": "center 35%",
  "from": "500K",
  "highlights": [
    "Tahan seharian",
    "Adat & modern",
    "Konsultasi look gratis"
  ],
  "packages": [
    {
      "name": "Makeup Lamaran",
      "price": "500K",
      "items": [
        "Rias wajah natural",
        "Setting rambut",
        "Touch up",
        "Konsultasi look"
      ]
    },
    {
      "name": "Makeup Adat Batak",
      "price": "2JT",
      "featured": true,
      "tag": "Paling Diminati ♥",
      "items": [
        "Rias wajah adat",
        "Sanggul adat lengkap",
        "Aksesoris tradisional",
        "Touch up kit premium"
      ]
    },
    {
      "name": "Makeup Pengantin",
      "price": "1,5JT",
      "items": [
        "Rias wajah pengantin",
        "Sanggul modern / tradisional",
        "Touch up kit",
        "Konsultasi gratis"
      ]
    }
  ],
  "packagesNote": "Butuh paket khusus atau MUA panggilan? Tanyakan lewat WhatsApp.",
  "features": [
    {
      "title": "Tahan Lama",
      "text": "Riasan awet dari akad hingga resepsi selesai."
    },
    {
      "title": "Produk Premium",
      "text": "Brand ternama yang aman untuk kulit."
    },
    {
      "title": "Paham Adat",
      "text": "Berpengalaman dengan konsep pernikahan adat Batak."
    },
    {
      "title": "Personal",
      "text": "Dikerjakan langsung oleh Melda, sesuai karakter wajahmu."
    }
  ],
  "gallery": [
    "/pengantin/pengantin (2).jpg",
    "/album/Pengantin.jpg",
    "/pengantin/pengantin (5).jpg",
    "/pengantin/pengantin (1).jpg",
    "/album/Pengantin2.jpg",
    "/pengantin/mua.jpg"
  ],
  "poster": "/poster/pricelist-mua-pengantin.png",
  "promo": [
    "Makeup lamaran mulai 500K",
    "Makeup adat Batak lengkap dengan sanggul",
    "Booking tanggal pernikahanmu dari sekarang",
    "Konsultasi look gratis via WhatsApp"
  ]
}

export default function MuaPengantinPage() {
  return <ServiceDetailPage data={data} />
}
