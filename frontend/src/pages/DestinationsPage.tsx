import { Link } from 'react-router-dom';
import { useDestinations } from '../hooks/useDestinations';

export default function DestinationsPage() {
  const { data: destinations, isLoading } = useDestinations();

  if (isLoading) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Loading destinations...</div>
      </div>
    );
  }

  const regions = Array.from(new Set(destinations?.map((d) => d.region) || [])).sort();

  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-12 text-center">
        Destinations
      </h1>
      {regions.map((region) => {
        const regionDestinations = destinations?.filter((d) => d.region === region) || [];
        return (
          <div key={region} className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-camino-charcoal mb-4 sm:mb-6">{region}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {regionDestinations.map((destination) => (
                <Link key={destination.id} to={`/destinations/${destination.slug}`}>
                  <div className="card overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={destination.imageUrl}
                        alt={destination.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-semibold text-camino-charcoal text-sm sm:text-base">{destination.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">{destination.country}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

