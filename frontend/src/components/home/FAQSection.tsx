import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/client';

export default function FAQSection() {
  const { data: faqs } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => api.getFAQs(),
  });

  const featuredFAQs = Array.isArray(faqs) ? faqs.slice(0, 4) : [];

  return (
    <section className="container mx-auto px-[6%] py-8 sm:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-12 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-camino-charcoal">
          Frequently asked questions
        </h2>
        <Link
          to="/faqs"
          className="btn-secondary flex items-center space-x-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
        >
          <span>See all FAQs</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {featuredFAQs.map((faq) => (
          <div key={faq.id} className="card p-4 sm:p-6 bg-[#F5F2EB]">
            <h3 className="text-base sm:text-lg font-semibold text-camino-charcoal mb-2 sm:mb-3">
              {faq.question}
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm line-clamp-3">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

