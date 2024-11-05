import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, X } from 'lucide-react';

export const EligibilitySection = () => {
  const navigate = useNavigate();
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-blue-900/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          PBM is for you if...
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src="https://i.ibb.co/Wk127Kc/IMG-5606-1.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg">You're ready to transform your expertise into a profitable personal brand but need a proven roadmap to follow</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg">You want to build a sustainable online business that generates consistent income while making a real impact</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg">You're committed to putting in the work and following a proven system to achieve your goals</p>
              </div>
            </div>
            
            <button
              onClick={() => navigate('/questionnaire')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
            >
              If this sounds like you, apply now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {showFullImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowFullImage(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setShowFullImage(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src="https://i.ibb.co/0M6M7Bj/Kian.jpg"
            alt="VIP Success Story"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};