import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    host: 'https://kreativlabs.id',
    sitemap: 'https://kreativlabs.id/sitemap.xml',
  }
}
