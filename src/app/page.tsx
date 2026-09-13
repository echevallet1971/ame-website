import type { Metadata } from 'next';
import { ArrowTrendingUpIcon, ClockIcon, ForwardIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
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
      <section className="section-hero-main bg-surface-base flex justify-center items-center">
        <div className="container-4xl">
          <div className="flow-md items-center">
            <h1 className="hero-heading text-center text-ink-primary max-w-3xl">
              We still coordinate meetings as if we used paper planners.
            </h1>

            <div className="w-full max-w-6xl">
              <div className="overflow-hidden rounded-2xl border border-line-default shadow-sm">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1">
                    <Image
                      src="/assets/images/homepage/scheduling_1986.webp"
                      alt="Scheduling in 1986: coordinating meetings by phone and paper planner"
                      width={877}
                      height={887}
                      className="w-full h-auto"
                      priority
                    />
                    <figure className="flex flex-col items-center gap-2 border-t border-line-default bg-surface-soft px-3 pt-1.5 pb-2.5 text-center md:px-4 md:pt-2 md:pb-3">
                      <p className="section-subheading text-ink-primary">1986</p>
                      <div className="flex flex-col gap-px">
                        <p className="text-body leading-snug text-copy-muted">Are you available next Thursday?</p>
                        <p className="text-body leading-snug text-copy-muted">Hold on, let me check.</p>
                      </div>
                    </figure>
                  </div>

                  <div
                    className="h-1.5 w-full shrink-0 bg-white md:w-1.5 md:self-stretch"
                    aria-hidden="true"
                  />

                  <div className="flex-1">
                    <Image
                      src="/assets/images/homepage/scheduling_2026.webp"
                      alt="Scheduling in 2026: coordinating meetings on a smartphone in a modern office"
                      width={876}
                      height={887}
                      className="w-full h-auto"
                    />
                    <figure className="flex flex-col items-center gap-2 border-t border-line-default bg-surface-soft px-3 pt-1.5 pb-2.5 text-center md:px-4 md:pt-2 md:pb-3">
                      <p className="section-subheading text-ink-primary">2026</p>
                      <div className="flex flex-col gap-px">
                        <p className="text-body leading-snug text-copy-muted">Are you available next Thursday?</p>
                        <p className="text-body leading-snug text-copy-muted">Hold on, let me check.</p>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-lead text-center text-copy-muted max-w-3xl stack-sm">
              <p>
                When a meeting crosses company boundaries, we still ask: &ldquo;Are you available next Tuesday?&rdquo; as if we were still using paper planners.
              </p>
              <p>
                <span className="font-bold">Ask My Envoy</span> takes meeting coordination off your plate.
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

      {/* Coordination Section */}
      <section className="section-standard bg-surface-soft">
        <div className="container-4xl">
          <div className="flow-xl items-center">
            <h2 className="section-heading text-ink-primary text-center max-w-3xl">
              An Envoy is an AI agent that coordinates meetings on your behalf.
            </h2>

            <p className="text-lead text-center text-copy-primary max-w-3xl">
              You tell it who you want to meet. It handles the{' '}
              <Link href="/meeting-coordination" className="text-action-primary hover:underline">
                coordination
              </Link>{' '}
              with the other participants and brings you back in when your input is needed.
            </p>
          </div>
        </div>
      </section>

      {/* Friction Cost Section */}
      <section className="section-standard bg-surface-base">
        <div className="container-4xl">
          <div className="flow-xl items-center">
            <h2 className="section-heading text-ink-primary text-center max-w-3xl">
              A few minutes at a time becomes a real business cost.
            </h2>

            <p className="text-lead text-center text-copy-primary max-w-3xl">
              Meeting coordination{' '}
              <Link href="/cost-of-meeting-coordination" className="text-action-primary hover:underline">
                rarely feels like a major problem
              </Link>{' '}
              because the cost is spread across dozens of small interruptions. But those minutes compound.
            </p>

            <div className="w-full max-w-3xl divide-y divide-line-default border-y border-line-default">
              <div className="row-start py-6">
                <ClockIcon className="h-7 w-7 text-action-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="item-heading text-ink-primary">Productivity cost</p>
                  <p className="text-lead text-copy-primary">
                    Time lost in emails, follow-ups, interruptions and context switching.
                  </p>
                </div>
              </div>

              <div className="row-start py-6">
                <ArrowTrendingUpIcon className="h-7 w-7 text-action-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="item-heading text-ink-primary">Business velocity</p>
                  <p className="text-lead text-copy-primary">
                    Meetings happen later, slowing decisions, projects and sales cycles.
                  </p>
                </div>
              </div>

              <div className="row-start py-6">
                <ForwardIcon className="h-7 w-7 text-action-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="item-heading text-ink-primary">Lost opportunity</p>
                  <p className="text-lead text-copy-primary">
                    When coordination takes too long, people move on.
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
              Stop spending time coordinating meetings.
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
