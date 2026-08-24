import Image from 'next/image';

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero bg-white flex justify-center items-center">
        <div className="container-4xl">
          <div className="flow-md items-center">
            <h1 className="hero-heading text-center text-brand-royal-blue-dark">
              Getting started
            </h1>

            <p className="text-lead text-center text-gray-500 max-w-3xl">
              Set up your account, connect your calendar, and get your Envoy ready to work.
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
              <div className="flow-sm">
                <h2 className="section-subheading text-brand-royal-blue-dark">
                  1. Sign in to Ask My Envoy
                </h2>
                <p className="text-body text-gray-600 max-w-xl">
                  Use your Google or Microsoft account, or sign in with email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="section-standard bg-white">
        <div className="container-6xl">
          <div className="split-layout">
            <div className="w-full lg:w-1/2">
              <div className="flow-sm">
                <h2 className="section-subheading text-brand-royal-blue-dark">
                  2. Choose how you want to start
                </h2>
                <p className="text-body text-gray-600 max-w-xl">
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
      <section className="section-standard bg-gray-50">
        <div className="container-6xl">
          <div className="split-layout">
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
              <div className="flow-sm">
                <h2 className="section-subheading text-brand-royal-blue-dark">
                  3. Connect your calendar
                </h2>
                <p className="text-body text-gray-600 max-w-xl">
                  Choose Google Calendar or Microsoft Outlook and make your availability accessible for scheduling through Ask My Envoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="section-standard bg-white">
        <div className="container-6xl">
          <div className="split-layout">
            <div className="w-full lg:w-1/2">
              <div className="flow-sm">
                <h2 className="section-subheading text-brand-royal-blue-dark">
                  4. Control who can coordinate with you
                </h2>
                <div className="text-body text-gray-600 max-w-xl stack-sm">
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
