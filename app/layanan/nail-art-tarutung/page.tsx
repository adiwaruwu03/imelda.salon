import type { Metadata } from 'next'
import { ServiceDetailPage, type ServiceDetail } from '@/components/service-detail'

export const metadata: Metadata = {
  title: "Nail Art Tarutung — Kuku Asli & Extension | Imelda Salon",
  description: "Nail art di Tarutung untuk tangan dan kaki: polos, cat eye, motif, dan soft gel extension. Mulai 40K.",
}

const data: ServiceDetail = {
  "name": "Nail Art",
  "title": "Nail Art",
  "script": "& Extension",
  "description": "Cantik sampai ujung jari. Polos, cat eye, hingga motif, di kuku asli maupun extension soft gel tips, untuk tangan dan kaki.",
  "heroImage": "/poster/foto/nailart.jpg",
  "heroPos": "center 65%",
  "from": "40K",
  "highlights": [
    "Tangan & kaki",
    "Soft gel tips",
    "Motif custom"
  ],
  "packages": [
    {
      "name": "Kuku Asli",
      "note": "Tangan",
      "rows": [
        [
          "Polos",
          "40K"
        ],
        [
          "Cat Eye",
          "50K"
        ],
        [
          "Motif",
          "60K"
        ]
      ]
    },
    {
      "name": "Extension",
      "note": "Soft Gel Tips",
      "featured": true,
      "tag": "Favorit ♥",
      "rows": [
        [
          "Polos",
          "50K"
        ],
        [
          "Cat Eye",
          "65K"
        ],
        [
          "Motif",
          "70–90K"
        ]
      ]
    },
    {
      "name": "Nail Art Kaki",
      "note": "Kuku Asli",
      "rows": [
        [
          "Polos",
          "40K"
        ],
        [
          "Cat Eye",
          "50K"
        ],
        [
          "Motif",
          "60K"
        ]
      ]
    },
    {
      "name": "Remove",
      "note": "Lepas Kuku",
      "rows": [
        [
          "Nail Gel",
          "10K"
        ],
        [
          "Extension",
          "10K"
        ]
      ]
    }
  ],
  "packagesNote": "Harga motif bisa berbeda untuk desain yang rumit. Konsultasikan dulu via WhatsApp.",
  "features": [
    {
      "title": "Rapi & Detail",
      "text": "Dikerjakan teliti sampai ke setiap sudut kuku."
    },
    {
      "title": "Tahan Lama",
      "text": "Gel berkualitas yang tidak mudah terkelupas."
    },
    {
      "title": "Motif Custom",
      "text": "Bawa inspirasimu, kita wujudkan bersama."
    },
    {
      "title": "Higienis",
      "text": "Alat bersih dan steril setiap pelanggan."
    }
  ],
  "gallery": [
    "/poster/foto/nailart.jpg"
  ],
  "poster": "/poster/pricelist-nailart.png",
  "promo": [
    "Nail art mulai 40K",
    "Soft gel extension mulai 50K",
    "Cat eye & motif custom",
    "Tangan & kaki, cantik sampai ujung jari"
  ]
}

export default function NailArtTarutungPage() {
  return <ServiceDetailPage data={data} />
}
