import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const s = { marginBottom: '24px' };
const h2 = { fontSize: '18px', fontWeight: 800, marginBottom: '12px', color: '#0A0A0A' };
const h3 = { fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: '#0A0A0A' };
const p = { fontSize: '14px', lineHeight: 1.7, color: '#333', marginBottom: '8px' };
const ul = { fontSize: '14px', lineHeight: 1.7, color: '#333', paddingLeft: '20px', marginBottom: '8px' };
const a = { color: '#7469cd' };

function TermsOfUse() {
  return (
    <>
      <Navbar />
      <div style={{ background: '#fff', padding: '80px 24px 60px', minHeight: '60vh', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>CONDITIONS GÉNÉRALES D'UTILISATION</h1>
        <p style={{ ...p, marginBottom: '24px' }}>goodreviews.app</p>

        <div style={s}>
          <p style={p}>Éditées par : Good reviews – Engel Kyrian</p>
          <p style={p}>Siège social : Rue du Marché 2, 2520 La Neuveville</p>
          <p style={p}>Numéro d'identification : CHE-269.959.818</p>
          <p style={p}>Contact : <a href="mailto:kyrian@goodreviews.ch" style={a}>kyrian@goodreviews.ch</a></p>
          <p style={p}>Date d'entrée en vigueur : 25 février 2026 — Dernière mise à jour : 25 février 2026</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Google API Services - Limited Use Disclosure</h2>
          <p style={p}>goodreviews.app's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>PRÉAMBULE</h2>
          <p style={p}>Les présentes Conditions Générales d'Utilisation (ci-après les « CGU ») régissent l'accès et l'utilisation de la plateforme goodreviews.app (ci-après la « Plateforme »), éditée par Good reviews – Engel Kyrian (ci-après l'« Éditeur »).</p>
          <p style={p}>goodreviews.app est une plateforme d'analyse statistique des avis Google destinée aux professionnels : note à deux décimales, nombre d'avis par période, moyennes, progressions, projections, et comparaisons entre établissements au sein d'un groupe.</p>
          <p style={p}>L'utilisation implique l'acceptation pleine et entière des présentes CGU.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 1 — Définitions</h2>
          <ul style={ul}>
            <li>« Plateforme » : goodreviews.app, accessible à https://goodreviews.app.</li>
            <li>« Éditeur » : Good reviews – Engel Kyrian, société suisse, Rue du Marché 2, 2520 La Neuveville, RC CHE-269.959.818.</li>
            <li>« Utilisateur » : personne inscrite (propriétaires, gestionnaires de groupes, responsables régionaux, collaborateurs).</li>
            <li>« Service » : l'ensemble des fonctionnalités d'analyse statistique des avis Google.</li>
            <li>« Établissement » : lieu d'activité commerciale avec un profil Google Business Profile.</li>
            <li>« Groupe » : ensemble d'Établissements gérés par une même entité (franchise, chaîne, réseau).</li>
          </ul>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 2 — Objet</h2>
          <p style={p}>Définir les conditions d'accès et d'utilisation de la Plateforme et les droits et obligations des parties.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 3 — Accès et inscription</h2>
          <h3 style={h3}>3.1 Conditions</h3>
          <p style={p}>Service professionnel réservé aux personnes physiques de 18 ans minimum ou personnes morales dûment représentées.</p>
          <h3 style={h3}>3.2 Inscription</h3>
          <p style={p}>Via le site https://goodreviews.app. Informations exactes et à jour requises.</p>
          <h3 style={h3}>3.3 Sécurité du compte</h3>
          <p style={p}>L'Utilisateur est responsable de ses identifiants. Signalement immédiat à <a href="mailto:kyrian@goodreviews.ch" style={a}>kyrian@goodreviews.ch</a> en cas de suspicion d'accès non autorisé.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 4 — Description des Services</h2>
          <h3 style={h3}>4.1 Fonctionnalités individuelles</h3>
          <ul style={ul}>
            <li>Note Google de l'établissement avec précision de deux décimales.</li>
            <li>Nombre d'avis par période configurable (7j, 30j, 6 mois, 12 mois, depuis le début, période personnalisée).</li>
            <li>Note moyenne des avis par période, avec graphiques visuels.</li>
            <li>Fréquence moyenne (avis/jour, avis/semaine, avis/mois), avec graphiques.</li>
            <li>Nombre d'avis 5 ou 1 étoile nécessaires pour atteindre la note supérieure ou inférieure.</li>
            <li>Identification des périodes de meilleure/pire progression (note et volume d'avis).</li>
          </ul>
          <h3 style={h3}>4.2 Fonctionnalités Groupes</h3>
          <ul style={ul}>
            <li>Agrégation globale : note moyenne, nombre d'avis total et moyen, fréquence moyenne, graphiques.</li>
            <li>Listes personnalisées d'Établissements avec les mêmes indicateurs.</li>
            <li>Classement par progression de note ou volume d'avis (7j, 30j, 6 mois, 12 mois).</li>
            <li>Classement par proximité avec la note Google supérieure/inférieure.</li>
          </ul>
          <h3 style={h3}>4.3 Intégration Google</h3>
          <p style={p}>Les Services reposent sur l'accès en lecture seule à l'API Google Business Profile via OAuth 2.0 (scope : https://www.googleapis.com/auth/business.manage). Ce scope est le seul disponible pour cette API. Bien qu'il permette techniquement des opérations de lecture et d'écriture, goodreviews.app n'effectue que des opérations de lecture sur les ressources Google Business Profile.</p>
          <p style={p}>Les données sont synchronisées à la demande de l'Utilisateur et peuvent être rafraîchies par une tâche serveur planifiée.</p>
          <p style={p}>L'autorisation peut être accordée directement par l'Utilisateur ou par un administrateur autorisé sur consentement documenté.</p>
          <p style={p}><strong>Google API Services User Data Policy Compliance:</strong> goodreviews.app's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</p>
          <p style={p}>En particulier :</p>
          <ul style={ul}>
            <li>Accès exclusivement en lecture seule. Aucune modification du profil Google.</li>
            <li>Données utilisées uniquement pour les analyses statistiques visibles dans l'interface.</li>
            <li>Données jamais vendues, cédées, transférées à des tiers ou exportées.</li>
            <li>Aucune utilisation publicitaire ou pour l'entraînement de modèles d'IA.</li>
          </ul>
          <p style={p}>Pour plus de détails : <Link to="/google-api-disclosure" style={a}>Google API Disclosure</Link>.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 5 — Obligations de l'Utilisateur</h2>
          <h3 style={h3}>5.1 Utilisation conforme</h3>
          <p style={p}>L'Utilisateur s'interdit :</p>
          <ul style={ul}>
            <li>Toute utilisation illégale, frauduleuse ou contraire à l'ordre public.</li>
            <li>Toute tentative d'accès non autorisé aux données d'autres Utilisateurs.</li>
            <li>La copie, désassemblage ou décompilation de la Plateforme.</li>
            <li>L'utilisation de robots ou scripts abusifs.</li>
            <li>L'utilisation des statistiques en violation des politiques de Google.</li>
          </ul>
          <h3 style={h3}>5.2 Politiques Google</h3>
          <p style={p}>L'Utilisateur respecte les conditions de Google Business Profile. L'Éditeur n'est pas responsable des actions de Google sur le compte de l'Utilisateur.</p>
          <h3 style={h3}>5.3 Gestion des accès Groupe</h3>
          <p style={p}>Le gestionnaire du Groupe est responsable de l'attribution des accès.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 6 — Tarification</h2>
          <p style={p}>Abonnement mensuel en CHF. Factures mensuelles électroniques, payables sous 30 jours. Suspension possible après 15 jours de retard sans régularisation.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 7 — Propriété intellectuelle</h2>
          <p style={p}>La Plateforme, son code, son design et ses algorithmes sont la propriété de l'Éditeur. Licence d'utilisation non exclusive et révocable pour la durée de l'abonnement. Les avis Google restent la propriété de Google et de leurs auteurs.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 8 — Responsabilité</h2>
          <p style={p}>Obligation de moyens. Meilleurs efforts pour l'exactitude des statistiques, sans garantie absolue (dépendance API Google).</p>
          <p style={p}>Responsabilité limitée aux dommages directs, plafonnée au montant payé sur les 12 derniers mois.</p>
          <p style={p}>Exclusions : dommages indirects, actions de Google, indisponibilité API Google, décisions prises sur base des statistiques, inexactitude ponctuelle des données Google.</p>
          <p style={p}>Force majeure : pannes tiers (Google, Infomaniak), cyberattaques, événements naturels.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 9 — Protection des données</h2>
          <p style={p}>Voir notre <Link to="/privacy-policy" style={a}>Politique de Confidentialité</Link>.</p>
          <p style={p}><strong>Google API Services User Data Policy Compliance:</strong> goodreviews.app's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</p>
          <p style={p}>Page <Link to="/google-api-disclosure" style={a}>Google API Disclosure</Link>.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 10 — Durée et résiliation</h2>
          <h3 style={h3}>10.1 Résiliation par l'Utilisateur</h3>
          <p style={p}>Résiliation de l'abonnement à tout moment (effet en fin de période en cours). Suppression du compte et de toutes les données via le bouton dans les paramètres :</p>
          <ul style={ul}>
            <li>Désactivation immédiate de l'accès.</li>
            <li>Suppression des tokens Google sous 48h.</li>
            <li>Suppression des données et avis stockés sous 30 jours.</li>
            <li>Facturation conservée 10 ans (obligation légale).</li>
          </ul>
          <h3 style={h3}>10.2 Révocation OAuth sans suppression de compte</h3>
          <p style={p}>Les tokens sont supprimés sous 48h, la synchronisation cesse. Les avis déjà stockés restent accessibles en snapshot historique. Suppression complète possible à tout moment via le bouton de suppression de compte.</p>
          <h3 style={h3}>10.3 Résiliation par l'Éditeur</h3>
          <p style={p}>En cas de violation des CGU, non-paiement persistant, abus, ou violation des politiques Google. Notification préalable par e-mail sauf urgence de sécurité.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 11 — Disponibilité</h2>
          <p style={p}>Meilleurs efforts 24/7. Pas de garantie absolue. Exclusions : maintenance (notifiée), pannes techniques, indisponibilité API Google.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 12 — Modifications</h2>
          <p style={p}>Notification 30 jours avant modification substantielle. Utilisation continue vaut acceptation.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 13 — Divers</h2>
          <p style={p}>Nullité partielle : la nullité d'une clause n'affecte pas les autres. Non-renonciation. Les CGU + Politique de Confidentialité + devis constituent l'accord intégral.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 14 — Droit applicable</h2>
          <p style={p}>Droit suisse. Tribunaux du canton de Berne. Résolution amiable privilégiée.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 15 — Contact</h2>
          <p style={p}>
            E-mail : <a href="mailto:kyrian@goodreviews.ch" style={a}>kyrian@goodreviews.ch</a><br />
            Courrier : Good reviews – Engel Kyrian, Rue du Marché 2, 2520 La Neuveville
          </p>
        </div>

        <Link to="/" style={{ color: '#7469cd', fontWeight: 800, marginTop: '24px', display: 'inline-block' }}>
          &larr; Back to home
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default TermsOfUse;
