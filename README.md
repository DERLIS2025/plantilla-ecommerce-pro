# Atelier&Co Ecommerce Starter (Next.js)

A premium ecommerce starter built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **ESLint**, structured for production and ready to deploy on **Vercel**.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Features Included

- Home page with:
  - Hero section
  - Featured categories
  - Featured products
  - Promo banner
  - Benefits/trust section
  - Newsletter section
- Shop/Catalog page
- Product detail page (`/product/[slug]`)
- Cart page with local visual state
- Reusable layout and UI components (header, footer, cards)
- Local mock data (no external backend)
- Basic SEO metadata setup
- Optimized images with `next/image`

## Project Structure

```bash
app/
  cart/page.tsx
  product/[slug]/page.tsx
  shop/page.tsx
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx
components/
  add-to-cart-button.tsx
  cart-client.tsx
  category-card.tsx
  footer.tsx
  header.tsx
  icons.tsx
  logo.tsx
  product-card.tsx
sections/
  benefits.tsx
  featured-categories.tsx
  featured-products.tsx
  hero.tsx
  newsletter.tsx
  promo-banner.tsx
lib/
  data.ts
  types.ts
public/images/
  *.svg
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3) Lint and type-check

```bash
npm run lint
npm run typecheck
```

### 4) Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Vercel will detect Next.js automatically.
4. Click **Deploy**.

No additional configuration is required for first deploy.

## Environment Variables

No environment variables are required currently.

When integrating a backend later, add credentials to `.env.local` and configure them in Vercel Project Settings.
