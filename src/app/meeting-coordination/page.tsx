import type { Metadata } from 'next';
import BackLink from '../components/BackLink';

export const metadata: Metadata = {
  title: 'What Is Meeting Coordination?',
  description:
    "Meeting coordination is the work required to turn everyone's availability and constraints into a time that works, especially across organizations. See how Ask My Envoy handles it.",
  alternates: {
    canonical: 'https://askmyenvoy.com/meeting-coordination',
  },
  robots: 'index, follow',
};

export default function MeetingCoordinationPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="bg-surface-base border-b border-line-default">
        <div className="container-4xl">
          <div className="py-4">
            <BackLink
              label="Back to previous page"
              className="text-sm text-copy-muted hover:text-ink-primary hover:underline"
            />
          </div>
        </div>
      </section>

      <section className="section-standard bg-surface-soft">
        <div className="container-4xl">
          <article className="max-w-3xl mx-auto stack-md text-body text-copy-primary">
            <h2 className="section-subheading text-ink-primary">TL;DR</h2>
            <p className="text-copy-muted">
              Meeting coordination is the work required to turn several people&apos;s
              availability and constraints into a time that works, especially when they are outside
              the same organization. Booking links such as Calendly automate self-booking, but
              they do not solve that coordination problem. Ask My Envoy lets you delegate it in
              natural language, using the calendars of participants who have granted permission, so
              you can decide who you want to meet and when without working through the mechanics of
              making it happen.
            </p>
            <h1 className="section-subheading text-ink-primary">What meeting coordination actually means</h1>
            <p>
              Deciding who you want to meet, and when you would like that meeting to happen, is
              usually the easy part.
            </p>
            <p>Making it happen gets harder when the people you need to meet are outside your organization.</p>
            <p>
              Someone still has to collect everyone&apos;s availability, compare calendars, account for
              time zones and other constraints, understand who must attend and who is
              nice-to-have, negotiate alternatives when nothing lines up, confirm the final time,
              and start again when something changes.
            </p>
            <p>That is meeting coordination.</p>
            <p>
              It is the work between deciding that a meeting should happen and actually getting it
              into everyone&apos;s calendar.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              Availability already exists in the calendar
            </h2>
            <p>
              Inside an organization, scheduling is often relatively easy. Colleagues may be able
              to see each other&apos;s free and busy time directly in Outlook, Google Calendar or
              another shared calendar environment.
            </p>
            <p>The friction starts when a meeting crosses organizational boundaries.</p>
            <p>
              Each participant&apos;s availability still exists in their own calendar, which remains
              the source of truth for when they are free or busy. But that information is not
              normally visible to the other people trying to organize the meeting.
            </p>
            <p>
              So someone has to bridge that gap: check the calendars they can access, ask everyone
              else for their availability, compare the answers and turn them into a meeting time
              that works.
            </p>
            <p>That is why people still end up asking each other:</p>
            <blockquote className="border-l-2 border-line-default pl-4 stack-xs text-copy-muted">
              <p>&ldquo;Are you available next Thursday?&rdquo;</p>
              <p>&ldquo;What about Friday morning?&rdquo;</p>
              <p>&ldquo;Does 3pm work for everyone?&rdquo;</p>
              <p>&ldquo;Can we move this to next week?&rdquo;</p>
            </blockquote>
            <p>The availability already exists.</p>
            <p>What is missing is a way to coordinate it across organizations.</p>

            <h2 className="section-subheading text-ink-primary pt-4">
              The problem grows because coordination is asynchronous
            </h2>
            <p>
              The more people involved in a meeting, the harder it becomes to coordinate them, not
              simply because there are more calendars to compare, but because everyone responds at a
              different time.
            </p>
            <p>
              One person replies in ten minutes. Another answers three hours later. Someone else
              comes back the next morning. By then, the time that worked for the first two people
              may no longer be available.
            </p>
            <p>So the coordination stretches over time.</p>
            <p>
              A question asked at 9:00 can still be unresolved at 5:00, not because finding a slot
              should take eight hours, but because the information needed to make the decision
              arrives piece by piece.
            </p>
            <p>With two people, this can still be manageable.</p>
            <p>
              With four, five or six participants, especially across different organizations, the
              process becomes a sequence of messages, calendar checks, tentative options and
              follow-ups.
            </p>
            <p>
              That is the hidden difficulty of meeting coordination: the work does not happen at
              the same time, even though the meeting eventually has to.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              Booking links solve a different problem
            </h2>
            <p>
              Tools such as Calendly are designed to automate self-booking.
            </p>
            <p>
              The calendar owner defines when they are willing to meet, connects the calendars that
              should be checked for conflicts, and shares a booking link. The person receiving that
              link can then choose one of the available times and book the meeting without
              exchanging messages back and forth.
            </p>
            <p>
              That works very well when the problem is:{' '}
              <strong>&ldquo;Here are the times I am available. Pick one.&rdquo;</strong>
            </p>
            <p>But that is not meeting coordination.</p>
            <p>
              Meeting coordination starts when there is no single person whose availability
              determines the meeting.
            </p>
            <p>In that situation, there is no booking page to choose from.</p>
            <p>Someone has to work out which time can actually work for the group.</p>

            <h2 className="section-subheading text-ink-primary pt-4">Ask your Envoy to handle it</h2>
            <p>
              Meeting coordination becomes much simpler when it no longer depends on everyone
              checking their calendar and replying one after another.
            </p>
            <p>
              With Ask My Envoy, you can delegate that work in natural language.
            </p>
            <p>You tell your Envoy what you want:</p>
            <blockquote className="border-l-2 border-line-default pl-4 stack-xs text-copy-muted">
              <p>
                &ldquo;I want to meet with Sarah, Miguel and Ken next Wednesday. Can you handle
                it?&rdquo;
              </p>
            </blockquote>
            <p>
              Your Envoy can then check the calendar of each participant who has granted it
              permission, understand when they are available, take the relevant constraints into
              account, and find a time that works.
            </p>
            <p>
              For the organizer, the benefit is simple: once the request is made, they do not have
              to work through the mechanics of making the meeting happen.
            </p>
            <p>
              For the participants, connecting their calendar means they no longer need to keep
              answering messages such as &ldquo;Are you available next Wednesday?&rdquo; Their
              availability can be used directly for coordination, within the permissions they have
              chosen to grant.
            </p>
            <p>
              They remain in control of who can use that availability and for what purpose.
            </p>
            <p>
              The calendar remains the source of truth for each participant&apos;s availability, while
              AI provides the natural-language interface that makes delegation possible.
            </p>
            <p>
              You still decide who you want to meet and when you want the meeting to happen. Your
              Envoy takes care of the coordination required to make it happen.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
