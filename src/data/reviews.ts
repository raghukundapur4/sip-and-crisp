export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  photoUrl?: string;
  profileUrl?: string;
  relativeTime?: string;
  source?: 'google' | 'static';
}

/** Overall Google listing stats */
export const googleStats = {
  rating: 5.0,
  totalCount: 9,
};

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Raghavendra',
    rating: 5,
    text: 'Amazing fresh juices with great taste and quality. The shop is clean, the service is quick, and the prices are reasonable. A perfect place to grab a refreshing drink anytime!',
    date: '',
    relativeTime: '3 weeks ago',
    source: 'google',
  },
  {
    id: '2',
    name: 'Chethan Shreeyan',
    rating: 5,
    text: 'One of the best juice spots around. Fresh fruit, perfect taste, and reasonable pricing. The sandwiches and snacks are also really good. Highly recommended!',
    date: '',
    relativeTime: '4 weeks ago',
    source: 'google',
  },
  {
    id: '3',
    name: 'Deepak Hegde',
    rating: 5,
    text: 'I recently visited this newly opened juice, pizza, and sandwich shop Sip and Crisp and had a great experience. I tried the Mixed Berries juice, and it was absolutely refreshing. The drink had a perfect balance of sweetness and tanginess, tasted very fresh, and was beautifully presented with real fruit toppings. You can really tell they use quality ingredients. Overall, a promising new place for fresh and tasty beverages and snacks. I would definitely recommend trying the berry juices and look forward to coming back to try more items from the menu.',
    date: '',
    relativeTime: '4 months ago',
    source: 'google',
  },
  {
    id: '4',
    name: 'Radhika Chilla',
    rating: 5,
    text: 'I always end up drinking milkshakes whenever I visit this place, and they never disappoint! The taste is really good, refreshing, and worth trying every time. A perfect spot to enjoy delicious shakes and chill with friends.',
    date: '',
    relativeTime: '2 weeks ago',
    source: 'google',
  },
  {
    id: '5',
    name: 'divya sk',
    rating: 5,
    text: 'Delicious food and fresh juice with great taste. Good quality and nice service. Highly recommended!',
    date: '',
    relativeTime: '3 weeks ago',
    source: 'google',
  },
  {
    id: '6',
    name: 'Rakshith Hegde',
    rating: 5,
    text: 'I drank strawberry juice today. It was fresh, sweet, and very refreshing. I really enjoyed the taste and would definitely recommend it.',
    date: '',
    relativeTime: '3 months ago',
    source: 'google',
  },
  {
    id: '7',
    name: 'eureka bora',
    rating: 5,
    text: 'Loooved the mango shake at Sip & Crisp! Fresh, creamy, and seriously so good. Will definitely be back for another one!',
    date: '',
    relativeTime: '1 week ago',
    source: 'google',
  },
  {
    id: '8',
    name: 'Gayana Shetty',
    rating: 5,
    text: 'Had the Mango Milkshake at Sip and Crisp, BTM, and it was absolutely delicious. The milkshake was thick, creamy, and made with fresh mangoes. What made it even better was the addition of real mango slices. Sandwich and other milkshakes also available.',
    date: '',
    relativeTime: '1 week ago',
    source: 'google',
  },
  {
    id: '9',
    name: 'Gayana Shetty',
    rating: 5,
    text: 'Super fresh juices with natural taste. Loved it!',
    date: '',
    relativeTime: '2 weeks ago',
    source: 'google',
  },
];

export function getAverageRating(reviewList: Review[]): number {
  if (reviewList.length === 0) return 0;
  const sum = reviewList.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviewList.length) * 10) / 10;
}

export function formatReviewDate(review: Review): string {
  if (review.relativeTime) return review.relativeTime;
  const parsed = new Date(review.date);
  if (Number.isNaN(parsed.getTime())) return review.date;
  return parsed.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
}
