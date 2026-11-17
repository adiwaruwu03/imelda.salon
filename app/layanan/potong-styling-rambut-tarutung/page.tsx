import type { Metadata } from 'next'
import { ServiceDetailPage, type ServiceDetail } from '@/components/service-detail'

export const metadata: Metadata = {
  title: "Potong & Styling Rambut Tarutung — Smoothing, Coloring, Creambath | Imelda Salon",
  description: "Salon rambut di Tarutung: potong & styling, smoothing/rebonding, coloring, ombre, dan creambath. Mulai 15K.",
}

const data: ServiceDetail = {
  "name": "Hair Care",
  "title": "Hair Care",
  "script": "Potong & Styling",
  "description": "Rambut sehat, lurus berkilau, atau warna baru yang memikat. Dirawat dengan telaten supaya kamu makin percaya diri.",
  "heroImage": "/poster/foto/haircare.jpg",
  "heroPos": "center 30%",
  "from": "15K",
  "highlights": [
    "Alat steril",
    "Tanpa antre lama",
    "Harga bersahabat"
  ],
  "packages": [
    {
      "name": "Potong & Perawatan",
      "note": "Hair Care",
      "rows": [
        [
          "Hair Cut & Styling",
          "15–30K"
        ],
        [
          "Creambath & Hair Spa",
          "50–100K"
        ]
      ]
    },
    {
      "name": "Smoothing / Rebonding",
      "note": "Lurus Berkilau",
      "featured": true,
      "tag": "Best Seller ♥",
      "rows": [
        [
          "Mulai dari",
          "150–500K"
        ]
      ],
      "items": [
        "Lurus natural",
        "Berkilau",
        "Tahan lama"
      ]
    },
    {
      "name": "Warna Rambut",
      "note": "Coloring",
      "rows": [
        [
          "Hair Coloring",
          "50–100K"
        ],
        [
          "Ombre / Highlight",
          "100–200K"
        ]
      ]
    }
  ],
  "packagesNote": "Harga menyesuaikan panjang dan ketebalan rambut.",
  "features": [
    {
      "title": "Sesuai Wajah",
      "text": "Potongan dipilih sesuai bentuk wajah dan gaya hidupmu."
    },
    {
      "title": "Alat Steril",
      "text": "Peralatan bersih dan higienis setiap pemakaian."
    },
    {
      "title": "Rambut Sehat",
      "text": "Produk yang menjaga kesehatan rambut dan kulit kepala."
    },
    {
      "title": "Harga Bersahabat",
      "text": "Kualitas salon dengan harga yang ramah."
    }
  ],
  "gallery": [
    "/poster/foto/haircare.jpg",
    "/potong/cut2.jpg",
    "/potong/cut1.webp",
    "/potong/cut3.jpeg"
  ],
  "poster": "/poster/pricelist-potong-styling.png",
  "promo": [
    "Potong & styling mulai 15K",
    "Smoothing lurus berkilau mulai 150K",
    "Creambath & hair spa untuk rambut sehat",
    "Datang langsung atau booking via WhatsApp"
  ]
}

export default function PotongRambutPage() {
  return <ServiceDetailPage data={data} />
}
