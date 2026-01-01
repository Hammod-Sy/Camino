import { Link } from 'react-router-dom';
import { useCollections } from '../hooks/useCollections';

export default function CollectionsPage() {
  const { data: collections, isLoading } = useCollections();

  if (isLoading) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Loading collections...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-12 text-center">
        Collections
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {collections?.map((collection) => (
          <Link key={collection.id} to={`/collections/${collection.slug}`}>
            <div className="card h-[300px] sm:h-[400px] lg:h-[500px] relative overflow-hidden group">
              <div className="absolute inset-0">
                <img
                  src={collection.imageUrl}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 sm:mb-3">{collection.title}</h2>
                <p className="text-white/90 text-sm sm:text-base">{collection.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

