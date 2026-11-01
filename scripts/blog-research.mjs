import Parser from 'rss-parser';

const feeds = [
  'https://news.google.com/rss/search?q=website+UMKM+OR+bisnis+digital&hl=id&gl=ID&ceid=ID:id',
  'https://news.google.com/rss/search?q=desain+branding+OR+pemasaran+digital&hl=id&gl=ID&ceid=ID:id',
  'https://news.google.com/rss/search?q=AI+bisnis+OR+teknologi+website&hl=id&gl=ID&ceid=ID:id',
  'https://developers.google.com/search/blog/feed.xml',
];
const week = 7 * 24 * 60 * 60 * 1000;
const categories = new Set(['Tips Bisnis', 'Update Teknologi', 'Desain & Branding', 'SEO & Marketing']);
const clean = (value, limit = 500) => String(value || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, limit);
const normalize = (value) => clean(value).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

export function collectRecentItems(items, now = Date.now()) {
  const seen = new Set();
  return items.flatMap((item) => {
    const date = Date.parse(item.isoDate || item.pubDate || '');
    const title = clean(item.title, 200);
    let url;
    try { url = new URL(item.link); } catch { return []; }
    if (url.protocol !== 'https:' || !title || !Number.isFinite(date) || date > now || now - date > week) return [];
    const key = normalize(title);
    if (seen.has(key)) return [];
    seen.add(key);
    const sourceName = typeof item.source === 'string' ? item.source : item.source?._;
    const publisher = clean(sourceName || item.creator || url.hostname, 80).replace(/[\[\]()]/g, '');
    return [{ title, url: url.href, publisher: publisher || url.hostname, publishedAt: new Date(date).toISOString(), summary: clean(item.contentSnippet || item.content, 350) }];
  }).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getRecentSources() {
  const parser = new Parser({ customFields: { item: ['source'] } });
  const results = await Promise.allSettled(feeds.map(async (url) => {
    const response = await fetch(url, { signal: AbortSignal.timeout(12000), headers: { 'user-agent': 'KreativLabsBlogBot/1.0' } });
    if (!response.ok) throw new Error(`RSS HTTP ${response.status}`);
    return (await parser.parseString(await response.text())).items;
  }));
  const items = results.flatMap((result) => result.status === 'fulfilled' ? result.value : []);
  if (!items.length) throw new Error('Semua sumber RSS gagal atau kosong; tidak membuat artikel.');
  // Keep representation from each query instead of allowing a single feed to dominate.
  const grouped = results.flatMap((result) => result.status === 'fulfilled' ? collectRecentItems(result.value).slice(0, 8) : []);
  return collectRecentItems(grouped.map((item) => ({ ...item, link: item.url, isoDate: item.publishedAt, contentSnippet: item.summary, source: { _: item.publisher } })))
    .slice(0, 25).map((item, id) => ({ id, ...item }));
}

export async function getRelevantTrends() {
  try {
    const response = await fetch('https://trends.google.com/trending/rss?geo=ID', { signal: AbortSignal.timeout(12000) });
    if (!response.ok) return [];
    const items = (await new Parser().parseString(await response.text())).items;
    return items.map((item) => clean(item.title, 100)).filter((title) => /\b(umkm|bisnis|website|desain|branding|marketing|teknologi|kecerdasan buatan|ai|google|marketplace|e-commerce)\b/i.test(title)).slice(0, 10);
  } catch {
    return [];
  }
}

export function validateArticle(article, sources, titles, slugs) {
  if (!article || !Number.isInteger(article.sourceId) || !sources.some((source) => source.id === article.sourceId)) throw new Error('Sumber tidak valid');
  if (typeof article.title !== 'string' || article.title.trim().length < 12 || typeof article.excerpt !== 'string' || !article.excerpt.trim()) throw new Error('Judul atau ringkasan tidak valid');
  if (typeof article.slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) || slugs.includes(article.slug)) throw new Error('Slug tidak valid atau sudah ada');
  if (titles.some((title) => normalize(title) === normalize(article.title))) throw new Error('Judul sudah ada');
  if (!categories.has(article.category) || !Array.isArray(article.tags) || !article.tags.length || !article.tags.every((tag) => typeof tag === 'string') || typeof article.readTime !== 'string') throw new Error('Metadata tidak valid');
  if (!Array.isArray(article.content) || !article.content.every((line) => typeof line === 'string') || article.content.filter((line) => line.trim()).length < 5) throw new Error('Isi artikel tidak valid');
  if (/\b(halo sobat kreativlabs|coba deh jujur|senam jantung)\b/i.test(article.content.join(' '))) throw new Error('Isi mengandung frasa klise');
  // Keamanan: tolak artikel yang mengandung tag HTML mentah (potensi stored-XSS
  // via rantai RSS -> AI -> blogs.ts -> render). Teks biasa seperti "5 < 10"
  // tetap lolos karena pola hanya mencocokkan tag diawali huruf setelah "<".
  const containsHtmlTag = (value) => /<\/?[a-zA-Z][^>]*>?/.test(value);
  if ([article.title, article.excerpt, ...article.tags, ...article.content].some(containsHtmlTag)) throw new Error('Konten mengandung tag HTML mentah');
}
