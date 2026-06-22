export const site = {
  name: 'Sip & Crisp',
  tagline: 'Fresh. Pure. Every sip.',
  taglineShort: 'Fresh juices, milkshakes & pizzas in BTM Layout.',
  heroDescription:
    'Fresh juices, milkshakes, chocolate shakes, pizzas, and grilled sandwiches — your neighbourhood spot in the heart of BTM Layout.',
  menuOfferings:
    'Juices, milkshakes, chocolates, combination juices, pizzas, sandwiches, and house specials.',
  city: 'BTM Layout, Bangalore',
  ownerName: 'Raghavendra Hegde',
  foundedYear: 2025,
  phone: '8549835696',
  phoneDisplay: '+91 85498 35696',
  whatsapp: '918549835696',
  email: 'hello@sipandcrisp.in',
  siteUrl: 'https://raghukundapur4.github.io/sip-and-crisp',
  googleReviewUrl: 'https://g.page/r/PLACEHOLDER/review',
  formspreeId: import.meta.env.VITE_FORMSPREE_ID as string | undefined,
} as const;

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/locations', label: 'Locations' },
  { to: '/contact', label: 'Contact' },
] as const;
