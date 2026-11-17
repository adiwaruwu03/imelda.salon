import type { Metadata } from 'next'
import { ServiceDetailPage, type ServiceDetail } from '@/components/service-detail'

export const metadata: Metadata = {
  title: "Makeup Wisuda Tarutung — Natural & Glam | Imelda Salon",
  description: "Makeup wisuda di Tarutung, natural maupun full glam, tahan lama 8–10 jam dan foto friendly. Booking via WhatsApp.",
}

const data: ServiceDetail = {
  "name": "Makeup Wisuda",
  "title": "Graduation",
  "script": "Makeup Wisuda",
  "description": "Tampil segar dan percaya diri di hari kelulusan. Riasan natural atau glam yang tahan lama dan cantik di kamera.",
  "heroImage": "/wisuda/wisuda.jpg",
  "heroPos": "center 25%",
  "highlights": [
    "Tahan 8–10 jam",
    "Foto friendly",
    "Konsultasi gratis"
  ],
  "packages": [
    {
      "name": "Makeup Natural",
      "note": "Fresh Look",
      "items": [
        "Makeup tahan lama",
        "Free bulu mata",
        "Hairdo toga",
        "Touch up kit"
      ]
    },
    {
      "name": "Makeup Full Glam",
      "note": "Glamour Look",
      "featured": true,
      "tag": "Favorit ♥",
      "items": [
        "Softlens premium",
        "Contouring",
        "Setting spray",
        "False lashes"
      ]
    }
  ],
  "packagesNote": "Harga paket wisuda bisa ditanyakan langsung lewat WhatsApp.",
  "features": [
    {
      "title": "Tahan Lama",
      "text": "Riasan awet 8–10 jam dari prosesi sampai foto keluarga."
    },
    {
      "title": "Foto Friendly",
      "text": "Hasil flawless dan tetap natural di kamera HD."
    },
    {
      "title": "Higienis",
      "text": "Produk dan alat yang bersih dan berkualitas."
    },
    {
      "title": "Konsultasi Gratis",
      "text": "Diskusikan look impianmu sebelum hari H."
    }
  ],
  "gallery": [
    "/wisuda/wisuda.jpg",
    "/wisuda/wisudamakeup.webp",
    "/wisuda/wisuda.webp"
  ],
  "promo": [
    "Makeup wisuda natural & glam",
    "Tahan 8–10 jam, cantik di foto",
    "Booking lebih awal di musim wisuda",
    "Konsultasi gratis via WhatsApp"
  ]
}

export default function MakeupWisudaPage() {
  return <ServiceDetailPage data={data} />
}
