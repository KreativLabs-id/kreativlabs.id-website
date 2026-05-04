export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  duration: string;
  client: string;
  year: string;
  gallery: string[];
  features: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "omnisell-pro-integration",
    title: "OmniSell Pro Integration",
    category: "Sistem Manajemen Stok",
    description: "Sinkronisasi stok 5 cabang offline dan 3 marketplace secara real-time.",
    image: "/ecommerce.png",
    fullDescription: "Implementasi sistem OmniSell Pro untuk jaringan toko retail fashion yang mengalami kesulitan melacak stok antar cabang dan marketplace, sering berujung pada overselling dan komplain pelanggan.",
    challenge: "Klien memiliki 5 cabang offline dan aktif di Shopee, Tokopedia, serta website sendiri. Proses update stok dilakukan manual setiap malam, memakan waktu 3 jam dan memiliki tingkat human error 15%.",
    solution: "Kami mengimplementasikan OmniSell Pro dengan arsitektur cloud terpusat. Mengintegrasikan semua POS kasir di 5 cabang dengan API Marketplace. Setup diselesaikan dalam waktu 3 hari tanpa mengganggu operasional toko.",
    results: [
      "Human error dalam update stok turun menjadi 0%",
      "Waktu rekapitulasi stok hemat 3 jam/hari",
      "Peningkatan penjualan 45% karena tidak ada lagi stok 'nyangkut'",
      "Monitoring tersentralisasi dari dashboard owner"
    ],
    techStack: [
      "Next.js 14",
      "PostgreSQL",
      "Prisma ORM",
      "Marketplace APIs",
      "Redis Cache",
      "Vercel",
      "AWS S3"
    ],
    duration: "3 Hari Implementasi",
    client: "Toko Retail Fashion Nasional",
    year: "2025",
    gallery: [
      "/ecommerce1.png",
      "/ecommerce2.png",
      "/ecommerce3.png"
    ],
    features: [
      "Sinkronisasi Multi-Channel Real-time",
      "Notifikasi Stok Menipis (Low Stock Alert)",
      "Laporan Pergerakan Barang Otomatis",
      "Manajemen Multi-Gudang"
    ]
  },
  {
    id: "restoflow-ai",
    title: "RestoFlow AI Terpasang",
    category: "Sistem Kasir Restoran",
    description: "Otomatisasi alur pesanan meja ke dapur untuk restoran sibuk.",
    image: "/companyprofile.png",
    fullDescription: "Restoran keluarga dengan kapasitas 200 kursi mengalami kendala dalam mencatat pesanan saat jam sibuk (lunch/dinner), menyebabkan waktu tunggu yang lama dan pesanan sering salah antar.",
    challenge: "Proses order menggunakan kertas nota yang dibawa pelayan ke dapur sering hilang atau sulit dibaca koki. Waktu tunggu makanan mencapai rata-rata 45 menit saat weekend.",
    solution: "Kami memasang ekosistem RestoFlow AI, yang terdiri dari Tablet POS untuk pelayan, Kitchen Display System (KDS) di dapur, dan Dashboard Analytics untuk pemilik. Pesanan langsung masuk ke dapur secara digital dalam 1 detik.",
    results: [
      "Waktu penyajian pesanan (Order-to-Table) turun menjadi 20 menit",
      "Pesanan salah meja berkurang hingga 99%",
      "Turnover meja meningkat 35% saat weekend",
      "Pencatatan pemakaian bahan baku lebih akurat"
    ],
    techStack: [
      "React Native (Tablet)",
      "Node.js",
      "Socket.io (Real-time Order)",
      "PostgreSQL",
      "AWS EC2"
    ],
    duration: "5 Hari Implementasi",
    client: "Restoran Bintang Keluarga",
    year: "2025",
    gallery: [
      "/company1.png",
      "/company2.png",
      "/company3.png"
    ],
    features: [
      "Kitchen Display System (KDS)",
      "Table Management Visual",
      "Resep & Pengurangan Stok Bahan Baku",
      "Analitik Menu Terlaris"
    ]
  },
  {
    id: "autoreserve-system",
    title: "AutoReserve System",
    category: "Sistem Reservasi Otomatis",
    description: "Sistem booking otomatis 24/7 dengan pembayaran di muka untuk klinik.",
    image: "/chatly.png",
    fullDescription: "Klinik kecantikan premium sering mengalami kerugian karena pelanggan yang membatalkan jadwal sepihak (no-show) setelah melakukan reservasi via WhatsApp manual yang memakan waktu admin berjam-jam.",
    challenge: "Admin kewalahan membalas chat booking pelanggan. Angka no-show mencapai 20% yang membuat jadwal dokter dan terapis menjadi tidak efisien dan menyebabkan kerugian operasional.",
    solution: "Penerapan platform AutoReserve. Pelanggan bisa melihat slot jadwal kosong secara real-time dari link web, melakukan booking, dan wajib membayar DP via payment gateway otomatis.",
    results: [
      "Tingkat no-show turun drastis menjadi hanya 2%",
      "Jam kerja admin untuk urusan booking berkurang 80%",
      "Pendapatan dimuka (Cashflow) meningkat stabil",
      "Kepuasan pelanggan naik karena booking 24/7 tanpa antre chat"
    ],
    techStack: [
      "Next.js 14",
      "Midtrans Payment Gateway",
      "Tailwind CSS",
      "Prisma ORM",
      "WhatsApp API"
    ],
    duration: "7 Hari Implementasi",
    client: "Klinik Kecantikan Premium",
    year: "2026",
    gallery: [
      "/chatly1.png",
      "/chatly2.png",
    ],
    features: [
      "Real-time Slot Availability",
      "Automated DP Payment Integration",
      "WhatsApp Reminder H-1",
      "Dashboard Manajemen Jadwal"
    ]
  },
  {
    id: "whatsapp-autopilot",
    title: "WhatsApp Auto-Pilot",
    category: "Otomatisasi Komunikasi",
    description: "Bot otomatis pengirim tagihan dan notifikasi status pesanan pelanggan.",
    image: "/topupgame.png",
    fullDescription: "Perusahaan distributor logistik kewalahan menagih pembayaran invoice kepada 500+ agen mereka setiap akhir bulan. Proses penagihan manual lewat telepon sering memicu konflik dan sangat lambat.",
    challenge: "Tingkat keterlambatan pembayaran invoice (Accounts Receivable) mencapai 40%. Tim keuangan menghabiskan waktu 2 minggu setiap bulan hanya untuk follow-up tagihan via WhatsApp personal.",
    solution: "Integrasi sistem penagihan mereka dengan modul WhatsApp Auto-Pilot KreativLabs. Sistem ini mendeteksi invoice jatuh tempo dan mengirim pesan pengingat bersahabat namun formal secara otomatis di H-3, Hari H, dan H+3.",
    results: [
      "Keterlambatan pembayaran turun dari 40% menjadi 15%",
      "Tim keuangan menghemat waktu kerja 10 hari/bulan",
      "Penagihan berjalan konsisten tanpa perlu emosi personal",
      "Peningkatan cashflow perusahaan sebesar 30%"
    ],
    techStack: [
      "Node.js",
      "WhatsApp Business API",
      "Cron Jobs",
      "PostgreSQL",
      "REST API Integration"
    ],
    duration: "2 Hari Implementasi",
    client: "Distributor Logistik Regional",
    year: "2026",
    gallery: [
      "/topupgame1.png",
      "/topupgame2.png",
      "/topupgame3.png"
    ],
    features: [
      "Smart Auto-Reminder",
      "Integrasi Invoice API",
      "Template Pesan Dinamis",
      "Log Terbaca/Terkirim Real-time"
    ]
  },
  {
    id: "aplikasi-kasir-web",
    title: "Aplikasi Kasir Web Terpusat",
    category: "Sistem Point of Sale (POS)",
    description: "Sistem kasir cerdas untuk mencegah kebocoran profit dan mempercepat layanan.",
    image: "/tiptopframe1.png",
    fullDescription: "Aplikasi kasir web modern (AppStarter) yang diimplementasikan pada bisnis retail yang sebelumnya masih menggunakan buku catatan manual, sering mengalami selisih uang kas dan kesulitan menghitung profit.",
    challenge: "Banyak bisnis UMKM mengalami kebocoran karena kasir tidak mencatat transaksi dengan benar. Pada akhir hari, kas fisik tidak cocok dengan catatan, dan owner harus menghabiskan waktu 2 jam untuk rekapitulasi harian.",
    solution: "Kami menginstalasi Aplikasi Kasir Web Terpusat. Sistem membatasi hak akses kasir hanya untuk input transaksi, sementara owner memiliki hak penuh memantau dashboard analitik dari rumah.",
    results: [
      "Selisih kasir harian berkurang menjadi 0 rupiah",
      "Rekapitulasi tutup buku hanya butuh waktu 5 menit",
      "Owner tidak perlu datang ke toko setiap hari",
      "Analisis menu/produk terlaris secara otomatis"
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "NextAuth.js",
      "Zustand"
    ],
    duration: "1 Hari Implementasi",
    client: "Jaringan Minimarket Lokal",
    year: "2025",
    gallery: [
      "/cashier1.png",
      "/cashier2.png",
    ],
    features: [
      "Point of Sale (POS) Super Cepat",
      "Pembatasan Hak Akses Karyawan",
      "Laporan Profit Real-time",
      "Print Struk Thermal & Digital"
    ],
    link: "#contact"
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}
