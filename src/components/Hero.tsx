import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-10">
        <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
          <h2 className="text-blue-400 font-semibold text-base sm:text-lg md:text-xl animate-pulse">
            Warning: This Is Not For Everyone
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Stop Trading Time For Money.
            </span>
            <br className="hidden sm:block" />
            <span className="text-white">
              Turn Your Raw Skill Into A Personal Brand
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              {" "} 0$ to 10K$/Month
            </span>
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            While others are still stuck in the 9-5 grind, smart entrepreneurs are turning their knowledge into 
            <span className="text-blue-400 font-semibold"> 6-figure personal brands</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-gray-300 mt-4 md:mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5" />
              <span>No Technical Skills Required</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5" />
              <span>Works In Any Niche</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5" />
              <span>No Prior Experience Needed</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
          <VideoPlayer 
            videoUrl="YOUR_DIRECT_VIDEO_URL.mp4"
            thumbnailUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          />
        </div>
        
        <div className="text-center mt-6 md:mt-8 lg:mt-10">
          <div className="mb-4">
            <p className="text-yellow-500 font-semibold animate-pulse text-sm sm:text-base">
              ⚡ Limited Time Offer - Only 7 Spots Left Today
            </p>
          </div>
          <button
            onClick={() => navigate('/questionnaire')}
            className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-base sm:text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-blue-500/50"
          >
            <span className="line-clamp-1">YES! Show Me How To Build My Personal Brand</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <p className="mt-4 text-gray-400 text-xs sm:text-sm">
            Join 1,000+ successful entrepreneurs who took control of their future
          </p>
        </div>
      </div>
    </div>
  );
};