import type { Category, Product } from './types';

export const categories: Category[] = [
  { id: 'c1', name: 'Césped', slug: 'cesped' },
  { id: 'c2', name: 'Paisajismo', slug: 'paisajismo' },
  { id: 'c3', name: 'Plantas', slug: 'plantas' },
  { id: 'c4', name: 'Mantenimiento de jardines', slug: 'mantenimiento-jardines' },
  { id: 'c5', name: 'Piscinas', slug: 'piscinas' }
];

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'cesped-esmeralda-m2',
    name: 'Césped Esmeralda m²',
    description: 'Césped natural de alta calidad para jardines residenciales.',
    price: 31000,
    previousPrice: 35000,
    category: 'Césped',
    image: '/images/products/cesped-esmeralda.jpg',
    isOffer: true,
    isBestSeller: true,
    isRecommended: true,
    includesInstallation: true
  },
  {
    id: 'p2',
    slug: 'cesped-siempre-verde-m2',
    name: 'Césped Siempre Verde m²',
    description: 'Variedad resistente, ideal para mantener un verde intenso durante todo el año.',
    price: 25000,
    previousPrice: 35000,
    category: 'Césped',
    image: '/images/products/cesped-siempre-verde.jpg',
    isOffer: true,
    isRecommended: true,
    includesInstallation: true
  },
  {
    id: 'p3',
    slug: 'cesped-mani-docena',
    name: 'Césped Maní por Docena',
    description: 'Cobertura ornamental ideal para paisajismo y áreas decorativas.',
    price: 30000,
    previousPrice: 57000,
    category: 'Césped',
    image: '/images/products/cesped-mani.jpg',
    isNew: true,
    isRecommended: true,
    includesInstallation: true
  },
  {
    id: 'p4',
    slug: 'cesped-kavaju-m2',
    name: 'Césped Kavaju m²',
    description: 'Pasto resistente para exteriores y zonas de uso frecuente.',
    price: 25000,
    previousPrice: 57000,
    category: 'Césped',
    image: '/images/products/cesped-kavaju.jpg',
    isOffer: true,
    includesInstallation: true
  },
  {
    id: 'p5',
    slug: 'piso-ecologico-40x60',
    name: 'Piso Ecológico 40x60',
    description: 'Piso drenante ideal para jardines, senderos y estacionamientos.',
    price: 155000,
    previousPrice: 220000,
    category: 'Paisajismo',
    image: '/images/products/piso-ecologico.jpg',
    isBestSeller: true
  },
  {
    id: 'p6',
    slug: 'separador-cesped-caminos',
    name: 'Separador de Césped y Caminos',
    description: 'Separador flexible para delimitar jardines, bordes y senderos.',
    price: 15000,
    previousPrice: 30000,
    category: 'Paisajismo',
    image: '/images/products/separador.jpg',
    isOffer: true
  },
  {
    id: 'p7',
    slug: 'pisos-cemento-imitacion-madera',
    name: 'Pisos de Cemento Imitación Madera',
    description: 'Acabado decorativo moderno para caminos, patios y exteriores.',
    price: 95000,
    previousPrice: 185000,
    category: 'Paisajismo',
    image: '/images/products/piso-madera.jpg',
    isBestSeller: true
  },
  {
    id: 'p8',
    slug: 'granza-blanca-fina-decorativa',
    name: 'Granza Blanca Fina Decorativa',
    description: 'Ideal para decoración de jardines, maceteros y senderos.',
    price: 20000,
    previousPrice: 50000,
    category: 'Paisajismo',
    image: '/images/products/granza.jpg',
    isOffer: true
  }
];

export const nuevosProductos = products.filter((product) => product.isNew);
export const masVendidos = products.filter((product) => product.isBestSeller);
export const ofertas = products.filter((product) => product.isOffer);
export const recomendados = products.filter((product) => product.isRecommended);

export const cesped = products.filter((product) => product.category === 'Césped');
export const paisajismo = products.filter((product) => product.category === 'Paisajismo');

/* compatibilidad temporal con archivos viejos */
export const featuredProducts = recomendados;

export const formatPricePYG = (amount: number) =>
  `Gs. ${new Intl.NumberFormat('es-PY').format(amount)}`;