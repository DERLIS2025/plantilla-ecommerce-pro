import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111113',
        stone: '#F7F7F5',
        pearl: '#ECEBE7',
        muted: '#6B6B6A',
        accent: '#3B4A3F'
      },
      boxShadow: {
        soft: '0 12px 32px -20px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};

export default config;
