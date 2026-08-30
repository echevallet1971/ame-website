import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'Read the Ask My Envoy privacy policy and learn how personal data, calendar information, and account information are handled.',
  alternates: {
    canonical: 'https://askmyenvoy.com/privacy',
  },
  robots: 'index, follow',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface-base">
      <section className="section-standard">
        <div className="container-3xl">

          {/* Header */}
          <div className="mb-12">
            <h1 className="hero-heading text-ink-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-meta text-copy-muted">Last updated: August 2026</p>
          </div>

          <div className="prose prose-gray max-w-none stack-xl text-body text-copy-primary">

            <p>
              This Privacy Policy explains how <strong>Ask My Envoy</strong> ("we", "us") handles personal data
              when you use our website and app (the "Services").
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">1. Who is responsible for your data</h2>
              <p>
                <strong>Data controller:</strong> Ask My Envoy, a French SASU with share capital of €1,000, registered with the Paris Trade and Companies Register under SIREN 106 746 670, VAT number FR51 106 746 670, with its registered office at 48 rue de Moscou, 75008 Paris, France.<br />
                <strong>Contact:</strong>{' '}
                <a href="mailto:privacy@askmyenvoy.com" className="text-ink-primary underline underline-offset-2">
                  privacy@askmyenvoy.com
                </a>
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">2. What we collect</h2>
              <p>Depending on how you use the Services, we may collect:</p>
              <ul className="mt-3 stack-tight list-none pl-0">
                <li className="pl-4 border-l-2 border-line-default">
                  <strong>Account data:</strong> email, name, authentication identifiers such as your Google
                  or Microsoft sign-in ID, and profile information you provide.
                </li>
                <li className="pl-4 border-l-2 border-line-default">
                  <strong>Scheduling and conversation data:</strong> information you provide when interacting with
                  your Envoy, such as meeting requests, participant names or email addresses, timing preferences,
                  meeting titles and other instructions needed to coordinate a meeting.
                </li>
                <li className="pl-4 border-l-2 border-line-default">
                  <strong>Calendar data:</strong> if you connect a calendar, the information we access depends on
                  how you use Ask My Envoy. If you connect your calendar so that another person's Envoy can
                  coordinate meetings with you, and you authorize that access, that Envoy can access only your
                  free/busy availability for the relevant period. It cannot access your meeting titles,
                  participants, descriptions, locations or other event details. If you have your own Envoy, it can
                  access the full details of your calendar, including meeting titles, participants, descriptions,
                  locations and other event information, as needed to schedule, reschedule or cancel meetings on
                  your behalf.
                </li>
                <li className="pl-4 border-l-2 border-line-default">
                  <strong>Subscription and billing data:</strong> information related to your subscription, such as
                  your subscription status, billing status and transaction identifiers. Payment card details are
                  processed by our payment provider and are not stored by Ask My Envoy.
                </li>
                <li className="pl-4 border-l-2 border-line-default">
                  <strong>Usage and log data:</strong> technical information such as IP address, device and browser
                  information, timestamps and actions taken, used for security, debugging and operation of the
                  Services.
                </li>
              </ul>
              <p className="mt-3">
                You can revoke your calendar connection at any time through Ask My Envoy or your calendar provider.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">3. Why we use your data</h2>
              <p>We use your data to:</p>
              <ul className="mt-3 stack-xs list-disc list-inside">
                <li>Provide and operate the Services, including account access, calendar connections and meeting coordination.</li>
                <li>Process scheduling requests and allow your Envoy to work on your behalf.</li>
                <li>Manage subscriptions and billing.</li>
                <li>Secure the Services and prevent abuse.</li>
                <li>Monitor, debug and improve the reliability and performance of the Services.</li>
                <li>Send product news or updates only where you have opted in.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">4. Legal bases (GDPR)</h2>
              <p>Where applicable, we rely on:</p>
              <ul className="mt-3 stack-xs list-disc list-inside">
                <li><strong>Contract / steps before contract</strong> (to provide the Services you request).</li>
                <li><strong>Legitimate interests</strong> (security, preventing abuse, improving reliability).</li>
                <li><strong>Consent</strong> (marketing/news opt-in; you can unsubscribe anytime).</li>
                <li><strong>Legal obligations</strong> (if required).</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">5. Sharing</h2>
              <p>We do not sell personal data.</p>
              <p className="mt-3">We may share personal data with:</p>
              <ul className="mt-3 stack-xs list-disc list-inside">
                <li><strong>Service providers:</strong> providers supporting hosting, infrastructure, monitoring, email delivery, authentication, billing and other functions required to operate the Services.</li>
                <li><strong>Calendar providers:</strong> such as Google and Microsoft, when you connect your calendar.</li>
                <li><strong>AI and technology providers:</strong> providers used to process requests and operate AI-powered features of the Services.</li>
                <li><strong>Legal or regulatory authorities:</strong> where disclosure is required by law or necessary to protect our rights, users or the Services.</li>
              </ul>
              <p className="mt-3">
                Where applicable, providers processing personal data on our behalf act under contractual and
                data-protection obligations.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">6. Security and sensitive data protection</h2>
              <p>
                Calendar and scheduling information may be sensitive depending on context. We use technical and
                organizational safeguards designed to protect personal data, including:
              </p>
              <ul className="mt-3 stack-tight list-none pl-0">
                <li className="pl-4 border-l-2 border-line-default">
                  Encryption of data in transit using TLS/HTTPS.
                </li>
                <li className="pl-4 border-l-2 border-line-default">
                  Encryption of calendar access credentials before storage.
                </li>
                <li className="pl-4 border-l-2 border-line-default">
                  Authentication and access controls restricting access to systems and data.
                </li>
                <li className="pl-4 border-l-2 border-line-default">
                  Limited calendar access depending on how Ask My Envoy is used. Another person's Envoy is limited
                  to authorized free/busy availability, while your own Envoy can access the calendar details
                  required to work on your behalf.
                </li>
                <li className="pl-4 border-l-2 border-line-default">
                  Operational and security logging used to detect failures, misuse and security issues.
                </li>
                <li className="pl-4 border-l-2 border-line-default">
                  Controls allowing users to revoke calendar connections and access.
                </li>
              </ul>
              <p className="mt-3">
                No system can provide absolute security, but we take reasonable measures to protect personal data
                against unauthorized access, loss, misuse or disclosure.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">7. International transfers</h2>
              <p>
                Some of our service providers may process personal data outside the European Economic Area. Where required, we use appropriate safeguards for international data transfers.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">8. Retention</h2>
              <p>
                We keep personal data only for as long as necessary to provide and operate the Services, maintain
                security, comply with legal obligations and resolve disputes.
              </p>
              <p className="mt-3">
                Calendar connection credentials are retained while the connection remains active and can be revoked
                by the user at any time.
              </p>
              <p className="mt-3">
                Retention periods may vary depending on the type of data and the purpose for which it is processed.
                You may request deletion of your personal data, subject to any legal or operational retention
                requirements.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">9. Your rights</h2>
              <p>
                Depending on your location and the applicable law, you may have rights to access, correct, delete,
                restrict or object to the processing of your personal data, request portability of certain data,
                and withdraw consent where processing is based on consent.
              </p>
              <p className="mt-3">
                You may exercise these rights by contacting{' '}
                <a href="mailto:privacy@askmyenvoy.com" className="text-ink-primary underline underline-offset-2">
                  privacy@askmyenvoy.com
                </a>
                .
              </p>
              <p className="mt-3">
                If you are in the European Union, you also have the right to lodge a complaint with the CNIL or
                another competent data protection authority.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">10. Changes</h2>
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
