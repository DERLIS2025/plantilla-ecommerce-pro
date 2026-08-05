import { ImageResponse } from 'next/og';

export const alt =
  'Portal Verde - Césped, jardinería y paisajismo en Paraguay';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background:
            'linear-gradient(135deg, #0b2415 0%, #1e6336 58%, #64ba7b 100%)',
          color: 'white',
          padding: '72px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '900px'
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '26px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color: '#c5e8ce'
            }}
          >
            Portal Verde
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: '28px',
              fontSize: '72px',
              lineHeight: 1.05,
              fontWeight: 700
            }}
          >
            Transformamos tus espacios verdes
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: '30px',
              fontSize: '30px',
              color: '#e1f4e6'
            }}
          >
            Césped · Instalación · Jardinería · Paisajismo
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: '54px',
              fontSize: '24px',
              color: '#ffffff'
            }}
          >
            portalverde.com.py
          </div>
        </div>
      </div>
    ),
    size
  );
}
