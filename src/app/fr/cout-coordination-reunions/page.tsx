import type { Metadata } from 'next';
import ExplanationPageHero from '../../components/ExplanationPageHero';
import {
  buildExplanationPageAlternates,
  buildExplanationPageOpenGraph,
  explanationPages,
} from '@/lib/explanation-pages';

const title = 'Le coût caché de la coordination de réunions';
const description =
  'Quelques minutes par réunion paraissent insignifiantes. Mais les emails, relances, interruptions et retards finissent par coûter du temps, ralentir les décisions et faire perdre des opportunités.';

export const metadata: Metadata = {
  title,
  description,
  alternates: buildExplanationPageAlternates('costOfMeetingCoordination', 'fr'),
  openGraph: buildExplanationPageOpenGraph('fr', title, description),
  robots: 'index, follow',
};

export default function CoutCoordinationReunionsPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <ExplanationPageHero
        backLabel="Retour à la page précédente"
        alternateLanguageHref={explanationPages.costOfMeetingCoordination.en.path}
        alternateLanguageLabel="→ Read in English"
      />

      <section className="section-standard bg-surface-soft">
        <div className="container-4xl">
          <article className="max-w-3xl mx-auto stack-md text-body text-copy-primary">
            <h2 className="section-subheading text-ink-primary">TL;DR</h2>
            <p className="text-copy-muted">
              La coordination de réunions paraît peu coûteuse parce que chaque action ne prend que
              quelques minutes. Mais ces minutes sont réparties entre plusieurs personnes,
              interrompent d&apos;autres tâches et s&apos;étalent souvent sur plusieurs heures ou
              plusieurs jours. Le coût réel ne se limite donc pas au temps administratif : il se
              retrouve aussi dans la perte d&apos;attention, le ralentissement des décisions et
              parfois dans les opportunités qui n&apos;aboutissent pas.
            </p>

            <h1 className="section-subheading text-ink-primary">
              Quelques minutes à la fois deviennent un vrai coût pour l&apos;entreprise.
            </h1>
            <p>
              Organiser une réunion avec des personnes extérieures à son entreprise commence
              généralement par quelque chose de très simple : on sait avec qui on veut se réunir et,
              approximativement, quand. On consulte son agenda, puis on envoie un message pour
              demander les disponibilités des autres participants.
            </p>
            <p>
              Ce message prend quelques minutes. C&apos;est aussi pour cela que la coordination de
              réunions paraît presque gratuite. Mais envoyer la demande n&apos;est que le début du
              processus. Chaque participant doit ensuite interrompre ce qu&apos;il fait, consulter
              son agenda, vérifier ses contraintes et répondre. Certains le feront immédiatement,
              d&apos;autres quelques heures plus tard ou le lendemain.
            </p>
            <p>
              Aucune de ces actions ne semble importante prise séparément. C&apos;est précisément ce
              qui rend le coût difficile à percevoir : le travail est fragmenté, réparti entre
              plusieurs personnes et dilué dans la journée. L&apos;organisateur voit les quelques
              minutes qu&apos;il passe à envoyer et relancer. Chaque participant voit les quelques
              minutes nécessaires pour répondre. Personne ne voit naturellement la somme de toutes
              ces petites actions.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              Nous avons pris l&apos;habitude de faire nous-mêmes le travail de l&apos;assistant
            </h2>
            <p>
              Pendant longtemps, la coordination des réunions faisait partie du travail des
              assistants. Quelqu&apos;un consultait les agendas, contactait les participants,
              comparait les possibilités et revenait avec un horaire qui convenait.
            </p>
            <p>
              La numérisation des agendas a rendu leur consultation beaucoup plus simple. Mais elle
              a également déplacé une partie du travail de coordination vers chacun d&apos;entre
              nous. À partir du moment où nous avons pu consulter et gérer directement notre agenda,
              il est devenu normal de vérifier nous-mêmes nos disponibilités, de répondre aux
              demandes des autres et de relancer lorsqu&apos;une réunion n&apos;avançait pas.
            </p>
            <p>
              Les outils se sont améliorés, mais la responsabilité a changé de main. Aujourd&apos;hui,
              un manager, un commercial, un recruteur, un consultant ou un dirigeant peut consacrer
              une partie de sa journée à un travail autrefois délégué à un assistant. Comme chaque
              action ne prend que quelques minutes, nous ne la considérons presque jamais comme du
              travail administratif. Nous nous y sommes simplement habitués.
            </p>
            <p>
              Ce qui est remarquable n&apos;est donc pas que la coordination de réunions prenne du
              temps. Elle en a toujours pris. C&apos;est que la numérisation ait rendu normal que ce
              travail soit désormais distribué entre toutes les personnes impliquées.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              Le coût réel dépasse largement les minutes passées
            </h2>
            <p>
              Le coût le plus visible est celui du temps consacré à consulter son agenda, rédiger
              des réponses, comparer des créneaux et relancer les participants. Mais l&apos;impact ne
              s&apos;arrête pas là, parce que ces actions ne sont généralement pas regroupées. Elles
              apparaissent tout au long de la journée et interrompent ce que chacun était en train de
              faire.
            </p>
            <p>
              Répondre à une demande de disponibilité peut ne prendre que deux minutes. Mais il faut
              s&apos;arrêter, changer de contexte, regarder son agenda, réfléchir aux contraintes de
              la réunion, répondre, puis revenir à la tâche précédente. Répétez cela plusieurs fois
              par jour, pour plusieurs réunions et plusieurs participants, et le coût réel devient
              beaucoup plus important que la somme des minutes passées à écrire des messages.
            </p>
            <p>
              À cela s&apos;ajoute le délai créé tant que la coordination n&apos;est pas terminée.
              Une discussion commerciale attend la prochaine réunion. Une décision de recrutement
              reste en suspens. Un projet client avance moins vite. Une décision qui aurait pu être
              prise aujourd&apos;hui est repoussée de plusieurs jours simplement parce que la réunion
              n&apos;a pas encore trouvé sa place dans les agendas.
            </p>
            <p>
              C&apos;est pourquoi le coût de la coordination de réunions ne se mesure pas
              seulement en temps administratif. Il touche aussi la productivité, la vitesse à
              laquelle l&apos;entreprise avance et, dans certains cas, les opportunités qu&apos;elle
              laisse passer.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              Productivité, vitesse du business et opportunités perdues
            </h2>
            <p>
              Le premier coût est un <strong>coût de productivité</strong>. Des personnes dont le
              temps devrait être consacré à vendre, décider, recruter, produire ou servir des clients
              passent une partie de leur journée à consulter des agendas, échanger des disponibilités
              et relancer des réponses.
            </p>
            <p>
              Le deuxième impact est un <strong>allongement des cycles d&apos;affaires</strong>.
              Tant qu&apos;une
              réunion n&apos;est pas organisée, la conversation qu&apos;elle doit permettre n&apos;a
              pas lieu. Les décisions arrivent plus tard, les projets prennent du retard et les
              cycles commerciaux s&apos;allongent.
            </p>
            <p>
              Le troisième est celui des <strong>opportunités perdues</strong>. Toutes les réunions
              ne sont pas assez importantes pour que quelqu&apos;un relance indéfiniment. Lorsqu&apos;il
              devient trop compliqué de trouver un horaire, certaines conversations sont simplement
              repoussées, oubliées ou abandonnées.
            </p>
            <p>
              C&apos;est ce qui rend le problème facile à sous-estimer : personne ne perd une heure
              d&apos;un seul coup. Le coût arrive quelques minutes à la fois, réunion après réunion.
            </p>

            <h2 className="section-subheading text-ink-primary pt-4">
              Pousser la numérisation un cran plus loin
            </h2>
            <p>
              L&apos;étape suivante ne consiste pas à donner aux personnes un moyen légèrement plus
              rapide de faire le même travail. Elle consiste à déléguer à nouveau une partie de
              cette coordination, cette fois à un agent IA.
            </p>
            <p>
              Avec Ask My Envoy, vous exprimez simplement votre intention : qui vous voulez
              rencontrer et approximativement quand. Votre Envoy utilise ensuite les disponibilités
              et les permissions auxquelles il a accès pour faire avancer la coordination, sans
              demander à chaque participant de consulter son agenda et de recopier son emploi du
              temps dans une conversation.
            </p>
            <p>
              Pour l&apos;organisateur, cela change la nature même du travail. Au lieu de lancer une
              série d&apos;échanges puis d&apos;y revenir régulièrement jusqu&apos;à ce qu&apos;un
              créneau soit trouvé, il formule sa demande et peut passer à autre chose. Pour les
              participants, connecter leur agenda permet de supprimer une partie des petites
              sollicitations qui interrompent autrement leur journée.
            </p>
            <p>
              Les agendas numériques ont rendu la disponibilité facile à stocker et à consulter. Un
              Envoy pousse cette logique plus loin en utilisant cette information pour retirer une
              partie du travail de coordination que la numérisation avait, presque par accident,
              reporté sur les personnes.
            </p>
            <p>
              La valeur n&apos;est donc pas de rendre l&apos;ancien processus un peu plus rapide.
              Elle est qu&apos;une partie de ce processus n&apos;ait tout simplement plus besoin
              d&apos;occuper notre temps.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
