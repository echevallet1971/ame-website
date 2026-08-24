import Image from 'next/image';
import Button from '../components/Button';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero bg-white flex justify-center items-center">
        <div className="container-4xl">
          <div className="flow-md items-center">
            <h1 className="hero-heading text-center text-brand-royal-blue-dark">
              Ask your Envoy.
            </h1>

            <p className="text-lead text-center text-gray-500 max-w-3xl">
              No need to annoy everyone asking if they&apos;re available next Tuesday.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <section className="section-standard bg-gray-50">
        <div className="container-6xl">
          <div className="split-layout">
            <div className="w-full lg:w-1/2">
              <div className="w-full rounded-2xl border border-brand-border bg-white p-2 shadow-sm">
                <Image
                  src="/assets/images/how-it-works/how-it-works_step1.png"
                  alt="Open your Envoy from the top navigation"
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flow-sm">
                <h2 className="section-subheading text-brand-royal-blue-dark">
                  1. Open your Envoy
                </h2>
                <p className="text-body text-gray-600 max-w-xl">
                  Once your Envoy is set up, click My Envoy in the top bar to open the conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="section-standard bg-white">
        <div className="container-7xl">
          <div className="split-layout-wide">
            <div className="w-full xl:w-1/3">
              <div className="rounded-2xl border border-brand-border bg-gray-50 p-6 md:p-8">
                <div className="stack-md">
                  <div className="row-start">
                    <div className="w-8 h-8 rounded-full bg-brand-royal-blue/10 text-brand-royal-blue-dark flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <p className="item-heading text-brand-royal-blue-dark">Tell your Envoy what you want</p>
                      <p className="text-body text-gray-600 mt-1">Tell it who you want to meet and when.</p>
                    </div>
                  </div>

                  <div className="ml-4 h-6 border-l border-dashed border-brand-royal-blue/40" />

                  <div className="row-start">
                    <div className="w-8 h-8 rounded-full bg-brand-royal-blue/10 text-brand-royal-blue-dark flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <p className="item-heading text-brand-royal-blue-dark">Your Envoy proposes the times that work</p>
                      <p className="text-body text-gray-600 mt-1">It checks the calendars it has access to and comes back with the times that work for everyone.</p>
                    </div>
                  </div>

                  <div className="ml-4 h-6 border-l border-dashed border-brand-royal-blue/40" />

                  <div className="row-start">
                    <div className="w-8 h-8 rounded-full bg-brand-royal-blue/10 text-brand-royal-blue-dark flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <p className="item-heading text-brand-royal-blue-dark">Pick a time and complete the details</p>
                      <p className="text-body text-gray-600 mt-1">Choose the time, duration and meeting title. If you leave something out, your Envoy asks for what it needs before scheduling the meeting and sending the invitations.</p>
                    </div>
                  </div>
                </div>

                <p className="text-body text-gray-600 mt-8">
                  No scheduling ping-pong. Just a meeting in the calendar.
                </p>
              </div>
            </div>

            <div className="w-full xl:w-2/3">
              <div className="w-full rounded-2xl border border-brand-border bg-white p-2 shadow-sm">
                <Image
                  src="/assets/images/how-it-works/how-it-works-conversation.webp"
                  alt="Envoy conversation flow from request to confirmed meeting"
                  width={1800}
                  height={1200}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-loose bg-gray-50">
        <div className="container-4xl">
          <div className="flex justify-center">
            <Button href="/pricing" className="px-10">
              See pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
