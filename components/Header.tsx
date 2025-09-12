
import React from 'react';
import { RapidAccountingLogo } from './icons/RapidAccountingLogo';

interface HeaderProps {
    isVisible: boolean;
    onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isVisible, onCtaClick }) => {
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0 bg-brand-gray-800/90 backdrop-blur-sm shadow-lg' : '-translate-y-full'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <span className="text-white font-semibold">Rapid Accounting × Tripwire Digital</span>
                </div>
                <button 
                    onClick={onCtaClick}
                    className="bg-brand-teal text-white font-bold py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-gray-800 focus:ring-brand-teal transition-colors"
                >
                    Get Free Audit
                </button>
            </div>
        </header>
    );
};
