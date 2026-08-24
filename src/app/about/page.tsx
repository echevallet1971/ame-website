'use client';

import Image from 'next/image';
import Button from '../components/Button';
import LoginButton from '../components/LoginButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero bg-surface-base flex justify-center items-center">
        <div className="container-4xl">
          <div className="flow-md items-center">
            {/* Main Headline */}
            <h1 className="hero-heading text-center text-ink-primary">
              Why I built Ask My Envoy
            </h1>
            
            {/* Subheadline */}
            <div className="max-w-3xl text-center text-copy-muted stack-sm">
              <p className="text-lead">
                The time and cognitive load required to schedule a meeting between people who have already agreed to meet has always made no sense to me.
              </p>
              <p className="text-lead">
                With AI, I could see a better way to do it. So I decided to build it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section-standard bg-surface-soft">
        <div className="container-6xl">
          <div className="split-layout">
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
              <div className="flow-md">
                <h2 className="section-subheading text-ink-primary">
                  Hi, I'm Eric.
                </h2>
                
                <div className="text-body text-copy-primary stack-sm">
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

                <div className="flow-2xs pt-2">
                  <p className="text-sm font-bold text-copy-primary">Eric Chevallet</p>
                  <p className="text-sm text-copy-primary">Founder & CEO, Envoy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-standard bg-surface-base">
        <div className="container-4xl">
          <div className="cta-row justify-center">
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
