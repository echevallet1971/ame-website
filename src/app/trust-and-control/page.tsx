'use client';

import Card from '../components/Card';

export default function TrustAndControlPage() {
  return (
    <div className="min-h-screen">
      <section className="section-standard bg-surface-soft">
        <div className="container-5xl">
          <div className="flow-xl items-center">
            <h1 className="section-heading text-ink-primary text-center">
              But wait. Why should I trust your AI agent with access to my calendar? What exactly can it see and do?
            </h1>

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
