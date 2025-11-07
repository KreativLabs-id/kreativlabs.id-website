import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0A192F 0%, #3B82F6 100%)',
          borderRadius: '40px',
        }}
      >
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: '-3px',
            marginBottom: '8px',
          }}
        >
          KL
        </div>
        <div
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: '600',
          }}
        >
          KreativLabs
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
