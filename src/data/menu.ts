export interface MenuItem {
  name: string;
  price: number;
  priceSecondary?: number;
  description: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}

export const menuHours = '11:00 AM – 12:00 AM';

export const menuCategories: MenuCategory[] = [
  {
    id: 'juices',
    name: 'Juices',
    items: [
      { name: 'Orange', price: 60, description: 'Freshly squeezed orange juice.' },
      { name: 'Mosambi', price: 60, description: 'Sweet mosambi juice, served chilled.' },
      { name: 'Pineapple', price: 60, description: 'Tropical pineapple juice.' },
      { name: 'Apple', price: 80, description: 'Crisp apple juice.' },
      { name: 'Kiwi', price: 100, description: 'Tangy kiwi juice.' },
      { name: 'Grapes', price: 70, description: 'Fresh grape juice.' },
      { name: 'Strawberry', price: 100, description: 'Sweet strawberry juice.' },
      { name: 'Watermelon', price: 60, description: 'Cooling watermelon juice.', featured: true },
      { name: 'Plum', price: 100, description: 'Rich plum juice.' },
      { name: 'Lychee', price: 120, description: 'Fragrant lychee juice.' },
      { name: 'Coconut Crunch', price: 100, description: 'Creamy coconut with a crunchy twist.' },
      { name: 'Cocktail', price: 90, description: 'Mixed fruit cocktail juice.' },
      { name: 'Pomegranate', price: 80, description: 'Ruby-red pomegranate juice.' },
      { name: 'Maramari', price: 80, description: 'House special maramari blend.' },
      { name: 'Ganga Jamuna', price: 80, description: 'Classic orange and mosambi mix.' },
      { name: 'Saraswati', price: 80, description: 'Signature Saraswati blend.' },
      { name: 'Muskmelon', price: 70, description: 'Refreshing muskmelon juice.' },
    ],
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes',
    items: [
      { name: 'Avocado', price: 110, description: 'Creamy avocado milkshake.' },
      { name: 'Strawberry', price: 120, description: 'Classic strawberry milkshake.' },
      { name: 'Sitaphal', price: 120, description: 'Custard apple milkshake.' },
      { name: 'Mulberry', price: 140, description: 'Rich mulberry milkshake.' },
      { name: 'Anjeer', price: 110, description: 'Fig milkshake with natural sweetness.' },
      { name: 'Chikoo', price: 70, description: 'Sapota milkshake.' },
      { name: 'Kiwi', price: 110, description: 'Tangy kiwi milkshake.' },
      { name: 'Banana', price: 40, description: 'Simple, creamy banana shake.' },
      { name: 'Cold Coffee', price: 80, description: 'Iced coffee shake.' },
      { name: 'Coffee-Late', price: 90, description: 'Coffee and milk blend.' },
      { name: 'Butterscotch', price: 80, description: 'Butterscotch flavoured shake.' },
      { name: 'Vanilla', price: 80, description: 'Classic vanilla milkshake.' },
      { name: 'Blueberry', price: 150, description: 'Blueberry milkshake.' },
      { name: 'Coconut', price: 140, description: 'Creamy coconut milkshake.' },
      { name: 'Chocolate', price: 90, description: 'Rich chocolate milkshake.', featured: true },
      { name: 'Dry Fruit', price: 160, description: 'Loaded with assorted dry fruits.' },
      { name: 'Muskmelon', price: 80, description: 'Light muskmelon milkshake.' },
    ],
  },
  {
    id: 'chocolates',
    name: 'Chocolates',
    items: [
      { name: 'Oreo', price: 100, description: 'Oreo chocolate shake.' },
      { name: 'Kit Kat', price: 100, description: 'Kit Kat chocolate shake.' },
      { name: 'Ferrero Rocher', price: 170, description: 'Ferrero Rocher chocolate shake.', featured: true },
      { name: 'Nutella Kitkat', price: 160, description: 'Nutella and Kit Kat fusion.' },
      { name: 'Kitkat Oreo', price: 130, description: 'Kit Kat and Oreo combo shake.' },
      { name: 'Nutella', price: 140, description: 'Creamy Nutella shake.' },
      { name: 'Chikoo Chocolate', price: 100, description: 'Chikoo blended with chocolate.' },
    ],
  },
  {
    id: 'season-specials',
    name: 'Season Specials',
    items: [
      { name: 'Mango Juice', price: 80, description: 'Seasonal mango juice.' },
      { name: 'Mango Milkshake', price: 90, description: 'Thick mango milkshake.' },
      { name: 'Mango Blossom', price: 110, description: 'Floral mango special.' },
      { name: 'Mango Mastani', price: 130, description: 'Mango mastani with toppings.', featured: true },
      { name: 'Red-Mango Shake', price: 130, description: 'Red mango shake.' },
      { name: 'Mango Coconut', price: 160, description: 'Mango and coconut blend.' },
      { name: 'Party Punch', price: 150, description: 'Celebration mango punch.', featured: true },
    ],
  },
  {
    id: 'combination-juices',
    name: 'Combination Juices',
    items: [
      { name: 'Boom', price: 100, description: 'Energising fruit combination.' },
      { name: 'Summer Cool', price: 100, description: 'Cooling summer fruit blend.' },
      { name: 'Golden Glory', price: 110, description: 'Golden tropical mix.', featured: true },
      { name: 'Summer Queen', price: 100, description: 'Refreshing summer special.' },
      { name: 'Jamun Kala-Khatta', price: 150, description: 'Jamun and kala khatta fusion.' },
      { name: 'Kiwi Apple', price: 120, description: 'Kiwi and apple combination.' },
      { name: 'Watermelon Lemon', price: 100, description: 'Watermelon with a lemon twist.' },
      { name: 'Plum - Peach', price: 100, description: 'Plum and peach blend.' },
    ],
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    items: [
      {
        name: 'Veg Cheese Grill / Toast',
        price: 130,
        priceSecondary: 70,
        description: 'Grilled or toasted veg cheese sandwich.',
        featured: true,
      },
      { name: 'Veg Grill / Toast', price: 110, priceSecondary: 60, description: 'Grilled or toasted veg sandwich.' },
      {
        name: 'Corn Chilli Cheese Grill / Toast',
        price: 130,
        priceSecondary: 80,
        description: 'Corn, chilli, and cheese sandwich.',
      },
      { name: 'Chilli Cheese Grill / Toast', price: 120, priceSecondary: 70, description: 'Spicy chilli cheese sandwich.' },
      { name: 'Banana Nutella Toast', price: 150, description: 'Sweet banana and Nutella toast.', featured: true },
      { name: 'Chocolate Sandwich', price: 150, description: 'Chocolate filled sandwich.' },
    ],
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    note: 'Extra paneer ₹30',
    items: [
      { name: 'Veg Cheese Pizza', price: 160, description: 'Classic veg cheese pizza.' },
      { name: 'Tandoori Paneer Cheese Pizza', price: 180, description: 'Tandoori paneer with cheese.', featured: true },
      { name: 'Plain Cheese Pizza', price: 170, description: 'Simple cheese pizza.' },
      { name: 'Schezwan Paneer Pizza', price: 180, description: 'Spicy schezwan paneer pizza.' },
      { name: 'Paneer Veg Cheese Pizza', price: 180, description: 'Paneer and veg loaded pizza.' },
      { name: 'Paneer Tandoori Bread Pizza', price: 150, description: 'Tandoori paneer on bread base.' },
    ],
  },
  {
    id: 'our-specials',
    name: 'Our Specials',
    items: [
      { name: 'Muskmelon Kulfi', price: 130, description: 'Muskmelon kulfi special.' },
      { name: 'Exotic Jamun', price: 130, description: 'Exotic jamun creation.' },
      { name: 'Berry Blast', price: 160, description: 'Mixed berry special.', featured: true },
      { name: 'Mixed Berries', price: 150, description: 'Blend of fresh berries.' },
      { name: 'Peachyee', price: 150, description: 'Peach special drink.' },
      { name: 'Kiwi-Dragon', price: 130, description: 'Kiwi and dragon fruit blend.' },
      { name: 'Anjeer-Kiwi', price: 150, description: 'Fig and kiwi combination.' },
      { name: 'Watermelon-Blueberry', price: 150, description: 'Watermelon and blueberry mix.' },
      { name: 'Cocado', price: 150, description: 'Coconut and avocado special.' },
      { name: 'Anjeer Dates', price: 160, description: 'Fig and dates blend.' },
      { name: 'Banana Dates', price: 140, description: 'Banana and dates special.' },
    ],
  },
  {
    id: 'refreshments',
    name: 'Refreshments',
    items: [
      { name: 'Lemon', price: 20, priceSecondary: 40, description: 'Fresh lemon refreshment.' },
      { name: 'Jaljeera', price: 20, priceSecondary: 40, description: 'Spiced jaljeera drink.' },
      { name: 'Ginger Lemon', price: 20, priceSecondary: 40, description: 'Ginger and lemon cooler.' },
      { name: 'Kala Khatta', price: 20, priceSecondary: 40, description: 'Tangy kala khatta sherbet.' },
      { name: 'Kokum', price: 20, priceSecondary: 40, description: 'Kokum refreshment.' },
    ],
  },
];

export function formatPrice(item: Pick<MenuItem, 'price' | 'priceSecondary'>): string {
  if (item.priceSecondary !== undefined) {
    return `₹${item.price}/₹${item.priceSecondary}`;
  }
  return `₹${item.price}`;
}

export function getFeaturedItems(limit = 6): (MenuItem & { category: string })[] {
  const featured: (MenuItem & { category: string })[] = [];
  for (const category of menuCategories) {
    for (const item of category.items) {
      if (item.featured) {
        featured.push({ ...item, category: category.name });
      }
    }
  }
  return featured.slice(0, limit);
}
