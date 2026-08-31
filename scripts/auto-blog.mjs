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

async function generateBlog() {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-3.5-flash-lite',
      generationConfig: {
        responseMimeType: 'application/json',
      },
      systemInstruction: 'Anda adalah seorang penulis blog (*copywriter*) profesional yang ahli dalam bercerita secara natural (humanized content) layaknya manusia sungguhan. Tulisan Anda tidak kaku dan tidak terdengar seperti robot. Anda menulis untuk audiens pebisnis, UMKM, dan pengusaha di Indonesia.',
    });

    const prompt = `
Buatkan 1 artikel blog terbaru (minimal 5 paragraf) seputar strategi bisnis digital, digital marketing, pentingnya memiliki website untuk bisnis, atau tren teknologi penunjang penjualan untuk UMKM di tahun 2026.
PENTING: JANGAN membahas tutorial coding, teknis pemrograman, atau panduan membuat sistem AI. Ingat, website ini berjualan jasa pembuatan website, jadi artikel harus secara halus mengedukasi pembaca tentang pentingnya go-digital dan memiliki website profesional. Selipkan ajakan (Call to Action) santai di paragraf terakhir untuk berkonsultasi soal pembuatan website bersama tim KreativLabs.

Gunakan bahasa yang asyik, mengalir natural, relevan dengan pengusaha lokal (Sobat KreativLabs), dan BUKAN bahasa robot. Keluarkan hasil akhir dalam format JSON murni TANPA markdown block (tanpa \`\`\`json) dengan struktur yang sama persis seperti ini:
{
  "title": "Judul Artikel (Menarik, Clickable)",
  "slug": "judul-artikel-ditulis-seperti-ini",
  "excerpt": "Ringkasan pendek 2 kalimat untuk preview...",
  "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
  "category": "Pilih salah satu: Tips Bisnis / Update Teknologi / Programming Tips",
  "tags": ["Tag1", "Tag2", "Tag3", "Tag4"],
  "readTime": "X menit",
  "content": [
    "Paragraf 1...",
    "",
    "Paragraf 2...",
    "",
    "## Subjudul",
    "",
    "Paragraf 3..."
  ]
}
Catatan untuk content: Gunakan array of strings. Kosongkan string ("") untuk baris baru/jarak antar paragraf.
`;

    console.log('Memanggil Gemini API untuk men-generate artikel...');
    const result = await model.generateContent(prompt);
    let text = result.response.text().trim();
    
    // Clean up potential markdown formatting
    if (text.startsWith('```json')) {
      text = text.substring(7);
    }
    if (text.endsWith('```')) {
      text = text.substring(0, text.length - 3);
    }
    
    const blogData = JSON.parse(text);

    // Format current date
    const dateObj = new Date();
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const formattedDate = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

    // Construct the string to inject
    const newBlogEntry = `  {
    id: "${blogData.slug}",
    title: "${blogData.title}",
    slug: "${blogData.slug}",
    excerpt: "${blogData.excerpt}",
    image: "${blogData.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop'}",
    author: "KreativBot AI",
    date: "${formattedDate}",
    category: "${blogData.category}",
    tags: ${JSON.stringify(blogData.tags)},
    readTime: "${blogData.readTime}",
    content: ${JSON.stringify(blogData.content, null, 6).replace(/\n/g, '\n    ')}.join("\\n")
  }`;

    console.log(`Berhasil men-generate artikel: ${blogData.title}`);

    // Append to data/blogs.ts
    const blogsPath = path.resolve('data/blogs.ts');
    let blogsContent = fs.readFileSync(blogsPath, 'utf-8');

    // Find the last closing bracket of the array
    const insertPosition = blogsContent.lastIndexOf('];');
    if (insertPosition === -1) {
      throw new Error("Format data/blogs.ts tidak sesuai, tidak menemukan '];'");
    }

    // Insert the new entry before the last '];'
    // Also, we need to add a comma to the previous object if needed.
    // To keep it simple, we just find the last '}' before '];' and add a comma there.
    const lastBracePosition = blogsContent.lastIndexOf('}', insertPosition);
    if (lastBracePosition !== -1) {
      blogsContent = 
        blogsContent.slice(0, lastBracePosition + 1) + 
        ',\n' + 
        newBlogEntry + 
        '\n' + 
        blogsContent.slice(insertPosition);
      
      fs.writeFileSync(blogsPath, blogsContent, 'utf-8');
      console.log('Berhasil menambahkan artikel ke data/blogs.ts');
    } else {
      throw new Error("Tidak menemukan penutup object '}'");
    }

  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    process.exit(1);
  }
}

generateBlog();
