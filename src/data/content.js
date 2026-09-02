// -----------------------------------------------------------------------
// Central content file — all site copy and image references live here.
// Swap the `img()` calls for your own photos/logo whenever you have them
// (see README.md for instructions). Text was reconstructed from the
// supplied mockup screenshots — double check addresses / phone / email
// before going live.
// -----------------------------------------------------------------------

// Thematic stock placeholder images (loremflickr = keyword-matched photos).
// `lock` pins a specific image so it doesn't change between reloads.
export function img(keywords, w = 1200, h = 800, lock = 1) {
  return `https://loremflickr.com/${w}/${h}/${keywords}?lock=${lock}`
}

export const company = {
  name: 'Global Services',
  phone: '07 85 65 65 00',
  email: 'contact@globalservices.fr',
  address: '5 avenue des Acacias',
  postal: '45120 Cepoy',
  hoursWeek: 'Lundi - Vendredi : 7h00 - 18h00',
  hoursSat: 'Samedi : 7h00 - 12h00',
  city: 'Loiret',
}

export const nav = [
  { label: 'Accueil', to: '/' },
  {
    label: 'Nos services',
    to: '/nos-services',
    children: [
      { label: 'Location de bennes', to: '/nos-services/location-de-bennes' },
      { label: 'Terrassement', to: '/nos-services/terrassement' },
      { label: 'Transport', to: '/nos-services/transport' },
      { label: 'Stockage', to: '/nos-services/stockage' },
    ],
  },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Engagements', to: '/engagements' },
  { label: 'Contact', to: '/contact' },
]

export const services = [
    {
    slug: 'transport',
    title: 'Transport',
    short: 'Porte-charre, camion grue, plateau-remorque',
    detail: 'Remorque bâchée, ampliroll',
    to: '/nos-services/transport',
    image: "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679524/forestier05.jpg",
    icon: 'transport',
    subtitle: 'Transporter vos engins et votre matériel',
    bulletList: ['Porte-charre', 'Camion grue', 'Plateau-remorque', 'Remorque bâchée ampliroll'],
    ctaLabel: 'Demander un devis',
  },
  {
    slug: 'terrassement',
    title: 'Terrassement',
    short: 'Pelles de 3,5 tonnes',
    detail: 'Pelles de 6 tonnes',
    to: '/nos-services/terrassement',
    image: "https://res.cloudinary.com/jqfwkgp1/image/upload/v1788366009/john-kakuk-HvvPceHYLOg-unsplash.jpg",
    icon: 'pelle',
    subtitle: 'Des équipements adaptés à vos travaux',
    factsText: 'Pelles de 3,5 tonnes, pelles de 6 tonnes.',
    description: 'Préparation de terrain, fouilles, nivellement, tranchées et terrassement.',
    ctaLabel: 'Demander un devis',
  },
  {
    slug: 'location-de-bennes',
    title: 'Location de bennes',
    short: 'Bennes disponibles',
    detail: '10 m³, 7 m³,20 m³',
    to: '/nos-services/location-de-bennes',
    image: 'https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-jan-van-der-wolf-11680885-33842119.jpg',
    icon: 'benne',
    // used on the /nos-services overview page:
    subtitle: 'bennes à votre disposition',
    factsText: 'bennes de 10 m³, bennes de 7 m³, bennes de 20 m³.',
    description: 'Nous acceptons : gravats, DIB, déchets de chantier, déchets issus de travaux et d’évacuation.',
    ctaLabel: 'Demander un devis',
  },
  {
    slug: 'stockage',
    title: 'Stockage',
    short: '5 000 m³ de terrain disponible',
    detail: 'Pour vos besoins',
    to: '/nos-services/stockage',
    image: "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-marcin-jozwiak-199600-2804929.jpg",
    icon: 'stockage',
    subtitle: '5 000 m³ de terrain disponibles',
    description: 'Un espace dédié au stockage de matériel, d’engins, de marchandises ou d’équipement. Solution adaptée aux professionnels et aux particuliers.',
    ctaLabel: 'Nous contacter',
    ctaTo: '/contact',
  },
]

export const whyUs = [
  {
    title: 'Priorité',
    text: 'Une entreprise implantée localement, proche de ses clients.',
    icon: 'priorite',
  },
  {
    title: 'Réactivité',
    text: 'Des réponses rapides et des solutions adaptées à chaque demande.',
    icon: 'reactivite',
  },
  {
    title: 'Expérience',
    text: '18 ans d’expérience des fondateurs.',
    icon: 'experience',
  },
  {
    title: 'Polyvalence',
    text: 'Bennes, terrassement, transport et stockage : plusieurs solutions réunies.',
    icon: 'polyvalence',
  },
  {
    title: 'Pour tous',
    text: 'Des solutions adaptées aux particuliers et aux professionnels.',
    icon: 'pourtous',
  },
  {
    title: 'Partout en France',
    text: 'Basés dans le Loiret, nous intervenons dans toute la France.',
    icon: 'pin',
  },
]

