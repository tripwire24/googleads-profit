
import React, { useState, useEffect, useRef } from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatYouGet } from './components/WhatYouGet';
import { WhyThisWorks } from './components/WhyThisWorks';
import { Process } from './components/Process';
import { Audience } from './components/Audience';
import { Faq } from './components/Faq';
import { Partnership } from './components/Partnership';
import { Credibility } from './components/Credibility';
import { ConversionForm } from './components/ConversionForm';
import { StickyCTA } from './components/StickyCTA';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';

interface Variant {
  h1: string;
  cta: string;
}

const variants: Variant[] = [
  {
    h1: "Google Ads leaking profit? Plug the holes in a week.",
    cta: "Get my free Profit Leak Check",
  },
  {
    h1: "Stop paying Google Tax: fix your 3 biggest PPC leaks in 5 days.",
    cta: "Fix my top 3 leaks",
  },
  // Add other CTA variants here for more testing if needed
  // { h1: "...", cta: "Run my Profit Leak Check" },
  // { h1: "...", cta: "Show me where the money’s going" },
];

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: { [key: string]: any }) => void;
  }
}

export default function App() {
  const [variant, setVariant] = useState<Variant>(variants[0]);
  const [isStickyHeaderVisible, setIsStickyHeaderVisible] = useState(false);
  
  const processRef = useRef<HTMLElement>(null);
  const conversionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // A/B test removed to lock in the first headline variant.
    
    // GA4 Event (example): Fire view_promotion on hero view
    if (window.gtag) {
      window.gtag('event', 'view_promotion', { promotion_name: 'Profit Leak Check' });
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsStickyHeaderVisible(true);
      } else {
        setIsStickyHeaderVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProcess = () => {
    processRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToConversion = () => {
    conversionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-gray-900 font-sans antialiased">
      <Header isVisible={isStickyHeaderVisible} onCtaClick={scrollToConversion} />
      <main>
        <Hero 
          h1={variant.h1} 
          ctaText={variant.cta} 
          onPrimaryCtaClick={scrollToConversion}
          onSecondaryCtaClick={scrollToProcess}
        />
        <WhatYouGet />
        <WhyThisWorks />
        <Testimonials />
        <Process ref={processRef} onCtaClick={scrollToConversion} />
        <Audience />
        <Faq />
        <Partnership />
        <Credibility />
        <ConversionForm ref={conversionRef} />
      </main>
      <StickyCTA onCtaClick={scrollToProcess} />
      <Footer />
    </div>
  );
}