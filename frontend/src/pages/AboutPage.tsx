export default function AboutPage() {
  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-12 text-center">
        About Camino
      </h1>
      <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
        <p>
          Camino is a travel platform dedicated to slow, sustainable travel across Europe by rail.
          We believe that the journey is just as important as the destination, and that train travel
          offers a unique way to connect with landscapes, cultures, and communities.
        </p>
        <p>
          Our mission is to make sustainable travel accessible and enjoyable. We carefully curate
          routes that showcase the best of European destinations while minimizing environmental impact.
          Every trip is designed to give you the freedom to explore independently, with expert support
          when you need it.
        </p>
        <p>
          Whether you're seeking a weekend escape or a multi-week adventure, we create journeys that
          combine comfort, authenticity, and sustainability. Our team of travel experts works with
          local partners to ensure every detail is thoughtfully arranged.
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-camino-charcoal mt-8 sm:mt-12 mb-4 sm:mb-6">
          Our Values
        </h2>
        <ul className="space-y-3 sm:space-y-4 list-disc list-inside text-sm sm:text-base">
          <li><strong>Sustainability:</strong> We prioritize train travel and support local communities</li>
          <li><strong>Independence:</strong> You travel at your own pace with our detailed guides</li>
          <li><strong>Expertise:</strong> Every route is carefully researched and tested</li>
          <li><strong>Quality:</strong> We select accommodations and experiences for comfort and authenticity</li>
        </ul>
      </div>
    </div>
  );
}

