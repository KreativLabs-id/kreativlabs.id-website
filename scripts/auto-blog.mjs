import { GoogleGenerativeAI } from '@google/generative-ai';
import { loadEnvFile } from 'node:process';
import fs from 'fs';
import path from 'path';

if (fs.existsSync('.env.local')) {
  loadEnvFile('.env.local');
}

// Get API Key from environment variable
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('Error: GEMINI_API_KEY is missing.');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

// Pool of diverse themes to ensure varied blog topics
const THEMES = [
  {
    category: 'Tips Bisnis',
    focus: 'Strategi konversi landing page, cara mengubah pengunjung website menjadi pembeli setia, psikologi harga, dan pentingnya branding website.',
    imagePool: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=630&fit=crop'
    ]
  },
  {
    category: 'Update Teknologi',
    focus: 'Tren teknologi web modern 2026, pengaruh kecepatan loading website pada omzet, optimasi mobile-friendly, dan integrasi AI cerdas untuk bisnis.',
    imagePool: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=630&fit=crop'
    ]
  },
  {
    category: 'Tips Bisnis',
    focus: 'Perbandingan jualan di medsos/marketplace vs memiliki website sendiri, cara membangun aset digital mandiri yang anti-banned dan anti-algoritma.',
    imagePool: [
      'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=630&fit=crop'
    ]
  },
  {
    category: 'Desain & Branding',
    focus: 'Pengaruh desain visual & logo profesional terhadap persepsi harga produk, psikologi warna dalam UI/UX, dan tips membuat tampilan toko online dipercaya pembeli.',
    imagePool: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=630&fit=crop'
    ]
  },
  {
    category: 'SEO & Marketing',
    focus: 'Tips agar website ditemukan di halaman 1 Google (SEO dasar untuk UMKM), strategi kata kunci lokal, dan cara mendatangkan pengunjung gratis setiap hari.',
    imagePool: [
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1200&h=630&fit=crop'
    ]
  }
];

