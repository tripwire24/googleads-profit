
import React, { useState } from 'react';

const faqData = [
  {
    question: "Is this a sales trap?",
    answer: "No. You get the report either way. If you find it valuable and want help implementing the fixes, we can discuss that. But there's no obligation."
  },
  {
    question: "We already have an agency.",
    answer: "Great. Treat this as a second set of eyes. Agencies are busy, and a fresh, finance-focused perspective can often spot opportunities they've missed."
  },
  {
    question: "Do I need to give access?",
    answer: "Read-only access is ideal as it allows for the most thorough review. If that's not possible, we can run a comprehensive screenshare session instead."
  },
  {
    question: "What if you find nothing?",
    answer: "Then you get peace of mind and confirmation your account is well-managed. We'll also provide a shortlist of smart experiments to try next for further growth."
  },
  {
    question: "How long does it take?",
    answer: "About 5 business days from the moment we have access to your account. We'll then schedule the 30-minute debrief call with you."
  },
  {
    question: "What happens next?",
    answer: "The report is yours to keep. You can implement the fixes yourself, with your existing team/agency, or you can hire us for hands-on help. The choice is yours."
  }
];

const FaqItem: React.FC<{ item: { question: string; answer: string }, isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-gray-700">
      <button 
        className="w-full text-left flex justify-between items-center py-6 focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
           <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pb-6 text-brand-gray-300">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="">
            {faqData.map((item, index) => (
              <FaqItem 
                key={index} 
                item={item} 
                isOpen={openIndex === index} 
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
