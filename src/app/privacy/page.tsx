export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full py-24">
        <div className="max-w-3xl mx-auto px-8">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-normal text-brand-royal-blue-dark mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500">Last updated: February 2026</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-10 text-base text-gray-600 leading-relaxed">

            <p>
              This Privacy Policy explains how <strong>Ask My Envoy</strong> ("we", "us") handles personal data
              when you use our website and app (the "Services").
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">Who is responsible for your data</h2>
              <p>
                <strong>Data controller:</strong> Ask My Envoy — operated by a company in formation (France)<br />
                <strong>Contact:</strong>{' '}
                <a href="mailto:privacy@askmyenvoy.com" className="text-brand-royal-blue-dark underline underline-offset-2">
                  privacy@askmyenvoy.com
                </a>
              </p>
              <p className="mt-3">
                Until the company is registered, the service is operated by its founder on behalf of the future entity.
                The full legal entity details will be updated here once registration is complete.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">What we collect</h2>
              <p>Depending on how you use the Services, we may collect:</p>
              <ul className="mt-3 space-y-3 list-none pl-0">
                <li className="pl-4 border-l-2 border-gray-200">
                  <strong>Account data:</strong> email, name (if provided), authentication identifiers
                  (e.g., Google/Microsoft sign-in ID), and basic profile details you provide.
                </li>
                <li className="pl-4 border-l-2 border-gray-200">
                  <strong>Calendar connection data (if you connect a calendar):</strong> We access and process
                  calendar data as permitted by the permissions ("scopes") you grant. This may include calendar
                  lists and availability (free/busy) and, for certain features (such as conflict resolution,
                  escalation, or arbitration), it may also include event details (e.g., titles, times, attendees)
                  to perform the scheduling task you requested. You control what we can access through the
                  permissions you grant and can revoke access at any time from your calendar provider settings.
                </li>
                <li className="pl-4 border-l-2 border-gray-200">
                  <strong>Usage & log data:</strong> basic technical logs (IP address, device/browser info,
                  timestamps, actions taken) for security and debugging.
                </li>
                <li className="pl-4 border-l-2 border-gray-200">
                  <strong>Waitlist preferences:</strong> your opt-in choice for product news/updates.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">Why we use your data</h2>
              <p>We use your data to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Provide access to the Services and run the waitlist flow (reserve your Envoy URL, connect calendar, account access).</li>
                <li>Secure the Services and prevent abuse.</li>
                <li>Operate and improve reliability (debugging, monitoring).</li>
                <li>Send product updates <strong>only if you opt in</strong>.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">Legal bases (GDPR)</h2>
              <p>Where applicable, we rely on:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>Contract / steps before contract</strong> (to provide the Services you request).</li>
                <li><strong>Legitimate interests</strong> (security, preventing abuse, improving reliability).</li>
                <li><strong>Consent</strong> (marketing/news opt-in; you can unsubscribe anytime).</li>
                <li><strong>Legal obligations</strong> (if required).</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">Sharing</h2>
              <p>
                We do not sell personal data. We may share data with:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>Service providers</strong> (hosting, monitoring, email delivery) acting as processors.</li>
                <li><strong>Calendar providers</strong> (Google/Microsoft) when you connect your calendar.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">International transfers</h2>
              <p>
                Some providers may process data outside your country/region. Where required, we use appropriate safeguards.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">Retention</h2>
              <p>
                We keep data only as long as needed to operate the Services and the waitlist, and to meet
                security/legal needs. You can request deletion at any time.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">Your rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, delete, object, restrict
                processing, and withdraw consent.
              </p>
              <p className="mt-3">
                Contact:{' '}
                <a href="mailto:privacy@askmyenvoy.com" className="text-brand-royal-blue-dark underline underline-offset-2">
                  privacy@askmyenvoy.com
                </a>
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-normal text-brand-royal-blue-dark mb-3">Changes</h2>
              <p>
                We may update this policy. We'll post the latest version on this page and update the date above.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
