
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { XIcon } from './icons/XIcon';

export const Audience: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-brand-gray-800 p-8 rounded-lg border border-green-500/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckIcon className="h-8 w-8 text-green-400 mr-3" />
              Who it's for
            </h3>
            <p className="text-brand-gray-300">
              Owners spending on Google Ads who want controllable, measurable ROI; teams wanting a second opinion on agency work.
            </p>
          </div>
          <div className="bg-brand-gray-800 p-8 rounded-lg border border-red-500/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <XIcon className="h-8 w-8 text-red-400 mr-3" />
              Who it's not for
            </h3>
            <p className="text-brand-gray-300">
              Folks unwilling to grant read-only access or make changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
