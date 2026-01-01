import HeroSection from '../components/home/HeroSection';
import CollectionsSection from '../components/home/CollectionsSection';
import IconPillarsSection from '../components/home/IconPillarsSection';
import ShortBreaksSection from '../components/home/ShortBreaksSection';
import ZinePromoSection from '../components/home/ZinePromoSection';
import TrendingTripsSection from '../components/home/TrendingTripsSection';
import ReviewsSection from '../components/home/ReviewsSection';
import FAQSection from '../components/home/FAQSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CollectionsSection />
      <IconPillarsSection />
      <ShortBreaksSection />
      <ZinePromoSection />
      <TrendingTripsSection />
      <ReviewsSection />
      <FAQSection />
    </div>
  );
}

