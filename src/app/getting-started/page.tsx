import Image from 'next/image';

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center items-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-normal text-center text-brand-royal-blue-dark leading-tight">
              Getting started
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-500 max-w-3xl">
              Set up your account, connect your calendar, and get your Envoy ready to work.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="w-full rounded-2xl border border-brand-border bg-white p-2 shadow-sm">
                <Image
                  src="/assets/images/getting-started/getting-started_1.png"
                  alt="Sign in screen for Ask My Envoy"
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
                  1. Sign in to Ask My Envoy
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                  Use your Google or Microsoft account, or sign in with email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
                  2. Choose how you want to start
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                  Get your own Envoy, or simply connect your calendar so someone else&apos;s Envoy can coordinate with you.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full rounded-2xl border border-brand-border bg-white p-2 shadow-sm">
                <Image
                  src="/assets/images/getting-started/getting-started_2.png"
                  alt="Choose how to start in Ask My Envoy"
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="w-full rounded-2xl border border-brand-border bg-white p-2 shadow-sm">
                <Image
                  src="/assets/images/getting-started/getting-started_3.png"
                  alt="Connect your calendar in Ask My Envoy"
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
                  3. Connect your calendar
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                  Choose Google Calendar or Microsoft Outlook and make your availability accessible for scheduling through Ask My Envoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-normal text-brand-royal-blue-dark">
                  4. Control who can coordinate with you
                </h2>
                <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl space-y-4">
                  <p>
                    Open the menu, then go to <strong>My Space -&gt; Trust Center</strong>.
                  </p>
                  <p>
                    By default, only invited contacts can access your availability. If someone wants their Envoy to coordinate meetings with you, they send you an access request and you decide whether to approve it.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full rounded-2xl border border-brand-border bg-white p-2 shadow-sm">
                <Image
                  src="/assets/images/getting-started/getting-started_4.webp"
                  alt="Access request controls in Ask My Envoy"
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
