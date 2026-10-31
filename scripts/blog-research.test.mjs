import test from 'node:test';
import assert from 'node:assert/strict';
import { collectRecentItems, validateArticle } from './blog-research.mjs';

test('memilih sumber HTTPS yang terbit dalam tujuh hari tanpa duplikat', () => {
  const now = Date.parse('2026-11-01T12:00:00Z');
  const item = { title: 'Panduan bisnis digital', link: 'https://example.org/artikel', pubDate: 'Sat, 31 Oct 2026 12:00:00 GMT' };
  const result = collectRecentItems([item, item, { ...item, title: 'Lama', pubDate: 'Thu, 01 Oct 2026 12:00:00 GMT' }, { ...item, title: 'Tidak aman', link: 'http://example.org/' }, { ...item, title: 'Masa depan', pubDate: 'Mon, 02 Nov 2026 12:00:00 GMT' }], now);
  assert.equal(result.length, 1);
  assert.equal(result[0].title, item.title);
});

test('menolak artikel tanpa sumber, berulang, atau mengandung sapaan klise', () => {
  const article = { sourceId: 0, title: 'Cara memilih website bisnis', slug: 'cara-memilih-website-bisnis', excerpt: 'Hal yang perlu dipertimbangkan.', category: 'Tips Bisnis', tags: ['Website'], readTime: '4 menit', content: ['Pembuka', 'Kedua', 'Ketiga', 'Keempat', 'Penutup'] };
  const sources = [{ id: 0 }];
  assert.doesNotThrow(() => validateArticle(article, sources, [], []));
  assert.throws(() => validateArticle({ ...article, sourceId: 2 }, sources, [], []));
  assert.throws(() => validateArticle(article, sources, [article.title], []));
  assert.throws(() => validateArticle(article, sources, [], [article.slug]));
  assert.throws(() => validateArticle({ ...article, content: ['Halo Sobat KreativLabs', ...article.content] }, sources, [], []));
});
