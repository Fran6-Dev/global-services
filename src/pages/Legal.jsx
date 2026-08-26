import { company } from '../data/content.js'

export function MentionsLegales() {
  return (
    <section className="container-page py-16">
      <p className="eyebrow mb-3">Informations légales</p>
      <h1 className="text-3xl text-ink md:text-4xl">Mentions légales</h1>

      <div className="mt-10 flex max-w-3xl flex-col gap-10">
        <div>
          <h2 className="text-lg text-ink">Éditeur du site</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Le présent site est édité par {company.name}
            {', '}
            [forme juridique à compléter — ex. SASU, EURL], au capital social de
            [montant à compléter] €, immatriculée au Registre du Commerce et des
            Sociétés (RCS) sous le numéro [SIRET à compléter].
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Siège social : {company.address}, {company.postal}
            <br />
            Téléphone : {company.phone}
            <br />
            E-mail : {company.email}
            <br />
            Directeur de la publication : [nom et prénom à compléter]
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Hébergement</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Le site est hébergé par [nom de l’hébergeur à compléter], [adresse de
            l’hébergeur à compléter], [téléphone de l’hébergeur à compléter].
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Propriété intellectuelle</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            L’ensemble des contenus présents sur ce site (textes, images, logos,
            graphismes, structure) est la propriété exclusive de {company.name}, sauf
            mention contraire. Toute reproduction, représentation, modification ou
            exploitation, totale ou partielle, de ces contenus, sans autorisation
            préalable écrite, est interdite et constitue une contrefaçon sanctionnée
            par les articles L.335-2 et suivants du Code de la propriété
            intellectuelle.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Liens hypertextes</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Le site peut contenir des liens vers d’autres sites. {company.name} ne
            saurait être tenue responsable du contenu de ces sites tiers ni des
            dommages pouvant résulter de leur consultation.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Responsabilité</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            {company.name} met tout en œuvre pour assurer l’exactitude et la mise à
            jour des informations diffusées sur ce site, dont elle se réserve le droit
            de corriger le contenu à tout moment et sans préavis. {company.name} ne
            pourra en aucun cas être tenue responsable d’une quelconque interruption
            du site, de la survenance de bogues, ou de tout dommage résultant d’un
            acte frauduleux d’un tiers.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Droit applicable</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Les présentes mentions légales sont régies par le droit français. En cas
            de litige, et à défaut de résolution amiable, les tribunaux français
            seront seuls compétents.
          </p>
        </div>
      </div>
    </section>
  )
}

export function PolitiqueConfidentialite() {
  return (
    <section className="container-page py-16">
      <p className="eyebrow mb-3">RGPD</p>
      <h1 className="text-3xl text-ink md:text-4xl">Politique de confidentialité</h1>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/60">
        {company.name} attache une grande importance à la protection de vos données
        personnelles et s’engage à les traiter dans le respect du Règlement Général
        sur la Protection des Données (RGPD) et de la loi Informatique et Libertés.
      </p>

      <div className="mt-10 flex max-w-3xl flex-col gap-10">
        <div>
          <h2 className="text-lg text-ink">Responsable du traitement</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Le responsable du traitement des données collectées sur ce site est{' '}
            {company.name}, {company.address}, {company.postal}, joignable à l’adresse{' '}
            {company.email}.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Données collectées</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Dans le cadre de l’utilisation des formulaires de contact et de demande de
            devis, nous collectons les données que vous nous transmettez volontairement
            : nom, prénom, adresse e-mail, numéro de téléphone, contenu de votre
            message et, le cas échéant, les pièces jointes que vous choisissez de nous
            envoyer.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Finalités et base légale</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Ces données sont collectées afin de répondre à vos demandes de contact ou
            de devis, sur la base de votre consentement lorsque vous soumettez un
            formulaire, ou de notre intérêt légitime à traiter vos demandes
            commerciales.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Destinataires des données</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Les données collectées sont destinées exclusivement à {company.name} et ne
            sont ni cédées, ni vendues, ni louées à des tiers.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Durée de conservation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Les données transmises via les formulaires sont conservées pendant la
            durée nécessaire au traitement de votre demande, puis archivées ou
            supprimées conformément aux durées légales applicables.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Vos droits</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Conformément à la réglementation applicable, vous disposez d’un droit
            d’accès, de rectification, d’effacement, de limitation, d’opposition et de
            portabilité de vos données personnelles. Vous pouvez exercer ces droits en
            nous contactant à l’adresse {company.email}. Vous disposez également du
            droit d’introduire une réclamation auprès de la Commission Nationale de
            l’Informatique et des Libertés (CNIL) — www.cnil.fr.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-ink">Cookies</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Lors de votre première visite, un bandeau vous permet d’accepter ou de
            refuser le dépôt de cookies non essentiels. Un cookie strictement
            fonctionnel, nécessaire pour mémoriser votre choix, est déposé quel que
            soit votre réponse. En dehors de ce cookie de préférence, le site ne dépose
            aucun cookie de mesure d’audience ou publicitaire à ce jour.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Vous pouvez à tout moment modifier votre choix en effaçant les cookies de
            votre navigateur, ce qui réaffichera le bandeau de consentement lors de
            votre prochaine visite.
          </p>
        </div>
      </div>
    </section>
  )
}
