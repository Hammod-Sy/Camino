import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DestinationsMenu from './DestinationsMenu';
import { useDestinations } from '../hooks/useDestinations';

export default function Header() {
  const [showDestinationsMenu, setShowDestinationsMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currency, setCurrency] = useState('EUR');
  const { data: destinations } = useDestinations();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full"  style={{ zIndex: 9999 }}>
      <div className="w-full mx-auto px-4 sm:px-[6%]">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl sm:text-3xl font-serif font-bold text-camino-charcoal">
            CAMINO
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/collections"
              className="text-camino-charcoal hover:text-camino-orange transition-colors"
            >
              Collections
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowDestinationsMenu(true)}
              onMouseLeave={() => setShowDestinationsMenu(false)}
            >
              <button className="text-camino-charcoal hover:text-camino-orange transition-colors">
                Destinations
              </button>
              <AnimatePresence>
                {showDestinationsMenu && destinations && (
                  <DestinationsMenu destinations={destinations} />
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/about"
              className="text-camino-charcoal hover:text-camino-orange transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-camino-charcoal hover:text-camino-orange transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/journal"
              className="text-camino-charcoal hover:text-camino-orange transition-colors"
            >
              Journal
            </Link>
            <Link
              to="/account"
              className="text-camino-charcoal hover:text-camino-orange transition-colors"
            >
              Account
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/create" className="btn-primary hidden md:flex items-center space-x-2 text-sm sm:text-base px-3 sm:px-6 py-2 sm:py-3">
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <span className="hidden lg:inline">Create a trip</span>
            </Link>

            {/* Currency dropdown */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-camino-orange"
            >
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </select>

            {/* Search icon */}
            <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {showMobileMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t py-4"
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/collections"
                  onClick={() => setShowMobileMenu(false)}
                  className="text-camino-charcoal hover:text-camino-orange transition-colors py-2"
                >
                  Collections
                </Link>
                <Link
                  to="/destinations"
                  onClick={() => setShowMobileMenu(false)}
                  className="text-camino-charcoal hover:text-camino-orange transition-colors py-2"
                >
                  Destinations
                </Link>
                <Link
                  to="/about"
                  onClick={() => setShowMobileMenu(false)}
                  className="text-camino-charcoal hover:text-camino-orange transition-colors py-2"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setShowMobileMenu(false)}
                  className="text-camino-charcoal hover:text-camino-orange transition-colors py-2"
                >
                  Contact
                </Link>
                <Link
                  to="/journal"
                  onClick={() => setShowMobileMenu(false)}
                  className="text-camino-charcoal hover:text-camino-orange transition-colors py-2"
                >
                  Journal
                </Link>
                <Link
                  to="/account"
                  onClick={() => setShowMobileMenu(false)}
                  className="text-camino-charcoal hover:text-camino-orange transition-colors py-2"
                >
                  Account
                </Link>
                <Link
                  to="/create"
                  onClick={() => setShowMobileMenu(false)}
                  className="btn-primary flex items-center justify-center space-x-2 mt-4"
                >
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  <span>Create a trip</span>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

