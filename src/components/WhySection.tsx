import React from 'react';
import { Trophy, Users, Star } from 'lucide-react';

export const WhySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-900/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Why Choose PBM?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-blue-900/20 p-6 md:p-8 rounded-xl backdrop-blur-sm">
            <Trophy className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Transformation</h3>
            <p className="text-gray-300 text-sm md:text-base">
Make a living off of your personal brand and transform yourself as a Person.</p>
          </div>
          <div className="bg-blue-900/20 p-6 md:p-8 rounded-xl backdrop-blur-sm">
            <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Mentorship</h3>
            <p className="text-gray-300 text-sm md:text-base">Get direct guidance from Xaver who has years of experience in personal branding.</p>
          </div>
          <div className="bg-blue-900/20 p-6 md:p-8 rounded-xl backdrop-blur-sm sm:col-span-2 md:col-span-1">
            <Star className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Secret Access</h3>
            <p className="text-gray-300 text-sm md:text-base">Access exclusive tools and strategies to accelerate your brand growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};