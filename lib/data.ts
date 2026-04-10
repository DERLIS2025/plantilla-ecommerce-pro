import type { Category, Product } from '@/lib/types';

export const categories: Category[] = [
  { id: 'c1', name: 'Pastos', slug: 'pastos' },
  { id: 'c2', name: 'Paisajismo', slug: 'paisajismo' },
  { id: 'c3', name: 'Plantas', slug: 'plantas' },
  { id: 'c4', name: 'Mantenimiento de jardines', slug: 'mantenimiento-jardines' },
  { id: 'c5', name: 'Piscinas', slug: 'piscinas' },
  { id: 'c6', name: 'Decoración de jardín', slug: 'decoracion-jardin' },
  { id: 'c7', name: 'Accesorios de jardín', slug: 'accesorios-jardin' }
];

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    description: 'Planta tropical de interior con hojas grandes y decorativas.',
    price: 185000,
    category: 'Plantas',
    image: '/images/product-chair.svg',
    isNew: true,
    isBestSeller: true,
    isRecommended: true
  },
  {
    id: 'p2',
    slug: 'sansevieria-premium',
    name: 'Sansevieria Premium',
    description: 'Resistente, elegante y perfecta para ambientes de bajo mantenimiento.',
    price: 95000,
    category: 'Plantas',
    image: '/images/product-lamp.svg',
    isBestSeller: true,
    isOffer: true,
    previousPrice: 112000
  },
  {
    id: 'p3',
    slug: 'helecho-colgante',
    name: 'Helecho Colgante',
    description: 'Ideal para balcones y galerías, aporta frescura natural.',
    price: 65000,
    category: 'Plantas',
    image: '/images/product-desk.svg',
    isNew: true,
    isOffer: true,
    previousPrice: 79000
  },
  {
    id: 'p4',
    slug: 'maceta-ceramica-blanca-25cm',
    name: 'Maceta Cerámica Blanca 25 cm',
    description: 'Diseño minimalista, excelente drenaje y gran presencia.',
    price: 78000,
    category: 'Decoración de jardín',
    image: '/images/product-duvet.svg',
    isRecommended: true
  },
  {
    id: 'p5',
    slug: 'set-macetas-barro-x3',
    name: 'Set Macetas de Barro x3',
    description: 'Conjunto artesanal de macetas para interior y patio.',
    price: 98000,
    category: 'Decoración de jardín',
    image: '/images/product-table.svg',
    isBestSeller: true
  },
  {
    id: 'p6',
    slug: 'sustrato-universal-20kg',
    name: 'Sustrato Universal 20 kg',
    description: 'Mezcla balanceada para macetas, huerta y jardines.',
    price: 42000,
    category: 'Mantenimiento de jardines',
    image: '/images/product-office-chair.svg',
    isOffer: true,
    previousPrice: 52000
  },
  {
    id: 'p7',
    slug: 'fertilizante-npk-jardin',
    name: 'Fertilizante NPK Jardín',
    description: 'Nutrición completa para estimular crecimiento y floración.',
    price: 35000,
    category: 'Mantenimiento de jardines',
    image: '/images/product-lamp.svg',
    isNew: true
  },
  {
    id: 'p8',
    slug: 'kit-herramientas-jardineria',
    name: 'Kit Herramientas de Jardinería',
    description: 'Set de herramientas esenciales para el cuidado diario.',
    price: 120000,
    category: 'Accesorios de jardín',
    image: '/images/product-desk.svg',
    isBestSeller: true,
    isRecommended: true
  },
  {
    id: 'p9',
    slug: 'palmera-areca-mediana',
    name: 'Palmera Areca Mediana',
    description: 'Palmera elegante para espacios amplios y luminosos.',
    price: 210000,
    category: 'Plantas',
    image: '/images/product-chair.svg',
    isRecommended: true
  }
];

export const nuevosProductos = products.filter((product) => product.isNew);
export const masVendidos = products.filter((product) => product.isBestSeller);
export const ofertas = products.filter((product) => product.isOffer);
export const recomendados = products.filter((product) => product.isRecommended);

/* compatibilidad temporal con archivos viejos */
export const featuredProducts = recomendados;

export const formatPricePYG = (amount: number) =>
  `Gs. ${new Intl.NumberFormat('es-PY').format(amount)}`;
