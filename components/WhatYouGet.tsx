
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const benefits = [
  "A concise report with the 3 biggest spend leaks in your Google Ads",
  "Plain-English fixes with expected impact on CPA/ROAS",
  "30-minute debrief call to prioritise next steps",
  "Keep your account. Keep control. No lock-ins.",
];

export const WhatYouGet: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">What You'll Get</h2>
          <ul className="space-y-6 text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-lg">
                <CheckIcon className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0 mt-1" />
                <span className="text-brand-gray-200">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
