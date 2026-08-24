export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-standard">
        <div className="container-3xl">

          {/* Header */}
          <div className="mb-12">
            <h1 className="hero-heading text-brand-royal-blue-dark mb-4">
              Terms of Service
            </h1>
            <p className="text-meta text-gray-500">Last updated: August 2026</p>
          </div>

          <div className="prose prose-gray max-w-none stack-xl text-body text-gray-600">

            <p>
              These Terms of Service ("Terms") govern your use of Ask My Envoy (the "Services").
              By using the Services, you agree to these Terms.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">1. Provider</h2>
              <p>
                Ask My Envoy is operated by Ask My Envoy, a French SASU with share capital of €1,000, registered with the Paris Trade and Companies Register under SIREN 106 746 670, VAT number FR51 106 746 670, with its registered office at 48 rue de Moscou, 75008 Paris, France ("we", "us").
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">2. Access and subscriptions</h2>
              <ul className="stack-xs list-disc list-inside">
                <li>The Services may still evolve as we improve features, reliability and performance.</li>
                <li>We may update, modify or discontinue features where necessary.</li>
                <li>Access to certain features may depend on your subscription and account configuration.</li>
              </ul>
              <p className="mt-4">
                <strong>Paid subscriptions.</strong> Access to paid features is subject to the pricing and billing
                terms presented when you subscribe. Where a free trial is offered, the applicable trial period and
                billing terms will be shown before payment details are submitted.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">3. Your account</h2>
              <ul className="stack-xs list-disc list-inside">
                <li>You're responsible for activity under your account.</li>
                <li>Don't share access in a way that compromises security.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">4. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul className="mt-3 stack-xs list-disc list-inside">
                <li>Attempt to bypass security, scrape, reverse engineer, or disrupt the Services.</li>
                <li>Use the Services for unlawful activity or to violate others' rights.</li>
                <li>Upload malicious content or abuse the platform.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">5. Calendar connections</h2>
              <p>
                If you connect a calendar provider such as Google Calendar or Microsoft Outlook, you authorize Ask
                My Envoy to access and process calendar data as permitted by the permissions you grant.
              </p>
              <p className="mt-4">
                If you connect your calendar so that another person&apos;s Envoy can coordinate meetings with you, and
                you authorize that access, that Envoy can access only your free/busy availability for the relevant
                period. It cannot access your meeting titles, participants, descriptions, locations or other event
                details.
              </p>
              <p className="mt-4">
                If you have your own Envoy, it can access the full details of your calendar, including meeting
                titles, participants, descriptions, locations and other event information, as needed to schedule,
                reschedule or cancel meetings on your behalf.
              </p>
              <p className="mt-4">
                You remain responsible for managing the permissions and access you grant through Ask My Envoy and
                your calendar provider.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">6. Availability of the Services</h2>
              <p>
                The Services are provided as is and as available. We do not guarantee uninterrupted or error-free operation or continuous availability.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">7. Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, we are not liable for indirect or consequential damages, including loss of data, revenue or profits.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">8. Billing and cancellation</h2>
              <p>
                Subscriptions are billed in advance at the price and frequency shown when you subscribe. Unless
                otherwise stated, subscriptions renew automatically until cancelled.
              </p>
              <p className="mt-4">
                You may cancel your subscription at any time. Cancellation takes effect at the end of the current
                billing period unless otherwise stated.
              </p>
              <p className="mt-4">
                If a free trial is offered, you will not be charged until the trial ends. Unless you cancel before
                the end of the trial, your subscription will automatically become paid at the price shown when you
                subscribed.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">9. Governing law</h2>
              <p>
                These Terms are governed by French law, without prejudice to any mandatory consumer protection
                rights that may apply under the laws of your country of residence.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="item-heading text-brand-royal-blue-dark mb-3">10. Contact</h2>
              <p>
                Questions:{' '}
                <a href="mailto:legal@askmyenvoy.com" className="text-brand-royal-blue-dark underline underline-offset-2">
                  legal@askmyenvoy.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
