'use client';

import { CheckIcon } from '@heroicons/react/24/solid';
import Card from '../components/Card';
import LoginButton from '../components/LoginButton';
import ContactButton from '../components/ContactButton';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-normal text-center text-brand-royal-blue-dark leading-tight">
              Get your Envoy.
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-500 max-w-3xl">
              One simple subscription. Everything your Envoy needs to handle your scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col border border-brand-border shadow-sm">
            <h2 className="text-3xl font-normal text-brand-royal-blue-dark mb-6">
              Your Envoy
            </h2>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-normal text-brand-gold">€29</span>
                <span className="text-3xl text-gray-600">/ seat / month</span>
              </div>
            </div>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              14 days free. Card required, nothing charged until your trial ends.
            </p>

            <h3 className="text-sm font-semibold text-brand-royal-blue-dark mb-4 uppercase tracking-wide">
              Included:
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-600">Schedule meetings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-600">Reschedule meetings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-600">Cancel meetings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-600">Coordinate across Google Calendar and Microsoft Outlook</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-600">Work across companies, participants and time zones</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-600">Control who can access your availability through the Trust Center</span>
              </li>
            </ul>

            <div className="mt-10 flex flex-col items-center gap-2">
              <LoginButton size="large" className="px-10">
                Get your Envoy
              </LoginButton>
              <p className="text-sm text-gray-500">Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-brand-royal-blue-dark mb-4">
              Start with one. Add more when you need them.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your subscription is based on the number of Envoys you use. Get one for yourself, or add more for people you manage or work with.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-normal text-center text-brand-royal-blue-dark mb-12">
            Frequently asked questions
          </h2>

          <div className="flex flex-col gap-6">
            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-normal text-brand-royal-blue-dark mb-3">
                Is there a free trial?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes. You can try your Envoy free for 14 days. A payment method is required when you subscribe, but you won&apos;t be charged until the trial ends.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-normal text-brand-royal-blue-dark mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes. There is no long-term commitment.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-normal text-brand-royal-blue-dark mb-3">
                Can I get more than one Envoy?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes. You can subscribe to as many Envoys as you need.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-normal text-brand-royal-blue-dark mb-3">
                Does it work with Google and Microsoft calendars?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes. Ask My Envoy works across Google Calendar and Microsoft Outlook.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-normal text-brand-royal-blue-dark mb-3">
                Do people I schedule with need their own Envoy?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                No. But they do need to connect their calendar and accept your invitation so your Envoy can access their availability. If they don&apos;t connect their calendar, your Envoy won&apos;t be able to coordinate the meeting automatically.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-normal text-brand-royal-blue-dark mb-3">
                How do I invite people I work with?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Go to the Trust Center and invite them directly. Once they accept and connect their calendar, your Envoy can see whether it has access to their availability and coordinate meetings with them.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="max-w-3xl mx-auto rounded-2xl border border-brand-border bg-gray-50 p-8 md:p-10 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark mb-4">
              Still have a question?
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              If the FAQ didn&apos;t cover it, get in touch and we&apos;ll help.
            </p>
            <ContactButton size="large">
              Contact us
            </ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
