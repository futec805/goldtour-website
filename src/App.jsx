import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import TourSearch from './components/TourSearch';
import TourQuiz from './components/TourQuiz';
import Destinations from './components/Destinations';
import HotTours from './components/HotTours';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import HotToursCta from './components/HotToursCta';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LegalModal from './components/LegalModal';

function App() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState('privacy');

  const handleSelectTour = (tour) => {
    setSelectedTour(tour);
    setIsBookingOpen(true);
  };

  const handleOpenLegal = (type) => {
    setLegalType(type);
    setIsLegalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-gold-500 selection:text-navy-950">
      <Header />
      <Hero />
      <TrustBar />
      <TourSearch onSelectTour={handleSelectTour} />
      <TourQuiz />
      <Destinations onSelectTour={handleSelectTour} />
      <HotTours onSelectTour={handleSelectTour} />
      <HotToursCta />
      <Services />
      <HowWeWork />
      <WhyChooseUs />
      <Reviews />
      <ContactSection />
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Global Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tour={selectedTour}
      />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        type={legalType}
      />
    </div>
  );
}

export default App;
