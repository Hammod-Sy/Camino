const pillars = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: 'Expertly routed',
    description: 'Every journey is carefully planned by travel experts who know the routes.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: 'Support, not supervision',
    description: 'You travel independently with our detailed guides and 24/7 support available.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'More sustainable, by design',
    description: 'Train travel reduces your carbon footprint while connecting you to local culture.',
  },
];

export default function IconPillarsSection() {
  return (
    <section className="bg-[#F5F2EB] py-8 sm:py-16 px-[6%]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-camino-orange/10 flex items-center justify-center text-camino-orange mx-auto mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-12 sm:h-12">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-camino-charcoal mb-2 sm:mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base px-2">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

