"use client";

import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fade-right">
              <div className="relative">
                {/* Decorative Background Elements */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-40 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
                
                <div className="relative space-y-6">

                  {/* Main Heading with gradient accent */}
                  <div className="space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                      <span className="text-foreground">Tentang</span>
                      <br />
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        KreativLabs
                      </span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                  </div>

                  {/* Image Section */}
                  <div className="relative pt-4">
                    <div className="relative aspect-[3/2] max-w-lg rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                        alt="KreativLabs Team"
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Additional decorative element */}
                  <div className="flex items-center gap-3 pt-4">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <span className="text-foreground/40 text-xs font-medium">Startup B2B Spesialis UMKM</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Content - Description */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="space-y-6">
                {/* Founded Info */}
                <div className="space-y-4">
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Didirikan pada <span className="text-foreground font-semibold">2025</span>, KreativLabs hadir dengan visi menjadi <span className="text-foreground font-semibold">Startup B2B spesialis otomatisasi</span> yang memberdayakan bisnis UMKM di Indonesia untuk menskalakan operasional mereka melalui ekosistem perangkat lunak cerdas.
                  </p>
                </div>

                {/* Premium Solutions */}
                <div className="space-y-4">
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Kami mengembangkan <span className="text-foreground font-semibold">sistem kasir pintar, manajemen inventori real-time, dan platform reservasi otomatis</span> yang terintegrasi penuh. Sistem kami dirancang dengan arsitektur <span className="text-foreground font-semibold">Cloud-Native</span> untuk menjamin keamanan data tingkat tinggi dan performa anti-lelet saat toko Anda sedang ramai.
                  </p>
                </div>

                {/* UX & Partnership */}
                <div className="space-y-4">
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Dengan menerapkan antarmuka yang sangat <span className="text-foreground font-semibold">intuitif dan mudah dipahami</span>, kami memastikan sistem aplikasi kami dapat langsung digunakan oleh kasir atau karyawan Anda tanpa memerlukan pelatihan khusus. Kami memfokuskan hasil akhir pada <span className="text-foreground font-semibold">peningkatan efisiensi</span> dan kecepatan transaksi operasional harian.
                  </p>
                </div>

                {/* Impact & Innovation */}
                <div className="space-y-4">
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Infrastruktur kami didukung oleh server <span className="text-foreground font-semibold">skalabel dan stabil</span> untuk mencegah kebocoran data. Kami konsisten mengembangkan teknologi otomasi terbaru yang <span className="text-foreground font-semibold">future-proof</span>, memastikan bisnis klien kami selalu memimpin satu langkah di depan kompetitor dalam hal teknologi operasional.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={50} />
    </section>
  );
}
