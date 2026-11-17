import type { Metadata } from 'next'
import { ServiceDetailPage, type ServiceDetail } from '@/components/service-detail'

export const metadata: Metadata = {
  title: "Hairdo Wedding Tarutung — Jasa Hairdo Pengantin Terbaik",
  description: "Layanan hairdo wedding di Tarutung untuk pengantin, bridesmaid, dan pesta. Hasil elegan & tahan lama. Mulai 200K.",
}

const data: ServiceDetail = {
  "name": "Hairdo",
  "title": "Hairdo",
  "script": "Wedding & Pesta",
  "description": "Sanggul dan tatanan rambut artistik yang rapi dari pagi sampai malam, serasi dengan busana dan bentuk wajahmu.",
  "heroImage": "/poster/foto/hairdo.jpg",
  "heroPos": "60% center",
  "from": "200K",
  "highlights": [
    "Tahan hingga 12 jam",
    "Bisa home service",
    "Trial session"
  ],
  "packages": [
    {
      "name": "Hairdo Pesta",
      "price": "200K",
      "items": [
        "Glamor",
        "Modern",
        "Elegan"
      ]
    },
    {
      "name": "Hairdo Pengantin",
      "price": "800K",
      "featured": true,
      "tag": "Favorit ♥",
      "items": [
        "Tahan lama",
        "Aksesoris",
        "Trial session"
      ]
    },
    {
      "name": "Hairdo Bridesmaid",
      "price": "250K",
      "items": [
        "Serasi dengan pengantin",
        "Natural",
        "Cepat"
      ]
    }
  ],
  "features": [
    {
      "title": "Tahan Seharian",
      "text": "Tetap rapi dari akad hingga resepsi."
    },
    {
      "title": "Sesuai Wajah",
      "text": "Tatanan dibuat custom sesuai karakter dan busana."
    },
    {
      "title": "Produk Premium",
      "text": "Produk styling yang aman untuk rambut."
    },
    {
      "title": "Home Service",
      "text": "Bisa datang ke rumah untuk kenyamanan ekstra."
    }
  ],
  "gallery": [
    "/poster/foto/hairdo.jpg",
    "/rambut/rambut (3).jpeg",
    "/pengantin/pengantin (4).jpg",
    "/rambut/rambut (1).jpeg",
    "/pengantin/pengantin (3).jpg",
    "/rambut/rambut (4).jpeg"
  ],
  "poster": "/poster/pricelist-hairdo-wedding.png",
  "testimonials": [
    {
      "name": "Sarah, Tarutung",
      "text": "Hairdo pengantinnya tahan lama dari pagi sampai selesai resepsi. Stylish banget!"
    },
    {
      "name": "Linda, Sibolga",
      "text": "Ramah dan ngerti banget sama yang saya mau. Hasilnya elegan."
    },
    {
      "name": "Putri, Tarutung",
      "text": "Home servicenya sangat membantu. Datang tepat waktu dan hasilnya rapi."
    }
  ],
  "promo": [
    "Hairdo pesta mulai 200K",
    "Sanggul cantik tahan seharian",
    "Bisa home service ke rumahmu",
    "Trial session sebelum hari H"
  ]
}

export default function HairdoWeddingPage() {
  return <ServiceDetailPage data={data} />
}