export const aboutStats = [
  { label: '4 métiers réunis', icon: 'polyvalence' },
  { label: '18 ans d’expérience', icon: 'clock' },
  { label: 'Loiret et partout en France', icon: 'pin' },
  { label: 'Particuliers et professionnels', icon: 'users' },
]

export const values = [
  { title: 'Priorité', text: 'Une entreprise implantée localement, proche de ses clients.', icon: 'priorite' },
  { title: 'Réactivité', text: 'Des réponses rapides et des solutions adaptées à chaque demande.', icon: 'reactivite' },
  { title: 'Expérience', text: '15 ans d’expérience cumulée des fondateurs.', icon: 'experience' },
  { title: 'Fiabilité', text: 'Respect des engagements pris et des délais annoncés.', icon: 'fiabilite' },
  { title: 'Polyvalence', text: 'Bennes, terrassement, transport et stockage disponibles pour plusieurs solutions réunies.', icon: 'polyvalence' },
]

export const engagements = [
  {
    title: 'Sécurité',
    text: 'La sécurité de nos équipes et de nos clients est au cœur de toutes nos interventions.',
    icon: 'securite',
  },
  {
    title: 'Qualité',
    text: 'Nous mettons un point d’honneur à la qualité de nos prestations et de nos équipements.',
    icon: 'qualite',
  },
  {
    title: 'Respect des délais',
    text: 'Nous nous engageons à respecter les délais convenus pour chaque intervention.',
    icon: 'delais',
  },
  {
    title: 'Transparence',
    text: 'Des devis clairs, précis et sans surprise pour chacune de vos demandes.',
    icon: 'transparence',
  },
  {
    title: 'Environnement',
    text: 'Une gestion responsable et raisonnée des déchets et du matériel utilisé.',
    icon: 'environnement',
  },
]

export const wasteAccepted = [
  { label: 'Gravats', icon: 'gravats' },
  { label: 'DIB', icon: 'dib' },
  { label: 'Déchets de chantier', icon: 'chantier' },
  { label: 'Déchets issus de travaux', icon: 'chantier' },
  { label: 'Déchets d’évacuation', icon: 'evacuation' },
]

export const wasteRefused = [
  { label: 'Déchets dangereux', icon: 'danger' },
  { label: 'Déchets électroniques (DEEE)', icon: 'electronique' },
  { label: 'Pneus', icon: 'pneu' },
  { label: 'Bouteilles de gaz', icon: 'gaz' },
  { label: 'Batteries', icon: 'batterie' },
  { label: 'Déchets médicaux', icon: 'medical' },
]

export const bennesSteps = [
  {
    title: 'Vous nous contactez',
    text: 'Par téléphone ou via notre formulaire de devis, indiquez-nous vos besoins.',
  },
  {
    title: 'Nous vous conseillons',
    text: 'Nous vous orientons vers la taille de benne la plus adaptée à votre chantier.',
  },
  {
    title: 'Livraison sur site',
    text: 'La benne est livrée à l’adresse et à la date convenues.',
  },
  {
    title: 'Vous remplissez à votre rythme',
    text: 'Aucune contrainte de temps : vous disposez de la benne le temps nécessaire.',
  },
  {
    title: 'Enlèvement et traitement',
    text: 'Nous récupérons la benne et assurons le traitement des déchets.',
  },
]

export const bennesSizes = [
  { size: '10 m³', text: 'Pour les volumes importants de déchets issus de vos chantiers.' },
  { size: '7 m³', text: 'Le format le plus polyvalent, adapté à la majorité des besoins.' },
  { size: '20 m³', text: 'Pour les gros chantiers nécessitant une plus grande capacité.' },
]

export const excavators = [
  { count: 'pelles', size: '3,5 tonnes', text: 'Pour différents travaux de préparation de terrain.' },
  { count: 'pelles', size: '6 tonnes', text: 'Pour les travaux nécessitant davantage de puissance et de capacité.' },
]

export const terrassementPrestations = [
  {
    title: 'Préparation de terrain',
    text: 'Décapage, débroussaillage et mise à niveau avant construction ou aménagement.',
    icon: 'chantier',
  },
  {
    title: 'Nivellement',
    text: 'Aplanissement du sol pour garantir une base stable à vos projets (dallage, terrasse, extension).',
    icon: 'surface',
  },
  {
    title: 'Fouilles et tranchées',
    text: 'Creusement précis pour fondations, réseaux (eau, électricité, assainissement) ou drainage.',
    icon: 'pelle',
  },
  {
    title: 'Évacuation de terre',
    text: 'Enlèvement et transport des déchets.',
    icon: 'evacuation',
  },
]

