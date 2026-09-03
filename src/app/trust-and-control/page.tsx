import type { Metadata } from 'next';
import Card from '../components/Card';

export const metadata: Metadata = {
  title: 'Private meeting coordination with built-in access control',
  description:
    'See how Ask My Envoy limits calendar access, controls what others can discover, and coordinates meetings without exposing more information than necessary.',
  alternates: {
    canonical: 'https://askmyenvoy.com/trust-and-control',
  },
  robots: 'index, follow',
};

export default function TrustAndControlPage() {
  return (
    <div className="min-h-screen">
      <section className="section-hero-compact bg-surface-base">
        <div className="container-4xl">
          <div className="flow-md items-center">
            <h1 className="hero-heading text-center text-ink-primary max-w-4xl">
              An Envoy should never know more than it needs to.
            </h1>

            <p className="text-lead text-center text-copy-muted max-w-4xl">
              You control who gets access to your calendar and what they can do with it. Your own Envoy may need broader access to work for you. Someone else&apos;s Envoy only needs what&apos;s necessary to coordinate with you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-standard bg-surface-soft">
        <div className="container-5xl">
          <div className="flow-xl items-center">
            <h2 className="section-heading text-ink-primary text-center">What each Envoy can access</h2>

            <div className="w-full max-w-5xl grid-two">
              <Card className="rounded-xl p-6 md:p-8">
                <p className="item-heading text-ink-primary mb-3">
                  If someone else&apos;s Envoy needs your availability
                </p>
                <p className="text-body text-copy-primary">
                  It can only access whether you are free or busy during the requested period. It cannot read your meeting titles, participants, descriptions, locations or any other event details in your calendar.
                </p>
              </Card>

              <Card className="rounded-xl p-6 md:p-8">
                <p className="item-heading text-ink-primary mb-3">
                  If it&apos;s your own Envoy
                </p>
                <p className="text-body text-copy-primary">
                  It can access the full details of your calendar, including meeting titles, participants, descriptions and other information it needs to manage your meetings on your behalf.
                </p>
              </Card>
            </div>

            <p className="max-w-4xl text-lead font-medium text-ink-primary text-center">
              In both cases, you decide who gets access and what they&apos;re allowed to do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
