import { Link } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../api/client';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.subscribeNewsletter(email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
    }
  };

  return (
    <footer className="bg-camino-charcoal text-white mt-10 sm:mt-20 w-full">
      <div className="w-full mx-auto px-4 sm:px-[6%] py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Links Column 1 */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Explore</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>
                <Link to="/collections" className="hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gift cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refer a friend
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Newsletter</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
              Get travel inspiration and slow travel tips delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
              />
              <button
                type="submit"
                className="btn-primary w-full bg-camino-orange hover:bg-camino-orange-dark text-sm sm:text-base py-2 sm:py-3"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Camino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

