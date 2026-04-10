import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E9644',
        'dark-green': '#1F6E32',
        'soft-green': '#EAF6ED',
        'page-bg': '#F7F8F5',
        card: '#FFFFFF',
        'text-strong': '#1F2A1F',
        'text-soft': '#5F6B5F',
        border: '#DDE5DD'
      },
      boxShadow: {
        card: '0 10px 30px -20px rgba(31, 42, 31, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;