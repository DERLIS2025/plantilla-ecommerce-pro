import type { Category, Product } from '@/lib/types';

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Living Room',
    slug: 'living-room',
    description: 'Minimal forms, rich textures, and timeless comfort.',
    image: '/images/category-living.svg'
  },
  {
    id: 'c2',
    name: 'Bedroom',
    slug: 'bedroom',
    description: 'Elevated essentials for restorative daily rituals.',
    image: '/images/category-bedroom.svg'
  },
  {
    id: 'c3',
    name: 'Workspace',
    slug: 'workspace',
    description: 'Quiet focus meets design-forward utility.',
    image: '/images/category-workspace.svg'
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'noir-lounge-chair',
    name: 'Noir Lounge Chair',
    description: 'Curved oak frame and high-density bouclé upholstery.',
    price: 649,
    category: 'Living Room',
    image: '/images/product-chair.svg',
    featured: true,
    tags: ['best-seller']
  },
  {
    id: 'p2',
    slug: 'sable-floor-lamp',
    name: 'Sable Floor Lamp',
    description: 'Warm ambient tone with brushed brass detailing.',
    price: 229,
    category: 'Living Room',
    image: '/images/product-lamp.svg',
    featured: true
  },
  {
    id: 'p3',
    slug: 'atelier-desk',
    name: 'Atelier Desk',
    description: 'Solid walnut desk with hidden cable management.',
    price: 899,
    category: 'Workspace',
    image: '/images/product-desk.svg',
    featured: true
  },
  {
    id: 'p4',
    slug: 'linen-duvet-set',
    name: 'Linen Duvet Set',
    description: 'Stonewashed linen for breathable softness year-round.',
    price: 189,
    category: 'Bedroom',
    image: '/images/product-duvet.svg'
  },
  {
    id: 'p5',
    slug: 'arc-side-table',
    name: 'Arc Side Table',
    description: 'Compact marble top with sculpted matte-black base.',
    price: 279,
    category: 'Living Room',
    image: '/images/product-table.svg'
  },
  {
    id: 'p6',
    slug: 'halo-desk-chair',
    name: 'Halo Desk Chair',
    description: 'Ergonomic support wrapped in tailored vegan leather.',
    price: 399,
    category: 'Workspace',
    image: '/images/product-office-chair.svg'
  }
];

export const featuredProducts = products.filter((product) => product.featured);

export const formatPrice = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
