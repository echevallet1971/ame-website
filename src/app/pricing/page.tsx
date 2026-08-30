import type { Metadata } from 'next';
import { CheckIcon } from '@heroicons/react/24/solid';
import Card from '../components/Card';
import LoginButton from '../components/LoginButton';
import ContactButton from '../components/ContactButton';

export const metadata: Metadata = {
  title: 'Pricing for AI meeting coordination',
  description:
    'Explore Ask My Envoy pricing for meeting coordination across calendars and organizations, with plans designed to reduce scheduling back-and-forth.',
  alternates: {
    canonical: 'https://askmyenvoy.com/pricing',
  },
  robots: 'index, follow',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-standard bg-surface-base">
        <div className="container-4xl">
          <div className="flow-md items-center">
            <h1 className="hero-heading text-center text-ink-primary">
              Get your Envoy.
            </h1>

            <p className="text-lead text-center text-copy-muted max-w-3xl">
              One simple subscription. Everything your Envoy needs to handle your scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="section-loose bg-surface-soft">
        <div className="container-4xl">
          <div className="bg-surface-base rounded-2xl p-8 md:p-10 flex flex-col border border-line-default shadow-sm">
            <h2 className="section-subheading text-ink-primary mb-6">
              Your Envoy
            </h2>

            <div className="mb-6">
              <div className="row-inline-xs">
                <span className="text-5xl font-semibold text-emphasis-primary">€29</span>
                <span className="text-3xl text-copy-primary">/ seat / month</span>
              </div>
            </div>

            <p className="text-body text-copy-primary mb-8">
              14 days free. Card required, nothing charged until your trial ends.
            </p>

            <h3 className="text-sm font-semibold text-ink-primary mb-4 uppercase tracking-wide">
              Included:
            </h3>

            <ul className="stack-sm">
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                <span className="text-body text-copy-primary">Schedule meetings</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                <span className="text-body text-copy-primary">Reschedule meetings</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                <span className="text-body text-copy-primary">Cancel meetings</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                <span className="text-body text-copy-primary">Coordinate across Google Calendar and Microsoft Outlook</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                <span className="text-body text-copy-primary">Work across companies, participants and time zones</span>
              </li>
              <li className="row-start-tight">
                <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                <span className="text-body text-copy-primary">Control who can access your availability through the Trust Center</span>
              </li>
            </ul>

            <div className="mt-10 flow-xs items-center">
              <LoginButton size="large" className="px-10">
                Get your Envoy
              </LoginButton>
              <p className="text-sm text-copy-muted">Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="section-standard bg-surface-base">
        <div className="container-4xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-subheading text-ink-primary mb-4">
              Start with one. Add more when you need them.
            </h2>
            <p className="text-body text-copy-primary">
              Your subscription is based on the number of Envoys you use. Get one for yourself, or add more for people you manage or work with.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-standard bg-surface-soft">
        <div className="container-4xl">
          <h2 className="section-heading text-center text-ink-primary mb-12">
            Frequently asked questions
          </h2>

          <div className="flow-md">
            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Is there a free trial?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. You can try your Envoy free for 14 days. A payment method is required when you subscribe, but you won&apos;t be charged until the trial ends.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. There is no long-term commitment.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Can I get more than one Envoy?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. You can subscribe to as many Envoys as you need.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Does it work with Google and Microsoft calendars?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. Ask My Envoy works across Google Calendar and Microsoft Outlook.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Do people I schedule with need their own Envoy?
              </h3>
              <p className="text-body text-copy-primary">
                No. But they do need to connect their calendar and accept your invitation so your Envoy can access their availability. If they don&apos;t connect their calendar, your Envoy won&apos;t be able to coordinate the meeting automatically.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                How do I invite people I work with?
              </h3>
              <p className="text-body text-copy-primary">
                Go to the Trust Center and invite them directly. Once they accept and connect their calendar, your Envoy can see whether it has access to their availability and coordinate meetings with them.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-loose bg-surface-base">
        <div className="container-4xl">
          <div className="max-w-3xl mx-auto rounded-2xl border border-line-default bg-surface-soft p-8 md:p-10 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <h2 className="section-heading text-ink-primary mb-4">
              Still have a question?
            </h2>
            <p className="text-body text-copy-primary mb-8">
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
