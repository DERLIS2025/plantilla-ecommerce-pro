import type { SVGProps } from 'react';

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function CartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M3 4h2l2.2 10.2A2 2 0 0 0 9.2 16H18a2 2 0 0 0 2-1.6L22 7H7" />
    </svg>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c2-3.5 5-5 8-5s6 1.5 8 5" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.6 0 .3 5.2.3 11.69c0 2.06.53 4.08 1.54 5.87L0 24l6.6-1.82a11.77 11.77 0 0 0 5.48 1.4h.01c6.48 0 11.78-5.2 11.79-11.69a11.6 11.6 0 0 0-3.36-8.41ZM12.1 21.5h-.01a9.71 9.71 0 0 1-4.95-1.35l-.36-.21-3.92 1.08 1.05-3.82-.24-.39a9.62 9.62 0 0 1-1.48-5.12c0-5.34 4.35-9.68 9.7-9.68a9.6 9.6 0 0 1 6.85 2.84 9.57 9.57 0 0 1 2.83 6.85c0 5.34-4.35 9.68-9.69 9.68Zm5.3-7.24c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.18 5.04 4.45.7.3 1.25.47 1.67.6.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z" />
    </svg>
  );
}