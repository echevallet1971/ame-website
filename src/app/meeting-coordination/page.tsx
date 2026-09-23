import ExplanationPageHero from '../components/ExplanationPageHero';
import { explanationPages } from '@/lib/explanation-pages';
import { buildReferenceArticleMetadata, ReferenceArticleJsonLd } from '@/lib/reference-article';
import { referenceArticle } from './reference-article.config';

export const metadata = buildReferenceArticleMetadata(referenceArticle);

type CoordinationDiagramTools = {
  coordination: string;
  scheduling: string;
  bookingLines: readonly string[];
};

type CoordinationNestedLayersDiagramProps = {
  diagramId: string;
  figureCaption: string;
  svgTitle: string;
  svgDesc: string;
  tools?: CoordinationDiagramTools;
};

function CoordinationNestedLayersDiagram({
  diagramId,
  figureCaption,
  svgTitle,
  svgDesc,
  tools,
}: CoordinationNestedLayersDiagramProps) {
  /** Match tailwind.config.ts surface / line / ink tokens */
  const surfaceBase = '#FFFFFF';
  const surfaceSoft = '#F7F6FC';
  const lineDefault = '#E4E2EF';
  const inkPrimary = '#292363';
  const copyMuted = '#50576A';
  const font = 'Inter, system-ui, sans-serif';
  const ringStroke = 2;
  const titleId = `${diagramId}-diagram-title`;
  const captionId = `${diagramId}-diagram-caption`;
  const clipCoordinationId = `${diagramId}-coordination-clip`;
  const clipSchedulingId = `${diagramId}-scheduling-clip`;
  const clipBookingId = `${diagramId}-booking-clip`;

  /**
   * Nest each circle toward bottom-left (shared tangent on that diagonal), opening room
   * top-right for labels — matches hand-drawn layout.
   */
  const outer = { cx: 246, cy: 178, r: 172 };
  const middleR = 128;
  const innerR = 84;
  const nestTowardBottomLeft = (
    parentCx: number,
    parentCy: number,
    parentR: number,
    childR: number,
  ) => {
    const gap = parentR - childR;
    return {
      cx: parentCx - gap * Math.SQRT1_2,
      cy: parentCy + gap * Math.SQRT1_2,
    };
  };
  const middleCenter = nestTowardBottomLeft(outer.cx, outer.cy, outer.r, middleR);
  const middle = { ...middleCenter, r: middleR };
  const innerCenter = nestTowardBottomLeft(middle.cx, middle.cy, middle.r, innerR);
  const inner = { ...innerCenter, r: innerR };

  const layerFontSize = tools ? 11 : 14;
  const layerLineStep = tools ? 13 : 15;
  const toolFontSize = tools ? 14 : 11;
  const toolLineStep = tools ? 18 : 13;
  const toolGapAfterTitle = tools ? 12 : 8;
  const layerTextProps = {
    fill: tools ? copyMuted : inkPrimary,
    fontFamily: font,
    fontSize: layerFontSize,
    fontWeight: tools ? 500 : 600,
  };
  const toolTextProps = {
    fill: inkPrimary,
    fontFamily: font,
    fontSize: toolFontSize,
    fontWeight: 600,
  };
  const toolsStartY = (titleBaselineY: number) =>
    titleBaselineY + layerFontSize + toolGapAfterTitle;
  const ringTitleNudgeUp = tools ? 6 : 0;
  const innerTitleNudgeUp = tools ? 18 : 0;

  const circleTopAtX = (cx: number, cy: number, r: number, x: number) => {
    const dx = Math.abs(x - cx);
    if (dx >= r) return cy - r;
    return cy - Math.sqrt(r * r - dx * dx);
  };

  const singleLineBaselineY = (blockCenterY: number) => blockCenterY + layerFontSize * 0.35;

  /** Vertical midpoint of the ring at x (between this circle’s top and the nested circle’s top) */
  const ringLabelCenterY = (
    parent: { cx: number; cy: number; r: number },
    child: { cx: number; cy: number; r: number },
    x: number,
  ) => (circleTopAtX(parent.cx, parent.cy, parent.r, x) + circleTopAtX(child.cx, child.cy, child.r, x)) / 2;

  const coordinationLabel = {
    x: outer.cx,
    y: singleLineBaselineY(ringLabelCenterY(outer, middle, outer.cx) + 5 - ringTitleNudgeUp),
  };
  const schedulingLabel = {
    x: middle.cx,
    y: singleLineBaselineY(ringLabelCenterY(middle, inner, middle.cx) + 5 - ringTitleNudgeUp),
  };
  const bookingLabel = {
    x: inner.cx,
    y: singleLineBaselineY(inner.cy - innerTitleNudgeUp),
  };

  const toolBlockExtraHeight = tools
    ? toolGapAfterTitle +
      (tools.bookingLines.length > 1 ? tools.bookingLines.length * toolLineStep : toolLineStep)
    : 0;
  const ringToolExtraHeight = tools ? toolGapAfterTitle + toolLineStep : 0;

  const viewBoxW = 420;
  const viewBoxH = 400;
  const boundsMinX = Math.min(
    outer.cx - outer.r,
    middle.cx - middle.r,
    inner.cx - inner.r,
    coordinationLabel.x - 95,
    schedulingLabel.x - 85,
  );
  const boundsMaxX = Math.max(
    outer.cx + outer.r,
    middle.cx + middle.r,
    inner.cx + inner.r,
    coordinationLabel.x + 95,
    schedulingLabel.x + 85,
  );
  const boundsMinY = Math.min(
    outer.cy - outer.r,
    middle.cy - middle.r,
    inner.cy - inner.r,
    coordinationLabel.y - 14,
    schedulingLabel.y - 14,
    bookingLabel.y - 14,
  );
  const boundsMaxY = Math.max(
    outer.cy + outer.r,
    middle.cy + middle.r,
    inner.cy + inner.r,
    coordinationLabel.y + layerFontSize + ringToolExtraHeight + 14,
    schedulingLabel.y + layerFontSize + ringToolExtraHeight + 14,
    bookingLabel.y + layerFontSize + toolBlockExtraHeight + 14,
  );
  const contentW = boundsMaxX - boundsMinX;
  const contentH = boundsMaxY - boundsMinY;
  const centerShiftX = (viewBoxW - contentW) / 2 - boundsMinX;
  const centerShiftY = (viewBoxH - contentH) / 2 - boundsMinY;

  return (
    <figure className="my-8 flex flex-col items-center gap-3">
      <svg
        viewBox="0 0 420 400"
        className="mx-auto h-auto w-full max-w-[22rem] sm:max-w-[26rem]"
        role="img"
        aria-labelledby={`${titleId} ${captionId}`}
      >
        <title id={titleId}>{svgTitle}</title>
        <desc>{svgDesc}</desc>
        <g transform={`translate(${centerShiftX} ${centerShiftY})`}>
          <defs>
            <clipPath id={clipCoordinationId}>
              <circle cx={outer.cx} cy={outer.cy} r={outer.r - ringStroke} />
            </clipPath>
            <clipPath id={clipSchedulingId}>
              <circle cx={middle.cx} cy={middle.cy} r={middle.r - ringStroke} />
            </clipPath>
            <clipPath id={clipBookingId}>
              <circle cx={inner.cx} cy={inner.cy} r={inner.r - ringStroke} />
            </clipPath>
          </defs>
          <circle
            cx={outer.cx}
            cy={outer.cy}
            r={outer.r}
            fill={surfaceBase}
            stroke={lineDefault}
            strokeWidth={ringStroke}
          />
          <text
            x={coordinationLabel.x}
            y={coordinationLabel.y}
            textAnchor="middle"
            clipPath={`url(#${clipCoordinationId})`}
            {...layerTextProps}
          >
            Meeting coordination
          </text>
          {tools ? (
            <text
              x={coordinationLabel.x}
              y={toolsStartY(coordinationLabel.y)}
              textAnchor="middle"
              clipPath={`url(#${clipCoordinationId})`}
              {...toolTextProps}
            >
              {tools.coordination}
            </text>
          ) : null}
          <circle
            cx={middle.cx}
            cy={middle.cy}
            r={middle.r}
            fill={surfaceSoft}
            stroke={lineDefault}
            strokeWidth={ringStroke}
          />
          <text
            x={schedulingLabel.x}
            y={schedulingLabel.y}
            textAnchor="middle"
            clipPath={`url(#${clipSchedulingId})`}
            {...layerTextProps}
          >
            Meeting scheduling
          </text>
          {tools ? (
            <text
              x={schedulingLabel.x}
              y={toolsStartY(schedulingLabel.y)}
              textAnchor="middle"
              clipPath={`url(#${clipSchedulingId})`}
              {...toolTextProps}
            >
              {tools.scheduling}
            </text>
          ) : null}
          <circle
            cx={inner.cx}
            cy={inner.cy}
            r={inner.r}
            fill={surfaceBase}
            stroke={lineDefault}
            strokeWidth={ringStroke}
          />
          <text
            x={bookingLabel.x}
            y={bookingLabel.y}
            textAnchor="middle"
            clipPath={`url(#${clipBookingId})`}
            {...layerTextProps}
          >
            Calendar data
          </text>
          {tools ? (
            <text
              x={bookingLabel.x}
              y={toolsStartY(bookingLabel.y)}
              textAnchor="middle"
              clipPath={`url(#${clipBookingId})`}
              {...toolTextProps}
            >
              {tools.bookingLines.map((line, index) => (
                <tspan key={line} x={bookingLabel.x} dy={index === 0 ? 0 : toolLineStep}>
                  {line}
                </tspan>
              ))}
            </text>
          ) : null}
        </g>
      </svg>
      <figcaption
        id={captionId}
        className="max-w-md text-center text-sm font-semibold text-ink-primary"
      >
        {figureCaption}
      </figcaption>
    </figure>
  );
}

