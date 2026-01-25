'use client';

import Card from '../components/Card';
import Button from '../components/Button';
import LoginButton from '../components/LoginButton';

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center items-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center text-brand-royal-blue-dark leading-tight">
              One Envoy. Three ways to coordinate.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-center text-gray-500 max-w-3xl">
              Whether you're receiving requests, organizing your own meetings, or coordinating across teams, 
              your Envoy adapts to how you work.
            </p>
          </div>
        </div>
      </section>

      {/* Three Modes Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-col gap-24">
            
            {/* Mode 1: Anonymous */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 items-center text-center">
                <div className="w-16 h-16 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
                  Anonymous Mode
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Share your Envoy with your network. They reach out, your Envoy coordinates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-normal text-brand-royal-blue-dark">How it works</h3>
                    <div className="flex flex-col gap-3 text-base text-gray-600">
                      <p>1. Share your unique Envoy link or QR code</p>
                      <p>2. Prospects, clients, or partners contact your Envoy</p>
                      <p>3. Your Envoy checks your calendar and proposes times</p>
                      <p>4. Meeting gets booked without you lifting a finger</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-normal text-brand-royal-blue-dark">Best for</h3>
                    <div className="flex flex-col gap-3 text-base text-gray-600">
                      <p>• Independent consultants managing client intake</p>
                      <p>• Sales professionals qualifying leads</p>
                      <p>• Executives with large external networks</p>
                      <p>• Anyone tired of back-and-forth scheduling emails</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-brand-royal-blue-dark p-6 rounded-r-lg">
                <p className="text-base text-gray-700">
                  <strong>Real scenario:</strong> You share your Envoy link in your email signature. 
                  A prospect reaches out to schedule a discovery call. Your Envoy handles the timezone 
                  negotiation, proposes slots that respect your focus time, and books the meeting—all 
                  while you're focused on client work.
                </p>
              </div>
            </div>

            {/* Mode 2: Self */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 items-center text-center">
                <div className="w-16 h-16 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
                  Self Mode
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Ask your Envoy to organize meetings on your behalf. You initiate, your Envoy executes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-normal text-brand-royal-blue-dark">How it works</h3>
                    <div className="flex flex-col gap-3 text-base text-gray-600">
                      <p>1. Tell your Envoy who you need to meet and when</p>
                      <p>2. Your Envoy reaches out to coordinate on your behalf</p>
                      <p>3. It negotiates times across calendars and timezones</p>
                      <p>4. Meeting gets scheduled and added to your calendar</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-normal text-brand-royal-blue-dark">Best for</h3>
                    <div className="flex flex-col gap-3 text-base text-gray-600">
                      <p>• Busy professionals managing multiple stakeholders</p>
                      <p>• Partnership discussions across companies</p>
                      <p>• Multi-party meetings (3+ participants)</p>
                      <p>• Complex coordination with VIP contacts</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-brand-royal-blue-dark p-6 rounded-r-lg">
                <p className="text-base text-gray-700">
                  <strong>Real scenario:</strong> You need to organize a strategic discussion with a 
                  C-level executive and two of their team members across different timezones. You brief 
                  your Envoy with the context and constraints. Your Envoy coordinates with all parties, 
                  finds a time that works, and books it—saving you hours of email ping-pong.
                </p>
              </div>
            </div>

            {/* Mode 3: Collaborative */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 items-center text-center">
                <div className="w-16 h-16 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
                  Collaborative Mode
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Delegate coordination to a colleague's Envoy. Perfect for team workflows and EA escalation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-normal text-brand-royal-blue-dark">How it works</h3>
                    <div className="flex flex-col gap-3 text-base text-gray-600">
                      <p>1. You identify a meeting that should come from a colleague</p>
                      <p>2. You delegate coordination to their Envoy (or EA)</p>
                      <p>3. Their Envoy handles outreach and scheduling</p>
                      <p>4. Meeting appears in everyone's calendar</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-normal text-brand-royal-blue-dark">Best for</h3>
                    <div className="flex flex-col gap-3 text-base text-gray-600">
                      <p>• Teams sharing scheduling responsibilities</p>
                      <p>• Executives with dedicated EAs</p>
                      <p>• Partner-led client introductions</p>
                      <p>• Shared calendars and team coordination</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-brand-royal-blue-dark p-6 rounded-r-lg">
                <p className="text-base text-gray-700">
                  <strong>Real scenario:</strong> You need a meeting with a client, but your senior 
                  partner should be the one extending the invitation. You route the request to their 
                  Envoy (or EA). Their Envoy coordinates on behalf of your partner, maintaining the 
                  relationship dynamics while still getting the meeting scheduled efficiently.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* All Modes Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col gap-12">
            <h2 className="text-3xl md:text-4xl font-normal text-center text-brand-royal-blue-dark">
              What all modes have in common
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-royal-blue-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-brand-royal-blue-dark mb-2">Privacy-first</h3>
                  <p className="text-base text-gray-600">
                    Your calendar details stay private. Envoy only shares availability, never meeting content.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-royal-blue-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-brand-royal-blue-dark mb-2">Relationship-aware</h3>
                  <p className="text-base text-gray-600">
                    Envoy understands context: who's senior, what's urgent, when to escalate to you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-royal-blue-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-brand-royal-blue-dark mb-2">Professional tone</h3>
                  <p className="text-base text-gray-600">
                    Natural language, courteous communication, respecting professional norms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-royal-blue-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-brand-royal-blue-dark mb-2">Real-time updates</h3>
                  <p className="text-base text-gray-600">
                    Checks your calendar instantly. No stale availability, no double-bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-white">
              Ready to deploy your Envoy?
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl">
              Start with one mode or use all three. Your Envoy adapts to how you work, 
              not the other way around.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <LoginButton size="large" variant="light">
                Get started
              </LoginButton>
              <Button href="/how-it-works" variant="light">
                See it in action
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
