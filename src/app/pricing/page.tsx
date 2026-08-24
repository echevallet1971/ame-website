'use client';

import { CheckIcon } from '@heroicons/react/24/solid';
import Card from '../components/Card';
import LoginButton from '../components/LoginButton';
import ContactButton from '../components/ContactButton';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-standard bg-white">
        <div className="container-4xl">
          <div className="flow-md items-center">
            <h1 className="hero-heading text-center text-brand-royal-blue-dark">
              Get your Envoy.
            </h1>

            <p className="text-lead text-center text-gray-500 max-w-3xl">
              One simple subscription. Everything your Envoy needs to handle your scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="section-loose bg-gray-50">
        <div className="container-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col border border-brand-border shadow-sm">
            <h2 className="section-subheading text-brand-royal-blue-dark mb-6">
              Your Envoy
            </h2>

            <div className="mb-6">
              <div className="row-inline-xs">
                <span className="text-5xl font-semibold text-brand-gold">€29</span>
                <span className="text-3xl text-gray-600">/ seat / month</span>
              </div>
            </div>

            <p className="text-body text-gray-600 mb-8">
              14 days free. Card required, nothing charged until your trial ends.
            </p>

            <h3 className="text-sm font-semibold text-brand-royal-blue-dark mb-4 uppercase tracking-wide">
              Included:
            </h3>

            <ul className="stack-sm">
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-body text-gray-600">Schedule meetings</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-body text-gray-600">Reschedule meetings</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-body text-gray-600">Cancel meetings</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-body text-gray-600">Coordinate across Google Calendar and Microsoft Outlook</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-body text-gray-600">Work across companies, participants and time zones</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                <span className="text-body text-gray-600">Control who can access your availability through the Trust Center</span>
              </li>
            </ul>

            <div className="mt-10 flow-xs items-center">
              <LoginButton size="large" className="px-10">
                Get your Envoy
              </LoginButton>
              <p className="text-sm text-gray-500">Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="section-standard bg-white">
        <div className="container-4xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-subheading text-brand-royal-blue-dark mb-4">
              Start with one. Add more when you need them.
            </h2>
            <p className="text-body text-gray-600">
              Your subscription is based on the number of Envoys you use. Get one for yourself, or add more for people you manage or work with.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-standard bg-gray-50">
        <div className="container-4xl">
          <h2 className="section-heading text-center text-brand-royal-blue-dark mb-12">
            Frequently asked questions
          </h2>

          <div className="flow-md">
            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-brand-royal-blue-dark mb-3">
                Is there a free trial?
              </h3>
              <p className="text-body text-gray-600">
                Yes. You can try your Envoy free for 14 days. A payment method is required when you subscribe, but you won&apos;t be charged until the trial ends.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-brand-royal-blue-dark mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-body text-gray-600">
                Yes. There is no long-term commitment.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-brand-royal-blue-dark mb-3">
                Can I get more than one Envoy?
              </h3>
              <p className="text-body text-gray-600">
                Yes. You can subscribe to as many Envoys as you need.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-brand-royal-blue-dark mb-3">
                Does it work with Google and Microsoft calendars?
              </h3>
              <p className="text-body text-gray-600">
                Yes. Ask My Envoy works across Google Calendar and Microsoft Outlook.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-brand-royal-blue-dark mb-3">
                Do people I schedule with need their own Envoy?
              </h3>
              <p className="text-body text-gray-600">
                No. But they do need to connect their calendar and accept your invitation so your Envoy can access their availability. If they don&apos;t connect their calendar, your Envoy won&apos;t be able to coordinate the meeting automatically.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-brand-royal-blue-dark mb-3">
                How do I invite people I work with?
              </h3>
              <p className="text-body text-gray-600">
                Go to the Trust Center and invite them directly. Once they accept and connect their calendar, your Envoy can see whether it has access to their availability and coordinate meetings with them.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-loose bg-white">
        <div className="container-4xl">
          <div className="max-w-3xl mx-auto rounded-2xl border border-brand-border bg-gray-50 p-8 md:p-10 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <h2 className="section-heading text-brand-royal-blue-dark mb-4">
              Still have a question?
            </h2>
            <p className="text-body text-gray-600 mb-8">
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
