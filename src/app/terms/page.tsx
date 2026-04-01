export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full py-24">
        <div className="max-w-3xl mx-auto px-8">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-normal text-brand-royal-blue-dark mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-gray-500">Last updated: February 2026</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-10 text-base text-gray-600 leading-relaxed">

            <p>
              These Terms of Service ("Terms") govern your use of Ask My Envoy (the "Services").
              By using the Services, you agree to these Terms.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">1. Provider</h2>
              <p>
                Ask My Envoy is provided by <strong>a company in formation (France)</strong> ("we", "us").
                Until registration is complete, the service is operated by its founder on behalf of the future
                entity. We will update these Terms with full legal entity details once registration is complete.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">2. Access, waitlist, beta</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>The Services are in <strong>beta</strong>. Beta access is invitation-only. Other users may be placed in a staged rollout.</li>
                <li>Features may change, break, or be removed as we improve reliability.</li>
                <li>We may grant, limit, or revoke access during beta.</li>
              </ul>
              <p className="mt-4">
                <strong>Paid plans.</strong> Some users may access the Services under beta arrangements. Any paid
                subscription (if applicable) will start only once billing is enabled and the legal entity is
                registered, with pricing and billing terms presented before payment.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">3. Your account</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>You're responsible for activity under your account.</li>
                <li>Don't share access in a way that compromises security.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">4. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Attempt to bypass security, scrape, reverse engineer, or disrupt the Services.</li>
                <li>Use the Services for unlawful activity or to violate others' rights.</li>
                <li>Upload malicious content or abuse the platform.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">5. Calendar connections</h2>
              <p>
                If you connect a calendar provider (e.g., Google/Microsoft), you authorize us to access and
                process calendar data <strong>as permitted by the scopes you grant</strong> to provide scheduling
                features. Depending on the feature you use, this may include availability (free/busy) and event
                details needed to resolve conflicts, escalation, arbitration, or coordinate across participants.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">6. "As is"</h2>
              <p>
                The Services are provided <strong>as is</strong> and <strong>as available</strong>.
                We don't guarantee uninterrupted service, especially during beta.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">7. Liability</h2>
              <p>
                To the maximum extent permitted by law, we are not liable for indirect or consequential damages
                (including loss of data, revenue, or profits). You use the beta at your own risk.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">8. Termination</h2>
              <p>
                You can stop using the Services at any time. We may suspend access if needed for security,
                abuse prevention, or legal reasons.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">9. Contact</h2>
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
