import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const s = { marginBottom: '24px' };
const h2 = { fontSize: '18px', fontWeight: 800, marginBottom: '12px', color: '#0A0A0A' };
const h3 = { fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: '#0A0A0A' };
const p = { fontSize: '14px', lineHeight: 1.7, color: '#333', marginBottom: '8px' };
const ul = { fontSize: '14px', lineHeight: 1.7, color: '#333', paddingLeft: '20px', marginBottom: '8px' };
const a = { color: '#7469cd' };

function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Politique de confidentialité | Good Reviews';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Politique de protection des données de Good Reviews. Mesures techniques et organisationnelles pour la sécurité des données personnelles.');
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ background: '#fff', padding: '80px 24px 60px', minHeight: '60vh', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '4px' }}>POLITIQUE DE PROTECTION DES DONNÉES</h1>
        <p style={{ ...p, fontWeight: 600, marginBottom: '24px' }}>Mesures de sécurité et traitement des données</p>

        <div style={s}>
          <p style={p}>goodreviews.app</p>
          <p style={p}>Éditée par : Good reviews – Engel Kyrian</p>
          <p style={p}>Classification : Document interne</p>
          <p style={p}>Responsable : Engel Kyrian</p>
          <p style={p}>Version : 1.0 — Date d'entrée en vigueur : 25 février 2026</p>
          <p style={p}>Dernière révision : 25 février 2026</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Conformité Google API Services - Limited Use</h2>
          <p style={p}>goodreviews.app's use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>PRÉAMBULE</h2>
          <p style={p}>La présente Politique définit les mesures techniques et organisationnelles mises en œuvre par Good reviews – Engel Kyrian pour assurer la protection des données personnelles traitées par goodreviews.app, plateforme d'analyse statistique des avis Google accédant en lecture seule aux données du Google Business Profile.</p>
          <p style={p}>Elle répond aux exigences du RGPD, de la nLPD suisse, et de la Google API Services User Data Policy (Limited Use requirements). Elle s'applique à l'ensemble des personnes accédant aux systèmes et données de goodreviews.app.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 1 — Champ d'application</h2>
          <p style={p}>Cette Politique couvre :</p>
          <ul style={ul}>
            <li>les données personnelles des Utilisateurs ;</li>
            <li>les données d'avis Google (contenu, note, date — sans les noms des auteurs, qui ne sont pas stockés) ;</li>
            <li>les tokens OAuth 2.0 ;</li>
            <li>la base de données MySQL et l'infrastructure d'hébergement Infomaniak.</li>
          </ul>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 2 — Gouvernance</h2>
          <h3 style={h3}>2.1 Responsable du traitement</h3>
          <p style={p}>Good reviews – Engel Kyrian, société de droit suisse, Rue du Marché 2, 2520 La Neuveville.</p>
          <h3 style={h3}>2.2 Personne de contact pour la protection des données</h3>
          <p style={p}>La personne de contact désignée pour la protection des données est joignable à : <a href="mailto:kyrian@goodreviews.ch" style={a}>kyrian@goodreviews.ch</a>. Elle veille à la conformité des traitements, sert de point de contact avec les autorités et les personnes concernées.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 3 — Principes de traitement</h2>
          <ul style={ul}>
            <li><strong>Licéité et transparence :</strong> traitement licite, loyal et transparent.</li>
            <li><strong>Limitation des finalités :</strong> données collectées exclusivement pour l'analyse statistique des avis Google.</li>
            <li><strong>Minimisation :</strong> seules les données nécessaires aux statistiques sont collectées. Les noms des auteurs d'avis ne sont pas stockés. Seul le scope OAuth minimal est demandé.</li>
            <li><strong>Exactitude :</strong> synchronisation à la demande et rafraîchissement planifié avec l'API Google.</li>
            <li><strong>Limitation de conservation :</strong> données conservées uniquement pendant l'abonnement actif.</li>
            <li><strong>Sécurité :</strong> mesures techniques et organisationnelles adaptées.</li>
          </ul>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 4 — Mesures de sécurité techniques</h2>
          <h3 style={h3}>4.1 Chiffrement</h3>
          <ul style={ul}>
            <li><strong>En transit :</strong> TLS 1.2+ (HTTPS). Certificats gérés et renouvelés automatiquement.</li>
            <li><strong>Tokens OAuth au repos :</strong> chiffrés en AES-256-GCM avant stockage.</li>
          </ul>
          <h3 style={h3}>4.2 Base de données</h3>
          <ul style={ul}>
            <li>MySQL hébergé chez Infomaniak en Suisse.</li>
            <li>Accès restreint aux processus applicatifs autorisés et à l'administrateur, via connexions chiffrées.</li>
            <li>Requêtes paramétrées (prévention injection SQL).</li>
            <li>Stockage des avis (contenu, note, date — sans nom d'auteur) pour calcul des statistiques.</li>
          </ul>
          <h3 style={h3}>4.3 Gestion des accès</h3>
          <ul style={ul}>
            <li>Principe du moindre privilège. Comptes nominatifs.</li>
            <li>Système de rôles : propriétaire/manager (ses établissements), responsable régional (établissements assignés), gestionnaire de groupe (accès global + gestion des permissions).</li>
            <li>Accès administrateur : strictement limité au support technique sur demande explicite de l'Utilisateur, ciblé au compte concerné uniquement, et journalisé (horodatage, identifiant, motif). Aucun accès en masse n'est possible.</li>
          </ul>
          <h3 style={h3}>4.4 Hébergement</h3>
          <ul style={ul}>
            <li>Infomaniak Network SA, serveurs en Suisse, certifié ISO 27001.</li>
            <li>Environnements de production et développement séparés.</li>
            <li>Mises à jour de sécurité appliquées régulièrement.</li>
          </ul>
          <h3 style={h3}>4.5 Sauvegardes</h3>
          <ul style={ul}>
            <li>Sauvegardes quotidiennes de la base MySQL, chiffrées.</li>
            <li>Rétention : 30 jours.</li>
          </ul>
          <h3 style={h3}>4.6 Journalisation</h3>
          <ul style={ul}>
            <li>Accès aux données et systèmes critiques journalisés (horodatage, identifiant, action).</li>
            <li>Journaux conservés 12 mois.</li>
          </ul>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 5 — Mesures organisationnelles</h2>
          <h3 style={h3}>5.1 Confidentialité</h3>
          <p style={p}>Tout collaborateur ou prestataire accédant aux données est tenu par un accord de confidentialité.</p>
          <h3 style={h3}>5.2 Sous-traitant</h3>
          <p style={p}>Infomaniak est lié par un DPA conforme à l'article 28 du RGPD.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 6 — Traitement des données Google</h2>
          <h3 style={h3}>6.1 Conformité Google API Services User Data Policy</h3>
          <ul style={ul}>
            <li><strong>Lecture seule :</strong> la Plateforme utilise le scope https://www.googleapis.com/auth/business.manage en lecture seule pour les ressources Google Business Profile. Ce scope est le seul disponible pour l'API Google Business Profile. Aucune opération d'écriture n'est effectuée sur les fiches Google.</li>
            <li><strong>Utilisation limitée :</strong> données utilisées exclusivement pour les analyses statistiques visibles dans l'interface.</li>
            <li><strong>Aucun transfert :</strong> les données Google restent au sein de la Plateforme, sans aucune exportation.</li>
            <li><strong>Interdiction publicitaire :</strong> aucune utilisation pour la publicité.</li>
            <li><strong>Accès humain restreint :</strong> l'administrateur n'accède aux données Google que sur demande de l'Utilisateur (support), pour le compte concerné uniquement, avec journalisation. Aucun accès en masse.</li>
            <li><strong>Pas d'IA :</strong> aucune utilisation pour l'entraînement de modèles d'IA/ML généralisés.</li>
          </ul>
          <h3 style={h3}>6.2 Sécurité des tokens OAuth</h3>
          <ul style={ul}>
            <li>Chiffrés en AES-256-GCM avant stockage en base.</li>
            <li>Accès restreint aux processus applicatifs.</li>
            <li>Rotation automatique des access tokens (mécanisme standard OAuth 2.0).</li>
            <li>Suppression définitive sous 48h après révocation ou clôture de compte.</li>
          </ul>
          <h3 style={h3}>6.3 Minimisation des scopes</h3>
          <p style={p}>Seul le scope https://www.googleapis.com/auth/business.manage est demandé (unique scope disponible). Aucun scope supplémentaire n'est demandé par anticipation.</p>
          <h3 style={h3}>6.4 Synchronisation</h3>
          <p style={p}>Les données sont synchronisées à la demande de l'Utilisateur et peuvent aussi être rafraîchies par une tâche serveur planifiée.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 7 — Gestion des incidents</h2>
          <ul style={ul}>
            <li>Tout incident est signalé au responsable protection des données immédiatement.</li>
            <li>Notification au PFPDT ou autorité compétente sous 72 heures si risque pour les personnes.</li>
            <li>Information des Utilisateurs concernés dans les meilleurs délais.</li>
            <li>Notification à Google si des données Google sont affectées.</li>
            <li>Documentation de chaque incident et mesures correctives.</li>
          </ul>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 8 — Rétention et suppression</h2>
          <ul style={ul}>
            <li><strong>Données de compte :</strong> durée de l'abonnement + suppression sous 30 jours après clôture.</li>
            <li><strong>Tokens OAuth :</strong> suppression définitive sous 48h après révocation.</li>
            <li><strong>Avis Google :</strong> durée de l'abonnement. Suppression sous 30 jours après clôture du compte.</li>
            <li><strong>Données de facturation :</strong> 10 ans (obligations fiscales suisses).</li>
            <li><strong>Journaux :</strong> 12 mois.</li>
          </ul>
          <h3 style={h3}>8.1 Révocation OAuth sans suppression de compte</h3>
          <p style={p}>Tokens supprimés sous 48h. Synchronisation arrêtée. Avis déjà stockés conservés en snapshot historique. Suppression totale possible via le bouton de suppression de compte.</p>
          <h3 style={h3}>8.2 Suppression de compte</h3>
          <p style={p}>Bouton dans les paramètres de la Plateforme. Déclenche la suppression complète de toutes les données associées (sauf facturation, obligation légale). Suppression sécurisée garantissant l'impossibilité de récupération. Sauvegardes purgées lors du cycle de rotation.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 9 — Audits</h2>
          <p style={p}>Sur demande de Google dans le cadre de la vérification de l'utilisation des API, Good reviews – Engel Kyrian s'engage à coopérer pleinement et à fournir toute documentation prouvant la conformité de ses pratiques.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 10 — Révision</h2>
          <p style={p}>Politique révisée en cas de changement légal, réglementaire ou technique significatif. Révisions documentées et approuvées par la direction.</p>
        </div>

        <div style={s}>
          <h2 style={h2}>Article 11 — Contact</h2>
          <p style={p}>
            Responsable protection des données : <a href="mailto:kyrian@goodreviews.ch" style={a}>kyrian@goodreviews.ch</a><br />
            Adresse postale : Good reviews – Engel Kyrian, Rue du Marché 2, 2520 La Neuveville
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

export default PrivacyPolicy;
