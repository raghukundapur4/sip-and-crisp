import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import ReviewCard from './ReviewCard';
import GoogleAttribution from './GoogleAttribution';
import { reviews, googleStats, getAverageRating } from '../data/reviews';
import { site } from '../data/site';

interface ReviewsBlockProps {
  variant?: 'full' | 'preview';
}

export default function ReviewsBlock({ variant = 'full' }: ReviewsBlockProps) {
  const displayReviews = variant === 'preview' ? reviews.slice(0, 3) : reviews;
  const displayRating = googleStats.rating ?? getAverageRating(reviews);
  const displayCount = googleStats.totalCount ?? reviews.length;
  const fromGoogle = reviews.some((r) => r.source === 'google');

  if (variant === 'preview') {
    return (
      <>
        <div className="grid gap-6 lg:grid-cols-5">
          {displayReviews[0] && (
            <div className="lg:col-span-2">
              <ReviewCard review={displayReviews[0]} large />
            </div>
          )}
          <div className="flex flex-col gap-4 lg:col-span-3">
            {displayReviews.slice(1).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Link to="/reviews" className="btn-ghost">
            All reviews <ArrowRight className="h-4 w-4" />
          </Link>
          {fromGoogle && <GoogleAttribution />}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-14 flex flex-col items-center gap-8 rounded-3xl bg-green-dark p-10 text-center text-white md:flex-row md:justify-between md:text-left">
        <div>
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className="font-display text-6xl font-medium">
              {displayRating > 0 ? displayRating.toFixed(1) : '—'}
            </span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.round(displayRating) ? 'fill-orange text-orange' : 'text-white/20'}`}
                  />
                ))}
              </div>
              <p className="mt-1 text-sm text-white/50">
                {displayCount} review{displayCount !== 1 ? 's' : ''}
                {fromGoogle ? ' on Google' : ''}
              </p>
            </div>
          </div>
        </div>
        <a
          href={site.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0"
        >
          Leave a Google Review
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {displayReviews.map((review, i) => (
          <div key={review.id} className={i === 0 ? 'md:col-span-2 md:max-w-2xl' : ''}>
            <ReviewCard review={review} large={i === 0} />
          </div>
        ))}
      </div>

      {fromGoogle && (
        <div className="mt-10">
          <GoogleAttribution />
        </div>
      )}
    </>
  );
}
