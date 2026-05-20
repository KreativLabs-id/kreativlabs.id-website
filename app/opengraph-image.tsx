import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KreativLabs.id - Sistem Otomatisasi & Aplikasi UMKM Terbaik';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A192F 0%, #1E3A5F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '-2px',
            }}
          >
            Kreativ<span style={{ color: '#3B82F6' }}>Labs</span>.id
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '24px',
            lineHeight: 1.2,
          }}
        >
          Sistem Otomatisasi & Aplikasi UMKM
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '36px',
            color: '#3B82F6',
            fontWeight: 'bold',
            marginBottom: '32px',
          }}
        >
          Tingkatkan Profit Bisnis Anda
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.8)',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          Aplikasi kasir pintar, manajemen stok real-time, dan ekosistem bisnis terintegrasi.
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            width: '200px',
            height: '200px',
            background: 'rgba(59, 130, 246, 0.2)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            width: '250px',
            height: '250px',
            background: 'rgba(245, 158, 11, 0.1)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
