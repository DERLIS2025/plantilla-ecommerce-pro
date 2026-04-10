# Portal Verde Ecommerce Starter (Next.js)

Starter profesional de ecommerce para **Portal Verde**, construido con **Next.js App Router**, **TypeScript**, **Tailwind CSS** y **ESLint**.

## Stack técnico

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Qué incluye

- Header comercial realista con:
  - barra superior informativa
  - buscador principal con selector de categoría
  - acceso a cuenta, carrito y WhatsApp
- Home tipo tienda por categorías:
  - sidebar de categorías
  - banner promocional principal
  - franjas promocionales
  - secciones de productos: **Nuevos productos**, **Más vendidos**, **Ofertas**, **Recomendados**
- Página de catálogo (`/shop`)
- Página de detalle de producto (`/product/[slug]`)
- Carrito visual con estado local (`/cart`)
- Mock data local con precios en guaraníes
- Layout responsive para mobile y desktop
- Estructura lista para despliegue en Vercel

## Estructura principal

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
  category-sidebar.tsx
  footer.tsx
  header.tsx
  icons.tsx
  logo.tsx
  product-card.tsx
sections/
  home-hero.tsx
  promo-strip.tsx
  product-section.tsx
lib/
  data.ts
  types.ts
public/images/
  *.svg
```

## Instalación y uso

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Validación

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy en Vercel

1. Subí el repositorio a GitHub/GitLab/Bitbucket.
2. Importá el proyecto en Vercel.
3. Vercel detecta Next.js automáticamente.
4. Deploy.

No requiere configuraciones extras para el primer despliegue.

## Variables de entorno

Actualmente no se requieren variables de entorno.
