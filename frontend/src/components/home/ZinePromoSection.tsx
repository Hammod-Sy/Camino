import { Link } from 'react-router-dom';

export default function ZinePromoSection() {
  return (
    <section className="container mx-auto px-[6%] py-8 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-sm max-w-7xl mx-auto">
        <div className="relative aspect-[3/2] lg:aspect-auto lg:h-96">
          <img
            src="/imgs/ryan-spencer-XGKaRnWjv1c-unsplash.jpg"
            alt="Camino Zine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white lg:hidden">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold">NEW: Camino Zine</h3>
          </div>
        </div>
        <div className="bg-[#E8F4F8] p-6 sm:p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-camino-charcoal mb-4 sm:mb-6">
            NEW: Camino Zine
          </h3>
          <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
            Our quarterly publication brings you stories from the rails, destination guides,
            and insights into slow travel culture. Each issue features beautiful photography
            and thoughtful articles from fellow travelers.
          </p>
          <Link to="/journal" className="btn-primary inline-flex items-center space-x-2 w-fit text-sm sm:text-base md:text-lg py-2 sm:py-3 px-4 sm:px-6">
            <span>Read the zine</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
      </div>
    </section>
  );
}

