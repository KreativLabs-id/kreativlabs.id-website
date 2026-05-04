import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    host: 'https://kreativlabs.my.id',
    sitemap: 'https://kreativlabs.my.id/sitemap.xml',
  }
}
