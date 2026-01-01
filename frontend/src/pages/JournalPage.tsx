import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';

export default function JournalPage() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: () => api.getArticles(),
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Loading articles...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-12 text-center">
        Journal
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {articles?.map((article) => (
          <Link key={article.id} to={`/journal/${article.slug}`}>
            <div className="card overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                {article.category && (
                  <span className="text-xs sm:text-sm text-camino-orange font-semibold uppercase tracking-wide">
                    {article.category}
                  </span>
                )}
                <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-camino-charcoal mt-2 mb-2 sm:mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">{article.excerpt}</p>
                <div className="text-xs sm:text-sm text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

