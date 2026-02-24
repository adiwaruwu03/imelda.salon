import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: 'https://imeldasalon.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Blog Index
    {
      url: 'https://imeldasalon.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ===== Landing Page Layanan (Money Page) =====
    {
      url: 'https://imeldasalon.com/layanan/potong-styling-rambut-tarutung',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://imeldasalon.com/layanan/mua-pengantin-tarutung',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://imeldasalon.com/layanan/hairdo-wedding-tarutung',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://imeldasalon.com/layanan/makeup-wisuda-tarutung',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ===== Artikel Blog =====
    {
      url: 'https://imeldasalon.com/blog/tips-hairdo-pengantin',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://imeldasalon.com/blog/harga-mua-tarutung',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://imeldasalon.com/blog/inspirasi-makeup-wisuda',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://imeldasalon.com/blog/model-rambut-trend-2026',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}