import React from 'react';

export const RapidAccountingLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 580 160"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Rapid Accounting Ltd Logo"
    {...props}
  >
    <style>
      {`.ral-text { font-family: "Montserrat", sans-serif; fill: currentColor; }`}
    </style>
    <text
      x="4"
      y="90"
      className="ral-text"
      fontSize="90"
      fontWeight="700"
      letterSpacing="-3"
    >
      RAPID
    </text>
    
    <g transform="translate(420, 15)">
      <path
        d="M0 45 L75 0 V90 L0 45 Z"
        fill="#2D3748"
        stroke="#A0AEC0"
        strokeWidth="2"
      />
      <path
        d="M40 45 L115 0 V90 L40 45 Z"
        fill="#00A99D"
      />
    </g>

    <text
      x="4"
      y="135"
      className="ral-text"
      fontSize="32"
      fontWeight="300"
      letterSpacing="6"
    >
      ACCOUNTING LTD
    </text>
  </svg>
);