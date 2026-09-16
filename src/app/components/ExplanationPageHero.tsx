import Link from 'next/link';
import BackLink from './BackLink';

type ExplanationPageHeroProps = {
  backLabel: string;
  alternateLanguageHref: string;
  alternateLanguageLabel: string;
};

export default function ExplanationPageHero({
  backLabel,
  alternateLanguageHref,
  alternateLanguageLabel,
}: ExplanationPageHeroProps) {
  return (
    <section className="section-hero-content">
      <div className="container-4xl">
        <div className="py-4 flex items-center justify-between gap-4">
          <BackLink
            label={backLabel}
            className="text-sm text-copy-muted hover:text-ink-primary hover:underline"
          />
          <Link
            href={alternateLanguageHref}
            replace
            className="text-sm text-copy-muted hover:text-ink-primary hover:underline whitespace-nowrap"
          >
            {alternateLanguageLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
