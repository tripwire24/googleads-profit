
import React, { forwardRef } from 'react';
import { MagnifyingGlassIcon } from './icons/MagnifyingGlassIcon';
import { LockIcon } from './icons/LockIcon';
import { CalendarIcon } from './icons/CalendarIcon';

interface ProcessProps {
    onCtaClick: () => void;
}

export const Process = forwardRef<HTMLElement, ProcessProps>(({ onCtaClick }, ref) => {
    return (
        <section ref={ref} id="process" className="py-16 sm:py-24 bg-brand-gray-800">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">A Simple Process</h2>
                    <div className="grid md:grid-cols-3 gap-10 mb-16">
                        <div className="flex flex-col items-center">
                            <div className="bg-brand-teal p-4 rounded-full mb-4">
                                <MagnifyingGlassIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">1. Request the audit</h3>
                            <p className="text-brand-gray-400">Fill out the form below.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-brand-teal p-4 rounded-full mb-4">
                                <LockIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">2. Grant access</h3>
                            <p className="text-brand-gray-400">Provide read-only access or book a screenshare.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-brand-teal p-4 rounded-full mb-4">
                                <CalendarIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">3. Get your report</h3>
                            <p className="text-brand-gray-400">5 business days later: report + 30-min debrief call.</p>
                        </div>
                    </div>
                    <button 
                        onClick={onCtaClick}
                        className="bg-brand-teal text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-brand-teal focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
                        Book my free audit
                    </button>
                </div>
            </div>
        </section>
    );
});
