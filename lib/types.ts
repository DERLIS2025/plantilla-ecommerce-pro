export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isOffer?: boolean;
  isRecommended?: boolean;
  previousPrice?: number;

  includesInstallation?: boolean; // 👈 AGREGAR ESTO
};