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
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Platform e-commerce modern dengan fitur lengkap dan user-friendly",
    image: "/ecommerce.png",
    fullDescription: "Platform e-commerce lengkap yang dirancang untuk meningkatkan penjualan online dengan pengalaman pengguna yang optimal. Sistem ini dilengkapi dengan manajemen produk, keranjang belanja, sistem pembayaran terintegrasi, dan dashboard admin yang powerful.",
    challenge: "Klien membutuhkan platform e-commerce yang dapat menangani ribuan produk dengan performa tinggi, sistem pembayaran yang aman, dan dashboard admin yang mudah digunakan untuk mengelola inventori dan pesanan.",
    solution: "Kami mengembangkan platform menggunakan Next.js untuk performa optimal, dengan integrasi payment gateway, sistem manajemen produk yang scalable, dan dashboard admin yang intuitif. Implementasi caching dan optimasi database memastikan loading time yang cepat.",
    results: [
      "Peningkatan konversi penjualan 45%",
      "Loading time < 2 detik",
      "Dapat menangani 100 produk",
      "Mobile responsive dengan UX yang excellent"
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Stripe Payment",
      "Redis Cache",
      "Vercel"
    ],
    duration: "45 hari",
    client: "Toko Online Indonesia",
    year: "2024",
    gallery: [
      "/ecommerce.png",
      "/ecommerce.png",
      "/ecommerce.png"
    ],
    features: [
      "Manajemen Produk & Kategori",
      "Keranjang Belanja & Wishlist",
      "Multiple Payment Gateway",
      "Order Tracking Real-time",
      "Dashboard Admin Lengkap",
      "Review & Rating System",
      "Promo & Discount Management",
      "Responsive Design"
    ]
  },
  {
    id: "corporate-website",
    title: "Corporate Website",
    category: "Web Design",
    description: "Website perusahaan profesional dengan desain minimalis dan elegan",
    image: "/companyprofile.png",
    fullDescription: "Website corporate modern yang mencerminkan profesionalisme dan kredibilitas perusahaan. Dirancang dengan fokus pada user experience dan konversi, dilengkapi dengan CMS untuk memudahkan update konten.",
    challenge: "Perusahaan membutuhkan website yang dapat meningkatkan brand awareness dan kredibilitas di mata klien, dengan konten yang mudah diupdate oleh tim internal tanpa bantuan developer.",
    solution: "Kami merancang website dengan desain minimalis yang elegan, menggunakan animasi subtle untuk meningkatkan engagement. Implementasi CMS headless memungkinkan tim klien untuk update konten dengan mudah melalui dashboard yang user-friendly.",
    results: [
      "Peningkatan traffic 120% dalam 3 bulan",
      "Bounce rate turun 35%",
      "Lead generation meningkat 80%",
      "Perfect score di Google PageSpeed"
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Sanity CMS",
      "React Hook Form",
      "Nodemailer",
      "Vercel"
    ],
    duration: "30 hari",
    client: "PT Maju Bersama",
    year: "2024",
    gallery: [
      "/companyprofile.png",
      "/companyprofile.png",
      "/companyprofile.png"
    ],
    features: [
      "Responsive Design",
      "CMS Integration",
      "Contact Form",
      "Blog System",
      "SEO Optimized",
      "Fast Loading",
      "Smooth Animations",
      "Multi-language Support"
    ]
  },
  {
    id: "website chat",
    title: "Website Chatly untuk Chat",
    category: "Fullstack Web Development",
    description: "Website chat untuk Chatly",
    image: "/chatly.png",
    fullDescription: "Website chat untuk Chatly",
    challenge: "Website harus mudah digunakan oleh berbagai kalangan usia, dengan interface yang menarik namun tidak overwhelming. Perlu balance antara fitur lengkap dengan simplicity.",
    solution: "Kami melakukan user research mendalam, membuat user persona, dan iterasi design berdasarkan feedback. Menggunakan design system yang konsisten dan mengikuti best practices mobile UI/UX.",
    results: [
      "User satisfaction score 4.8/5",
      "Task completion rate 95%",
      "App store rating 4.7/5",
      "Daily active users meningkat 200%"
    ],
    techStack: [
      "TypeScript",
      "Next.js 14",
      "Tailwind CSS",
      "Prisma ORM",
      "Stripe Payment",
      "Redis Cache",
      "Vercel",
      "Stripe Payment",
      "Redis Cache",
      "Vercel",
      "Socket.io",
      "Miro",
      "Maze"
    ],
    duration: "25 hari",
    client: "Chatly",
    year: "2025",
    gallery: [
      "/chatly.png",
      "/chatly.png",
      "/chatly.png"
    ],
    features: [
      "User Research & Persona",
      "Wireframing",
      "High-Fidelity Mockups",
      "Interactive Prototype",
      "Design System",
      "Usability Testing",
      "Responsive Layouts",
      "Accessibility Compliant"
    ]
  },
  {
    id: "website-top-up-game",
    title: "Website Top-Up Game",
    category: "Web Development",
    description: "Website top-up game dengan fitur lengkap dan user-friendly",
    image: "/topupgame.png",
    fullDescription: "Website top-up game yang dioptimasi untuk konversi tinggi dengan copywriting yang persuasif dan design yang menarik perhatian. Dilengkapi dengan A/B testing dan analytics untuk continuous improvement.",
    challenge: "Klien membutuhkan landing page yang dapat mengkonversi visitor menjadi leads dengan conversion rate minimal 5%, dengan loading time yang sangat cepat dan mobile-friendly.",
    solution: "Kami merancang landing page dengan fokus pada conversion optimization, menggunakan psychological triggers, clear CTA, dan social proof. Implementasi lazy loading dan image optimization memastikan performa maksimal.",
    results: [
      "Conversion rate 8.5%",
      "Loading time < 1 detik",
      "Bounce rate hanya 25%",
      "ROI meningkat 300%"
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Google Analytics",
      "Hotjar",
      "Mailchimp",
      "Vercel"
    ],
    duration: "15 hari",
    client: "PT. Top Up Game",
    year: "2025",
    gallery: [
      "/topupgame.png",
      "/topupgame.png",
      "/topupgame.png"
    ],
    features: [
      "Conversion Optimized",
      "Fast Loading",
      "Mobile Responsive",
      "Lead Capture Form",
      "Social Proof Section",
      "Video Integration",
      "Analytics Integration",
      "A/B Testing Ready"
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}
