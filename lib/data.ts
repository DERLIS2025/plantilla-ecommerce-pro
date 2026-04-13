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
    seoDescription:
      'Césped Esmeralda natural ideal para jardines residenciales, patios y áreas verdes. Destaca por su color intenso, textura uniforme y excelente adaptación al clima de Paraguay. Una opción práctica para lograr un jardín prolijo, natural y de gran presencia visual.',
    benefits: [
      'Color verde intenso y uniforme',
      'Excelente presentación estética',
      'Ideal para jardines residenciales',
      'Incluye instalación'
    ],
    recommendations: [
      'Recomendado para patios y jardines familiares',
      'Ideal para proyectos residenciales de paisajismo',
      'Se luce mejor con bordes delimitados y granza decorativa'
    ],
    relatedProducts: [
      'granza-blanca-fina-decorativa',
      'separador-cesped-caminos',
      'piso-ecologico-40x60'
    ],
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
    seoDescription:
      'Césped Siempre Verde pensado para quienes buscan un jardín fresco, uniforme y resistente. Su gran ventaja es mantener una apariencia verde atractiva durante gran parte del año, siendo una excelente alternativa para espacios exteriores con uso frecuente.',
    benefits: [
      'Alta resistencia para exteriores',
      'Mantiene un verde atractivo',
      'Buena cobertura visual',
      'Incluye instalación'
    ],
    recommendations: [
      'Ideal para jardines con uso diario',
      'Recomendado para viviendas y áreas comunes',
      'Combina muy bien con senderos y pisos decorativos'
    ],
    relatedProducts: [
      'piso-ecologico-40x60',
      'separador-cesped-caminos',
      'granza-blanca-fina-decorativa'
    ],
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
    seoDescription:
      'Césped Maní por docena ideal para proyectos decorativos y paisajismo. Es una cobertura ornamental muy valorada por su apariencia natural, bajo perfil y capacidad para aportar un acabado diferente en jardines, bordes y zonas verdes decorativas.',
    benefits: [
      'Cobertura ornamental atractiva',
      'Ideal para paisajismo decorativo',
      'Aporta un acabado natural y prolijo',
      'Incluye instalación'
    ],
    recommendations: [
      'Perfecto para bordes de jardín y espacios decorativos',
      'Muy recomendado para proyectos de paisajismo',
      'Se complementa bien con granza y separadores'
    ],
    relatedProducts: [
      'granza-blanca-fina-decorativa',
      'separador-cesped-caminos',
      'pisos-cemento-imitacion-madera'
    ],
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
    seoDescription:
      'Césped Kavaju natural recomendado para exteriores con mayor exigencia. Su resistencia y practicidad lo convierten en una excelente opción para jardines amplios, espacios con tránsito frecuente y proyectos donde se busca durabilidad y buena presencia.',
    benefits: [
      'Mayor resistencia para uso frecuente',
      'Ideal para exteriores amplios',
      'Buena durabilidad visual',
      'Incluye instalación'
    ],
    recommendations: [
      'Recomendado para jardines con alto tránsito',
      'Ideal para patios amplios y zonas funcionales',
      'Se complementa con pisos y delimitadores decorativos'
    ],
    relatedProducts: [
      'piso-ecologico-40x60',
      'separador-cesped-caminos',
      'granza-blanca-fina-decorativa'
    ],
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
    seoDescription:
      'Piso Ecológico 40x60 diseñado para jardines, senderos y espacios exteriores. Su formato permite un acabado funcional y atractivo, ayudando a ordenar visualmente el área y mejorar la circulación en proyectos de paisajismo y decoración exterior.',
    benefits: [
      'Ideal para senderos y jardines',
      'Aporta orden visual al espacio',
      'Mejora la circulación exterior',
      'Excelente complemento para césped'
    ],
    recommendations: [
      'Recomendado para caminos y accesos de jardín',
      'Ideal para combinar con césped natural',
      'Muy útil en proyectos de paisajismo moderno'
    ],
    relatedProducts: [
      'cesped-esmeralda-m2',
      'cesped-siempre-verde-m2',
      'granza-blanca-fina-decorativa'
    ],
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
    seoDescription:
      'Separador de césped y caminos ideal para delimitar áreas verdes, senderos y bordes decorativos. Es un producto muy útil para mantener un diseño más prolijo, definido y profesional en jardines residenciales y proyectos de paisajismo.',
    benefits: [
      'Delimita espacios con prolijidad',
      'Mejora el acabado del jardín',
      'Flexible y funcional',
      'Ideal para paisajismo'
    ],
    recommendations: [
      'Muy recomendado para bordes de césped',
      'Ideal para senderos decorativos',
      'Se complementa con granza y pisos exteriores'
    ],
    relatedProducts: [
      'granza-blanca-fina-decorativa',
      'piso-ecologico-40x60',
      'cesped-esmeralda-m2'
    ],
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
    seoDescription:
      'Pisos de cemento imitación madera con acabado decorativo moderno para patios, caminos y exteriores. Son ideales para quienes buscan un estilo cálido, elegante y resistente, combinando la estética de la madera con la practicidad del cemento.',
    benefits: [
      'Estética cálida y moderna',
      'Ideal para exteriores',
      'Aporta diseño al paisajismo',
      'Muy buen complemento decorativo'
    ],
    recommendations: [
      'Recomendado para patios y caminos principales',
      'Ideal para combinar con césped y granza',
      'Excelente para proyectos residenciales modernos'
    ],
    relatedProducts: [
      'cesped-esmeralda-m2',
      'granza-blanca-fina-decorativa',
      'separador-cesped-caminos'
    ],
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
    seoDescription:
      'Granza blanca fina decorativa ideal para embellecer jardines, maceteros, senderos y bordes. Aporta contraste, limpieza visual y una terminación prolija en proyectos de paisajismo, siendo uno de los complementos más usados para realzar espacios exteriores.',
    benefits: [
      'Aporta contraste y limpieza visual',
      'Ideal para senderos y bordes',
      'Muy utilizada en decoración exterior',
      'Combina con césped y pisos'
    ],
    recommendations: [
      'Ideal para maceteros y senderos decorativos',
      'Muy recomendada para acompañar césped natural',
      'Perfecta para resaltar bordes y caminos'
    ],
    relatedProducts: [
      'separador-cesped-caminos',
      'piso-ecologico-40x60',
      'cesped-siempre-verde-m2'
    ],
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
