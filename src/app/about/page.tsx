'use client';

import Image from 'next/image';
import Button from '../components/Button';
import LoginButton from '../components/LoginButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center items-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-normal text-center text-brand-royal-blue-dark leading-tight">
              Why I built Ask My Envoy
            </h1>
            
            {/* Subheadline */}
            <div className="max-w-3xl text-center text-gray-500 space-y-4">
              <p className="text-lg md:text-xl">
                The time and cognitive load required to schedule a meeting between people who have already agreed to meet has always made no sense to me.
              </p>
              <p className="text-lg md:text-xl">
                With AI, I could see a better way to do it. So I decided to build it.
              </p>
            </div>
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
                    I spent my entire career working with clients, teams and partners across companies, countries and time zones. Which also means I&apos;ve spent far too much time either sending &quot;Are you available next Tuesday?&quot; messages or receiving them. And frankly, I hated that part of the job.
                  </p>
                  
                  <p>
                    When AI agents started to emerge, I got curious and wanted to understand agentic systems by building one myself. Scheduling felt like the obvious place to start because it was a problem I knew far too well, and one I thought everyone could relate to.
                  </p>
                  
                  <p>
                    The first time I saw a meeting appear in my calendar without having scheduled it myself, I had a real wow moment.
                  </p>

                  <p>
                    If removing this pain in my butt could create that kind of reaction, it was probably worth doing for everyone else who shares the same pain.
                  </p>
                  
                  <p>
                    Now, the guy handling scheduling for me is my Envoy. What about you?
                  </p>
                </div>

                <div className="flex flex-col gap-1 pt-2">
                  <p className="text-sm font-bold text-gray-600">Eric Chevallet</p>
                  <p className="text-sm text-gray-600">Founder & CEO, Envoy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LoginButton size="large" className="px-10">
              Get your Envoy
            </LoginButton>
            <Button href="/how-it-works" variant="secondary" className="px-10">
              See how it works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
