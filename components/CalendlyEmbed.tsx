import React, { useEffect } from 'react';

const CALENDLY_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js';

export const CalendlyEmbed: React.FC = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplication
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT_URL}"]`)) {
      // If the script exists, we may need to re-initialize Calendly for the widget to appear
      // This can happen in fast-navigating React apps.
      if (window.Calendly) {
        window.Calendly.initInlineWidgets();
      }
      return;
    }

    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
        // Optional: cleanup script when component unmounts
        const existingScript = document.querySelector(`script[src="${CALENDLY_SCRIPT_URL}"]`);
        if(existingScript) {
           // It's generally better to leave the Calendly script loaded.
           // document.body.removeChild(existingScript);
        }
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/luke-tripwiredigital"
      style={{ minWidth: '320px', height: '700px', border: '1px solid #2D3748', borderRadius: '8px', overflow: 'hidden' }}
    >
       {/* The loading message has been removed as requested. 
           Calendly's script will populate this div.
           A border and background are added for a better initial appearance. */}
    </div>
  );
};

// Add Calendly to the window type to avoid TypeScript errors
declare global {
    interface Window {
        Calendly?: {
            initInlineWidgets: () => void;
        }
    }
}