function extractExistingBlogData(blogsContent) {
  const titles = [];
  const slugs = [];
  const titleRegex = /title:\s*["'`](.*?)["'`]/g;
  const slugRegex = /slug:\s*["'`](.*?)["'`]/g;

  let match;
  while ((match = titleRegex.exec(blogsContent)) !== null) {
    titles.push(match[1]);
  }
  while ((match = slugRegex.exec(blogsContent)) !== null) {
    slugs.push(match[1]);
  }

  return { titles, slugs };
}

async function generateBlog() {
  try {
    const blogsPath = path.resolve('data/blogs.ts');
    let blogsContent = fs.readFileSync(blogsPath, 'utf-8');

    // Extract existing titles & slugs to prevent repetition
    const { titles: existingTitles, slugs: existingSlugs } = extractExistingBlogData(blogsContent);
    const recentTitles = existingTitles.slice(-12);

    // Pick a random theme
    const selectedTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    const randomImage = selectedTheme.imagePool[Math.floor(Math.random() * selectedTheme.imagePool.length)];

    console.log(`Kategori terpilih: ${selectedTheme.category}`);
    console.log(`Fokus topik: ${selectedTheme.focus}`);

    const model = genAI.getGenerativeModel({
      model: 'gemini-3.5-flash-lite',
      generationConfig: {
        responseMimeType: 'application/json',
      },
      systemInstruction: 'Anda adalah seorang penulis blog (*copywriter*) profesional yang ahli dalam bercerita secara natural (humanized content) layaknya manusia sungguhan. Tulisan Anda tidak kaku dan tidak terdengar seperti robot. Anda menulis untuk audiens pebisnis, UMKM, dan pengusaha di Indonesia.',
    });

    const prompt = `
Buatkan 1 artikel blog BARU & UNIK (minimal 5-6 paragraf lengkap dengan subjudul) dengan ketentuan berikut:

TOPIK UTAMA: ${selectedTheme.focus}
KATEGORI: ${selectedTheme.category}

PENTING - ATURAN ANTI-DUPLIKAT:
Berikut adalah daftar judul artikel yang SUDAH PERNAH DITULIS sebelumnya:
${recentTitles.map((t, i) => `${i + 1}. ${t}`).join('\n')}

JANGAN PERNAH membuat judul atau sudut pandang yang mirip/identik dengan daftar judul di atas! Buat topik yang segar, unik, dan memiliki *angle* baru.

PANDUAN PENULISAN:
- JANGAN membahas tutorial coding atau panduan teknis pemrograman yang rumit.
- Ingat, website ini (KreativLabs.id) menyediakan jasa pembuatan website profesional & desain grafis untuk UMKM dan bisnis.
- Tulis dengan gaya bahasa yang asyik, edukatif, mengalir natural (human-written feel), menyapa pembaca sebagai "Sobat KreativLabs".
- Selipkan ajakan santai (Call to Action) di akhir artikel untuk berkonsultasi seputar pembuatan website atau desain bersama tim KreativLabs.

Format output HARUS berupa JSON valid dengan skema berikut:
{
  "title": "Judul Artikel (Unik, Menarik, Clickable)",
  "slug": "slug-judul-artikel-unik-tanpa-spasi",
  "excerpt": "Ringkasan pendek 2 kalimat untuk preview...",
  "category": "${selectedTheme.category}",
  "tags": ["Tag1", "Tag2", "Tag3", "Tag4"],
  "readTime": "4 menit",
  "content": [
    "Paragraf 1 pembuka yang memikat...",
    "",
    "Paragraf 2 penjelasan masalah yang sering dialami...",
    "",
    "## Subjudul Menarik",
    "",
    "Paragraf 3 solusi dan insight mendalam...",
    "",
    "## Subjudul Kedua",
    "",
    "Paragraf 4 tips praktis yang bisa diterapkan...",
    "",
    "Paragraf 5 penutup dan call to action santai bersama KreativLabs..."
  ]
}
Catatan untuk content: Gunakan array of strings. Kosongkan string ("") untuk baris baru/jarak antar paragraf.
`;

    console.log('Memanggil Gemini API untuk men-generate artikel...');
    const result = await model.generateContent(prompt);
    let text = result.response.text().trim();

    // Clean up potential markdown formatting if any
    if (text.startsWith('```json')) {
      text = text.substring(7);
    }
    if (text.endsWith('```')) {
      text = text.substring(0, text.length - 3);
    }

    const blogData = JSON.parse(text);

    // Make sure slug is unique
    let finalSlug = blogData.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/--+/g, '-');
    if (existingSlugs.includes(finalSlug)) {
      finalSlug = `${finalSlug}-${Date.now().toString().slice(-4)}`;
    }

    // Format current date
    const dateObj = new Date();
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const formattedDate = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

    // Construct the string to inject
    const newBlogEntry = `  {
    id: "${finalSlug}",
    title: "${blogData.title.replace(/"/g, '\\"')}",
    slug: "${finalSlug}",
    excerpt: "${blogData.excerpt.replace(/"/g, '\\"')}",
    image: "${randomImage}",
    author: "KreativBot AI",
    date: "${formattedDate}",
    category: "${blogData.category || selectedTheme.category}",
    tags: ${JSON.stringify(blogData.tags || [])},
    readTime: "${blogData.readTime || '4 menit'}",
    content: ${JSON.stringify(blogData.content, null, 6).replace(/\n/g, '\n    ')}.join("\\n")
  }`;

    console.log(`Berhasil men-generate artikel: "${blogData.title}"`);
    console.log(`Slug: ${finalSlug}`);

    // Find the last closing bracket of the array
    const insertPosition = blogsContent.lastIndexOf('];');
    if (insertPosition === -1) {
      throw new Error("Format data/blogs.ts tidak sesuai, tidak menemukan '];'");
    }

    const lastBracePosition = blogsContent.lastIndexOf('}', insertPosition);
    if (lastBracePosition !== -1) {
      blogsContent =
        blogsContent.slice(0, lastBracePosition + 1) +
        ',\n' +
        newBlogEntry +
        '\n' +
        blogsContent.slice(insertPosition);

      fs.writeFileSync(blogsPath, blogsContent, 'utf-8');
      console.log('✅ Berhasil menambahkan artikel baru ke data/blogs.ts');
    } else {
      throw new Error("Tidak menemukan penutup object '}'");
    }

  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    process.exit(1);
  }
}

generateBlog();
