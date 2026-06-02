'use client';

import Link from 'next/link';
import Card from './components/Card';
import Button from './components/Button';
import Quote from './components/Quote';
import { ArrowRightIcon, LockClosedIcon, UserGroupIcon, CheckIcon } from '@heroicons/react/24/solid';
import { getPlatformUrl } from '@/lib/platform-config';

export default function Home() {
  const handleContactClick = async () => {
    try {
      const platformContactUrl = await getPlatformUrl('contact');
      window.open(platformContactUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get contact URL:', error);
      alert('Unable to connect to platform. Please try again.');
    }
  };

  const handleGetStarted = async () => {
    try {
      const platformReserveUrl = await getPlatformUrl('reserve');
      window.open(platformReserveUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get platform URL:', error);
      alert('Unable to connect to platform. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center items-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center text-brand-royal-blue-dark leading-tight max-w-3xl">
              Stop playing scheduling ping-pong with your best clients.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-center text-gray-500 max-w-3xl">
              Envoy handles C-suite scheduling across companies, so you can focus on delivering work. 
              Not a booking link. Not a calendar tool. A coordination engine for busy professionals.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800"
              >
                Apply for early access
              </button>
              <Button href="/how-it-works" variant="secondary" className="gap-2">
                See how it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
            
            {/* Works With */}
            <div className="flex items-center gap-6 pt-8 text-gray-500">
              <span className="text-base">Works with:</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
                <span className="text-base text-gray-600">Google Calendar</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
                  <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
                  <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
                  <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
                </svg>
                <span className="text-base text-gray-600">Microsoft Outlook</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - The Coordination Tax */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-36">
          <div className="flex flex-col gap-16">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-brand-royal-blue-dark">
              The coordination tax nobody talks about.
            </h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card>
                <div className="flex flex-col gap-4">
                  <div className="text-5xl font-normal text-brand-gold">6.8</div>
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">The email Spiral</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    External meetings often begin with a tug-of-war over dates and times. 
                    Until someone gives in, or the chance slips away.
                  </p>
                </div>
              </Card>
              
              {/* Card 2 */}
              <Card>
                <div className="flex flex-col gap-4">
                  <div className="text-5xl font-normal text-brand-gold">4hrs</div>
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">The Flow Killer</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Zero deep work when you're playing scheduling Tetris. The friction becomes so 
                    unbearable you start avoiding meetings entirely.
                  </p>
                </div>
              </Card>

              {/* Card 3 */}
              <Card>
                <div className="flex flex-col gap-4">
                  <div className="text-5xl font-normal text-brand-gold">€30k+</div>
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">The Hidden Cost</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    At senior consultant rates, that email ping-pong costs more than a junior hire's salary. 
                    Every year. And nobody's tracking it.
                  </p>
                </div>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Why Other Solutions Don't Work */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-36">
          <div className="flex flex-col items-center gap-16">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-brand-royal-blue-dark">
              You've tried everything. Here's why it didn't work.
            </h2>
            
            {/* Problem Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Problem 1 */}
              <Card className="bg-transparent">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">Booking Links</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                  Sending a booking link to a C-suite client is too transactional. 
                  It shifts the power dynamic, asking busy executives to do your scheduling.
                  </p>
                  <div className="pt-2">
                    <p className="text-sm font-normal text-brand-royal-blue-dark">Built for inbound.</p>
                    <p className="text-sm font-normal text-brand-royal-blue-dark">You need outbound.</p>
                  </div>
                </div>
              </Card>

              {/* Problem 2 */}
              <Card className="bg-transparent">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">Calendar Sharing</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                  Sharing your calendar reveals your schedule. Clients can see if you're busy or 
                  meeting others. You're giving them raw data without context.
                  </p>
                  <div className="pt-2">
                    <p className="text-sm font-normal text-brand-royal-blue-dark">Passive exposure.</p>
                    <p className="text-sm font-normal text-brand-royal-blue-dark">Zero coordination intelligence.</p>
                  </div>
                </div>
              </Card>
                            
              {/* Problem 3 */}
              <Card className="bg-transparent">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">Human EAs</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                  A great EA costs €50K-€80K a year. Finding skilled ones is tough. 
                  Companies no longer offer this support, so you're on your own.
                  </p>
                  <div className="pt-2">
                    <p className="text-sm font-normal text-brand-royal-blue-dark">Gold standard.</p>
                    <p className="text-sm font-normal text-brand-royal-blue-dark">Unaffordable reality.</p>
                  </div>
                </div>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <Quote 
            quote="The Calendly-like approach doesn't help me a lot. 
            It's more like the doctor's appointment type of approach. 
            I don't want them to know what's in my agenda. 
            I may be in meetings with some of their competitors."
            author="— Luc, Partner at aXialyze"
          />
        </div>
      </section>

      {/* Dark Section - The Solution */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col items-center gap-12">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-white">
              Professional coordination across organizations. Finally.
            </h2>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-center text-gray-300 max-w-3xl">
              Envoy is the coordination engine for professionals who can't send Calendly to clients and 
              can't afford a $70K executive assistant.
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-5xl pt-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <ArrowRightIcon className="w-10 h-10 text-brand-royal-blue-dark" />
                </div>
                <h3 className="text-xl font-normal text-white">Outbound, not inbound</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  We coordinate with them. You don't wait for them to book.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <LockClosedIcon className="w-10 h-10 text-brand-royal-blue-dark" />
                </div>
                <h3 className="text-xl font-normal text-white">Privacy-preserving</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  Only shares what's needed. Never your full calendar or client list.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <UserGroupIcon className="w-10 h-10 text-brand-royal-blue-dark" />
                </div>
                <h3 className="text-xl font-normal text-white">Relationship-aware</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  Knows when to push, when to defer, when to ask you or your EA first.
                </p>
              </div>
            </div>
            
            {/* Tagline and CTA */}
            <div className="flex flex-col items-center gap-6 pt-8">
              <p className="text-xl md:text-2xl text-white font-normal">
                Coordination engine, not booking link.
              </p>
              <Button href="/how-it-works" variant="light" className="gap-2">
                See how it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8 md:px-68">
          <div className="flex flex-col gap-16">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-brand-royal-blue-dark">
              Set up once. Send your Envoy forever.
            </h2>
            
            {/* Steps */}
            <div className="flex flex-col gap-16">
              {/* Step 1 */}
              <div className="flex flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <span className="text-xl font-normal text-white">1</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">Connect your calendar</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                  Link your Google or Microsoft calendar. Envoy updates your availability in real time. 
                  It keeps your full schedule private.
                  </p>
                  <p className="text-sm text-gray-400">
                    Works with both. Handles mixed environments.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <span className="text-xl font-normal text-white">2</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">Brief your Envoy</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Write a short professional summary (like a LinkedIn About section). 
                    This helps your Envoy grasp who you are, how you work, and how to represent you well.
                  </p>
                  <p className="text-sm text-gray-400">
                    Your Envoy learns your voice.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <span className="text-xl font-normal text-white">3</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">Set your boundaries</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                  Define your working hours, lunch breaks, and focus time. 
                  Your Envoy respects your rhythm and only offers times that work for you.
                  </p>
                  <p className="text-sm text-gray-400">
                    Your calendar. Your rules.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                  <span className="text-xl font-normal text-white">4</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">Deploy your Envoy</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                  Share your Envoy link or QR code with clients, prospects, or anyone you need to meet. 
                  Your Envoy coordinates when they make contact. Professionally, and on privacy.
                  </p>
                  <p className="text-sm text-gray-400">
                    You do your job. Your Envoy does the scheduling.
                  </p>
                </div>
              </div>
            </div>

            {/* What Your Envoy Handles Box */}
            <div className="max-w-3xl mx-auto mt-16">
              <Card>
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">What your Envoy handles</h3>
                  
                  <div className="flex flex-col gap-4">
                    {/* Checklist items */}
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                      <p className="text-base text-gray-700">Negotiates times across calendars and timezones</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                      <p className="text-base text-gray-700">Works with their EA if they have one</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                      <p className="text-base text-gray-700">Optimizes multi-party meetings (3+ people)</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                      <p className="text-base text-gray-700">Checks with you on edge cases—99% right, asks when uncertain</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-brand-royal-blue-dark flex-shrink-0 mt-0.5" />
                      <p className="text-base text-gray-700">Books the meeting. Updates your calendar. Done.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Final CTA Text */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark mb-6">
                Send your Envoy. Get your time back.
              </h2>
              <div className="flex flex-col gap-3 text-base text-gray-600">
                <p>No more email ping-pong. No more calendar Tetris.</p>
                <p>Your Envoy coordinates so you can focus on work that matters.</p>
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
            <h2 className="text-3xl md:text-4xl font-normal text-center text-brand-royal-blue-dark">
              What professionals say.
            </h2>
            
            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card>
                <div className="flex flex-col gap-6">
                  <p className="text-base text-gray-700 leading-relaxed">
                    "When I had an executive assistant, her name was Anja... She knew exactly when to ask me. She knew when it was important. This is all gone."
                  </p>
                  <p className="text-sm text-gray-500">— Partner at aXialyze</p>
                </div>
              </Card>
              
              {/* Testimonial 2 */}
              <Card>
                <div className="flex flex-col gap-6">
                  <p className="text-base text-gray-700 leading-relaxed">
                    "In my head, I'm recalculating for each person what time of day it is, 
                    looking at my calendar, then comparing with whoever's there, 
                    then subtracting two hours—all this calculating I'm doing in my head."
                  </p>
                  <p className="text-sm text-gray-500">— Fractional CMO</p>
                </div>
              </Card>
              
              {/* Testimonial 3 */}
              <Card>
                <div className="flex flex-col gap-6">
                  <p className="text-base text-gray-700 leading-relaxed">
                    "I wouldn't be surprised if it's at least half an hour a day... Easy, easy 3-4 hours per week."
                  </p>
                  <p className="text-sm text-gray-500">— Management Consultant</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
              EA-quality coordination. Fraction of the cost.
            </h2>
            
            {/* Pricing Comparison Card */}
            <Card className="max-w-2xl w-full bg-gray-50">
              <div className="flex flex-col gap-3">
                {/* Row 1: Human EA */}
                <div className="flex justify-between items-center">
                  <span className="text-base text-gray-700">Human EA</span>
                  <span className="text-xl text-gray-400">€50,000-€80,000</span>
                </div>
                
                {/* Row 2: Lost billable time */}
                <div className="flex justify-between items-center">
                  <span className="text-base text-gray-700">Lost billable time</span>
                  <span className="text-xl text-gray-400">€30,000+</span>
                </div>
                
                {/* Divider */}
                <div className="border-t border-gray-300 my-3"></div>
                
                {/* Row 3: Envoy */}
                <div className="flex justify-between items-center">
                  <span className="text-base text-brand-royal-blue-dark font-normal">Envoy</span>
                  <span className="text-3xl text-brand-royal-blue-dark font-normal">€29/ seat/ month*</span>
                </div>
              </div>
            </Card>

            {/* Value Proposition */}
            <p className="text-xl text-gray-700 max-w-2xl">
              Get EA-quality coordination for less than 1% of the cost.
            </p>
            
            {/* Footnote */}
            <p className="text-sm text-gray-500 max-w-2xl">
              * Early adopters discount applied
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button href="/pricing" className="px-10">
                View pricing plans
              </Button>
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-brand-royal-blue-dark border border-gray-300 hover:bg-gray-50 px-10"
              >
                Apply for early access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-8">
          <div className="flex flex-col gap-16">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-brand-royal-blue-dark">
              Frequently asked questions
            </h2>
            
            {/* FAQ Items */}
            <div className="flex flex-col gap-8">
              {/* FAQ 1 */}
              <Card>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">How is this different from Calendly?</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Calendly is for inbound—when people book time with you. Envoy is for outbound—when you need to coordinate with C-suite clients across organizations. We handle the complexity of multi-party, cross-timezone, EA-involved coordination that booking links can't touch.
                  </p>
                </div>
              </Card>
              
              {/* FAQ 2 */}
              <Card>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">Does it work with Google Calendar and Outlook?</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Yes. Envoy integrates with both Google Workspace and Microsoft 365, and handles coordination across mixed environments (your Google + their Outlook, or vice versa).
                  </p>
                </div>
              </Card>
              
              {/* FAQ 3 */}
              <Card>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">What about privacy? Do you share my full calendar?</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Never. Envoy is privacy-preserving by design. We only share the availability needed for specific meetings—never your full calendar, never your client list.
                  </p>
                </div>
              </Card>
              
              {/* FAQ 4 */}
              <Card>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">How does it handle executive assistants?</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Envoy is built to work WITH their EAs, not ignore them. When your client has an EA managing their calendar, we coordinate professionally through that relationship— respecting their role and knowing when to escalate.
                  </p>
                </div>
              </Card>
              
              {/* FAQ 5 */}
              <Card>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">Is this fully automated or do I stay in control?</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    You stay in control. Envoy is 99% right and asks when it's uncertain—like an EA who knows your preferences but checks on important decisions. No surprises, no meetings booked without your awareness.
                  </p>
                </div>
              </Card>
              
              {/* FAQ 6 */}
              <Card>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal text-brand-royal-blue-dark">What if it doesn't work for my situation?</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We're honest about what we can and can't do. If Envoy isn't the right fit, we'll tell you. Start with a free trial and see if it handles your coordination complexity.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions - Contact Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-3xl mx-auto px-8">
          <Card className="text-center">
            <div className="flex flex-col items-center gap-6 py-8">
              <h3 className="text-2xl md:text-3xl font-normal text-brand-royal-blue-dark">
                Still have questions?
              </h3>
              <p className="text-base md:text-lg text-gray-600 max-w-xl">
                We're here to help. Get in touch with our team and we'll answer any questions you have about Envoy.
              </p>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800"
              >
                Contact us
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white max-w-3xl">
              Stop coordinating. Start delivering.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Get your 4+ hours back every week. Envoy handles the scheduling complexity 
            so you can focus on work that matters.
            </p>
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-brand-royal-blue bg-white hover:bg-gray-50 border border-brand-teal px-10"
              >
                Apply for early access
              </button>
          </div>
        </div>
      </section>

    </div>
  );
}
