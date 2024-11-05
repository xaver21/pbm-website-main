import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const TrustSection = () => {
  return (
    <section className="py-8 md:py-12 bg-black/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-16">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            <span className="text-sm md:text-base text-gray-300">Secure SSL Payment</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            <span className="text-sm md:text-base text-gray-300">100% Safe Checkout</span>
          </div>
          
          <div className="flex items-center">
            <div className="trustpilot-widget">
              <img 
                src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" 
                alt="5 stars on Trustpilot"
                className="h-6 md:h-8"
              />
              <span className="text-xs md:text-sm text-gray-300 block mt-1">Rated 4.9 on Trustpilot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};