import React from 'react';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black/50 py-6 md:py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
            <Mail className="w-5 h-5" />
            <a href="mailto:info@joinpbm.com" className="text-sm">info@joinpbm.com</a>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="/refund" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-400">© PBM, 2024 / All Rights Reserved</p>
          <p className="mt-6 md:mt-8 text-xs leading-relaxed max-w-4xl mx-auto text-gray-400">
            DISCLAIMER: Individual Results May Vary. The figures stated above are our personal figures. Please understand our results are not typical. We are not implying you'll duplicate them (or do anything for that matter). The average person who buys any "how to" information gets little to no results. We are using these references for example purposes only.
          </p>
          <p className="mt-4 text-xs leading-relaxed max-w-4xl mx-auto text-gray-400">
            Your results will vary and depend on many factors...including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you're not willing to accept that, please DO NOT opt-in for training.
          </p>
        </div>
      </div>
    </footer>
  );
};