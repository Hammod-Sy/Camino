import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[400px] sm:min-h-[520px] flex items-center justify-center rounded-none sm:rounded-card-lg overflow-hidden mt-0 mb-4 sm:mb-8 w-full sm:w-[95%] mx-auto">
      <div className="absolute inset-0">
        <img
          src="/imgs/julentto-photography-CIuakYIjadc-unsplash.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-2 sm:px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 sm:mb-6"
        >
          Discover Slow Travel
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <Link
            to="/create"
            className="bg-white/95 backdrop-blur-sm rounded-full px-4 sm:px-8 py-3 sm:py-4 flex items-center space-x-2 sm:space-x-4 hover:bg-white transition-all shadow-lg hover:shadow-xl group max-w-md w-full justify-center text-sm sm:text-base"
          >
            <div className="bg-camino-orange rounded-lg p-1.5 sm:p-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="text-camino-charcoal font-medium text-sm sm:text-lg">Create a trip</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-camino-charcoal group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-white text-sm sm:text-base"
        >
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-semibold">Excellent</span>
          <span className="text-white/80 text-xs sm:text-sm">Based on 247 reviews</span>
        </motion.div>
      </div>
    </section>
  );
}

