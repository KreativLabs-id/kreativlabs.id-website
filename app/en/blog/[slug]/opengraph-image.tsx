import { ImageResponse } from 'next/og';
import { getBlogPostBySlug } from '@/data/blogs';

export const runtime = 'edge';
export const alt = 'KreativLabs.id Blog Post';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(to bottom right, #0A192F, #1E3A5F)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <div style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}>
            KreativLabs.id
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0A192F, #1E3A5F)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Category Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              background: '#3B82F6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '50px',
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            {post.category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 'bold',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '30px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {post.title}
        </div>

        {/* Meta Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>📅</span>
            <span>{post.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>⏱️</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Logo at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Kreativ<span style={{ color: '#3B82F6' }}>Labs</span>.id
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
