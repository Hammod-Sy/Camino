import { Link } from 'react-router-dom';
import { useTrips } from '../../hooks/useTrips';

export default function TrendingTripsSection() {
  const { data: trips } = useTrips();
  const trendingTrips = Array.isArray(trips) ? trips.slice(0, 6) : [];

  return (
    <section className="container mx-auto px-[6%] py-8 sm:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-12 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-camino-charcoal">
          Trending trips
        </h2>
        <Link
          to="/collections"
          className="btn-secondary flex items-center space-x-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
        >
          <span>See all trips</span>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {trendingTrips.map((trip) => (
          <div key={trip.id} className="card overflow-hidden">
            <Link to={`/trip/${trip.slug}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={trip.heroImage}
                  alt={trip.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-camino-charcoal mb-2">
                  {trip.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  {trip.routeCities.join(' → ')}
                </p>
                <Link
                  to={`/trip/${trip.slug}`}
                  className="btn-primary w-full text-center text-sm sm:text-base py-2 sm:py-3"
                >
                  See trip
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

