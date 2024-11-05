import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { WhySection } from '../components/WhySection';
import { Testimonials } from '../components/Testimonials';
import { MindMapSection } from '../components/MindMapSection';
import { EligibilitySection } from '../components/EligibilitySection';
import { TrustSection } from '../components/TrustSection';
import { Footer } from '../components/Footer';

const HomePage = () => {
  const navigate = useNavigate();

  const CallToAction = () => (
    <div className="text-center py-16 bg-gradient-to-r from-blue-900/20 to-black">
      <button
        onClick={() => navigate('/questionnaire')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
      >
        You could be next, apply now
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );

  return (
    <div className="bg-black">
      <Hero />
      <EligibilitySection />
      <Testimonials />
      <CallToAction />
      <MindMapSection />
      <WhySection />
      <CallToAction />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default HomePage;