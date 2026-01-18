'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center items-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center text-black leading-tight max-w-3xl">
              Stop playing scheduling ping-pong with your best clients.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-center text-gray-500 max-w-3xl">
              Envoy handles C-suite scheduling across companies, so you can focus on billable work. 
              Not a booking link. Not a calendar tool. A coordination engine for consultants.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link 
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-normal text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
              >
                Start free trial
              </Link>
              <Link 
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-normal text-black border border-gray-300 rounded-md hover:bg-gray-50 transition-colors gap-2"
              >
                See how it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - The Coordination Tax */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-36">
          <div className="flex flex-col gap-16">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-black">
              The coordination tax nobody talks about.
            </h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col gap-4">
                <div className="text-5xl font-normal text-black">6.8</div>
                <h3 className="text-xl font-normal text-black">Emails per meeting</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Every scheduled meeting costs an average of 6.8 emails. Multiply that by dozens of client 
                  meetings per month, and you're drowning in logistics instead of billing.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col gap-4">
                <div className="text-5xl font-normal text-black">3hrs</div>
                <h3 className="text-xl font-normal text-black">Lost per week</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Senior consultants waste 3+ hours every week just coordinating schedules. That's 150+ hours 
                  a year of unbillable work that nobody tracks.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col gap-4">
                <div className="text-5xl font-normal text-black">$47k</div>
                <h3 className="text-xl font-normal text-black">Annual opportunity cost</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  At $300/hr, those 150 lost hours equal $47,000 in unbilled time per consultant. 
                  Per year. That's real revenue left on the table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Why Other Solutions Don't Work */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-36">
          <div className="flex flex-col items-center gap-16">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-black">
              You've tried everything. Here's why it didn't work.
            </h2>
            
            {/* Problem Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Problem 1 */}
              <div className="border border-gray-200 rounded-lg p-8 flex flex-col gap-3">
                <h3 className="text-xl font-normal text-black">Booking Links</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Sending a booking link to a C-suite client is too transactional. It shifts the power 
                  dynamic, asking busy executives to do your scheduling.
                </p>
              </div>
              
              {/* Problem 2 */}
              <div className="border border-gray-200 rounded-lg p-8 flex flex-col gap-3">
                <h3 className="text-xl font-normal text-black">EAs and Assistants</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Coordinating through assistants adds delays. Every request becomes a multi-party thread, 
                  slowing everything down and multiplying the back-and-forth.
                </p>
              </div>
              
              {/* Problem 3 */}
              <div className="border border-gray-200 rounded-lg p-8 flex flex-col gap-3">
                <h3 className="text-xl font-normal text-black">Calendar Tools</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Calendar integrations help you, but they don't coordinate for you. Someone still has to 
                  manage the logistics, chase replies, and reconcile conflicts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section - The Solution */}
      <section className="w-full bg-black py-24">
        <div className="max-w-5xl mx-auto px-8 md:px-52">
          <div className="flex flex-col items-center gap-6">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-white">
              Professional coordination across organizations. Finally.
            </h2>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-center text-gray-300 max-w-3xl">
              Envoy is the coordination engine for consultants who can't send Calendly to clients and 
              can't afford a $70K executive assistant.
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-6">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center gap-4 pt-12 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-white">Multi-party coordination</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  Handles complex scheduling across multiple companies, assistants, and time zones. 
                  One request, done.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center gap-4 pt-12 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-white">White-glove experience</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  Your clients get professional coordination without the overhead. Maintains the power dynamic.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center gap-4 pt-12 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-white">Always working</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  24/7 coordination means meetings get scheduled while you sleep. No delays, no dropped threads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8 md:px-68">
          <div className="flex flex-col gap-16">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-black">
              Set up once. Send your Envoy forever.
            </h2>
            
            {/* Steps */}
            <div className="flex flex-col gap-16">
              {/* Step 1 */}
              <div className="flex flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-xl font-normal text-white">1</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-black">Connect your calendar</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Link Google Calendar or Outlook. Envoy syncs your availability in real-time and respects your 
                    work patterns and preferences.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-xl font-normal text-white">2</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-black">Tell Envoy who to schedule</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Just email or message your Envoy: "Schedule a meeting with John next week about the project." 
                    That's it.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-xl font-normal text-white">3</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-black">Envoy handles everything</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Envoy reaches out professionally, coordinates across calendars and assistants, proposes times, 
                    handles replies, and confirms. You get a calendar invite when it's done.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-xl font-normal text-white">4</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-black">Sit back and focus</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    No more email ping-pong. No more assistant chains. No more "let me check my calendar." 
                    Just scheduled meetings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-36">
          <div className="flex flex-col gap-16">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-black">
              What professionals say.
            </h2>
            
            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col gap-6">
                <p className="text-base text-brand-gray leading-relaxed">
                  "When I had an executive assistant, her name was Anya... She knew exactly when to ask me. 
                  She knew when it was important. This is all gone."
                </p>
                <p className="text-sm text-gray-500">— Partner at consultancy</p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col gap-6">
                <p className="text-base text-brand-gray leading-relaxed">
                  "I waste so much time coordinating meetings across companies. It's not just my calendar — 
                  it's their assistants, their preferences, time zones. It's exhausting."
                </p>
                <p className="text-sm text-gray-500">— Senior Consultant</p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col gap-6">
                <p className="text-base text-brand-gray leading-relaxed">
                  "Booking links work for sales calls. But I can't send Calendly to a C-suite client. 
                  It's just not professional for the relationship."
                </p>
                <p className="text-sm text-gray-500">— Management Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black max-w-3xl">
              Stop scheduling. Start delivering.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
              Join consultants who've reclaimed their time and elevated their client relationships.
            </p>
            <Link 
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-normal text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
