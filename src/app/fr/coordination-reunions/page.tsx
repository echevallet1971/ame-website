import ExplanationPageHero from '../../components/ExplanationPageHero';
import { explanationPages } from '@/lib/explanation-pages';
import { buildReferenceArticleMetadata, ReferenceArticleJsonLd } from '@/lib/reference-article';
import { referenceArticle } from './reference-article.config';

export const metadata = buildReferenceArticleMetadata(referenceArticle);

export default function CoordinationReunionsPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <ReferenceArticleJsonLd config={referenceArticle} />
      <ExplanationPageHero
        backLabel="Retour à la page précédente"
        alternateLanguageHref={explanationPages.meetingCoordination.en.path}
        alternateLanguageLabel="→ Read in English"
      />

      <section className="section-standard bg-surface-soft">
        <div className="container-4xl">
          <article className="max-w-3xl mx-auto stack-md text-body text-copy-primary">
            <h2 className="section-subheading text-ink-primary">TL;DR</h2>
            <p className="text-copy-muted">
              La coordination de réunions désigne tout le travail nécessaire entre le moment où
              l&apos;on décide qu&apos;une réunion doit avoir lieu et celui où elle est
              effectivement inscrite dans les agendas de tous les participants. Trouver les
              disponibilités, comparer les contraintes, proposer des horaires, relancer, ajuster et
              recommencer lorsqu&apos;un paramètre change : ce travail reste encore largement
              manuel, en particulier lorsque la réunion implique plusieurs entreprises.
            </p>

            <h1 className="section-subheading text-ink-primary">{referenceArticle.headline}</h1>
            <p>
              La coordination de réunions est le travail qui consiste à faire passer une réunion de
              l&apos;intention à une date effectivement acceptée par tous les participants. Elle
              commence une fois que l&apos;on sait avec qui l&apos;on veut se réunir et, souvent, à
              peu près quand. Elle se termine lorsque le créneau est trouvé, accepté et inscrit
              dans les agendas.
            </p>
            <p>
              Entre les deux, quelqu&apos;un doit consulter les disponibilités, demander celles des
              autres participants, comparer les contraintes, proposer des horaires, attendre les
              réponses, relancer si nécessaire et parfois recommencer lorsque l&apos;un des
              créneaux n&apos;est plus disponible.
            </p>
            <p>
              Ce travail paraît anodin parce qu&apos;il est fragmenté en une série de petites
              actions. Pourtant, il constitue un véritable processus, avec ses échanges, ses
              dépendances et ses délais. Et dès qu&apos;une réunion traverse les frontières
              d&apos;une entreprise, ce processus redevient largement manuel.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              Nous coordonnons encore les réunions comme à l&apos;époque des agendas papier
            </h2>
            <p>
              À l&apos;intérieur d&apos;une même entreprise, les calendriers partagés permettent
              souvent de voir directement les disponibilités des collègues. Mais dès qu&apos;un
              client, un partenaire ou une autre organisation entre dans la boucle, cette
              visibilité disparaît. On recommence alors à demander : « Êtes-vous disponible mardi
              prochain ? », exactement comme lorsque chacun consultait son agenda papier avant de
              répondre.
            </p>
            <p>
              La différence est qu&apos;aujourd&apos;hui cette information existe déjà sous forme
              numérique. Nos agendas savent quand nous sommes disponibles, quand nous sommes
              occupés et quelles contraintes nous avons déjà inscrites. Pourtant, lorsque plusieurs
              organisations doivent se coordonner, nous continuons à faire circuler cette information
              manuellement par email, messagerie ou téléphone.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              La disponibilité existe déjà dans les agendas
            </h2>
            <p>
              Le problème n&apos;est donc pas de créer l&apos;information de disponibilité. Google
              Calendar, Microsoft Outlook et les autres agendas numériques la contiennent déjà. Le
              problème est de pouvoir l&apos;utiliser au-delà des frontières d&apos;une organisation
              sans exposer davantage d&apos;informations que nécessaire.
            </p>
            <p>
              Chaque participant connaît ses propres contraintes, mais aucun participant ne dispose
              naturellement de toutes les informations nécessaires pour déterminer seul le meilleur
              horaire pour le groupe. Il faut donc encore demander, attendre, comparer, proposer,
              corriger et recommencer lorsqu&apos;un créneau ne convient plus.
            </p>
            <p>
              C&apos;est cette mécanique qui constitue la coordination de réunions. La disponibilité
              existe déjà ; ce qui manque encore trop souvent, c&apos;est un moyen de l&apos;exploiter
              directement pour faire avancer la réunion.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              La coordination devient un processus asynchrone
            </h2>
            <p>
              La difficulté ne vient pas seulement du nombre de messages échangés. Elle vient
              surtout du fait que chacun répond à son propre rythme. Une personne consulte
              immédiatement son agenda, une autre répond deux heures plus tard et une troisième
              seulement le lendemain. Pendant ce temps, certains des créneaux proposés peuvent déjà
              avoir disparu.
            </p>
            <p>
              Avec deux personnes, ce processus reste généralement gérable. Avec quatre, cinq ou
              six participants répartis entre plusieurs entreprises, il devient une succession de
              messages, de vérifications et de relances. Chaque modification peut remettre en cause
              les options déjà identifiées et obliger le groupe à repartir pour un tour.
            </p>
            <p>
              La coordination de réunions est donc difficile moins parce que chaque action est
              complexe que parce qu&apos;elle est distribuée entre plusieurs personnes, plusieurs
              agendas et plusieurs moments dans le temps.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              Calendly résout un autre problème
            </h2>
            <p>
              Des outils comme Calendly ont largement simplifié les situations dans lesquelles une
              personne définit ses disponibilités et laisse les autres choisir un créneau. Ils
              fonctionnent très bien lorsque le problème peut se résumer à : « Voici mes
              disponibilités. Choisissez-en une. »
            </p>
            <p>
              Mais de nombreuses réunions professionnelles ne fonctionnent pas ainsi. Lorsqu&apos;un
              client, un partenaire ou plusieurs parties prenantes doivent participer, aucune
              personne ne détermine nécessairement seule l&apos;horaire de la réunion. Il faut alors
              tenir compte des contraintes de plusieurs participants avant de pouvoir décider.
            </p>
            <p>
              C&apos;est là que la prise de rendez-vous et la coordination de réunions se séparent.
              Calendly permet à quelqu&apos;un d&apos;ouvrir son agenda aux autres. La coordination
              consiste à faire converger plusieurs disponibilités pour qu&apos;une réunion puisse
              réellement avoir lieu.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              Demandez à votre Envoy de s&apos;en occuper
            </h2>
            <p>
              Un Envoy est un agent IA qui coordonne les réunions en votre nom. Vous lui indiquez
              simplement qui vous voulez rencontrer et approximativement quand, puis il prend en
              charge le travail nécessaire pour faire avancer la coordination avec les autres
              participants.
            </p>
            <p>
              Votre Envoy peut utiliser les disponibilités auxquelles il est autorisé à accéder,
              tenir compte des contraintes connues et revenir vers vous lorsqu&apos;une décision ou
              un arbitrage est nécessaire. Vous restez donc maître de la relation et de la décision,
              sans avoir à gérer vous-même chaque échange nécessaire pour obtenir un créneau commun.
            </p>
            <p>
              L&apos;idée n&apos;est pas de rendre légèrement plus rapide le même échange de
              disponibilités. Elle est de retirer une partie de ce travail aux personnes pour
              qu&apos;elles n&apos;aient plus à coordonner elles-mêmes chaque réunion.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
