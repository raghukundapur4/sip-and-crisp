import { Star } from 'lucide-react';
import type { Review } from '../data/reviews';
import { formatReviewDate } from '../data/reviews';

interface ReviewCardProps {
  review: Review;
  large?: boolean;
}

export default function ReviewCard({ review, large = false }: ReviewCardProps) {
  const author = review.profileUrl ? (
    <a
      href={review.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold not-italic text-green-dark hover:text-orange"
    >
      {review.name}
    </a>
  ) : (
    <cite className="font-semibold not-italic text-green-dark">{review.name}</cite>
  );

  return (
    <article
      className={`glass-card relative overflow-hidden rounded-3xl p-7 ${
        large ? 'md:p-10' : ''
      }`}
    >
      <div className="mb-5 flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < review.rating ? 'fill-orange text-orange' : 'text-green-dark/10'}`}
          />
        ))}
      </div>
      <blockquote
        className={`mb-6 font-display leading-relaxed text-green-dark ${
          large ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
        }`}
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <footer className="flex items-center justify-between gap-4 border-t border-green-dark/6 pt-5 text-sm">
        <div className="flex items-center gap-3">
          {review.photoUrl && (
            <img
              src={review.photoUrl}
              alt=""
              className="h-9 w-9 rounded-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          )}
          {author}
        </div>
        <time className="shrink-0 text-muted" dateTime={review.date}>
          {formatReviewDate(review)}
        </time>
      </footer>
    </article>
  );
}
