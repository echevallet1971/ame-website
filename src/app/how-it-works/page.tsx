'use client';

import Image from 'next/image';
import Button from '../components/Button';
import LoginButton from '../components/LoginButton';
import { getPlatformUrl } from '@/lib/platform-config';

export default function HowItWorksPage() {
  const handleContactClick = async () => {
    try {
      const platformContactUrl = await getPlatformUrl('contact');
      window.open(platformContactUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get contact URL:', error);
      alert('Unable to connect to platform. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center items-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center text-brand-royal-blue-dark leading-tight">
              See your Envoy in action
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-center text-gray-500 max-w-3xl">
              Watch how Envoy handles real scheduling coordination, naturally, professionally, and without you lifting a finger.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col gap-12">
            {/* Demo Image */}
            <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
              <Image 
                src="/assets/images/envoy-conversation-demo.png"
                alt="Envoy conversation demonstration showing how the AI assistant coordinates meeting scheduling"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Explanation */}
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-8 text-center">
                <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
                  Natural conversation. Professional coordination.
                </h2>
                
                <div className="flex flex-col gap-4 text-base md:text-lg text-gray-600">
                  <p>
                    Your Envoy understands natural language, checks your calendar in real-time, 
                    and proposes times that work for everyone, all while respecting your preferences and boundaries.
                  </p>
                  <p>
                    No booking links. No back-and-forth emails. Just seamless coordination that feels 
                    like you have your own Executive Assistant.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col gap-3 items-center text-center">
                <div className="w-12 h-12 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-normal text-brand-royal-blue-dark">Real-time availability</h3>
                <p className="text-base text-gray-500">
                  Checks your calendar instantly and only suggests times that actually work.
                </p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center">
                <div className="w-12 h-12 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-normal text-brand-royal-blue-dark">Timezone intelligence</h3>
                <p className="text-base text-gray-500">
                  Automatically handles multiple timezones so everyone knows when to show up.
                </p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center">
                <div className="w-12 h-12 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-normal text-brand-royal-blue-dark">Professional tone</h3>
                <p className="text-base text-gray-500">
                  Communicates like a skilled EA, clear, courteous, and on-brand.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-6 mt-8">
              <h2 className="text-2xl md:text-3xl font-normal text-brand-royal-blue-dark text-center">
                Ready to send your own Envoy?
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <LoginButton size="large">
                  Get started
                </LoginButton>
                <Button href="/pricing" variant="secondary">
                  View pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions CTA Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-3xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
              Still have questions?
            </h2>
            
            <p className="text-lg text-gray-600">
              We're here to help. Reach out to learn more about how Envoy can work for you.
            </p>

            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800"
            >
              Contact us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
