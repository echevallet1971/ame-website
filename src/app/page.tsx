import type { Metadata } from 'next';
import { ArrowTrendingUpIcon, ClockIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Button from './components/Button';
import LoginButton from './components/LoginButton';

export const metadata: Metadata = {
  title: 'AI meeting coordination without the back-and-forth | Ask My Envoy',
  description:
    'Ask My Envoy coordinates meetings across calendars and organizations, handling availability, participants and the back-and-forth so you don’t have to.',
  alternates: {
    canonical: 'https://askmyenvoy.com/',
  },
  robots: 'index, follow',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero bg-surface-base flex justify-center items-center">
        <div className="container-4xl">
          <div className="flow-md items-center">
            <h1 className="hero-heading text-center text-ink-primary max-w-3xl">
              It&apos;s 2026. We shouldn&apos;t still be asking people when they&apos;re available.
            </h1>

            <div className="text-lead text-center text-copy-muted max-w-3xl stack-sm">
              <p>
                Everyone&apos;s availability is already in their calendar. Yet someone still has to collect it, compare it, negotiate a time, and keep the meeting moving when things change.
              </p>
              <p>
                Ask My Envoy{' '}
                <Link href="/meeting-coordination" className="text-action-primary hover:underline">
                  does that coordination for you
                </Link>
                .
              </p>
            </div>

            <div className="cta-row pt-4">
              <LoginButton size="large" className="px-10">
                Get your Envoy
              </LoginButton>
              <Button href="/pricing" variant="secondary" className="px-10">
                See pricing
              </Button>
            </div>

            <div className="cluster-center pt-2 text-copy-muted">
              <span className="text-base">Works with:</span>
              <div className="row-inline-sm">
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
                <span className="text-base text-copy-primary">Google Calendar</span>
              </div>
              <div className="row-inline-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
                  <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
                  <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
                  <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
                </svg>
                <span className="text-base text-copy-primary">Microsoft Outlook</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Friction Cost Section */}
      <section className="section-standard bg-surface-soft">
        <div className="container-4xl">
          <div className="flow-xl items-center">
            <h2 className="section-heading text-ink-primary text-center">
              We got used to the friction. That doesn&apos;t make it free.
            </h2>

            <p className="text-lead text-center text-copy-primary max-w-3xl">
              Scheduling{' '}
              <Link href="/cost-of-meeting-coordination" className="text-action-primary hover:underline">
                rarely feels like a major problem
              </Link>{' '}
              because the cost is spread across dozens of small interruptions.
            </p>

            <div className="w-full max-w-3xl divide-y divide-line-default border-y border-line-default">
              <div className="row-start py-6">
                <ClockIcon className="h-7 w-7 text-action-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="item-heading text-ink-primary">Time</p>
                  <p className="text-lead text-copy-primary">
                    Calendar checks, availability messages, and reschedules quietly consume hours every week.
                  </p>
                </div>
              </div>

              <div className="row-start py-6">
                <EyeIcon className="h-7 w-7 text-action-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="item-heading text-ink-primary">Attention</p>
                  <p className="text-lead text-copy-primary">
                    Each interruption breaks focus and pulls people away from the decisions that matter.
                  </p>
                </div>
              </div>

              <div className="row-start py-6">
                <ArrowTrendingUpIcon className="h-7 w-7 text-action-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="item-heading text-ink-primary">Momentum</p>
                  <p className="text-lead text-copy-primary">
                    Delays cool leads, slow decisions, and leave projects waiting for everyone to align.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-standard bg-gradient-to-br from-ink-primary via-action-hover to-ink-primary">
        <div className="container-4xl">
          <div className="flow-lg items-center text-center">
            <h2 className="section-heading text-white max-w-3xl">
              Stop spending time scheduling meetings.
            </h2>
            <p className="text-lead text-copy-inverse/80 max-w-2xl">
              Get your Envoy and let it handle the coordination.
            </p>

            <div className="cta-row">
              <LoginButton size="large" className="px-10">
                Get your Envoy
              </LoginButton>
              <Button href="/how-it-works" variant="light" className="px-10">
                See how it works
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