export const terrassementSteps = [
  {
    title: 'Vous nous contactez',
    text: 'Décrivez votre projet : type de travaux, superficie, contraintes du terrain.',
  },
  {
    title: 'Étude de votre projet',
    text: 'Nous analysons vos besoins et, si nécessaire, planifions une visite sur site.',
  },
  {
    title: 'Devis personnalisé',
    text: 'Vous recevez une proposition adaptée à la nature du sol et à l’ampleur des travaux.',
  },
  {
    title: 'Intervention',
    text: 'Nos équipes interviennent avec le matériel adapté (selon les besoins).',
  },
  {
    title: 'Finition et remise en état',
    text: 'Le terrain est livré prêt à l’utilisation pour la suite de votre projet.',
  },
]

export const terrassementSols = [
  {
    title: 'Sols meubles',
    text: 'Terre végétale, sable, limon : idéal pour les travaux de nivellement et de préparation rapide.',
    icon: 'solmeuble',
  },
  {
    title: 'Sols argileux',
    text: 'Adaptation de nos méthodes pour les terrains compacts et sensibles à l’humidité.',
    icon: 'solargileux',
  },
  {
    title: 'Sols rocheux ou caillouteux',
    text: 'Intervention avec des équipements renforcés pour les terrains difficiles à excaver.',
    icon: 'solrocheux',
  },
  {
    title: 'Terrains en pente',
    text: 'Nivellement et stabilisation pour rendre le terrain exploitable.',
    icon: 'terrainpente',
  },
  {
    title: 'Terrains encombrés',
    text: 'Débroussaillage et déblaiement avant intervention (végétation, anciennes structures).',
    icon: 'terrainencombre',
  },
]

export const transportSolutions = [
  {
    title: 'Porte-charre',
    text: 'Pour le transport d’engins et d’équipements lourds nécessitant un plateau adapté.',
    icon: 'porteplateau',
    image: img('flatbed,truck,machinery', 700, 500, 21),
  },
  {
    title: 'Camion grue',
    text: 'Pour le chargement, le déchargement et le transport de certains équipements.',
    icon: 'grue',
    image: 'https://res.cloudinary.com/jqfwkgp1/image/upload/v1788365306/WhatsApp_Image_2026-09-02_at_18.07.45.jpg',
  },
  {
    title: 'Plateau-remorque',
    text: 'Polyvalent et adapté au transport de différentes charges.',
    icon: 'plateauremorque',
    image: img('trailer,truck,cargo', 700, 500, 23),
  },
  {
    title: 'Remorque bâchée',
    text: 'Pour le transport de matériel nécessitant une protection contre les intempéries.',
    icon: 'remorquebachee',
    image: img('tarp,trailer,truck', 700, 500, 24),
  },
  {
    title: 'Ampliroll',
    text: 'Solution de transport adaptée à certains matériels spécifiques.',
    icon: 'pirole',
    image: "https://res.cloudinary.com/jqfwkgp1/image/upload/v1788366713/Camion-6x4-ampliroll-polybras.webp",
  },
]

export const transportMarchandises = [
  {
    title: 'Marchandises palettisées',
    text: 'Transport de palettes pour professionnels, commerces et industries.',
    icon: 'palette',
  },
  {
    title: 'Matériaux de construction',
    text: 'Livraison de matériaux lourds ou volumineux directement sur chantier.',
    icon: 'chantier',
  },
  {
    title: 'Produits agricoles',
    text: 'Transport de récoltes, fourrage, ou intrants pour les exploitations agricoles.',
    icon: 'agricole',
  },
  {
    title: 'Mobilier et équipements professionnels',
    text: 'Déménagement de bureaux, ateliers ou locaux commerciaux.',
    icon: 'mobilier',
  },
  {
    title: 'Marchandises diverses',
    text: 'Une solution sur-mesure est étudiée pour tout autre type de chargement.',
    icon: 'diverses',
  },
]

export const transportSteps = [
  {
    title: 'Vous nous contactez',
    text: 'Décrivez votre besoin : nature du chargement, poids, dimensions, lieu de départ et d’arrivée.',
  },
  {
    title: 'Étude de votre demande',
    text: 'Nous identifions la solution de transport la plus adaptée (porte-charre, camion grue, remorque bâchée...).',
  },
  {
    title: 'Devis et planification',
    text: 'Vous recevez une proposition avec un créneau de transport adapté à vos contraintes.',
  },
  {
    title: 'Prise en charge',
    text: 'Chargement sécurisé de votre matériel ou marchandise selon les normes en vigueur.',
  },
  {
    title: 'Livraison',
    text: 'Acheminement jusqu’à destination, dans le respect des délais convenus.',
  },
]

