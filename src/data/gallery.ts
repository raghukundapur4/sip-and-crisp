import { menuCategories } from './menu';
import { getItemImage } from './menuImages';

export type GalleryCategory = 'drinks' | 'food';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  menuCategory: string;
}

function toGalleryCategory(categoryId: string): GalleryCategory {
  if (['sandwiches', 'pizzas'].includes(categoryId)) return 'food';
  return 'drinks';
}

export const galleryImages: GalleryImage[] = menuCategories.flatMap((category) =>
  category.items.map((item, index) => ({
    id: `${category.id}-${index}`,
    src: getItemImage(item.name, category.id),
    alt: item.name,
    category: toGalleryCategory(category.id),
    menuCategory: category.name,
  })),
);
