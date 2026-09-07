import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: [
          // Social Media Crawlers
          'facebookexternalhit',
          'Facebot',
          'Twitterbot',
          'WhatsApp',
          'TelegramBot',
          'LinkedInBot',
          'Slackbot-LinkExpanding',
          'Pinterestbot',
          // AI Search & LLM Bots (GEO - Generative Engine Optimization)
          'GPTBot',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'cohere-ai',
        ],
        allow: '/',
      },
    ],
    host: 'https://www.kreativlabs.id',
    sitemap: 'https://www.kreativlabs.id/sitemap.xml',
  }
}
