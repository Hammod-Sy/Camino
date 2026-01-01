import { useState } from 'react';
import { api } from '../api/client';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.submitLead(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Contact form submission failed:', error);
    }
  };

  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-12 text-center">
        Contact Us
      </h1>
      <div className="card p-4 sm:p-6 md:p-8">
        <p className="text-gray-700 mb-6 sm:mb-8 text-center text-sm sm:text-base">
          Have a question? Want to customize a trip? We're here to help.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full text-sm sm:text-base py-2 sm:py-3"
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

