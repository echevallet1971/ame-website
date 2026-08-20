'use client';

import Image from 'next/image';
import Button from './components/Button';
import Card from './components/Card';
import LoginButton from './components/LoginButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center items-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-normal text-center text-brand-royal-blue-dark leading-tight max-w-3xl">
              Stop scheduling ping-pong.
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-500 max-w-3xl">
              The meeting is already agreed. Why are you still working to schedule it?
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <LoginButton size="large" className="px-10">
                Get your Envoy
              </LoginButton>
              <Button href="/pricing" variant="secondary" className="px-10">
                See pricing
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-2 text-gray-500">
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

            <div className="w-full max-w-5xl rounded-2xl border border-brand-border bg-white p-2 md:p-3 shadow-sm">
              <Image
                src="/assets/images/envoy-coordination.png"
                alt="Envoy coordinating availability across Google Calendar and Microsoft Outlook"
                width={1024}
                height={675}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark text-center">
              But wait. Why should I trust your AI agent with access to my calendar? What exactly can it see and do?
            </h2>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-xl p-6 md:p-8">
                <p className="text-lg md:text-xl text-brand-royal-blue-dark font-semibold mb-3">
                  If someone else&apos;s Envoy needs your availability
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  It can only access whether you are free or busy during the requested period. It cannot read your meeting titles, participants, descriptions, locations or any other event details in your calendar.
                </p>
              </Card>

              <Card className="rounded-xl p-6 md:p-8">
                <p className="text-lg md:text-xl text-brand-royal-blue-dark font-semibold mb-3">
                  If it&apos;s your own Envoy
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  It can access the full details of your calendar, including meeting titles, participants, descriptions and other information it needs to manage your meetings on your behalf.
                </p>
              </Card>
            </div>

            <p className="max-w-4xl text-lg md:text-xl font-medium text-brand-royal-blue-dark text-center leading-relaxed">
              In both cases, you decide who gets access and what they&apos;re allowed to do.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white max-w-3xl">
              Stop spending time scheduling meetings.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Get your Envoy and let it handle the coordination.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
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
