'use client';

import { useState } from 'react';
import Button from '../components/Button';
import { CheckIcon } from '@heroicons/react/24/solid';
import { getPlatformUrl } from '@/lib/platform-config';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const handleGetStarted = async () => {
    try {
      const platformSigninUrl = await getPlatformUrl('signin');
      window.open(platformSigninUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get platform URL:', error);
      alert('Unable to connect to platform. Please try again.');
    }
  };

  const handleContactSales = async () => {
    try {
      const platformContactUrl = await getPlatformUrl('contact');
      window.open(platformContactUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get contact URL:', error);
      alert('Unable to connect to platform. Please try again.');
    }
  };

  const plans = [
    {
      name: 'Solo',
      monthlyPrice: 49,
      annualPrice: 39,
      recommendedFor: [
        'You coordinate 5-10 client meetings per week',
        'You need calendar privacy when scheduling across organizations',
        'You\'re tired of email ping-pong with C-suite contacts',
        'You want EA-quality coordination without the EA cost',
      ],
      cta: 'Get started',
      highlighted: false,
      isCustom: false,
    },
    {
      name: 'Professional',
      monthlyPrice: 99,
      annualPrice: 79,
      recommendedFor: [
        'You regularly coordinate complex multi-party meetings',
        'Your clients have their own EAs you need to work with',
        'You need custom scheduling preferences and boundaries',
        'Priority support matters when coordination gets complex',
      ],
      cta: 'Get started',
      highlighted: true,
      isCustom: false,
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      annualPrice: null,
      recommendedFor: [
        'You have your own EA and need Envoy to escalate to them',
        'Your team shares scheduling workflows and preferences',
        'You need custom integrations with your existing tools',
        'Dedicated support and account management matter to you',
      ],
      cta: 'Contact sales',
      highlighted: false,
      isCustom: true,
    },
  ];

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
              Let Envoy handle scheduling ping-pong. Choose the plan that fits your workflow. Focus on what matters.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center gap-0 pt-4">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 text-base rounded-l-md border transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-gray-100 border-gray-300 text-black'
                    : 'bg-white border-gray-300 text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 text-base rounded-r-md border border-l-0 transition-colors ${
                  billingPeriod === 'annual'
                    ? 'bg-gray-100 border-gray-300 text-black'
                    : 'bg-white border-gray-300 text-gray-600'
                }`}
              >
                Annual
              </button>
            </div>

            {/* Savings Text */}
            <p className="text-sm text-gray-600">
              Save 20% with annual billing
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg p-8 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.highlighted
                    ? 'border-2 border-brand-royal-blue-dark shadow-lg'
                    : 'border-2 border-gray-200'
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-2xl font-normal text-brand-royal-blue-dark mb-6">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-8">
                  {plan.isCustom ? (
                    <div className="text-5xl font-normal text-black">
                      Custom
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-5xl font-normal ${plan.highlighted ? 'text-brand-gold' : 'text-black'}`}>
                          ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-gray-600">
                          /month
                        </span>
                      </div>
                      {billingPeriod === 'annual' && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed annually
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Recommended For List */}
                <div className="flex-grow mb-8">
                  <h4 className="text-sm font-semibold text-brand-royal-blue-dark mb-4 uppercase tracking-wide">
                    Recommended if:
                  </h4>
                  <ul className="space-y-4">
                    {plan.recommendedFor.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                        <span className="text-base text-gray-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - Now at bottom */}
                {plan.isCustom ? (
                  <button
                    onClick={handleContactSales}
                    className={`w-full justify-center inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      plan.highlighted
                        ? 'text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800'
                        : 'text-brand-royal-blue-dark border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <button
                    onClick={handleGetStarted}
                    className={`w-full justify-center inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      plan.highlighted
                        ? 'text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800'
                        : 'text-brand-royal-blue-dark border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Features Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-normal text-center text-brand-royal-blue-dark mb-12">
            Compare features across plans
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Features</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">Solo</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">Professional</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Coordination requests per month</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Calendar integrations</td>
                  <td className="py-4 px-4 text-center">Google, Outlook</td>
                  <td className="py-4 px-4 text-center">Google, Outlook, iCloud</td>
                  <td className="py-4 px-4 text-center">All + Custom</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Multi-party scheduling</td>
                  <td className="py-4 px-4 text-center">Up to 5</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Custom scheduling preferences</td>
                  <td className="py-4 px-4 text-center">Basic</td>
                  <td className="py-4 px-4 text-center">
                    <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">EA coordination support</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center">
                    <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Support level</td>
                  <td className="py-4 px-4 text-center">Email</td>
                  <td className="py-4 px-4 text-center">Priority</td>
                  <td className="py-4 px-4 text-center">Dedicated manager</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Team coordination</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center">Up to 5 users</td>
                  <td className="py-4 px-4 text-center">10+ users</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Custom integrations</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center">
                    <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
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
            <Button href="/coming-soon" className="px-10">
              Start free trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
