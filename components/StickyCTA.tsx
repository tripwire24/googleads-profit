
import React from 'react';

interface StickyCTAProps {
    onCtaClick: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onCtaClick }) => {
    return (
        <div className="sticky bottom-0 z-40 bg-brand-gray-800/90 backdrop-blur-sm p-4 md:hidden">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center text-center gap-4">
                <p className="text-white font-semibold">Still thinking? See the 1-2-3 process.</p>
                <button 
                    onClick={onCtaClick}
                    className="w-full sm:w-auto bg-transparent border-2 border-brand-teal text-brand-teal font-bold py-2 px-6 rounded-md hover:bg-brand-teal hover:text-white transition-colors"
                >
                    Show me the process
                </button>
            </div>
        </div>
    );
};
