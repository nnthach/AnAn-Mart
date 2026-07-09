import { ImageResponse } from 'next/og';

import { APP_DESCRIPTION, APP_NAME } from '@/config/constants';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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
          background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 24,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#C9A24B',
            fontWeight: 600,
          }}
        >
          Hoi An Alcohol Shop
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            fontSize: 108,
            fontWeight: 800,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}
        >
          {APP_NAME}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            maxWidth: 820,
            textAlign: 'center',
            fontSize: 28,
            lineHeight: 1.4,
            color: 'rgba(255,255,255,0.75)',
          }}
        >
          {APP_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size },
  );
}
