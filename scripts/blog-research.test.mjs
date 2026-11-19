import test from "node:test";
import assert from "node:assert/strict";
import { collectRecentItems, pickDistinctImage, validateArticle } from "./blog-research.mjs";

test("memilih sumber HTTPS yang terbit dalam tujuh hari tanpa duplikat", () => {
  const now = Date.parse("2026-11-01T12:00:00Z");
  const item = {
    title: "Panduan bisnis digital",
    link: "https://example.org/artikel",
    pubDate: "Sat, 31 Oct 2026 12:00:00 GMT",
  };
  const result = collectRecentItems(
    [
      item,
      item,
      { ...item, title: "Lama", pubDate: "Thu, 01 Oct 2026 12:00:00 GMT" },
      { ...item, title: "Tidak aman", link: "http://example.org/" },
      { ...item, title: "Masa depan", pubDate: "Mon, 02 Nov 2026 12:00:00 GMT" },
    ],
    now
  );
  assert.equal(result.length, 1);
  assert.equal(result[0].title, item.title);
});

const longParagraph =
  "Banyak pemilik usaha masih menyamakan fungsi akun media sosial, lapak di marketplace, dan website company profile padahal ketiganya memiliki peran operasional yang berbeda untuk pertumbuhan bisnis jangka panjang. "
    .repeat(4)
    .trim();
const validContent = [
  longParagraph,
  "## Fungsi utama website untuk usaha",
  longParagraph,
  "## Menentukan prioritas sesuai tahap bisnis",
  longParagraph,
];

test("menolak artikel tanpa sumber, berulang, atau mengandung sapaan klise", () => {
  const article = {
    sourceId: 0,
    title: "Cara memilih website bisnis",
    slug: "cara-memilih-website-bisnis",
    excerpt: "Hal yang perlu dipertimbangkan.",
    category: "Tips Bisnis",
    tags: ["Website"],
    readTime: "5 menit",
    content: validContent,
  };
  const sources = [{ id: 0 }];
  assert.doesNotThrow(() => validateArticle(article, sources, [], []));
  assert.throws(() => validateArticle({ ...article, sourceId: 2 }, sources, [], []));
  assert.throws(() => validateArticle(article, sources, [article.title], []));
  assert.throws(() => validateArticle(article, sources, [], [article.slug]));
  assert.throws(() =>
    validateArticle(
      { ...article, content: ["Halo Sobat KreativLabs", ...validContent] },
      sources,
      [],
      []
    )
  );
  assert.throws(() =>
    validateArticle(
      { ...article, content: ["Pembuka", "Kedua", "Ketiga", "Keempat", "Penutup"] },
      sources,
      [],
      []
    )
  );
  assert.throws(() =>
    validateArticle(
      {
        ...article,
        content: [longParagraph, longParagraph, longParagraph, longParagraph, longParagraph],
      },
      sources,
      [],
      []
    )
  );
});

test("menolak artikel yang mengandung tag HTML mentah (anti stored-XSS)", () => {
  const article = {
    sourceId: 0,
    title: "Cara memilih website bisnis",
    slug: "cara-memilih-website-bisnis",
    excerpt: "Hal yang perlu dipertimbangkan.",
    category: "Tips Bisnis",
    tags: ["Website"],
    readTime: "5 menit",
    content: validContent,
  };
  const sources = [{ id: 0 }];
  // Tag HTML di konten, judul, excerpt, dan tag harus ditolak
  assert.throws(() =>
    validateArticle(
      { ...article, content: ["<img src=x onerror=alert(1)>", ...validContent.slice(1)] },
      sources,
      [],
      []
    )
  );
  assert.throws(() =>
    validateArticle(
      { ...article, title: "Judul <script>alert(1)</script> panjang sekali" },
      sources,
      [],
      []
    )
  );
  assert.throws(() =>
    validateArticle(
      { ...article, excerpt: '<iframe src="https://evil.example"></iframe>' },
      sources,
      [],
      []
    )
  );
  assert.throws(() => validateArticle({ ...article, tags: ["<b>Website</b>"] }, sources, [], []));
  // Teks biasa yang mengandung "<" tanpa tag (mis. matematika) tetap lolos
  assert.doesNotThrow(() =>
    validateArticle(
      { ...article, content: ["Anggaran 5 < 10 juta rupiah untuk tahap awal.", ...validContent] },
      sources,
      [],
      []
    )
  );
});

test("memilih gambar yang berbeda dari artikel terbaru dan memprioritaskan yang paling jarang dipakai", () => {
  const available = ["/img/a.webp", "/img/b.webp", "/img/c.webp"];
  const recent = ["/img/a.webp", "/img/b.webp"];
  assert.equal(pickDistinctImage(available, recent, ["/img/a.webp", "/img/b.webp"]), "/img/c.webp");
  // Jika semua pernah dipakai baru-baru ini, tetap memilih yang paling jarang dipakai
  assert.equal(
    pickDistinctImage(
      ["/img/a.webp", "/img/b.webp"],
      ["/img/a.webp", "/img/b.webp"],
      ["/img/a.webp", "/img/a.webp", "/img/b.webp"]
    ),
    "/img/b.webp"
  );
});
