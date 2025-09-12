import React from 'react';

export const TripwireLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 260 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Tripwire Digital Logo"
    {...props}
  >
    <style>{`
      .tw-logo-text { font-family: "Montserrat", sans-serif; font-size: 32px; fill: currentColor; dominant-baseline: middle; }
    `}</style>
    
    <text
      x="0"
      y="20"
      className="tw-logo-text"
      fontWeight="700"
      letterSpacing="-0.5"
    >
      tripwire
    </text>
    
    <circle cx="145" cy="20" r="5" fill="#00A99D" />

    <text
      x="160"
      y="20"
      className="tw-logo-text"
      fontWeight="300"
    >
      digital
    </text>
  </svg>
);