export default function MeetingCoordinationPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <ReferenceArticleJsonLd config={referenceArticle} />
      <ExplanationPageHero
        backLabel="Back to previous page"
        alternateLanguageHref={explanationPages.meetingCoordination.fr.path}
        alternateLanguageLabel="→ Lire en Français"
      />

      <section className="section-standard bg-surface-soft">
        <div className="container-4xl">
          <article className="max-w-3xl mx-auto stack-md text-body text-copy-primary">
            <h1 className="explanation-article-title text-ink-primary">
              {referenceArticle.headline}
            </h1>
            <p className="italic text-copy-muted">{referenceArticle.description}</p>

            <h2 className="explanation-article-heading explanation-article-heading--first">
              Meeting coordination is about managing the unknown
            </h2>
            <p>
              When we decide to meet, we usually know what we want to happen. We know who we want to
              meet, roughly when we want to meet them, and often how long the meeting should take.
            </p>
            <p>
              Inside one organization, turning that intention into a scheduled meeting can be relatively
              straightforward. People often share the same calendar infrastructure, free and busy
              information is visible, working hours are known, and the scheduling rules are broadly
              understood. In that environment, coordination can often behave like a predefined
              process.
            </p>
            <p>The problem changes when the people you need to meet are outside your organization.</p>
            <p>
              You may know exactly who you want to meet and when you would prefer to meet them, but you
              cannot see their calendars, their priorities or the constraints shaping their
              availability. The time you want may not work. A required participant may be unavailable.
              Someone may be travelling. A one-hour meeting may need to become 30 minutes. And a slot
              that looked possible an hour ago may already have disappeared.
            </p>
            <p>
              That is where meeting coordination becomes a workflow. The objective is clear, but the
              path to it cannot be fully defined in advance.
            </p>
            <div className="stack-sm my-2">
              <p className="border-l-2 border-line-default pl-4 text-copy-primary">
                A <strong>process</strong> follows a path that can largely be specified before the work
                begins. The steps, rules and possible transitions are known.
              </p>
              <p className="border-l-2 border-line-default pl-4 text-copy-primary">
                A <strong>workflow</strong> is organized around an objective, but the exact path
                changes as new information, constraints and decisions appear.
              </p>
            </div>
            <p>
              Meeting scheduling tools are effective once enough of the problem has already been
              structured. Meeting coordination becomes necessary when the meeting crosses
              organizational boundaries and the structure has to be discovered along the way.
            </p>

            <h2 className="explanation-article-heading">
              Processes can be automated. Workflows have to be coordinated.
            </h2>
            <p>
              A predefined process is relatively easy to standardize because the rules can be decided
              before the work begins. Once the duration, availability, participants and conditions are
              known, software can execute the same sequence repeatedly with very little ambiguity.
            </p>
            <p>
              A coordination workflow is different. The information required to move forward often
              appears progressively, and some of it exists only in the heads of the people involved. A
              calendar can tell you that Tuesday afternoon is free. It cannot necessarily tell you that
              Tuesday is a bad day, that one participant is optional, or that a one-hour meeting can
              be shortened if that is the only way to make it happen.
            </p>
            <p>
              This is particularly important when coordination crosses organizational boundaries. The
              software does not control a single environment with shared calendars, rules and
              permissions. It has to work with incomplete information, ask for input when necessary,
              and adapt the path as new constraints appear.
            </p>
            <p>
              That difference creates a hierarchy in the meeting workflow. Meeting scheduling is the
              stage where the available information is narrowed to a specific time. Meeting coordination
              sits around it, covering the broader work required to make the meeting possible in the first
              place. Both rely on the calendar data underneath: the events, availability and working
              hours already stored in digital calendars.
            </p>

            <CoordinationNestedLayersDiagram
              diagramId="coordination-layers-concept"
              svgTitle="The relationship between meeting coordination, meeting scheduling and calendar data"
              svgDesc="Nested circles show meeting coordination as the outer layer, meeting scheduling inside it, and calendar data at the centre."
              figureCaption="The relationship between meeting coordination, meeting scheduling and calendar data"
            />

            <h2 className="explanation-article-heading">
              Different tools operate at different levels of the workflow
            </h2>
            <p>
              Digital calendars such as Google Calendar and Microsoft Outlook provide the foundation.
              They store the events that have been agreed, maintain availability and expose free and
              busy time. In the model above, they operate primarily at the calendar-booking layer.
            </p>
            <p>
              Scheduling tools operate one level higher. Booking links such as Calendly expose
              predefined availability and let another person select an acceptable time, while
              scheduling polls such as Doodle ask participants to choose between a set of proposed
              options. Both make scheduling more efficient, but both start from a process that someone
              has already structured.
            </p>
            <p>
              Meeting coordination sits around those layers. Its starting point can be much less
              defined: these people need to meet next week. The participants may have constraints that
              are not visible in their calendars, the preferred option may fail, and the next step may
              depend on what somebody says rather than on a rule configured in advance.
            </p>
            <p>
              Historically, that made coordination difficult to automate. Software could execute a
              predefined scheduling process far more easily than it could interpret a changing
              situation, ask for missing information and decide what should happen next.
            </p>
            <p>
              Agentic AI changes that boundary by creating a new layer between the person coordinating
              the meeting, the participants, and the calendar systems underneath. The agent can access
              the availability data that already exists in digital calendars, while still involving
              people when the workflow requires judgment, preference or clarification.
            </p>
            <p>
              That is an important shift. Before this, coordinating across organizations often meant
              treating someone else&apos;s digital calendar almost like a paper planner: the information
              existed, but the only practical way to access it was to ask the owner.
            </p>
            <p>
              An agent can now combine both sides of the workflow. It can use calendar data where the
              answer is already available, ask the participant when it is not, interpret the response,
              and keep moving toward the meeting objective as the situation changes.
            </p>
            <p>
              That is what makes meeting coordination addressable as a complete workflow rather than as a
              collection of separate scheduling tasks. Ask My Envoy operates at that meeting coordination
              layer, using the calendar as infrastructure while coordinating the people and constraints
              around it.
            </p>

            <CoordinationNestedLayersDiagram
              diagramId="coordination-layers-tools"
              svgTitle="Where Ask My Envoy, Calendly, Doodle, Google Calendar, and Microsoft Outlook sit in the meeting workflow"
              svgDesc="Nested circles show Ask My Envoy at the coordination layer, Calendly and Doodle at the scheduling layer, and Google Calendar and Microsoft Outlook providing the underlying calendar data."
              figureCaption="Ask My Envoy operates at the coordination layer, Calendly and Doodle at the scheduling layer, and Google Calendar and Microsoft Outlook provide the underlying calendar data."
              tools={{
                coordination: 'Ask My Envoy',
                scheduling: 'Calendly, Doodle',
                bookingLines: ['Google Calendar', 'Microsoft Outlook'],
              }}
            />

            <h2 className="explanation-article-heading">
              Why meeting coordination remained manual
            </h2>
            <p>
              Digital calendars changed how availability is stored, but they did not fundamentally
              change how availability is accessed across organizational boundaries.
            </p>
            <p>
              Inside a company, shared calendar infrastructure can make free and busy information
              visible. Outside the company, that visibility usually disappears. A client&apos;s calendar
              may be perfectly digital, constantly synchronized and accessible from a smartphone, but
              none of that helps the person trying to coordinate the meeting if they cannot see it.
            </p>
            <p>
              From the coordinator&apos;s point of view, the situation is remarkably similar to the
              paper-planner era. The information exists, but the only practical way to access it is
              still to ask the owner.
            </p>
            <p>
              That is why so much cross-company coordination still begins with some variation of
              &ldquo;When are you available next week?&rdquo; We digitized the calendar, but not the
              coordination workflow around it.
            </p>
            <p>
              Scheduling software improved parts of that experience by allowing people to expose
              selected availability or respond to proposed options. But those approaches still require
              someone to structure the process in advance.
            </p>
            <p>
              That is why meeting coordination remained largely manual: the calendar became digital,
              but the coordination workflow across organizational boundaries did not. Ask My Envoy changes
              that status quo.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
