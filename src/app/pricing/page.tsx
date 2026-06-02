'use client';

import { CheckIcon } from '@heroicons/react/24/solid';
import { getPlatformUrl } from '@/lib/platform-config';

export default function PricingPage() {
  const handleApplyForEarlyAccess = async () => {
    try {
      const platformReserveUrl = await getPlatformUrl('reserve');
      window.open(platformReserveUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get reserve URL:', error);
      alert('Unable to connect to platform. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-normal text-center text-brand-royal-blue-dark leading-tight">
              Stop coordinating. Start delivering.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-center text-gray-500 max-w-3xl">
              Envoy Manage is our beta launch package. It includes the core lifecycle capabilities we believe professionals need first: scheduling, cancellation, and rescheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white rounded-lg p-8 md:p-10 flex flex-col border-2 border-brand-royal-blue-dark shadow-lg">
            <h3 className="text-2xl font-normal text-brand-royal-blue-dark mb-6">
              Envoy Manage
            </h3>

            <div className="mb-2">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-normal text-brand-gold">€49</span>
                <span className="text-gray-600">/ seat / month</span>
              </div>
              <p className="text-base text-gray-600 mt-2">
                Founding Envoys: €29 / month for 12 months
              </p>
            </div>

            <p className="text-base text-gray-600 leading-relaxed mt-4 mb-8">
              Your Envoy schedules, cancels, and reschedules meetings across people, calendars, and companies.
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-brand-royal-blue-dark mb-4 uppercase tracking-wide">
                Recommended if:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-600">
                    You coordinate client meetings every week
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-600">
                    You deal with several calendars, companies, and stakeholders
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-600">
                    You are tired of email ping-pong just to find a time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-600">
                    You want EA-quality coordination without hiring an EA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-600">
                    You need meeting lifecycle support, not just booking links
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleApplyForEarlyAccess}
              className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800"
            >
              Apply for early access
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-normal text-center text-brand-royal-blue-dark mb-12">
            Frequently asked questions
          </h2>
          
          <div className="flex flex-col gap-8">
            {/* FAQ 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-normal text-black mb-3">
                Can I switch plans at any time?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes. Upgrade or downgrade whenever you need. Changes take effect on your next billing cycle.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-normal text-black mb-3">
                Is there a free trial?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes. 14 days free on the Professional plan, no credit card required.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-normal text-black mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                All major credit cards (Visa, Mastercard, Amex) and PayPal. Processed securely via Stripe.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-normal text-black mb-3">
                How does annual billing work?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Pay upfront for 12 months and save 20%. You can cancel anytime, but refunds only apply within the first 30 days.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-normal text-black mb-3">
                What happens if I exceed my plan limits?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We'll notify you before you hit the limit. You can upgrade or we'll pause coordination until the next cycle. No surprise charges.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-normal text-black mb-3">
                What about refunds?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                If Envoy isn't right for you within the first 30 days, we'll refund you in full. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
              All plans include a 14-day free trial
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              No credit card required. Start coordinating smarter today.
            </p>
            <button
              onClick={handleApplyForEarlyAccess}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800"
            >
              Apply for early access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
