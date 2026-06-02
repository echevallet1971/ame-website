'use client';

import Image from 'next/image';
import TimelineItem from '../components/TimelineItem';
import { EyeIcon } from '@heroicons/react/24/solid';
import { getPlatformUrl } from '@/lib/platform-config';

export default function AboutPage() {
  const handleApplyForEarlyAccess = async () => {
    try {
      const platformReserveUrl = await getPlatformUrl('reserve');
      window.open(platformReserveUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get reserve URL:', error);
      alert('Unable to connect to platform. Please try again.');
    }
  };

  const handleContactClick = async () => {
    try {
      const platformContactUrl = await getPlatformUrl('contact');
      window.open(platformContactUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get contact URL:', error);
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center text-brand-royal-blue-dark leading-tight">
              Built from frustration. Driven by conviction.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-center text-gray-500 max-w-3xl">
              The story of how one consultant's scheduling nightmare became a mission to give every professional their time back.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Founder Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden">
                <Image
                  src="/assets/ECh_800x800.jpg"
                  alt="Eric Chevallet, Founder & CEO of Envoy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Founder Story */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
                  Hi, I'm Eric.
                </h2>
                
                <div className="text-base text-gray-600 leading-relaxed space-y-4">
                  <p>
                    I spent decades in consulting, working in environments where meetings aren't "appointments", 
                    they're the engine of decisions. 
                    And yet scheduling still eats time: endless back-and-forth, 
                    too many emails, and constant context switching.
                  </p>
                  
                  <p>
                    Traditional tools help inside a company. But once you're coordinating across clients, 
                    partners, and busy stakeholders, the burden falls back on you.
                  </p>
                  
                  <p>
                    In 2025, Agentic AI made it possible to build something different: 
                    an assistant that coordinates like a great Executive Assistant would. 
                    I built Envoy hands-on, shaped by years of doing this the hard way.
                  </p>
                  
                  <p>
                    That's Envoy. You brief it, you trust it, and it handles the back-and-forth for you.
                  </p>
                  
                  <p>
                    Not everyone can have an EA, but everyone can have an Envoy.
                  </p>
                </div>

                <div className="flex flex-col gap-1 pt-2">
                  <p className="text-sm font-bold text-gray-600">— Eric Chevallet</p>
                  <p className="text-sm text-gray-600">Founder & CEO, Envoy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Envoy's Journey Timeline */}
      <section className="w-full bg-white py-24">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="flex flex-col gap-16">
            {/* Section Heading */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-3xl md:text-4xl font-normal text-center text-brand-royal-blue-dark">
                Envoy's Journey
              </h2>
              <p className="text-lg text-gray-500 text-center">
                Built under TsunAImi. Launched as Envoy.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative flex flex-col gap-12">
              {/* Connecting vertical line */}
              <div className="absolute left-16 top-32 bottom-32 w-0.5 bg-brand-royal-blue-dark opacity-20 hidden md:block" />
              
              <TimelineItem
                period="Feb 2025"
                phase="Start"
                title="A better way to coordinate"
                description="GenAI helped people write faster. The real opportunity was agents that help do the work. The goal became clear: eliminate scheduling friction, not just draft emails about it."
              />

              <TimelineItem
                period="Jun 2025"
                phase="Feasibility"
                title="Can an agent actually book meetings?"
                description="A first working agent booked meetings from natural language in a real calendar. Scheduling was the perfect technical stress test: multiple people, constraints, time zones, and zero tolerance for &quot;demo magic.&quot;"
              />

              <TimelineItem
                period="Sep 2025"
                phase="Alpha"
                title="Multi-calendar coordination"
                description="Coordination expanded across multiple calendars end-to-end. It worked, but only on the &quot;happy path.&quot; The challenge wasn't intelligence, it was reliability and a user experience you could trust."
              />

              <TimelineItem
                period="Dec 2025"
                phase="Validation"
                title="The need is confirmed"
                description="User interviews confirmed the intuition: people are tired of &quot;tools,&quot; but open to an EA-like experience at a fraction of the cost. The focus shifted to building the assistant people actually want."
              />

              <TimelineItem
                period="Feb 2026"
                phase="Launch"
                title="Envoy goes live"
                description="Envoy is live: your personal Executive Assistant. Not a scheduling tool, an Envoy that handles the back-and-forth for you. Not everyone can have an EA, but everyone can have an Envoy."
                isCurrentPhase={true}
              />

              <TimelineItem
                period="May 2026"
                phase="V3"
                title="Less form. More assistant."
                description="Envoy V3 made scheduling feel more natural. Users can now share details step by step, or all at once. Less like a form. More like an assistant."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-normal text-brand-royal-blue-dark">
                Mission
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Give every professional their time back by solving the coordination tax that costs 
                billions in lost productivity annually.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                <EyeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-normal text-brand-royal-blue-dark">
                Vision
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                A world where professionals focus on work that matters, not calendar Tetris. 
                Where coordination is invisible, intelligent, and respectful.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-brand-royal-blue-dark rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M12 12 L12 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M12 12 L8 15" fill="currentColor"/>
                  <path d="M12 12 L16 15" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-normal text-brand-royal-blue-dark">
                Values
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Privacy-first. Relationship-aware. Professionally intelligent. Built for how senior 
                professionals actually work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now? */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <div className="flex flex-col gap-12">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-normal text-center text-white">
              Why Now?
            </h2>
            
            {/* Reasons */}
            <div className="flex flex-col gap-8">
              <div className="border-l-4 border-white pl-6">
                <h3 className="text-2xl font-normal text-white mb-3">
                  The EA Layer is Gone
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Companies have eliminated executive assistant roles. The professionals who used to have 
                  coordination support are now on their own, but their scheduling complexity hasn't decreased.
                </p>
              </div>

              <div className="border-l-4 border-white pl-6">
                <h3 className="text-2xl font-normal text-white mb-3">
                  Remote Work Changed Everything
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Cross-timezone, multi-party coordination is now the norm. The old "walk down the hall" 
                  approach is dead. Email ping-pong is the new default.
                </p>
              </div>

              <div className="border-l-4 border-white pl-6">
                <h3 className="text-2xl font-normal text-white mb-3">
                  Fractional Work is Exploding
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Senior professionals are going independent. They have C-suite relationships but no infrastructure. 
                  Envoy gives them EA-quality coordination at a fraction of the cost.
                </p>
              </div>

              <div className="border-l-4 border-white pl-6">
                <h3 className="text-2xl font-normal text-white mb-3">
                  Technology Finally Caught Up
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Natural language AI, calendar APIs, and privacy-preserving architectures make intelligent 
                  coordination possible. We can finally build the EA layer as software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-4xl md:text-5xl font-normal text-brand-royal-blue-dark">
              Join Us
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              We're building the coordination infrastructure for professional services. If you're a professional 
              who needs this, or an investor who sees the opportunity, let's talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <button
                onClick={handleApplyForEarlyAccess}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800"
              >
                Apply for early access
              </button>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-brand-royal-blue-dark border border-gray-300 hover:bg-gray-50"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
