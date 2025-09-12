import React from 'react';
import { RapidAccountingLogo } from './icons/RapidAccountingLogo';
import { TripwireLogo } from './icons/TripwireLogo';

interface HeroProps {
  h1: string;
  ctaText: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ h1, ctaText, onPrimaryCtaClick, onSecondaryCtaClick }) => {
  return (
    <section className="bg-brand-gray-900 text-white pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-8">
            <RapidAccountingLogo className="h-10 sm:h-12 text-brand-gray-200" />
            <span className="text-2xl text-brand-gray-500">&times;</span>
            <TripwireLogo className="h-10 sm:h-12 text-brand-gray-200" />
        </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            {h1}
          </h1>
          <p className="text-lg sm:text-xl text-brand-gray-300 mb-10 max-w-2xl mx-auto">
            A free Profit Leak Check for Rapid Accounting clients: 3 leaks, 3 fixes, business-ready. No retainers. No fluff.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={onPrimaryCtaClick}
              className="w-full sm:w-auto bg-brand-teal text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-brand-teal focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
            >
              {ctaText}
            </button>
            <button 
              onClick={onSecondaryCtaClick}
              className="w-full sm:w-auto text-brand-gray-200 font-semibold py-4 px-6 rounded-lg border-2 border-brand-gray-700 hover:border-brand-gray-500 hover:text-white transition-colors"
            >
              See how it works
            </button>
          </div>
            <p className="text-sm text-brand-gray-500 mt-6">Limited to 10 audits this month.</p>
            <p className="text-sm text-brand-gray-400 mt-10">In partnership with Rapid Accounting Ltd.</p>
        </div>
      </div>
    </section>
  );
};
