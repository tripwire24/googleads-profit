
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray-800 text-brand-gray-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">Contact: <a href="mailto:hello@tripwiredigital.co.nz" className="hover:text-brand-teal">hello@tripwiredigital.co.nz</a></p>
        <p className="text-sm mb-4">We only use your data to perform the audit and share results with you. Based in New Zealand.</p>
        <div className="text-xs text-brand-gray-500">
          <p>&copy; {new Date().getFullYear()} Tripwire Digital. All Rights Reserved.</p>
          <p>&copy; {new Date().getFullYear()} Rapid Accounting Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
