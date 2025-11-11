# Testing Open Graph Meta Tags

## Perubahan yang Dilakukan

Saya telah memperbaiki konfigurasi Open Graph meta tags agar banner muncul dengan benar ketika link dibagikan di Instagram, WhatsApp, Facebook, dan platform social media lainnya.

### File yang Diubah/Dibuat:

1. **`app/layout.tsx`** - Update URL image menjadi absolut
2. **`app/blog/layout.tsx`** - Metadata untuk halaman blog Indonesia
3. **`app/en/blog/layout.tsx`** - Metadata untuk halaman blog English
4. **`app/blog/[slug]/layout.tsx`** - Metadata dinamis untuk artikel individual (ID)
5. **`app/en/blog/[slug]/layout.tsx`** - Metadata dinamis untuk artikel individual (EN)
6. **`app/blog/[slug]/opengraph-image.tsx`** - Dynamic OG image untuk artikel (ID)
7. **`app/en/blog/[slug]/opengraph-image.tsx`** - Dynamic OG image untuk artikel (EN)

## Perubahan Utama:

### ✅ URL Image Absolut
Sebelum: `/bannerkreativlabsid.png`
Sesudah: `https://kreativlabs.my.id/bannerkreativlabsid.png`

Instagram dan platform social media memerlukan URL absolut untuk menampilkan image preview.

### ✅ Metadata Lengkap
- Open Graph tags (og:title, og:description, og:image, og:url, dll)
- Twitter Card tags
- Article-specific tags untuk blog posts
- Dynamic metadata berdasarkan konten artikel

## Cara Testing:

### 1. Facebook Sharing Debugger
URL: https://developers.facebook.com/tools/debug/

1. Masukkan URL website Anda (contoh: `https://kreativlabs.my.id`)
2. Klik "Debug"
3. Jika ada cache lama, klik "Scrape Again"
4. Periksa apakah banner muncul dengan benar

### 2. LinkedIn Post Inspector
URL: https://www.linkedin.com/post-inspector/

1. Masukkan URL website
2. Klik "Inspect"
3. Periksa preview yang muncul

### 3. Twitter Card Validator
URL: https://cards-dev.twitter.com/validator

1. Masukkan URL website
2. Klik "Preview card"
3. Periksa preview yang muncul

### 4. WhatsApp & Instagram
Untuk testing di WhatsApp dan Instagram:

1. **WhatsApp Web**: 
   - Buka chat
   - Paste URL website
   - Tunggu preview muncul (bisa memakan waktu beberapa detik)

2. **Instagram DM**:
   - Kirim URL melalui Direct Message
   - Preview akan muncul otomatis

### 5. Testing Lokal dengan Meta Tags Checker
Gunakan browser extension atau online tools:
- **Meta Tags Checker**: https://metatags.io/
- **OpenGraph.xyz**: https://www.opengraph.xyz/

## Catatan Penting:

### Cache
Platform social media melakukan caching terhadap Open Graph data. Jika Anda sudah pernah share link sebelumnya:

1. **Clear cache** menggunakan debugging tools di atas
2. Tunggu beberapa menit hingga cache expired
3. Atau tambahkan query parameter dummy (contoh: `?v=2`) untuk bypass cache

### Image Requirements
Banner image (`bannerkreativlabsid.png`) sudah memenuhi spesifikasi:
- ✅ Ukuran: 1200x630 pixels (recommended)
- ✅ Format: PNG
- ✅ Size: ~600KB (di bawah 8MB limit)
- ✅ Accessible via HTTPS

### Deploy
Setelah deploy ke production:
1. Pastikan website accessible via HTTPS
2. Test semua URL (homepage, blog list, individual posts)
3. Clear cache di semua platform jika perlu

## Troubleshooting:

### Banner Tidak Muncul?

1. **Periksa URL image accessible**:
   ```
   https://kreativlabs.my.id/bannerkreativlabsid.png
   ```
   Buka di browser, pastikan image bisa diakses.

2. **Periksa meta tags di HTML**:
   - Buka website
   - View Page Source (Ctrl+U)
   - Cari `<meta property="og:image"`
   - Pastikan URL lengkap dan benar

3. **Clear cache platform**:
   - Gunakan debugging tools untuk force refresh
   - Atau tunggu beberapa jam

4. **Periksa robots.txt**:
   - Pastikan image tidak di-block

### Image Terpotong?

Pastikan aspect ratio banner adalah 1.91:1 (1200x630 atau 1200x627).

## Next Steps:

Setelah deploy, test dengan:
1. Share link homepage di Instagram DM
2. Share link blog post di WhatsApp
3. Share di Facebook/Twitter
4. Verifikasi semua preview muncul dengan benar

---

**Dibuat oleh**: Cascade AI
**Tanggal**: 11 November 2024
