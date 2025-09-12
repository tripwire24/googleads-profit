
import React from 'react';

const reasons = [
  {
    title: "Finance-first lens",
    description: "We translate ad spend into cash-flow outcomes."
  },
  {
    title: "Hands-on expertise",
    description: "Performance expertise across services, B2B, and ecommerce."
  },
  {
    title: "Transparent mentoring",
    description: "Not mystery retainers. You see what we change and why."
  }
];

export const WhyThisWorks: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">Why This Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-brand-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-brand-teal mb-3">{reason.title}</h3>
                <p className="text-brand-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
