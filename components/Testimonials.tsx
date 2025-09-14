
import React, { useState, useEffect, useCallback } from 'react';
import { QuoteIcon } from './icons/QuoteIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const testimonialsData = [
  {
    quote: "Tripwire were recommended to us, and we first engaged them to review our website and optimise our Google Ads. They far exceeded expectations and are now leading our evolution with AI. Tripwire are excellent—problem-solvers who show initiative and always bring a new angle to hit our advertising goals. I highly recommend them.",
    name: "Phil",
    company: "Out Of Space & Brooklands Boat Club",
    avatar: "P",
  },
  {
    quote: "We loved working with Luke. We're kept up to date on the latest Google requirements and how to adapt to get the most from our budget. Fixed-time model meant more budget to ads—not admin, meetings, or reports.",
    name: "Noeleen",
    company: "HPWF Auckland",
    avatar: "N",
  },
  {
    quote: "Tripwire spotted gaps in our conversion tracking that our last agency missed completely. The fixes paid for themselves in the first month.",
    name: "Jamie",
    company: "E-commerce Manager",
    avatar: "J",
  },
  {
    quote: "We cut our cost-per-lead in half and doubled qualified traffic within six weeks. The mentoring model works.",
    name: "Priya",
    company: "Marketing Director",
    avatar: "P",
  },
  {
    quote: "Navigating Google and AdWords can be mind blowing but working with Tripwire's knowledgeable and experienced team has been very reassuring. Luke is focused, dedicated to the tasks at hand and always evaluating our advertising driven by actual data and insight. His ongoing support makes for a great partnership!",
    name: "Sharyn",
    company: "Master Franchisee",
    avatar: "S",
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-brand-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">Trusted by businesses like yours</h2>
          <div className="relative">
            <div className="bg-brand-gray-800 p-8 sm:p-12 rounded-lg shadow-xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
              <QuoteIcon className="absolute top-6 left-6 w-12 h-12 text-brand-gray-700/50 opacity-75" />
              <div className="relative z-10 transition-opacity duration-500 ease-in-out">
                <p className="text-xl sm:text-2xl italic text-brand-gray-200 mb-8 leading-relaxed">
                  "{currentTestimonial.quote}"
                </p>
                <div className="flex items-center justify-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl font-bold">{currentTestimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{currentTestimonial.name}</p>
                    <p className="text-brand-gray-400">{currentTestimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 sm:-left-12 transform -translate-y-1/2 bg-brand-gray-700 p-3 rounded-full text-white hover:bg-brand-teal transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal z-20"
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 sm:-right-12 transform -translate-y-1/2 bg-brand-gray-700 p-3 rounded-full text-white hover:bg-brand-teal transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal z-20"
              aria-label="Next testimonial"
            >
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