export const stockageFeatures = [
  { label: '5 000 m² de terrain', icon: 'surface' },
  { label: 'Accès facile', icon: 'acces' },
  { label: 'Surface plate', icon: 'plate' },
  { label: 'Solution flexible : ponctuelle ou régulière', icon: 'flexible' },
]

export const stockageSteps = [
  {
    title: 'Vous nous contactez',
    text: 'Décrivez-nous votre besoin : type de matériel, volume estimé, durée souhaitée.',
  },
  {
    title: 'Étude de votre demande',
    text: 'Nous vérifions nos disponibilités et vous proposons l’espace adapté à votre besoin.',
  },
  {
    title: 'Dépôt de votre matériel',
    text: 'Vous déposez vos engins, matériaux ou marchandises sur l’emplacement convenu.',
  },
  {
    title: 'Stockage en toute tranquillité',
    text: 'Votre matériel reste sur site le temps nécessaire, ponctuel ou régulier.',
  },
  {
    title: 'Retrait',
    text: 'Vous récupérez votre matériel selon vos disponibilités, en nous prévenant à l’avance.',
  },
]

export const stockageStorables = [
  {
    title: 'Engins et véhicules',
    text: 'Pelles, engins de chantier, véhicules professionnels ou agricoles.',
    icon: 'pelle',
  },
  {
    title: 'Matériaux de construction',
    text: 'Stocks de matériaux, palettes, structures temporaires.',
    icon: 'chantier',
  },
  {
    title: 'Marchandises professionnelles',
    text: 'Stocks saisonniers, surplus, matériel en attente de livraison.',
    icon: 'diverses',
  },
  {
    title: 'Bennes et conteneurs',
    text: 'Stockage temporaire de bennes ou conteneurs vides.',
    icon: 'benne',
  },
]

export const stockageSecurity = [
  'Terrain clôturé et accès contrôlé',
  'Surface plate facilitant la manœuvre et le stationnement',
  'Accès facile pour les véhicules lourds et remorques',
  'Suivi personnalisé de chaque dépôt',
]

export const satisfactionPoints = [
  { title: 'Sécurité', text: 'La sécurité de nos équipes et de nos clients avant toute chose sur chaque intervention.', icon: 'securite' },
  { title: 'Qualité', text: 'Des prestations et des équipements soignés, à la hauteur de vos attentes.', icon: 'qualite' },
  { title: 'Respect des délais', text: 'Des interventions planifiées et tenues, sans mauvaise surprise.', icon: 'delais' },
  { title: 'Transparence', text: 'Des devis clairs, précis et sans surprise pour chacune de vos demandes.', icon: 'transparence' },
  { title: 'Environnement', text: 'Tri sélectif des déchets et recours à des centres de traitement agréés pour leur valorisation.', icon: 'environnement' },
]

export const galleryCategories = ['Tous', 'Bennes', 'Terrassement', 'Transport', 'Stockage']

export const galleryItems = [
  { id: 1, category: 'Bennes', image: img('dumpster,container,site', 700, 550, 31), title: 'Évacuation de gravats' },
  { id: 2, category: 'Terrassement', image: "https://res.cloudinary.com/jqfwkgp1/image/upload/v1788366009/john-kakuk-HvvPceHYLOg-unsplash.jpg", title: 'Préparation de terrain' },
  { id: 3, category: 'Transport', image: img('truck,convoy,road', 700, 550, 33), title: 'Transport de matériel' },
  { id: 4, category: 'Bennes', image: img('waste,container,yard', 700, 550, 34), title: 'Bennes sur chantier' },
  { id: 5, category: 'Terrassement', image: "https://res.cloudinary.com/jqfwkgp1/image/upload/v1788366009/john-kakuk-HvvPceHYLOg-unsplash.jpg", title: 'Travaux de terrassement' },
  { id: 6, category: 'Stockage', image: img('storage,lot,trucks', 700, 550, 36), title: 'Espace de stockage' },
]

export const heroImage = img('excavator,dumptruck,construction,site', 1600, 1000, 1)
export const servicesHeroImage = img('construction,site,machinery', 1600, 700, 2)
export const aboutHeroImage = img('workers,helmet,construction,team', 1600, 700, 3)
export const realisationsHeroImage = img('construction,site,aerial', 1600, 700, 4)
export const engagementsHeroImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-matreding-9669807.jpg"
export const contactHeroImage = img('handshake,agreement,business', 1600, 700, 6)
export const devisHeroImage = img('excavator,construction,site', 1600, 700, 7)
export const aboutTeamImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679524/pexels-kindelmedia-8487733.jpg"
export const stockageYardImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-marcin-jozwiak-199600-2804929.jpg"
export const bennesImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-jan-van-der-wolf-11680885-33842119.jpg"
export const terrassementImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1788366009/john-kakuk-HvvPceHYLOg-unsplash.jpg"
export const transportImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679524/forestier05.jpg"
