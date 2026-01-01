import { Link } from 'react-router-dom';
import { useCollections } from '../../hooks/useCollections';

export default function CollectionsSection() {
  const { data: collections } = useCollections();
  const featuredCollections = Array.isArray(collections) ? collections.slice(0, 4) : [];

  return (
    <section className="container mx-auto px-[6%] py-8 sm:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-12 text-center">
        Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {featuredCollections.map((collection) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.slug}`}
            className="group"
          >
            <div className="card h-[300px] sm:h-[400px] lg:h-[500px] relative overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={collection.imageUrl}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold mb-1 sm:mb-2">{collection.title}</h3>
                <p className="text-white/90 line-clamp-2 text-sm sm:text-base">{collection.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

