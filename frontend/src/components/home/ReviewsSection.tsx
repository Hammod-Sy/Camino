import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/client';
import { useState } from 'react';

export default function ReviewsSection() {
  const { data: reviews } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => api.getReviews(),
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const displayReviews = Array.isArray(reviews) ? reviews.slice(currentIndex, currentIndex + 3) : [];

  const nextReviews = () => {
    if (Array.isArray(reviews) && currentIndex + 3 < reviews.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevReviews = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - 3));
    }
  };

  return (
    <section className="bg-[#F5F2EB] py-8 sm:py-16 px-[6%]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-6 sm:mb-8">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xl sm:text-2xl font-bold text-camino-charcoal ml-1 sm:ml-2">4.9</span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 max-w-6xl mx-auto">
          <button
            onClick={prevReviews}
            disabled={currentIndex === 0}
            className="p-1.5 sm:p-2 rounded-full bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors hidden sm:flex"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 flex-1">
            {displayReviews.map((review) => (
              <div key={review.id} className="card p-4 sm:p-6">
                <div className="flex items-center space-x-1 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? 'fill-yellow-400' : 'fill-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 line-clamp-4 text-sm sm:text-base">{review.comment}</p>
                <p className="text-xs sm:text-sm font-semibold text-camino-charcoal">{review.author}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextReviews}
            disabled={Array.isArray(reviews) ? currentIndex + 3 >= reviews.length : true}
            className="p-1.5 sm:p-2 rounded-full bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors hidden sm:flex"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile navigation buttons */}
        <div className="flex justify-center space-x-4 mt-6 sm:hidden">
          <button
            onClick={prevReviews}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextReviews}
            disabled={Array.isArray(reviews) ? currentIndex + 3 >= reviews.length : true}
            className="p-2 rounded-full bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

