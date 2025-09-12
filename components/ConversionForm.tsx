import React, { useState, forwardRef, useEffect, useRef } from 'react';
import { CalendlyEmbed } from './CalendlyEmbed';

interface ConversionFormProps {}

export const ConversionForm = forwardRef<HTMLElement, ConversionFormProps>((props, ref) => {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        website: '',
        monthlyAdSpend: '',
        primaryGoal: '',
        consent: false,
    });
    
    const trackingDataRef = useRef({});
    
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        trackingDataRef.current = {
            utm_source: params.get('utm_source'),
            utm_medium: params.get('utm_medium'),
            utm_campaign: params.get('utm_campaign'),
            utm_content: params.get('utm_content'),
            gclid: params.get('gclid'),
            wbraid: params.get('wbraid'),
            gbraid: params.get('gbraid'),
            firm_id: 'rapid_accounting',
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.consent) {
            setError("You must consent to the terms to proceed.");
            return;
        }
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("https://formspree.io/f/xwpnzpvb", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ ...formData, ...trackingDataRef.current }),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (err) {
            console.error("Error during submission:", err);
            setError("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section ref={ref} id="get-audit" className="py-16 sm:py-24 bg-brand-gray-900">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    {!submitted ? (
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Claim your Profit Leak Check</h2>
                            <p className="text-lg text-brand-gray-300 mb-10">Fill out the form to get your free Google Ads Profit Leak Check.</p>
                            <form onSubmit={handleSubmit} className="bg-brand-gray-800 p-8 rounded-lg shadow-lg text-left space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-brand-gray-200 mb-2">Name*</label>
                                        <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-brand-gray-700 border border-brand-gray-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-teal focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-brand-gray-200 mb-2">Email*</label>
                                        <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-brand-gray-700 border border-brand-gray-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-teal focus:outline-none" />
                                    </div>
                                     <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-brand-gray-200 mb-2">Company Name*</label>
                                        <input required type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-brand-gray-700 border border-brand-gray-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-teal focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-medium text-brand-gray-200 mb-2">Website URL*</label>
                                        <input required type="url" id="website" name="website" value={formData.website} onChange={handleChange} className="w-full bg-brand-gray-700 border border-brand-gray-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-teal focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="monthlyAdSpend" className="block text-sm font-medium text-brand-gray-200 mb-2">Monthly Google Ads spend*</label>
                                    <select required id="monthlyAdSpend" name="monthlyAdSpend" value={formData.monthlyAdSpend} onChange={handleChange} className="w-full bg-brand-gray-700 border border-brand-gray-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-teal focus:outline-none">
                                        <option value="">Please select a range</option>
                                        <option value="< $1,000">&lt; $1,000</option>
                                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                        <option value="$25,000+">$25,000+</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="primaryGoal" className="block text-sm font-medium text-brand-gray-200 mb-2">Primary goal*</label>
                                    <select required id="primaryGoal" name="primaryGoal" value={formData.primaryGoal} onChange={handleChange} className="w-full bg-brand-gray-700 border border-brand-gray-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-teal focus:outline-none">
                                        <option value="">Please select a goal</option>
                                        <option value="Increase leads/sales">Increase leads/sales</option>
                                        <option value="Improve ROAS/CPA">Improve ROAS/CPA</option>
                                        <option value="Get a second opinion">Get a second opinion</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="pt-2">
                                    <label htmlFor="consent" className="flex items-start">
                                        <input required type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-teal focus:ring-brand-teal" />
                                        <span className="ml-3 text-sm text-brand-gray-300">I consent to have my Google Ads account reviewed and to be contacted regarding the results.</span>
                                    </label>
                                </div>

                                {error && <p className="text-red-400 text-sm">{error}</p>}

                                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-teal text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-brand-teal focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Submitting...' : 'Book my free audit'}
                                </button>
                                <p className="text-xs text-brand-gray-500 text-center pt-2">We'll use these details to prepare your audit. No spam, ever.</p>
                            </form>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Thanks. Your request is in.</h2>
                            <p className="text-lg text-brand-gray-300 mb-10">Check your email for confirmation. The final step is to pick a time for your debrief below.</p>
                            <CalendlyEmbed />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
});
